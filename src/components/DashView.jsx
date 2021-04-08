import React from "react";
import Header from "./Header";
import styled from "styled-components";
import Sidebar from "./Sidebar";

export default function DashView(props) {
  return (
    <>
      <Header />
      <Container>
        <Sidebar />
        <Content>{props.children}</Content>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
`;

const Content = styled.div`
  margin-top: 60px;
  width: 85%;
  margin-left: 15%;
  background-color: #E0E1DD;
`;
