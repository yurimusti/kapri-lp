import React from "react";

import { ReactComponent as ErrorIcon } from "../../../../assets/svg/validationError.svg";
import { ReactComponent as SuccessIcon } from "../../../../assets/svg/validationSuccess.svg";

import { InputWithLabel } from "../../styles";

export default function InputNumber({
    label,
    style,
    onChange,
    onInput,
    value,
    onFocus,
    error = false,
    showValidateIcon = false,
    ...rest
}) {
    return (
        <InputWithLabel {...rest} error={error}>
                 <label>{label}</label>
            <input
                className="number"
                type="number"
                placeholder=" "
                style={style}
                onChange={onChange}
                onFocus={onFocus}
                value={value}
                {...rest}
            />
       
            {showValidateIcon && error ? (
                <ErrorIcon />
            ) : showValidateIcon && !!value ? (
                <SuccessIcon />
            ) : null}
        </InputWithLabel>
    );
}
