import React, { createContext, useContext } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { billingAddressGqlToFormik } from '../utils/billingAddressGqlToFormik';

const FormikContext = createContext();

let BillingAddressForm;

const initialState = {
    billing_address: {
        company: '',
        firstname: '',
        lastname: '',
        street: '',
        phone: '',
        zipcode: '',
        city: '',
        country: ''
    },
    shipping_address: {
        company: '',
        contact: '',
        department: '',
    },
    errors: false,
};

const onSubmit = async (values, errors, ...rest) => {
    return { values, errors };
};

const touchAndValidateForm = ({ submitForm, validateForm }) => {
    /*
        Currently, formik.submitForm() does not return a promise,
        So we can't use it to check if the from is valid.
        submitForm() has the benefit that it shows validation errors in the form
        (it sets `touched` to all fields), so we want to use it instead of `validateForm()`.

        Since it doesn't work currently, we do a `submitForm()` to validate the form,
        then we do a `validateForm()` to actually receive a success/error promise.

        As soon as https://github.com/formium/formik/issues/1580 has been resolved, this method
        can be replaced with a simple `submitForm()`.
     */
    return new Promise((resolve, reject) => {
        submitForm()
            .then(() => {
                // submitForm needs to resolve, that's all
            })
            .then(validateForm)
            .then(errors => {
                const isValid = Object.keys(errors).length === 0;
                if (isValid) {
                    resolve();
                } else {
                    reject();
                }
            })
            .catch(e => {
                console.log('error: ', e);
                reject();
            });
    });
};

const reinitializeForms = cart => {
    cart.billing_address &&
        BillingAddressForm.setValues(
            billingAddressGqlToFormik(cart.billing_address)
        );
};

const requiredMessage = '%1 is required';
const invalidFormatSeven = "'%1' has 7 digits";
const invalidEmail = 'Email Invalid';

const BillingAddressSchema = Yup.object().shape({
    company: Yup.string().required(requiredMessage),
    firstname: Yup.string().required(requiredMessage),
    lastname: Yup.string().required(requiredMessage),
    street: Yup.string()
        .required(requiredMessage)
        .test('isNaN', 'Please check input for %1.', value => isNaN(value)),
    phone: Yup.string().required(requiredMessage),
    zipcode: Yup.string().required(requiredMessage),
    city: Yup.string().required(requiredMessage),
    country: Yup.string().required(requiredMessage)
});

export const FormikContextProvider = props => {
    const { children } = props;

    BillingAddressForm = useFormik({
        initialValues: initialState.billing_address,
        validationSchema: BillingAddressSchema,
        validateOnMount: true,
        onSubmit: onSubmit,
    });

    const contextValue = [
        { BillingAddressForm },
        { touchAndValidateForm, reinitializeForms },
    ];

    return (
        <FormikContext.Provider value={contextValue}>
            {children}
        </FormikContext.Provider>
    );
};

export const useFormikContext = () => useContext(FormikContext);
