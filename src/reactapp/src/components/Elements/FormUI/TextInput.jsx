import React from 'react';
import { useField } from 'formik';

export const TextInput = ({
    label,
    helpText,
    innerRef,
    required,
    handleBlur,
    ...props
}) => {
    const [field, meta] = useField(props);

    const [didFocus, setDidFocus] = React.useState(false);
    const handleFocus = () => setDidFocus(true);
    const showFeedback =
        (!!didFocus && field.value.trim().length > 2) || meta.touched;

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
            <input
                {...props}
                {...field}
                aria-describedby={`${props.id}-feedback ${props.id}-help`}
                onFocus={handleFocus}
                onBlur={e => {
                    field.onBlur(e);
                    handleBlur && handleBlur();
                }}
                ref={innerRef || null}
            />
            <div className="text-xs" id={`${props.id}-help`} tabIndex="-1">
                {helpText}
            </div>
        </div>
    );
};

export const TextInputWithRef = React.forwardRef((props, ref) => (
    <TextInput innerRef={ref} {...props} />
));
