import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  height: 80px;
  display: flex;
  align-items: center;

  border: 1px solid #eff0f1;
`;

export const HeaderText = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  color: #56595e;
  padding-left: 64px;
`;

export const Body = styled.div`
  min-height: calc(100vh-80px);
  margin: 78px;
  display: flex;
  flex-direction: column;
`;

export const CardLine = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 48px;
`;
