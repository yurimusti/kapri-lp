import styled from "styled-components";

import { layout } from "styled-system";

export const Main = styled.div`
  ${layout}
  background: #333333;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 8%;
  /* padding: 64px; */
`;

export const AdminLogin = styled.a`
  cursor: pointer;
  margin-top: 15px;
  font-style: bold;
  font-size: 14px;
  color: #c3c3c3;
  letter-spacing: 2px;

  :hover {
    color: #fff;
  }
`

export const TextCopyright = styled.span`
  margin-top: 24px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 100%;

  color: #fff;
`;
