import React from "react";

import { ReactComponent as ErrorIcon } from "../../../../assets/svg/validationError.svg";
import { ReactComponent as SuccessIcon } from "../../../../assets/svg/validationSuccess.svg";

import { InputWithLabel } from "../../styles";

export default function InputPassword({
  label,
  isValid,
  onChange,
  value,
  styleInput = {},
  error = false,
  showValidateIcon = false,
  ...rest
}) {
  return (
    <InputWithLabel className="label-float" error={error}>
      <label>{label}</label>
      <input
        style={styleInput}
        type="password"
        placeholder=" "
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
