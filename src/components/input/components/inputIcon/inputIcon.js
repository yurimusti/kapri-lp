import React from "react";

import { ReactComponent as ErrorIcon } from "../../../../assets/svg/validationError.svg";
import { ReactComponent as SuccessIcon } from "../../../../assets/svg/validationSuccess.svg";

import { InputWithLabel, LeftIcon, ContainerValidate } from "../../styles";

const InputIcon = React.forwardRef(
  (
    {
      label,
      leftIcon = null,
      rightIcon = null,
      onChange,
      value,
      error = false,
      showValidateIcon = false,
      ...rest
    },
    ref
  ) => (
    <InputWithLabel {...rest} hasLabel={!!label} error={error}>
      {leftIcon !== null && (
        <LeftIcon hasLabel={!!label} {...rest}>
          {leftIcon}
        </LeftIcon>
      )}
      <label
        style={
          leftIcon !== null || rightIcon !== null
            ? { paddingLeft: 25 }
            : { paddingLeft: 0 }
        }
        {...rest}
      >
        {label}
      </label>
      <input
        ref={ref}
        placeholder=" "
        style={leftIcon !== null ? { paddingLeft: 45 } : {}}
        onChange={onChange}
        value={value}
        {...rest}
      />

      {/* {rightIcon !== null && <RightIcon>{rightIcon}</RightIcon>} */}
      <ContainerValidate>
        {showValidateIcon && error ? (
          <ErrorIcon />
        ) : showValidateIcon && !!value ? (
          <SuccessIcon />
        ) : null}
      </ContainerValidate>
    </InputWithLabel>
  )
);

export default InputIcon;
