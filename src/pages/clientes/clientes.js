import React, { useState, useEffect } from "react";
import { Table, notification, Tag } from "antd";

import * as Styled from "./styles";

import Button from "../../components/button";
import Input from "../../components/input";

import { gql, useQuery, useLazyQuery, useMutation } from "@apollo/client";


const GET_ALL_MARCAS = gql`
  query {
    getAllMarcas {
      status {
        status
        message
      }
      data {
        _id
        nome
        imageUrl
      }
    }
  }
`;

//const REMOVE_MARCA = gql`
//  mutation($inputRemoveMarca: CreateMarcaInput) {
//    deleteMarca(input: $inputRemoveMarca) {
//      status {
//        status
//        message
//      }
//    }
//  }
//`;
//
const Cliente = ({ history }) => {
  const { loadingData, errorLogin, data, refetch } = useQuery(GET_ALL_MARCAS);
  //const [
  //  removeMarca,
  //  { loadingUpdate, errorCreate, data: dataRemoveMarca },
  //] = useMutation(REMOVE_MARCA);
//
  useEffect(() => {
    if (data) {
      if (data.getAllMarcas !== undefined) {
        setDataState(data.getAllMarcas.data);
      }
    }
  }, [data, history.location]);
//
  useEffect(() => {
    refetch();
  }, [history]);
//
  //useEffect(() => {
  //  if (dataRemoveMarca !== undefined) {
  //    if (dataRemoveMarca.deleteMarca.status.status === 200) {
  //      notification.success({
  //        message: "Sucesso",
  //        description: dataRemoveMarca.deleteMarca.status.message,
  //      });
  //      refetch();
  //    } else {
  //      notification.error({
  //        message: "Algo de errado aconteceu.",
  //        description: dataRemoveMarca.deleteMarca.status.message,
  //      });
  //    }
  //  }
  //}, [dataRemoveMarca]);

  const [dataState, setDataState] = useState([]);

  const _toPrice = (value) =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  //const _handleDelete = (data) => {
  //  removeMarca({
  //    variables: {
  //      inputRemoveMarca: {
  //        _id: data._id,
  //      },
  //    },
  //  });
  //};

  const columns = [
    {
      title: "Nome",
      dataIndex: "nome",
      key: "nome",
      render: (text, record) => (
        <Styled.ColumnItemBox style={{ flex: 8 }}>
          <span style={{ marginLeft: 8 }}>{text}</span>
        </Styled.ColumnItemBox>
      ),
    },
    {
      title: "Número",
      dataIndex: "numero",
      key: "numero",
      render: (value) => (
        <Styled.Number>
          (41) 99999-5555
        </Styled.Number>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (value) => (
        <Styled.Email>
          idrinks@email.com.br
        </Styled.Email>
      ),
    },
    {
      title: "Ações",
      dataIndex: "",
      key: "",
      render: (text, record) => (
        <Styled.Delete
          //onClick={() => _handleDelete(record)}
        >
          EXCLUIR
        </Styled.Delete>
      ),
    },
  ];

  return (
    <Styled.Main>
      <Styled.Header>
        <Styled.HeaderBoxText>
          <Styled.HeaderText>Clientes</Styled.HeaderText>
        </Styled.HeaderBoxText>
        <Styled.HeaderBoxButton>
          <Button text="Criar" onClick={() => history.push("/createClientes")} />
        </Styled.HeaderBoxButton>
      </Styled.Header>
      <Styled.Body>
        <Styled.BoxSearch>
          <Input
            placeholder="Search"
            onChange={(ee) => {
              if (ee.target.value === "") {
                setDataState(data.getAllMarcas.data);
              } else {
                setDataState(
                  dataState.filter((e) => e.nome.includes(ee.target.value))
                );
              }
            }}
          />
        </Styled.BoxSearch>
        <Table dataSource={dataState} columns={columns} />
      </Styled.Body>
    </Styled.Main>
  );
};

export default Cliente;
