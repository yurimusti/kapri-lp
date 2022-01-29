import React from "react";
import { ReactComponent as ErrorIcon } from "../../../../assets/svg/validationError.svg";
import { ReactComponent as SuccessIcon } from "../../../../assets/svg/validationSuccess.svg";
import { InputWithLabel } from "../../styles";

export default function InputText({
  label,
  isValid,
  onChange,
  value,
  styleInput = {},
  error = false,
  showValidateIcon = false,
  placeholder = " ",
  ...rest
}) {
  return (
    <InputWithLabel
    //   className="label-float"
      error={error}
      placeholder={!!placeholder}
    >
      <label>{label}</label>
      <input
        style={styleInput}
        type="text"
        placeholder={placeholder}
        value={value}
        error={error}
        {...rest}
        onChange={onChange}
      />

      {showValidateIcon && error ? (
        <ErrorIcon />
      ) : showValidateIcon && !!value ? (
        <SuccessIcon />
      ) : null}
    </InputWithLabel>
  );
}
