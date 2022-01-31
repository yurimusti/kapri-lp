import React, { useEffect, useState } from "react";
import * as Styled from "./style";

import history from "../../services/history";
import { useTranslation } from "react-i18next";

import {notification } from "antd";

import background from "../../assets/img/bg1.jpg";
import kapriLogo from "../../assets/img/kapriLogo.png";
import { Token } from "graphql";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { t } = useTranslation();

  const _handleLogin = () => {
    if (email === "karen@kapri.com.br" && senha === "teste123@") {
      localStorage.setItem("token", "karen123")
      history.push("/clientes")
    } else {
      notification.warning({
        message: "Aviso",
        description: "Login ou senha incorretos",
      });
    }
  }

  return (
    <Styled.MainBanner backgroundImage={[`url(${background})`]}>
      <Styled.FormContainer width={[350, 400, 400]} height={[500, 540, 480]}>
        <Styled.LogoContainer>
          <Styled.Logo width={["52%", "36%", "45%"]} alt="" src={kapriLogo} />
        </Styled.LogoContainer>

        <Styled.Form alignItems={["center", "center", "none"]}>
          <Styled.FormInput
            width={[280, 350, 320]}
            height={[40, 40, 45]}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Styled.FormInput
            width={[280, 350, 320]}
            height={[40, 40, 45]}
            placeholder="Senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          {/* 
              <Styled.PasswordRecovery fontSize={[12, 14, 14]}>Esqueceu a senha?</Styled.PasswordRecovery> */}
          <Styled.LinkBtn
            fontSize={[14, 16, 16]}
            onClick={(e) => _handleLogin(e.target.value)}
          >
            Entrar
          </Styled.LinkBtn>

          <Styled.AdminLogin onClick={() => history.push("/")}>
            Voltar
          </Styled.AdminLogin>
        </Styled.Form>
      </Styled.FormContainer>
    </Styled.MainBanner>
  );
};

export default Login;
