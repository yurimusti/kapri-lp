import styled from "styled-components";
import { layout, typography, flex, grid, space, position } from "styled-system";

export const BoxBanner = styled.div`
  ${flex}
  ${layout}
  ${grid}
  ${space}
  display: flex;
  flex-direction: row;
  width: 100%;
  /* min-height: 100vh; */
  position: relative;
`;

export const BoxLeft = styled.div`
  ${flex}
  ${layout}
  ${grid}
  ${space}
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const OpacityBox = styled.div`
  ${flex}
  ${layout}
  ${grid}
  ${space}
  ${position}
  opacity: 0.7;
  background: #fff;
  position: absolute;
  /* top: 23%;
  left: 10%; */
  /* width: 700px; */
  height: 320px;
  z-index: 3;
  display: flex;
`;

export const BoxRight = styled.div`
  flex: 5;
  ${flex}
  ${layout}
  ${grid}
  ${space}
`;

export const Image = styled.img`
  /* margin: 10%; */
  /* width: 80%; */
  ${flex}
  ${layout}
  ${grid}
  ${space}
  ${position}
  border-radius: 5px;
`;

export const Title = styled.span`
  ${typography}
  ${flex}
  ${layout}
  ${grid}
  ${space}
  ${position}
  z-index: 4;
  position: absolute;
  /* top: 23%; */
  /* left: 10%; */
  font-family: Nova;
  font-style: normal;
  font-weight: bold;
  line-height: 56px;
  /* identical to box height */

  color: #333333;
  margin-top: 24px;
`;

export const Description = styled.span`
  ${space}
  ${position}
  ${typography}
  z-index: 4;
  position: absolute;

  font-family: Nova;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  /* margin-top: 48px; */
  /* or 30px */

  color: #333333;
`;

export const ButtonStyle = styled.a`
  ${typography}
  ${layout}
  ${space}
  ${position}
  background: transparent;
  width: 40%;
  height: 44px;
  border: 1px solid #000;
  cursor: pointer;
  bottom: 0;
  position: absolute;
  justify-content: center;
  align-items: center;

  &:hover {
    border: 2px solid #333333;
    cursor: pointer;
  }
`;

export const ButtonText = styled.span`
  font-family: Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  text-align: center;

  color: #333333;
`;
