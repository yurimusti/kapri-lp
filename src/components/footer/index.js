import React from "react";
import * as Styled from "./styles";

import kapriLogo from "../../assets/img/kapriLogo.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Styled.Main height={[100, 150, 240]}>
      <Styled.Image alt="" src={kapriLogo} />
      <Styled.TextCopyright>{t("contato.copyright")}</Styled.TextCopyright>
    </Styled.Main>
  );
};

export default Footer;
