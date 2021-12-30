import React from "react";
import * as Styled from "./style";

import { useTranslation } from "react-i18next";

import Header from "./components/header";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Banner from "./components/banner";
import Especialista from "./components/especialista";
import Sobremim from "./components/sobreMim";

const App = () => {
  const { t } = useTranslation();
  return (
    <Styled.Container>
      <Styled.MenuContainer>
        <Header />
      </Styled.MenuContainer>
      <Styled.Body>
        <Banner />
        <Especialista />
        <Sobremim />
        <Contact />
      </Styled.Body>
      <Styled.FooterContainer>
        <Footer />
      </Styled.FooterContainer>
    </Styled.Container>
  );
};

//

export default App;
