import styled from "styled-components";

export const Button = styled.div`
  background: linear-gradient(180deg, #00aaf2 -32.29%, #033f9a 133.33%);
  border-radius: 4px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ loading }) =>
    loading === false &&
    `

&:hover {
    filter: drop-shadow(0px 4px 10px rgba(1, 129, 208, 0.2));
    cursor: pointer;
    background: linear-gradient(360deg, #0092df -38.54%, #0258ae 184.37%);
    border-radius: 4px;
  }
`}
`;

export const ButtonText = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

export const ButtonIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 30px;
  }

  &:hover {
    /* filter: drop-shadow(0px 4px 10px rgba(1, 129, 208, 0.2)); */
    cursor: pointer;
    /* background: linear-gradient(360deg, #0092df -38.54%, #0258ae 184.37%); */
    border-radius: 4px;
  }
`;
