import React from 'react';
import styled from 'styled-components'


export default function Header(){

    return <HeaderContainer>
        <span>Monitoramento Moradia</span>
    </HeaderContainer>
}

const HeaderContainer = styled.header`
height: 60px;
display: flex;
justify-content: center;
align-items: center;
background-color: #1D3557;
color: #FFB703;
position: fixed;
width: 100%;
span {
    font-size: 22px;
    font-weight: 800;
}
`