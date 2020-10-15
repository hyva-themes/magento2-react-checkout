import React, { useEffect, useRef, useState } from 'react';
import { useField } from 'formik';

export const RegularSelect = ({ label, options, required, ...props }) => {

    const [field, meta, helper] = useField(props);
    const [didFocus, setDidFocus] = React.useState(false);
    const handleFocus = () => setDidFocus(true);
    const showFeedback =
        (!!didFocus && field.value.trim().length > 2) || meta.touched;

    const onChangeOption = value => {
        helper.setTouched(true);
        helper.setValue(value);
        props.onChange && props.onChange(value);
    };
    return (
        <div
            className={`form-control mt-2 ${
                showFeedback ? (meta.error ? 'invalid' : 'valid') : ''
            }`}
        >
            <div className="flex items-center justify-between">
                <label htmlFor={props.id} className={'md:text-sm'}>
                    {label}
                    {required && <sup> *</sup>}
                </label>{' '}
                {showFeedback ? (
                    <div
                        id={`${props.id}-feedback`}
                        aria-live="polite"
                        className={
                            'feedback text-sm md:text-xs text-right ' +
                            (meta.error ? 'text-red-500' : 'text-green-500')
                        }
                    >
                        {meta.error ? meta.error.replace('%1', label) : '✓'}
                    </div>
                ) : null}
            </div>
            <select
                className="form-select bg-container border border-container w-full xs:block p-2"
                {...props}
                {...field}
                onChange={event => {
                    onChangeOption(event.target.value);
                }}
                onFocus={handleFocus}
            >
                <option value="" disabled={true} hidden={true}>-- Please Select -- </option>
                {options.map((option, index) => {
                    return (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};
