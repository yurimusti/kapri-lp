import styled from "styled-components";
import { input } from "../../styles/variable";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputErrorContainer = styled.div``;

export const ErrorText = styled.span`
  font-family: "Roboto Condensed";
  font-style: italic;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #8872b2;
  margin-top: 5px;
`;

export const LeftIcon = styled.div`
  position: absolute;
  ${({ small, medium, large }) =>
    small
      ? `top: 22px;`
      : medium
      ? `top: 24px;`
      : large
      ? `top: 32px;`
      : `top: 24px;`}

  ${({ hasLabel }) => hasLabel === false && `top: 10px;`}

    left: 20px;
  svg {
    ${({ small, medium, large }) =>
      small
        ? `width: 18px;`
        : medium
        ? `width: 20px;`
        : large
        ? `width: 32px;`
        : `width: 20px;`}

    path {
      fill: #5f4a87;
    }
  }
`;

export const RightIcon = styled.div`
  position: absolute;
  ${({ small, medium, large }) =>
    small
      ? `top: 22px;`
      : medium
      ? `top: 24px;`
      : large
      ? `top: 32px;`
      : `top: 24px;`}
  right: 15px;

  svg {
    ${({ small, medium, large }) =>
      small
        ? `width: 18px;`
        : medium
        ? `width: 20px;
                margin-right: 5px;`
        : large
        ? `width: 32px;`
        : `width: 20px;
                    margin-right: 5px;`}
  }
`;

export const LabelDate = styled.label`
  color: ${({ error }) => (error ? "#C6176E;" : input.label.color)};
  font-family: ${input.label.fontFamily};
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  ${({ small, medium, large }) =>
    small
      ? `margin-top: 23px;`
      : medium
      ? `margin-top: 25px;`
      : large
      ? `margin-top: 33px;`
      : `margin-top: 25px;`}
  margin-left: 20px;
  transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
`;

export const InputWithLabel = styled.div`
  position: relative;
  align-items: flex-start;
  display: flex;
  padding-top: 14px;
  flex-direction: column;

  ${({ small }) => (small ? `width: 150px;` : `width: 100%;`)}

  /* margin-top: 3px; */
    input {
    background: #fff;
    border: 1px solid #000;
    border-radius: 6px;
    height: 50px;
    padding: 0 15px;
    color: #333;
    margin: 0 0 10px;
    &::placeholder {
      color: #ccc;
    }
    &:focus {
      border: 1px solid #3b9eff;
    }
    ${({ error }) =>
      error ? "border: 1px solid #C6176E;" : `border: ${input.border};`}

    width: 100%;
    box-sizing: border-box;
    box-shadow: inset 0px 1px 3px #dddddd;
    color: ${input.color};
    ${({ type }) =>
      type === "search" &&
      `background: #FFFFFF;
        border: 1px solid rgba(66, 82, 110, 0.25);
        box-sizing: border-box;
        box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.35);
        border-radius: 50px;`}

    :disabled {
      background: rgba(0, 0, 0, 0.05);
      border: 1px solid #dad8df;
      box-sizing: border-box;
      box-shadow: inset 0px 1px 3px #dddddd;
      cursor: no-drop;
    }

    :focus {
      border: 1px solid
        ${({ error }) => (error ? "#c94e6d" : input.focusBorderColor)};
      background: #fff;
    }
  }

  textarea {
    resize: none;
    padding-top: 13px;
    padding-left: 20px;
    padding-right: 35px;
    font-family: ${input.fontFamily};
    line-height: 15px;
    outline: none;
    font-size: ${input.fontSize};
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -webkit-appearance: none;
    background: ${input.background};
    border: ${input.border};
    ${({ small, medium, large, textArea }) =>
      small
        ? `height: 36px;`
        : medium
        ? `height: 40px;`
        : large
        ? `height: 56px;`
        : textArea
        ? `height: 490px`
        : `height: 40px;`}
    width: 100%;
    box-sizing: border-box;
    box-shadow: inset 0px 1px 3px #dddddd;
    border-radius: 5px;
    color: ${input.color};
    height: 100px;
    margin-left: 6px;
    &::placeholder {
      color: transparent;
    }

    :focus {
      border: 1px solid ${input.focusBorderColor};
      background: #fff;
    }
    :required:invalid + label {
      color: ${input.color};
    }

    :focus + label,
    :not(:placeholder-shown) + label {
      color: ${({ error }) => (error ? "#C6176E;" : input.label.color)};
      font-size: ${input.label.fontSize};
      margin-top: 0px;
      font-weight: bold;
    }
  }

  label {
    color: ${({ error }) => (error ? "#C6176E;" : "#747880")};
    font-family: Inter;
    font-weight: 400;
    margin-bottom: 4px;
    margin-left: 2px;
    font-size: 14px;
  }
  .react-datepicker-wrapper {
    width: 100%;
  }

  ${({ hasLabel }) => hasLabel === false && `padding: 0px; margin: 0px;`}
`;

export const InputBlocked = styled.div`
  position: relative;
  margin-top: 3px;
  input {
    padding-left: 20px;
    font-family: ${input.fontFamily};
    line-height: 15px;
    outline: none;
    font-size: ${input.fontSize};
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -webkit-appearance: none;
    background: #dad8df;
    cursor: no-drop;
    border: ${input.border};
    ${({ small, medium, large }) =>
      small
        ? `height: 36px;`
        : medium
        ? `height: 40px;`
        : large
        ? `height: 56px;`
        : `height: 40px;`}
    width: 100%;
    box-sizing: border-box;
    box-shadow: inset 0px 1px 3px #dddddd;
    border-radius: 100px;
    color: ${input.color};
    &::placeholder {
      color: transparent;
    }
  }
`;

export const IconDateContainer = styled.div`
  position: absolute;
  top: 25px;
  left: 20px;
`;
export const ContainerTextEditor = styled.div`
  position: relative;

  .second-toolbar {
    display: none;
  }

  .text-editor {
    border: 1px solid #f1f1f1 !important;
    padding: 5px !important;
    border-radius: 2px !important;
    height: 80% !important;
  }

  .text-editor.rdw-editor-main {
    min-height: 200px;
    overflow-y: auto;
  }

  .text-editor.rdw-editor-wrapper {
    border-color: ${({ error }) => (error ? "#C6176E" : "#f1f1f1")} !important;
  }

  .DraftEditor-root {
    padding-right: 30px;
  }

  svg {
    position: absolute;
    top: inherit;
    right: 17px;
    bottom: 15px;
  }

  .text-editor.rdw-editor-wrapper {
    background: #fff;
  }

  ${({ disabled }) =>
    disabled &&
    `
        .rdw-editor-toolbar {
            display: none;
        }

        .text-editor.rdw-editor-wrapper {
            background: rgba(0, 0, 0, 0.05);
        }

        svg {
            top: 30px;
        }

        .text-editor.rdw-editor-main {
            border: none !important;
            padding: 0 !important;
        }
    `}
`;

export const SuccessIconStyle = styled.div`
  position: absolute;
  left: 90%;
`;

export const ContainerValidate = styled.div`
  svg {
    left: initial !important;
  }
`;
