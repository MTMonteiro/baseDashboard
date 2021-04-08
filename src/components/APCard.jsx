import React from "react";
import styled from 'styled-components'
import Ap1 from '../assets/img/ap1.svg'

export default function APCard({ ap }) {
  return (
    <Container>
      <h1>{ap}</h1>
      <img src={Ap1} alt="React Logo" />
      <p>modelo</p>
      <p>local</p>
      <p>canal</p>
    </Container>
  );
}


const Container = styled.div`
padding: 30px 50px;
/* background-color: #F1FAEE; */
display: block;
/* border: 2px solid red; */
max-width: max-content;

img {
    width: 80px;
}

h1 {
    text-transform: uppercase;
}

&:hover{
    padding: 20px 50px;
    opacity: 0.8;
}
`