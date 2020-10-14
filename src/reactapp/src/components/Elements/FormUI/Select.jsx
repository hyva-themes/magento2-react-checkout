import React, { useEffect, useRef, useState } from 'react';
import { useField } from 'formik';

export const Select = ({ label, options, required, ...props }) => {
    const [isOpen, setIsOpen] = useState(false);

    const [field, meta, helper] = useField(props);
    const [didFocus, setDidFocus] = React.useState(false);
    const handleFocus = () => setDidFocus(true);
    const showFeedback =
        (!!didFocus && field.value.trim().length > 2) || meta.touched;

    function useClickOutsideElement(ref, isOpen) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (
                    isOpen &&
                    ref.current &&
                    !ref.current.contains(event.target)
                ) {
                    setIsOpen(false);
                    helper.setTouched(true);
                }
            }

            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [ref, isOpen]);
    }

    const wrapperRef = useRef(null);
    useClickOutsideElement(wrapperRef, isOpen);

    const onChangeOption = value => {
        helper.setTouched(true);
        helper.setValue(value);
        setIsOpen(false);
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
                className="bg-background-lighter border border-background-darker w-full xs:block sm:hidden p-2"
                {...props}
                {...field}
                onChange={event => {
                    onChangeOption(event.target.value);
                }}
                onFocus={handleFocus}
            >
                <option value="">-- Please Select -- </option>
                {options.map((option, index) => {
                    return (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    );
                })}
            </select>
            <div
                className="relative inline-block text-left w-full hidden sm:block"
                ref={wrapperRef}
            >
                <div>
                    <button
                        type="button"
                        className="w-full xs:hidden sm:flex pl-3 pr-2 py-2 justify-between bg-white border border-container rounded text-sm text-left transition ease-in-out duration-150"
                        id="options-menu"
                        aria-haspopup="true"
                        aria-expanded="true"
                        onClick={() => {
                            setIsOpen(!isOpen);
                            handleFocus();
                        }}
                    >
                        <span>
                            {!field.value
                                ? '-- Please Select --'
                                : options.find(
                                      option => option.value === field.value
                                  )?.label}
                        </span>
                        <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className="z-10 origin-top-right w-full absolute bg-container-lighter border border-container-darker border-t-0"
                    style={{ maxHeight: '450px', overflowY: 'auto' , display: isOpen ? '' : 'none' }}
                >
                    <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        <span
                            className="block px-4 py-2 text-sm leading-5 cursor-pointer hover:text-primary-darker"
                            onClick={() => {
                                onChangeOption('');
                            }}
                        >
                            -- Please Select --
                        </span>
                        {options.map((option, index) => {
                            return (
                                <span
                                    className="block px-4 py-2 text-sm leading-5 cursor-pointer hover:text-primary-darker"
                                    onClick={() => {
                                        onChangeOption(option.value);
                                    }}
                                    key={index}
                                >
                                    {option.label}
                                </span>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
