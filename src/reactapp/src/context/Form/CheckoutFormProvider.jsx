import React, { useCallback, useMemo, useState } from 'react';
import { get as _get } from 'lodash-es';
import { Formik } from 'formik';
import { node } from 'prop-types';
import { object as YupObject } from 'yup';

import { config } from '../../config';
import LocalStorage from '../../utils/localStorage';
import useAppContext from '../../hook/useAppContext';
import useCartContext from '../../hook/useCartContext';
import CheckoutFormContext from './CheckoutFormContext';

function prepareFormInitValues(sections) {
  const initValues = {};
  sections.forEach((section) => {
    initValues[section.id] = section.initialValues;
  });
  return initValues;
}

function prepareFormValidationSchema(sections, sectionId) {
  const schemaRules = {};

  if (sectionId) {
    const section = sections.find((sec) => sec.id === sectionId);
    schemaRules[sectionId] = YupObject().shape(section.validationSchema);

    return YupObject().shape(schemaRules);
  }

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
   * Represent which form section is active at the moment
   */
  const [activeForm, setActiveForm] = useState(false);

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
    updateSections((prevSections) => [...prevSections, section]);
  }, []);

  const formSubmit = async (values) => {
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
      setPageLoader(false);
    }
  };

  const context = useMemo(
    () => ({
      activeFormSection: activeForm,
      setActiveFormSection: setActiveForm,
      registerFormSection,
    }),
    [activeForm, registerFormSection]
  );

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
  const formInitialValues = prepareFormInitValues(sections);

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
  const formValidationSchema = prepareFormValidationSchema(
    sections,
    activeForm
  );

  return (
    <CheckoutFormContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        ...context,
        registerPaymentAction,
        submitHandler: formSubmit,
        checkoutFormValidationSchema: formValidationSchema,
      }}
    >
      <Formik
        enableReinitialize
        initialValues={formInitialValues}
        validationSchema={formValidationSchema}
        onSubmit={formSubmit}
      >
        {children}
      </Formik>
    </CheckoutFormContext.Provider>
  );
}

CheckoutFormProvider.propTypes = {
  children: node.isRequired,
};

export default CheckoutFormProvider;
