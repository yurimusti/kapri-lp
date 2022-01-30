import React, { useState, useEffect } from "react";
import { Upload, Select, Checkbox, notification } from "antd";

import * as Styled from "./styles";

import Button from "../../components/button";
import Input from "../../components/input";

import BoxForm from "../../components/boxForm";

import history from "../../services/history";
import { gql, useQuery, useLazyQuery, useMutation } from "@apollo/client";
import { currencyFormatter } from "../../services/utils";
import { uploadPhotoCall } from "../../services/upload";

import * as actionUtilities from "../../store/modules/utilities/actions";

import { useDispatch } from "react-redux";

const { Option } = Select;

const CREATE_MARCA = gql`
  mutation($inputMarcaCreate: CreateMarcaInput) {
    createMarca(input: $inputMarcaCreate) {
      status {
        status
        message
      }
      data {
        _id
      }
    }
  }
`;

const CreateClientes = () => {
  //const dispatch = useDispatch();

  //const [
  //  createMarca,
  //  { loadingUpdate, errorCreate, dataDistribuidoras },
  //] = useMutation(CREATE_MARCA);

  const [fileList, setFileList] = useState([]);
  const [nome, setNome] = useState("");

  //const _handleClickCreateMarca = () => {
  //  if (nome === "") {
  //    notification.warning({
  //      message: "Alerta",
  //      description: "Verifique os campos antes de continuar.",
  //    });
  //  } else {
  //    dispatch(actionUtilities.showLoading(true));
  //    if (fileList.length > 0) {
  //      Promise.all(
  //        fileList.map(async (e) => {
  //          return uploadPhotoCall({
  //            url: "",
  //            file: e.originFileObj,
  //            nome: `${
  //              Date.now().toString(36) + Math.random().toString(36).substr(2)
  //            }.${e.originFileObj.type.split("/")[1]}`,
  //          });
  //        })
  //      )
  //        .then((e) => {
  //          const variables = {
  //            nome,
  //            imageUrl: e[0].data.url,
  //          };
//
  //          createMarca({
  //            variables: {
  //              inputMarcaCreate: {
  //                ...variables,
  //              },
  //            },
  //          });
//
  //          dispatch(actionUtilities.showLoading(false));
  //          notification.success({
  //            message: "Sucesso",
  //            description: "Marca criada com sucesso.",
  //          });
  //          history.push("/marcas");
  //        })
  //        .catch((err) => {
  //          dispatch(actionUtilities.showLoading(false));
  //        });
  //    } else {
  //      notification.warning({
  //        message: "Alerta",
  //        description: "Você precisa inserir uma foto para continuar.",
  //      });
  //    }
  //  }
  //};

  const onChange = ({ fileList: newFileList, file, event }) => {
    setFileList([...newFileList.map((e) => ({ ...e, status: "done" }))]);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  return (
    <Styled.Main>
      <Styled.Header>
        <Styled.HeaderBoxText>
          <Styled.HeaderText>Criar Cliente</Styled.HeaderText>
        </Styled.HeaderBoxText>
        <Styled.HeaderBoxButton>
          <Button 
          text="Criar" 
          //onClick={() => _handleClickCreateMarca()} 
          />
        </Styled.HeaderBoxButton>
      </Styled.Header>
      <Styled.Body>
        <BoxForm title="Informações gerais" direction="row">
          <div style={{ flex: 1 }}>
            <Styled.Row>
              <Styled.Item>
                <Input
                  label="Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </Styled.Item>
              <Styled.Item>
                <Input
                  label="Telefone para contato"
                  //value={nome}
                  //onChange={(e) => setNome(e.target.value)}
                />
              </Styled.Item>
              <Styled.Item>
                <Input
                  label="E-mail"
                  //value={nome}
                  //onChange={(e) => setNome(e.target.value)}
                />
              </Styled.Item>
            </Styled.Row>
          </div>
        </BoxForm>
      </Styled.Body>
    </Styled.Main>
  );
};

export default CreateClientes;
