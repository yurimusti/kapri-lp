import styled from "styled-components";

export const FirstMain = styled.div`
  background: #ffffff;
  /* 1 */

  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  border-radius: 19.0044px;
  height: 184px;
`;

export const SeccondMain = styled.div`
  width: 100%;
  height: 184px;
  ${({ flex }) => flex && `flex: ${flex};`}
  background: #ffffff;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  border-radius: 19.0044px;
  margin-right: 48px;
`;

export const ThirdMain = styled.div`
  width: 100%;
  height: 184px;
  ${({ flex }) => flex && `flex: ${flex};`}
  background: #ffffff;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  border-radius: 19.0044px;
`;

export const BoxRow = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TitleContainer = styled.div``;
export const TitleText = styled.span`
  color: #56595e;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;
export const DescriptionText = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  /* identical to box height, or 183% */

  color: #a3a3a3;
`;

export const ValueContainer = styled.div`
  margin-top: 8px;
`;
export const ValueText = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  /* identical to box height, or 129% */
  color: #56595e;
`;

export const PercentageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  width: 100%;
`;
export const PercentageText = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 22px;
  /* identical to box height, or 183% */

  /* Support/Sucess */

  ${({ color = "green" }) =>
    color === "red" ? `color:#F15151;` : `color: #76d854;`}
`;

export const IconContainer = styled.div``;

//

export const Item = styled.div`
  display: flex;
  width: 100%;
  padding-left: 40px;
`;

export const ItemLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemRight = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
`;
