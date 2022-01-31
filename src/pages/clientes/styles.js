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
  width: 100%;
`;

export const HeaderBoxText = styled.div`
  flex: 8;
`;

export const HeaderText = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  color: #56595e;
  padding-left: 44px;
`;

export const HeaderBoxButton = styled.div`
  margin-right: 40px;
`;

export const Body = styled.div`
  min-height: calc(100vh-80px);
  padding: 32px;

  .ant-table-cell {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    /* grayscale / gray */

    color: #9fa2b4;
  }
`;

export const StatusFuncionamentoText = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 22px;
  text-transform: uppercase;
  ${({ value }) => (value === true ? `color: #252733;` : `color: #C5C7CD;`)}
`;

export const ColumnItemText = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  color: #252733;
`;

export const ColumnItemBox = styled.div`
  width: 100;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: -5px;
`;

export const BoxSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Number = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 22px;
  text-transform: uppercase;
`;

export const Email = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 22px;
  text-transform: uppercase;
`;

export const Delete = styled.span`
  cursor: pointer;
  flex: 1;
  transition: 0.5s;
  
  :hover {
    color: #ff7c7c;
  }
`;
