import styled from "styled-components";

export const MainMenu = styled.div`
  width: 100%;
  height: 100vh;
  min-width: 350px;
  background: #2e2e2e;

  display: flex;
  flex-direction: column;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 70px 0px;
  margin-right: 20px;
  /* background: red; */

  img {
    width: 50%;
  }
`;

export const ItensContainer = styled.div`
  flex: 8;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #eff0f144;
`;

export const FooterContainer = styled.div`
  flex: 2;
  /* background: red; */
`;

export const Item = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ active }) => (active === true ? "background: #3a393a;" : "")}

  &:hover {
    background: #3a393a;
    ${({ disabled }) =>
      disabled ? `cursor: not-allowed;` : `cursor: pointer;`}
    color: #fff;

    span {
      opacity: 1;
    }
  }
`;

export const ItemIcon = styled.div`
  flex: 1;
  margin-left: 32px;
  margin-top: 4px;

  svg {
    stroke: #fff;
  }
`;

export const ItemTextContainer = styled.div`
  flex: 6;
`;

export const ItemText = styled.span`
  ${({ active = false, disabled }) =>
    active === true ? `color: #D6D7DA;` : `color: #74787F;`}
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;
