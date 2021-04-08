import React from 'react';
import styled from "styled-components";
import { aps } from "../APS_MORADIA";
import APCard from "../components/APCard";
import '../styles/scrollStyle.css'
export default function Dispositivos(){
    return (
        <>
            <APSContainer>
              {aps.map((ap) => {
                return <APCard ap={ap} />;
              })}
            </APSContainer>
        </>
      );
    
}

const APSContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 50px;
  background-color: #F7F7F7;


&::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  -webkit-border-radius: 16px;
}

&::-webkit-scrollbar-track-piece {
  background-color: #ffffff;
  -webkit-border-radius: 3px;
}

&::-webkit-scrollbar-thumb:vertical {
  height: 5px;
  background-color: #666;
  -webkit-border-radius: 3px;
}

&::-webkit-scrollbar-thumb:horizontal {
  width: 5px;
  background-color: #666;
  -webkit-border-radius: 3px;
}

`;