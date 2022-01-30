import styled from "styled-components";

export const Button = styled.div`
  background-color: #ebad9c;
  border-radius: 10px;
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;

  

  ${({ loading }) =>
    loading === false &&
    
    `
    

&:hover {
    filter: drop-shadow(0px 4px 10px rgba(238, 171, 153, 0.6));
    cursor: pointer;
    background-color: #ebb5a6; 
    transform: scale(1.02);
  }
`}
`;

export const ButtonText = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  align-self: center;
  text-align: center;
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

//export const PlusIcon = styled.div`
//  width: 100%;
//  display: flex;
//  align-items: center;
//
//  svg {
//    width: 20px;
//  }
//`;