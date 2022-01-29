import React from 'react';

import InputText from './components/text';
import InputPassword from './components/password';
import InputNumber from './components/number';
import InputDate from './components/date';
import InputMask from './components/mask';
import InputIcon from './components/inputIcon';
import InputArea from './components/textArea';
import InputMoney from './components/money';
import InputEditor from './components/textEditor';
import InputSearch from './components/search';

import * as Styled from './styles';

const InputCustom = ({
  type,
  onChange,
  value,
  onBlur = () => {},
  onFocus,
  label,
  style = {},
  checked,
  leftIcon,
  rightIcon,
  error = '',
  ...rest
}) => {
  const renderInput = () => {
    switch (type) {
      case 'text':
        return (
          <Styled.InputContainer>
            <InputText
              label={label}
              onChange={onChange}
              value={value}
              error={!!error}
              style={style}
              onBlur={onBlur}
              {...rest}
            />
          </Styled.InputContainer>
        );

      case 'password':
        return (
          <Styled.InputContainer>
            <InputPassword
              style={style}
              label={label}
              onChange={onChange}
              value={value}
              type="password"
              error={!!error}
              onBlur={onBlur}
              {...rest}
            />
          </Styled.InputContainer>
        );

      case 'number':
        return (
          <Styled.InputContainer>
            <InputNumber
              label={label}
              style={style}
              onChange={onChange}
              onFocus={onFocus}
              value={value}
              error={!!error}
              onBlur={onBlur}
              {...rest}
            />
          </Styled.InputContainer>
        );

      case 'datePicker':
        return (
          <Styled.InputContainer>
            <InputDate
              onChange={onChange}
              value={value}
              label={label}
              style={style}
              error={!!error}
              onBlur={onBlur}
              {...rest}
            />
          </Styled.InputContainer>
        );

      case 'mask':
        return (
          <Styled.InputContainer>
            <InputMask
              onChange={onChange}
              value={value}
              label={label}
              placeholder=" "
              style={style}
              error={!!error}
              leftIcon={leftIcon}
              onBlur={onBlur}
              {...rest}
            />
          </Styled.InputContainer>
        );

      case 'icon':
        return (
          <Styled.InputContainer>
            <InputIcon
              leftIcon={leftIcon || null}
              rightIcon={rightIcon || null}
              label={label}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              style={style}
              error={!!error}
              onBlur={onBlur}
              {...rest}
            />
          </Styled.InputContainer>
        );

      case 'percentage':
        return (
          <Styled.InputContainer>
            <InputIcon
              type="number"
              leftIcon={leftIcon || null}
              rightIcon={rightIcon || null}
              label={label}
              value={value}
              onChange={onChange}
              style={style}
              error={!!error}
              onBlur={onBlur}
              {...rest}
            />
          </Styled.InputContainer>
        );

      case 'textArea':
        return (
          <Styled.InputContainer>
            <InputArea
              label={label}
              value={value}
              onChange={onChange}
              style={style}
              error={!!error}
              onBlur={onBlur}
              {...rest}
            />
          </Styled.InputContainer>
        );

      case 'textEditor':
        return (
          <Styled.InputContainer>
            <InputEditor
              label={label}
              value={value}
              onChange={onChange}
              error={!!error}
              onBlur={onBlur}
              {...rest}
            />
          </Styled.InputContainer>
        );

      case 'money':
        return (
          <Styled.InputContainer>
            <InputMoney
              label={label}
              value={value}
              onChange={onChange}
              style={style}
              onFocus={onFocus}
              onBlur={onBlur}
              error={!!error}
              {...rest}
            />
          </Styled.InputContainer>
        );

      case 'search':
        return (
          <InputSearch
            label={label}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={!!error}
            onBlur={onBlur}
            {...rest}
          />
        );

      default:
        return (
          <Styled.InputContainer>
            <InputText
              type={type}
              label={label}
              onChange={onChange}
              value={value}
              style={style}
              error={!!error}
              onBlur={onBlur}
              {...rest}
            />
          </Styled.InputContainer>
        );
    }
  };
  return renderInput();
};

export default InputCustom;
