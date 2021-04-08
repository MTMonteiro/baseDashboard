import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css/styles.css";
import { AiFillFire } from "react-icons/ai";
import { AiOutlineWifi } from "react-icons/ai";
import { AiTwotoneHome } from "react-icons/ai";
import { AiTwotoneFile } from "react-icons/ai";

import './styles.scss'

export default function Sidebar() {
  return (
    <Container>
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem icon={<AiTwotoneHome />}>Dashboard  <Link to="/" /></MenuItem>
          <MenuItem icon={<AiOutlineWifi />}>Dispositivos <Link to="/dispositivos" /></MenuItem>
          <SubMenu title="Components" icon={<AiFillFire />}>
            <MenuItem>Component 1</MenuItem>
            <MenuItem>Component 2</MenuItem>
          </SubMenu>
          <MenuItem icon={<AiTwotoneFile />}>Logs <Link to="/logs" /></MenuItem>
        </Menu>
      </ProSidebar>
    </Container>
  );
}

const Container = styled.div`
  background-color: #1d3557;
  height: 100vh;
  width: 15%;
  position: fixed;
  margin-top: 60px;
`;
