import React from "react";
import * as Styled from "./styles";

import { ReactComponent as FirstIcon } from "../../assets/svg/iconDash/firstDash.svg";
import { ReactComponent as UsuariosAtivosIcon } from "../../assets/svg/iconDash/usuariosAtivosIcon.svg";
import { ReactComponent as UsuariosNovosIcon } from "../../assets/svg/iconDash/usuariosNovosIcon.svg";
import { ReactComponent as ProdutosCadastradosIcon } from "../../assets/svg/iconDash/produtosCadastrados.svg";
import { ReactComponent as ProdutosVendidos } from "../../assets/svg/iconDash/produtosVendidos.svg";

import { ReactComponent as Up } from "../../assets/svg/iconDash/upArrow.svg";
import { ReactComponent as Down } from "../../assets/svg/iconDash/downArrow.svg";

const Card = ({ type = "first", flex = 1, data = { first: [] } }) => {
  switch (type) {
    case "first":
      return (
        <Styled.FirstMain>
          <Styled.BoxRow>
            <Styled.Item>
              <Styled.ItemLeft>
                <UsuariosAtivosIcon />
              </Styled.ItemLeft>
              <Styled.ItemRight>
                <Styled.TitleContainer>
                  <Styled.TitleText>Leads conquistados</Styled.TitleText>
                </Styled.TitleContainer>
                <Styled.BoxRow>
                  <Styled.ValueContainer>
                    <Styled.ValueText>132</Styled.ValueText>
                  </Styled.ValueContainer>
                  <Styled.PercentageContainer>
                    <Up />
                    <Styled.PercentageText>8,6%</Styled.PercentageText>
                  </Styled.PercentageContainer>
                </Styled.BoxRow>
              </Styled.ItemRight>
            </Styled.Item>
            <div
              style={{
                height: 100,
                width: 1,
                background: "#D6D7DA",
                border: "1px solid #D6D7DA;",
              }}
            />
            <Styled.Item>
              <Styled.ItemLeft>
                <UsuariosNovosIcon />
              </Styled.ItemLeft>
              <Styled.ItemRight>
                <Styled.TitleContainer>
                  <Styled.TitleText>Novos Leads</Styled.TitleText>
                </Styled.TitleContainer>
                <Styled.BoxRow>
                  <Styled.ValueContainer>
                    <Styled.ValueText>38</Styled.ValueText>
                  </Styled.ValueContainer>
                  <Styled.PercentageContainer>
                    <Up />
                    <Styled.PercentageText color="green">
                      12,6%
                    </Styled.PercentageText>
                  </Styled.PercentageContainer>
                </Styled.BoxRow>
              </Styled.ItemRight>
            </Styled.Item>
            <Styled.Item>
              <Styled.ItemLeft>
                <FirstIcon style={{ marginBottom: 50 }} />
              </Styled.ItemLeft>
            </Styled.Item>
          </Styled.BoxRow>
        </Styled.FirstMain>
      );

    case "seccond":
      return (
        <Styled.SeccondMain flex={flex}>
          <Styled.BoxRow>
            <Styled.Item>
              <Styled.ItemLeft>
                <ProdutosCadastradosIcon />
              </Styled.ItemLeft>
              <Styled.ItemRight>
                <Styled.TitleContainer>
                  <Styled.TitleText>Projetos vendidos</Styled.TitleText>
                </Styled.TitleContainer>
                <Styled.BoxRow>
                  <Styled.ValueContainer>
                    <Styled.ValueText>9</Styled.ValueText>
                  </Styled.ValueContainer>
                  <Styled.PercentageContainer>
                    <Up />
                    <Styled.PercentageText>50,6%</Styled.PercentageText>
                  </Styled.PercentageContainer> 
                </Styled.BoxRow>
              </Styled.ItemRight>
            </Styled.Item>
          </Styled.BoxRow>
        </Styled.SeccondMain>
      );

    case "third":
      return (
        <Styled.ThirdMain flex={flex}>
          <Styled.BoxRow>
            <Styled.Item>
              <Styled.ItemLeft>
                <ProdutosVendidos />
              </Styled.ItemLeft>
              <Styled.ItemRight>
                <Styled.TitleContainer>
                  <Styled.TitleText>Projetos Cadastrados</Styled.TitleText>
                </Styled.TitleContainer>
                <Styled.DescriptionContainer>
                  <Styled.DescriptionText>(Mensal)</Styled.DescriptionText>
                </Styled.DescriptionContainer>
                <Styled.BoxRow>
                  <Styled.ValueContainer>
                    <Styled.ValueText>5</Styled.ValueText>
                  </Styled.ValueContainer>
                </Styled.BoxRow>
              </Styled.ItemRight>
            </Styled.Item>
            <div
              style={{
                height: 100,
                width: 1,
                background: "#D6D7DA",
                border: "1px solid #D6D7DA;",
              }}
            />
            <Styled.Item>
              <Styled.ItemLeft>{/* <UsuariosNovosIcon /> */}</Styled.ItemLeft>
              <Styled.ItemRight>
                <Styled.TitleContainer>
                  <Styled.TitleText>Projetos em andamento</Styled.TitleText>
                </Styled.TitleContainer>
                <Styled.DescriptionContainer>
                  <Styled.DescriptionText>(No momento)</Styled.DescriptionText>
                </Styled.DescriptionContainer>
                <Styled.BoxRow>
                  <Styled.ValueContainer>
                    <Styled.ValueText>8</Styled.ValueText>
                  </Styled.ValueContainer>
                  {/* <Styled.PercentageContainer>
                    <Down />
                    <Styled.PercentageText color="red">
                      12,6%
                    </Styled.PercentageText>
                  </Styled.PercentageContainer> */}
                </Styled.BoxRow>
              </Styled.ItemRight>
            </Styled.Item>
          </Styled.BoxRow>
        </Styled.ThirdMain>
      );

    default:
      break;
  }
};

export default Card;
