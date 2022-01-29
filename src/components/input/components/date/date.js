import React, { useState } from "react";

import DatePicker from "react-datepicker";
import ComponentInputMask from "react-input-mask";

import {
    InputWithLabel,
    IconDateContainer,
    LabelDate,
    ContainerValidate,
} from "../../styles";

import { ReactComponent as ErrorIcon } from "../../../../assets/svg/validationError.svg";
import { ReactComponent as SuccessIcon } from "../../../../assets/svg/validationSuccess.svg";
import { ReactComponent as IconDate } from "../../../../assets/svg/calendar.svg";

import { ptBR } from "date-fns/locale";

export default function InputDate({
    label,
    value,
    onChange = () => {},
    error = false,
    showValidateIcon = false,
    maxDate,
    ...rest
}) {
    const [dateValue, setDateValue] = useState(new Date());
    const [focus, setFocus] = useState();

    const InputCutom = ({ value, onClick, onChange, onFocus, ...props }) => {
        return (
            <InputWithLabel type="datePicker" error={error}>
                <IconDateContainer className="containerDate">
                    <IconDate />
                </IconDateContainer>

                <ComponentInputMask
                    defaultValue={value}
                    onChange={e => {
                        onChange(e);
                    }}
                    onClick={onClick}
                    mask="99/99/9999"
                    autoFocus={focus}
                    onBlur={e => {
                        setFocus(false);
                        setDateValue(value);
                    }}
                    onFocus={e => onFocus(e)}
                    strictParsing
                    {...rest}
                />
                <LabelDate valueInput={dateValue} focus={!!value} {...rest}>
                    {label}
                </LabelDate>

                <ContainerValidate>
                    {showValidateIcon && error ? (
                        <ErrorIcon />
                    ) : showValidateIcon && !!value ? (
                        <SuccessIcon />
                    ) : null}
                </ContainerValidate>
            </InputWithLabel>
        );
    };

    return (
        <DatePicker
            locale={ptBR}
            todayButton="Hoje"
            selected={dateValue}
            isClearable={false}
            onChange={(date, event) => {
                setDateValue(date);
                onChange(date);
            }}
            dateFormat="dd/MM/yyyy"
            onInputClick={() => setFocus(true)}
            onClickOutside={() => setFocus(false)}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            showYearDropdown
            customInput={<InputCutom />}
            maxDate={maxDate}
            {...rest}
        />
    );
}
