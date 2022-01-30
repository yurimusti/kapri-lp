import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  background: #ffffff;
  border: 1px solid #d6d7da;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 15px;
  margin-top: 16px;
`;

export const TitleContainer = styled.div`
  margin-bottom: 20px;
`;

export const TitleText = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #747880;
`;

export const Container = styled.div`
  display: flex;
  ${({ direction = "column" }) =>
    direction ? `flex-direction: ${direction};` : `flex-direction: column;`}
  width: 100%;
  height: 100%;
`;
