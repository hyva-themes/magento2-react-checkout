import React, { useCallback, useMemo, useState } from 'react';
import { node } from 'prop-types';
import { object as YupObject } from 'yup';
import { FormikProvider, useFormik } from 'formik';
import { get as _get, set as _set } from 'lodash-es';

import { config } from '../../config';
import { _findIndexById } from '../../utils';
import LocalStorage from '../../utils/localStorage';
import CheckoutFormContext from './CheckoutFormContext';
import { useAppContext, useCartContext } from '../../hooks';

function prepareFormInitValues(sections) {
  const initValues = {};
  sections.forEach((section) => {
    initValues[section.id] = section.initialValues;
  });

  return initValues;
}

function prepareFormValidationSchema(sections) {
  const schemaRules = {};

  sections.forEach((section) => {
    schemaRules[section.id] = YupObject().shape(section.validationSchema);
  });

  return YupObject().shape(schemaRules);
}

/**
 * Provider that wraps the entire checkout form
 */
function CheckoutFormProvider({ children }) {
  /**
   * This will hold the initial graphql response data.
   * This will be later used by individual form section in order update their initivalues.
   */
  const [initialData, setInitialData] = useState(null);
  /**
   * Controls formik reinitialization. By default, it is enabled.
   * If in case, the formik states reinitialization needs to be turne off, this feature can be used.
   */
  const [enableReinitialize, setEnableReinitialize] = useState(true);
  /**
   * Holds individual form sections which constitutes the entire checkout-form-formik
   */
  const [sections, updateSections] = useState([]);

  /**
   * if any of the payment method has any custom action needs to be carried out
   * during "Place Order" action, then it must be added here
   */
  const [paymentActionList, setPaymentActions] = useState({});

  const { placeOrder } = useCartContext();
  const { setPageLoader } = useAppContext();

  /**
   * Init value of checkout-form-formik
   *
   * It will be the combined object of each individual form sections which
   * are registered to this provider.
   *
   * So the whole initValues would be represented like:
   * {
   *    [form_section_id]: { ...form_section_init_values},
   *    [form_section_id]: { ...form_section_init_values},
   * }
   */
  const formInitialValues = useMemo(
    () => prepareFormInitValues(sections),
    [sections]
  );

  /**
   * ValidationSchema of checkout-form-formik
   *
   * If there is no activeForm, then the validationSchema equals to the combined
   * validationSchema of each individual form section which are registered with
   * this provider
   *
   * If there is a valid activeForm, then the validationSchema represent the
   * validationSchema of the active form section.
   */
  const formValidationSchema = useMemo(
    () => prepareFormValidationSchema(sections),
    [sections]
  );

  const formSubmit = useCallback(
    async (values) => {
      try {
        setPageLoader(true);
        const order = await placeOrder(values, paymentActionList);

        const orderNumber = _get(order, 'order_number');

        if (orderNumber && config.isProductionMode) {
          LocalStorage.clearCheckoutStorage();
          window.location.replace(config.successPageRedirectUrl);
        }

        if (orderNumber && config.isDevelopmentMode) {
          LocalStorage.clearCheckoutStorage();
        }
        setPageLoader(false);
      } catch (error) {
        console.error(error);
        setPageLoader(false);
      }
    },
    [setPageLoader, paymentActionList, placeOrder]
  );

  /**
   * This will help any custom payment method renderer component to register
   * a custom payment action. Custom payment action will be triggered when
   * the place order happens.
   */
  const registerPaymentAction = useCallback(
    (paymentMethodCode, paymentMethodAction) => {
      setPaymentActions((actions) => ({
        ...actions,
        [paymentMethodCode]: paymentMethodAction,
      }));
    },
    [setPaymentActions]
  );

  /**
   * This will register individual form sections to the checkout-form-formik
   */
  const registerFormSection = useCallback((section) => {
    updateSections((prevSections) => {
      const sectionIds = prevSections.map((prevSection) => prevSection.id);

      // new section, so append the section.
      if (!sectionIds.includes(section.id)) {
        return [...prevSections, section];
      }

      // Already existing section. So update the individual section with latest section data.
      const sectionIndex = _findIndexById(prevSections, section.id);
      const newSections = [...prevSections];
      const newSectionData = { ...prevSections[sectionIndex], ...section };
      _set(newSections, sectionIndex, newSectionData);

      return newSections;
    });
  }, []);

  const formik = useFormik({
    enableReinitialize,
    onSubmit: formSubmit,
    initialValues: formInitialValues,
    validationSchema: formValidationSchema,
  });

  const context = useMemo(
    () => ({
      registerFormSection,
      setEnableReinitialize,
      registerPaymentAction,
      formSections: sections,
      submitHandler: formSubmit,
      aggregatedData: initialData,
      storeAggregatedFormStates: setInitialData,
      checkoutFormValidationSchema: formValidationSchema,
    }),
    [
      sections,
      formSubmit,
      initialData,
      registerFormSection,
      formValidationSchema,
      registerPaymentAction,
    ]
  );

  return (
    <CheckoutFormContext.Provider value={context}>
      <FormikProvider value={formik}>{children}</FormikProvider>
    </CheckoutFormContext.Provider>
  );
}

CheckoutFormProvider.propTypes = {
  children: node.isRequired,
};

export default CheckoutFormProvider;
