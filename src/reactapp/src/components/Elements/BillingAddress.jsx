import React, { useState } from 'react';
import ArrowUpIcon from '../Icons/ArrowUp';
import ArrowDownIcon from '../Icons/ArrowDown';
import { FormikProvider, Form } from 'formik';

import { TextInput } from './FormUI/TextInput';

import { useFormikContext } from '../../context/Formik';
import { useAppContext } from '../../context/App';
import * as appStates from '../../context/actions/actionStates';
import {Select} from "./FormUI/Select";

export const BillingAddress = () => {

    const [{ BillingAddressForm }] = useFormikContext();

    const [{ countries, billingOpen }, { fetchCountries, setBillingOpen }] = useAppContext();

    React.useEffect(() => {
        if (
            (!countries.data || !countries.data.length) &&
            countries.state !== appStates.PENDING
        ) {
            fetchCountries();
        }
    }, [countries, fetchCountries]);

    return (
        <div className="border-t border-b py-4">
            <header
                className="flex justify-between items-center cursor-pointer select-none"
                onClick={() => setBillingOpen(!billingOpen)}
            >
                <span className="text-indigo font-thin text-xl">Billing information</span>
                <div className="flex items-center justify-center">
                    {billingOpen && <ArrowUpIcon size={16} class={'h-5 w-5'} />}
                    {!billingOpen && (
                        <ArrowDownIcon size={16} class={'h-5 w-5'} />
                    )}
                </div>
            </header>
            {billingOpen && (
                <div className={'py-2'}>
                    <FormikProvider value={BillingAddressForm}>
                        <Form>
                            <TextInput
                                label="Company"
                                id="company"
                                name="company"
                                helpText=""
                                type="text"
                                className={'form-input w-full'}
                                placeholder="Company"
                                required={true}
                            />
                            <TextInput
                                label="Firstname"
                                id="firstname"
                                name="firstname"
                                helpText=""
                                type="text"
                                className={'form-input w-full'}
                                placeholder="Firstname"
                                required={true}
                            />
                            <TextInput
                                label="Lastname"
                                id="lastname"
                                name="lastname"
                                helpText=""
                                type="text"
                                className={'form-input w-full'}
                                placeholder="Lastname"
                                required={true}
                            />
                            <TextInput
                                label="Street, Nr"
                                id="street"
                                name="street"
                                helpText=""
                                type="text"
                                className={'form-input w-full'}
                                placeholder="Street"
                                required={true}
                            />
                            <TextInput
                                label="Postal Code"
                                id="zipcode"
                                name="zipcode"
                                helpText=""
                                type="text"
                                className={'form-input w-full'}
                                placeholder="12345"
                                required={true}
                            />
                            <TextInput
                                label="City"
                                id="city"
                                name="city"
                                helpText=""
                                type="text"
                                className={'form-input w-full'}
                                placeholder="City"
                                required={true}
                            />
                            <Select
                                label="Country"
                                id="country"
                                name="country"
                                required={true}
                                options={countries.data}
                            />
                            <TextInput
                                label="Phone"
                                id="phone"
                                name="phone"
                                helpText=""
                                type="text"
                                className={'form-input w-full'}
                                placeholder="+32 000 000 000"
                                required={true}
                            />
                        </Form>
                    </FormikProvider>
                </div>
            )}
        </div>
    );
};
