import React, { useState, useEffect } from "react";
import { Table } from "antd";

import * as Styled from "./styles";

import Switch from "../../components/switch";
import Button from "../../components/button";
import Input from "../../components/input";

import history from "../../services/history";
import { gql, useQuery, useLazyQuery, useMutation } from "@apollo/client";

const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      status {
        status
        message
      }
      data {
        nome
        sobrenome
        celular
        status
      }
    }
  }
`;

const Clientes = () => {
  const { loadingData, errorLogin, data } = useQuery(GET_ALL_USERS);
  const [dataState, setDataState] = useState([
    // {
    //   _id: "1",
    //   nome: "Yuri",
    //   sobrenome: "Mustifaga",
    //   cpf: "12396554603",
    //   celular: "(31) 9 73615857",
    //   ativo: false,
    // },
  ]);

  useEffect(() => {
    if (data) {
      if (data.getAllUsers.data !== undefined) {
        setDataState(data.getAllUsers.data);
      }
    }
  }, [data]);

  const _handleChangeActive = (value, record) => {
    const newData = dataState.map((e) =>
      e.key === record.key ? { ...e, ativo: value } : { ...e }
    );
    //CHANGE NA API
    setDataState(newData);
  };

  const columns = [
    {
      title: "Nome",
      dataIndex: "nome",
      key: "nome",
      render: (text, record) => (
        <Styled.ColumnItemText>{`${record.nome} ${record.sobrenome}`}</Styled.ColumnItemText>
      ),
    },
    {
      title: "Celular",
      dataIndex: "celular",
      key: "celular",
      render: (text) => <Styled.ColumnItemText>{text}</Styled.ColumnItemText>,
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
      title: "Ativo",
      dataIndex: "status",
      key: "status",
      render: (text, record) => (
        <Styled.DeleteClient>
          excluir
        </Styled.DeleteClient>
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
          {/* <Button text="Criar" onClick={() => history.push("/createProduto")} /> */}
        </Styled.HeaderBoxButton>
      </Styled.Header>
      <Styled.Body>
        <Styled.BoxSearch>
          <Input
            placeholder="Search"
            onChange={(ee) => {
              if (ee.target.value === "") {
                setDataState(data.getAllUsers.data);
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

export default Clientes;
