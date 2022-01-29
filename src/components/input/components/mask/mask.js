import React from "react";
import ComponentInputMask from "react-input-mask";

import { ReactComponent as ErrorIcon } from "../../../../assets/svg/validationError.svg";
import { ReactComponent as SuccessIcon } from "../../../../assets/svg/validationSuccess.svg";

import * as StyledGlobal from "../../styles";
import * as Styled from "./styles";

export default function InputMask({
  value,
  onChange,
  mask,
  style,
  label,
  error = false,
  showValidateIcon = false,
  leftIcon = null,
  ...rest
}) {
  return (
    <StyledGlobal.InputWithLabel
      {...rest}
      type="mask"
      leftIcon={!!leftIcon}
      error={error}
    >
      <label>{label}</label>
      {!!leftIcon && (
        <Styled.ContainerLeftIcon>{leftIcon}</Styled.ContainerLeftIcon>
      )}

      <ComponentInputMask
        value={value}
        onChange={onChange}
        placeholder=" "
        mask={mask}
        style={style}
        {...rest}
      />

      {showValidateIcon && error ? (
        <ErrorIcon />
      ) : showValidateIcon && !!value ? (
        <SuccessIcon />
      ) : null}
    </StyledGlobal.InputWithLabel>
  );
}
