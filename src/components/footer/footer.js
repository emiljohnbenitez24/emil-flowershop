import React from 'react';
import styled from 'styled-components'


const Footer = () => {

    const Div = styled.div`
        width:100%;
        color:blue;
        text-align:center;
    `
    return (
        <Div bg="light">
            <h1>This is the Footer</h1>
        </Div>
    )
}

export default Footer