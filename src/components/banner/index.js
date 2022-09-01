import React from "react";

import { useTranslation } from "react-i18next";

import image from "../../assets/img/bg.png";

import * as Styled from "./style";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <Styled.BoxBanner
      flexDirection={["row", "column", "column"]}
      minHeight={["67vh", "45vh", "100vh"]}
      id="home"
    >
      <Styled.OpacityBox
        top={["35%", "35%", "23%"]}
        left={["5%", "10%", "10%"]}
        width={["90%", "82%", 700]}
      >
        <Styled.ButtonStyle
          // href="#projects"
          onClick={() =>
            window.open("https://calendly.com/kapri-interiordesign", "_blank")
          }
          display={["none", "none", "flex"]}
          mb={[10, 10, 20]}
          // top={["105%", "105%", ""]}
          // left={["36%", "100%", ""]}
        >
          <Styled.ButtonText>{t("banner.verProjetos")}</Styled.ButtonText>
        </Styled.ButtonStyle>
      </Styled.OpacityBox>
      <Styled.BoxLeft>
        <Styled.Title
          fontSize={[24, 32, 56]}
          left={["30%", "38%", "10%", "10%"]}
          top={["33%", "33%", "23%"]}
        >
          Interior Design
        </Styled.Title>
        <Styled.Description
          pr={[35, 35, 0]}
          mt={[0, 0, 48]}
          top={["53%", "53%", "30%"]}
          left={["10%", "15%", "10%"]}
          textAlign={["center", "center", "inherit"]}
          fontsize={[10, 16, 20]}
        >
          {t("banner.description1")}
          <br /> {t("banner.description2")}
          <br /> {t("banner.description3")}
        </Styled.Description>
      </Styled.BoxLeft>
      <Styled.BoxRight>
        <Styled.Image
          width={["100%", "100%", "100%"]}
          position={["absolute", "absolute", "inherit"]}
          left={["0", "0", "0"]}
          mt={["0", "0", "8%"]}
          mb={["0", "0", "20%"]}
          src={image}
        />
      </Styled.BoxRight>
    </Styled.BoxBanner>
  );
};

export default Banner;
