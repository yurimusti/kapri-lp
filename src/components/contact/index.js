import React, { useState, useEffect } from "react";

import { Input, notification } from "antd";

import { ReactComponent as Loading } from "../../assets/icon/loading01.svg";

import axios from "axios";
import { gql, useQuery, useLazyQuery, useMutation } from "@apollo/client";

import { useTranslation } from "react-i18next";

import phone from "../../assets/icon/phone.svg";
import emailIcon from "../../assets/icon/email.svg";
import instagram from "../../assets/icon/instagram.svg";
import map from "../../assets/icon/map.svg";

import * as Styled from "./style";

const CREATE_LEAD = gql`
  mutation CreateLead($input: CreateLeadInput) {
    createLead(input: $input) {
      status {
        message
        status
      }
    }
  }
`;

const BoxContact = () => {
  const { t } = useTranslation();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  const [loading, setLoading] = useState(false);

  const [createLead, { loading: loadingCreate, error: errorCreate, data }] =
    useMutation(CREATE_LEAD);

  const [dataCreate, setDataCreate] = useState({
    nome: "",
    telefone: "",
    email: "",
    mensagem: "",
  });

  useEffect(() => {
    if (data) {
      if (data.createLead.status.status === 200) {
        notification.success({
          message: t("messagesToast.sucesso"),
          description: t("messagesToast.sucessoSend"),
        });
        setDataCreate({
          nome: "",
          telefone: "",
          email: "",
          mensagem: "",
        });
      }
      if (data.createLead.status.status === 403) {
        notification.warning({
          message: t("messagesToast.aviso"),
          description: t("messagesToast.avisoMessage"),
        });
      }
      setLoading(false);
    }
  }, [data]);

  const _handleCreate = async () => {
    if (loading === true) return;
    setLoading(true);

    if (
      dataCreate.nome == "" ||
      dataCreate.email == "" ||
      dataCreate.telefone == "" ||
      dataCreate.mensagem == ""
    ) {
      notification.warning({
        message: t("messagesToast.aviso"),
        description: t("messagesToast.avisoMessage"),
      });
    } else {
      createLead({
        variables: { input: dataCreate },
      });
    }
  };

  console.log(dataCreate);
  console.log(errorCreate);

  return (
    <Styled.BoxContact
      id="contact"
      flexDirection={["column", "column", "row"]}
      p={[24, 24, 120]}
    >
      <Styled.BoxContactInfo>
        <Styled.TitleContact
          fontSize={[28, 28, 36]}
          textAlign={["center", "center", "inherit"]}
        >
          {t("contato.title")}
        </Styled.TitleContact>
        <Styled.DescriptionContact textAlign={["center", "center", "inherit"]}>
          {t("contato.descriptionContato")}
          <br />
          {t("contato.descriptionContato2")}
        </Styled.DescriptionContact>
        <Styled.FuncionamentoContact
          textAlign={["center", "center", "inherit"]}
        >
          {t("contato.horarioFuncionamento")}
        </Styled.FuncionamentoContact>
        <Styled.Items
          pt={[24, 24, 0]}
          alignSelf={["center", "center", "inherit"]}
        >
          <Styled.Item>
            <Styled.ItemIcon src={phone} />
            <Styled.ItemText fontSize={[16, 16, 18]}>
              +41 79 942 30 48
            </Styled.ItemText>
          </Styled.Item>
          <Styled.Item>
            <Styled.ItemIcon src={instagram} />
            <Styled.ItemText fontSize={[16, 16, 18]}>
              kapri_interiordesign
            </Styled.ItemText>
          </Styled.Item>
          <Styled.Item>
            <Styled.ItemIcon src={emailIcon} />
            <Styled.ItemText fontSize={[16, 16, 18]}>
              kapri.interiordesign@gmail.com
            </Styled.ItemText>
          </Styled.Item>
          <Styled.Item>
            <Styled.ItemIcon src={map} />
            <Styled.ItemText fontSize={[16, 16, 18]}>
              Dollikerweg 2, 8706 Meilen
            </Styled.ItemText>
          </Styled.Item>
        </Styled.Items>
      </Styled.BoxContactInfo>

      <Styled.BoxContactForm>
        <Styled.BoxForm>
          <Styled.BoxText> {t("contato.formName")}</Styled.BoxText>
          <Input
            size="large"
            placeholder=""
            value={dataCreate.nome}
            onChange={(e) =>
              setDataCreate({ ...dataCreate, nome: e.target.value })
            }
          />
          <div style={{ marginTop: 32 }} />
          <Styled.BoxText> {t("contato.formEmail")}</Styled.BoxText>
          <Input
            size="large"
            placeholder=""
            value={dataCreate.email}
            onChange={(e) =>
              setDataCreate({ ...dataCreate, email: e.target.value })
            }
          />
          <div style={{ marginTop: 32 }} />
          <Styled.BoxText> {t("contato.formTelefone")}</Styled.BoxText>
          <Input
            size="large"
            placeholder=""
            value={dataCreate.telefone}
            onChange={(e) =>
              setDataCreate({ ...dataCreate, telefone: e.target.value })
            }
          />
          <div style={{ marginTop: 32 }} />
          <Styled.BoxText> {t("contato.formMensagem")}</Styled.BoxText>
          <Input.TextArea
            size="large"
            placeholder=""
            value={dataCreate.mensagem}
            onChange={(e) =>
              setDataCreate({ ...dataCreate, mensagem: e.target.value })
            }
          />
          <div style={{ marginTop: 32 }} />
          <Styled.ButtonStyle
            disabled={loading}
            onClick={() => {
              _handleCreate();
            }}
          >
            {loading === true ? (
              <Loading style={{ background: "", width: 42, height: 42 }} />
            ) : (
              <Styled.ButtonText>
                {t("contato.formTextButton")}
              </Styled.ButtonText>
            )}
          </Styled.ButtonStyle>
        </Styled.BoxForm>
      </Styled.BoxContactForm>
    </Styled.BoxContact>
  );
};

export default BoxContact;
