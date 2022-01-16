import styled from 'styled-components'
import { background, flexbox, layout, typography } from 'styled-system'

export const Container = styled.div`
   height: 100%;
   background-size: cover;
   background-repeat: no-repeat;
   scroll-behavior: smooth;
   ${background}
   ${layout}
 `

export const MainBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  ${background}
  ${layout}
`

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #201c1c;
    width: 450px;
    height: 550px;
    border-radius: 25px 25px 25px 25px;
    -webkit-box-shadow: 0px 0px 21px 5px rgba(0,0,0,0.61); 
    box-shadow: 0px 0px 21px 10px rgb(0 0 0 / 31%);
    ${layout}
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    padding: 10px 0px;

    ${typography}
    ${flexbox};
`

export const Title = styled.span`
    color: #fff;
    font-family: Roboto;
    font-weight: bold;
    font-size: 20px;
`



export const Description = styled.span`
    color: #ffffff2b;
    font-family: Roboto;
    font-size: 18px;
    margin-bottom: 50px;
`

export const FormInput = styled.input`
	width: 100%; 
	margin-bottom: 10px; 
	background-color: #252121;
	border: none;
	outline: none;
	padding: 10px;
	font-size: 13px;
	color: #fff;
	text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
  border: 1px solid rgb(0 0 0 / 11%);
	border-radius: 4px;
	box-shadow: inset 0 -5px 45px rgba(100,100,100,0.1), 0 1px 1px rgba(255,255,255,0.1);
	-webkit-transition: box-shadow .5s ease;
	-moz-transition: box-shadow .5s ease;
	-o-transition: box-shadow .5s ease;
	-ms-transition: box-shadow .5s ease;
	transition: box-shadow .5s ease;
    ${layout}

    ::placeholder {
        color: #ffffff85;
    }

    &:focus {
         box-shadow: inset 0 -5px 45px rgba(100,100,100,0.2), 0 1px 1px rgba(255,255,255,0.15); 
        }
`

export const RememberRecover = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 350px;
`

export const PasswordRecovery = styled.a`
    align-self: end;
    font-weight: bold;
    color: #ffffff59;
    text-decoration: none;
    ${typography}

    :hover {
        color: #fff;
    }
`

export const LinkBtn = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    gap: 14px;
    padding: 6px 20px;
    width: 100%;
    margin-top: 50px;
    cursor: pointer;
    text-decoration: none;
    max-width: 210px;
    border-radius: 7px;
    border: 2px solid #b17971;
    color: #fff;
    font-size: 24px;
    transition: 0.3s;
    background-color: #b17971;
    align-self: center;
    transition: 0.3s;
    ${typography}
    ${flexbox}



    :hover {
        transform: scale(1.03);
        color: #fff;
        background-color: #d1958d;
        border-color: #d1958d;
    }
`;

export const LogoContainer = styled.div`
  margin-right: 22px;
    margin-bottom: 34px;
`;

export const Logo = styled.img`
  width: 100%;
`;
