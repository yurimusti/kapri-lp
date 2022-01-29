import React, { useState, useEffect } from "react";

import { ReactComponent as ErrorIcon } from "../../../../assets/svg/validationError.svg";
import { ReactComponent as SuccessIcon } from "../../../../assets/svg/validationSuccess.svg";

import { InputWithLabel } from "../../styles";

const InputMoney = ({
  label,
  placeholder,
  onChange = () => {},
  onFocus,
  value,
  error = false,
  showValidateIcon = false,
  onBlur,
  ...rest
}) => {
  const [money, setMoney] = useState(value);

  useEffect(() => {
    setMoney(value);
  }, [value]);

  const _maskMoney = (event) => {
    const data = { formatted: "0", decimal: 0.0 };
    const { value } = event.target;
    if (!!value) {
      const values = value.replace(/\./g, "").split(",");
      let newValue = 0.0;

      if (values.length > 1 && values[1].length === 2) {
        newValue = parseFloat(`${values[0]}.${values[1]}`);
      } else if (values.length > 1 && values[1].length > 2) {
        const thousand = values[0] + values[1].slice(0, 1);
        const decimals = values[1].slice(1, values[1].length);

        newValue = parseFloat(`${thousand}.${decimals}`);
      } else if (values.length > 1 && values[1].length === 1) {
        const thousand =
          values[0].slice(0, -1) === "" ? "0" : values[0].slice(0, -1);
        const decimals = values[0].slice(-1) + values[1];

        newValue = parseFloat(`${thousand}.${decimals}`);
      }

      data.formatted = _formattedValue(newValue);
      data.decimal = newValue;
      setMoney(newValue);
    } else {
      setMoney("0,00");
      onChange(event, data);
    }

    onChange(event, data);
  };

  const _formattedValue = (value) => {
    if (value === "") return "";

    const formatter = new Intl.NumberFormat("pt-BR", {
      currency: "BRL",
      minimumFractionDigits: 2,
    });

    return formatter.format(value);
  };

  return (
    <InputWithLabel {...rest} error={error}>
      <label>{label}</label>
      <input
        placeholder={placeholder}
        onChange={(event) => _maskMoney(event)}
        onBlur={(event) => {
          _maskMoney(event);
          onBlur(event);
        }}
        value={_formattedValue(money)}
        onFocus={onFocus}
        {...rest}
      />

      {showValidateIcon && error ? (
        <ErrorIcon />
      ) : showValidateIcon && !!value ? (
        <SuccessIcon />
      ) : null}
    </InputWithLabel>
  );
};

export default InputMoney;
