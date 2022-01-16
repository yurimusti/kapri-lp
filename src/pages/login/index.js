import React from "react";
import * as Styled from "./style";

import background from "../../assets/img/bg1.jpg";
import { useTranslation } from "react-i18next";

import kapriLogo from "../../assets/img/kapriLogo.png";

const Login = () => {
  const { t } = useTranslation();
  return (
    <Styled.MainBanner backgroundImage={[`url(${background})`]}> 

        <Styled.FormContainer 
        width={[350, 400, 400]}
        height={[500, 540, 480]} 
        >
            <Styled.LogoContainer>
              <Styled.Logo
                width={["52%", "36%", "45%"]}
                alt=""
                src={kapriLogo}
              />
            </Styled.LogoContainer>

            <Styled.Form alignItems={["center", "center", "none"]}>
              <Styled.FormInput width={[280, 350, 320]} height={[40, 40, 45]} type="email" placeholder="Email" />
              <Styled.FormInput width={[280, 350, 320]} height={[40, 40, 45]} type="password" placeholder="Senha"/>
              <Styled.PasswordRecovery fontSize={[12, 14, 14]}>Esqueceu a senha?</Styled.PasswordRecovery>
              <Styled.LinkBtn fontSize={[14, 16, 16]}>Entrar</Styled.LinkBtn>
              
            </Styled.Form>

        </Styled.FormContainer>

    </Styled.MainBanner>
  );
};

export default Login;