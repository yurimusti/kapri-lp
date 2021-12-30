import styled from "styled-components";
import { flexbox, space, typography } from "styled-system";

export const BoxContact = styled.div`
  ${flexbox}
  ${space}
  display: flex;
  /* flex-direction: row; */
  width: 100%;
  min-height: 100vh;
`;

export const BoxContactInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  /* justify-content: center; */
  padding-top: 32px;
  flex: 1;
`;

export const BoxText = styled.span`
  font-family: Nova;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  color: #333333;
`;

export const ButtonStyle = styled.button`
  background: #b17971;
  width: 100%;
  height: 44px;
  border: 0px;

  cursor: pointer;
`;

export const ButtonText = styled.span`
  font-family: Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 140%;
  /* or 25px */

  letter-spacing: 2px;

  color: #ffffff;
`;

export const TitleContact = styled.span`
  ${typography}
  font-family: Nova;
  font-style: normal;
  font-weight: bold;

  line-height: 36px;
  /* identical to box height */

  color: #333333;
  margin-top: 20px;
`;

export const DescriptionContact = styled.span`
  ${typography}
  font-family: Nova;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: #757575;
  margin-top: 20px;
`;

export const FuncionamentoContact = styled.span`
  ${typography}
  font-family: Nova;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  /* identical to box height */

  color: #333333;
  margin-top: 20px;
`;

export const BoxContactForm = styled.div`
  flex: 1;
  @media (max-width: 900px) {
    margin-top: 48px;
  }
`;

export const BoxForm = styled.div`
  min-height: 500px;
  background: #ffffff;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 32px;
`;

export const Items = styled.div`
  ${space}
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-top: 22px;
`;

export const ItemIcon = styled.img`
  width: 24px;
`;

export const ItemText = styled.span`
  ${typography}
  margin-left: 32px;
  font-family: Nova;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  /* identical to box height */

  color: #333333;
`;

export const FooterContainer = styled.div`
  width: 100%;
`;

export const Image = styled.img`
  width: 15%;
`;
