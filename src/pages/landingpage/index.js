import React from "react";
import * as Styled from "./style";

import { useTranslation } from "react-i18next";

import Header from "../../components/header";
import Footer from "../../components/footer";
import Contact from "../../components/contact";
import Banner from "../../components/banner";
import Especialista from "../../components/especialista";
import Sobremim from "../../components/sobreMim";
import Projects from "../../components/projects";

const LandingPage = () => {
  const { t } = useTranslation();
  return (
    <Styled.Container>
      <Styled.Body>
        <Header />
        <Banner />
        <Especialista />
        <Projects />
        <Sobremim />
        <Contact />
        <Footer />
      </Styled.Body>
    </Styled.Container>
  );
};

export default LandingPage;