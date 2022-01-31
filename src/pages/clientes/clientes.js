import React, { useState, useEffect } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";

import { Table, notification } from "antd";

import * as Styled from "./styles";

import Input from "../../components/input";

import { ReactComponent as Sair } from "../../assets/svg/icon/sair.svg";
import kapriLogo from "../../assets/img/kapriLogo.png";

import history from "../../services/history";

const GET_ALL_LEADS = gql`
  query Data {
    getAllLeads {
      data {
        nome
        email
        telefone
        mensagem
        createdAt
      }
    }
  }
`;

const Cliente = () => {
  const { loading: loadingData, error: errorData, data, refetch } = useQuery(GET_ALL_LEADS);
  const [dataState, setDataState] = useState([]);
  
  useEffect(() => {
    if (data) {
      if (data.getAllLeads !== undefined) {
        setDataState(data.getAllLeads.data);
      }
    }
  }, [data, history.location]);
  //
  useEffect(() => {
    refetch();
  }, [history]);

  useEffect(() => {
    const token = localStorage.getItem("token") 

    if (token === null || token !== "karen123") {
      history.push("/login")
      notification.warning({
        message: "Aviso",
        description: "Você não tem acesso a esta área",
      })
    } 
  }, []);
 
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
      title: "Telefone",
      dataIndex: "telefone",
      key: "telefone",
      render: (number, record) => <Styled.Number>{number}</Styled.Number>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (email, record) => <Styled.Email>{email}</Styled.Email>,
    },
    {
      title: "Mensagem",
      dataIndex: "mensagem",
      key: "mensagem",
      render: (message, record) => <Styled.Message>{message}</Styled.Message>,
    },
  ];

  return (
    <Styled.Main>
      <Styled.Header>
        <Styled.ImageContainer>
          <Styled.Image width={["52%", "36%", "45%"]} alt="" src={kapriLogo} />
        </Styled.ImageContainer>
        <Styled.Exit
          onClick={() => history.push("/login")}
        >
          <Sair 
          style={{ background: "", width: 18, height: 18 }} />
          Logout
        </Styled.Exit>
      </Styled.Header>
      <Styled.Body>
        <Styled.SubHeader>
          <Styled.BodyTitle>
            <Styled.Title>Clientes</Styled.Title>
          </Styled.BodyTitle>
          <Styled.BoxSearch>
            <Input
              placeholder="Search"
              onChange={(ee) => {
                if (ee.target.value === "") {
                  setDataState(data.getAllLeads.data);
                } else {
                  setDataState(
                    dataState.filter((e) => e.nome.includes(ee.target.value))
                  );
                }
              }}
            />
          </Styled.BoxSearch>
        </Styled.SubHeader>
        <Table dataSource={dataState} columns={columns} />
      </Styled.Body>
    </Styled.Main>
  );
};

export default Cliente;
