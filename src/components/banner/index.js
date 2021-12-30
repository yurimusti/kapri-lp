import React from "react";

import { useTranslation } from "react-i18next";

import image from "../../assets/img/bg.png";

import * as Styled from "./style";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <Styled.BoxBanner
      flexDirection={["row", "column", "column"]}
      minHeight={["67vh", "100vh", "100vh"]}
    >
      <Styled.OpacityBox
        top={["35%", "35%", "23%"]}
        left={["5%", "10%", "10%"]}
        width={["90%", "90%", 700]}
      >
        <Styled.ButtonStyle
          display={["none", "none", "flex"]}
          // top={["105%", "105%", ""]}
          // left={["36%", "100%", ""]}
        >
          <Styled.ButtonText>{t("banner.verProjetos")}</Styled.ButtonText>
        </Styled.ButtonStyle>
      </Styled.OpacityBox>
      <Styled.BoxLeft>
        <Styled.Title
          fontSize={[32, 32, 56]}
          left={["25%", "25%", "10%", "10%"]}
          top={["33%", "33%", "23%"]}
        >
          Interior Design
        </Styled.Title>
        <Styled.Description
          pr={[35, 35, 0]}
          mt={[0, 0, 48]}
          top={["53%", "53%", "35%"]}
          left={["10%", "10%", "10%"]}
        >
          {t("banner.description1")}
          <br /> {t("banner.description2")}
          <br /> {t("banner.description3")}
        </Styled.Description>
      </Styled.BoxLeft>
      <Styled.BoxRight>
        <Styled.Image
          width={["100%", "100%", "80%"]}
          position={["absolute", "absolute", "inherit"]}
          left={["0", "0", "0"]}
          margin={["0", "0", "10%"]}
          src={image}
        />
      </Styled.BoxRight>
    </Styled.BoxBanner>
  );
};

// width: 100%;
// position: absolute;
// left: 0;
// }

export default Banner;
