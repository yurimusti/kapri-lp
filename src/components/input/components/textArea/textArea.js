import React from 'react';

import { ReactComponent as ErrorIcon } from '../../../../assets/svg/validationError.svg';
import { ReactComponent as SuccessIcon } from '../../../../assets/svg/validationSuccess.svg';

import { InputWithLabel } from '../../styles';

export default function InputArea({
  label,
  isValid,
  onChange,
  styleInput = {},
  value,
  error = false,
  showValidateIcon = false,
  ...rest
}) {
  return (
    <InputWithLabel className="label-float" error={error}>
      <textarea
        style={{ marginLeft: 6 }}
        type="text"
        placeholder=" "
        onChange={onChange}
        rows="5"
        value={value}
        {...rest}
      >
        {value}
      </textarea>
      <label>{label}</label>
      {showValidateIcon && error ? (
        <ErrorIcon />
      ) : !showValidateIcon && !!value ? (
        <SuccessIcon />
      ) : null}
    </InputWithLabel>
  );
}
