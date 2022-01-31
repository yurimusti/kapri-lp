import styled from "styled-components";
import {layout, space} from "styled-system";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
  width: 100%;
  padding: 0px 40px;
  background-color: #272425;
`;

export const Image = styled.img`
  ${layout}
  ${space}
  cursor: pointer;
  transition: 0.5s;

  :hover {
    transform: scale(1.05);
  }
`;

export const ImageContainer = styled.a`
`;

export const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0px;
`;

export const BodyTitle = styled.div`
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 28px;
  color: #56595e;
`;

export const Exit = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  font-size: 16px;
  color: #ffffff73;
  border-bottom: 0px solid #00000060;
  padding: 0px 0px;
  border-radius: 0px;
  transition: 0.5s;

  :hover {
    color: #fffffff0;
    border-radius: 20px;
  }
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
    max-width: 200px;
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

export const Message = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 22px;
  text-transform: uppercase;
  max-width: 100px;
  width: 50px;
`
