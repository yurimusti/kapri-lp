import styled from "styled-components";
import { layout, space } from "styled-system";

export const Main = styled.div`
  height: 80px;
  background: #272425;
  width: 100%;
  display: flex;
  align-items: center;
  padding-right: 32px;
`;

export const Image = styled.img`
  ${layout}
  ${space}
`;

export const ImageContainer = styled.div`
  flex: 1;
`;
