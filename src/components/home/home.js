import React from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import img from '../../assets/flowershop.jpg'




const Home = () => {

    const MainContainer = styled.div`
    background:#000 url(${img});
    display:flex;
    background-size:100% 100%;  
    height:30rem;
    position:relative;
    .body-container{
        text-align:center;
        background:#000;
        min-width:100%;
        min-height:100%
        opacity:.8;
        position:absolute;
    }
    .container{
        z-index:1;
        justify-content:center;
        text-align:center;
        align-items:center;
    }
    .Jumbotron{
        margin-top:30vh;
        color:white;
    }
    button{
        color:white;
        background:#ff8c00
        border:none;
    }
    .p{
        font-size:20px;
    }
    .h1{
        font-size:50px;
    }
    `



    return (

        <MainContainer>
            <Container>
                <Row>
                    <Col >
                        <div className="Jumbotron">
                            <h1 className="h1">Welcome to Emil's Flower shop</h1>
                            <p className="p">
                                Nice & Beautiful
                             </p>
                            <p>
                                <Link to="/shop">
                                    <Button variant="success">View Items</Button>
                                </Link>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div class="body-container"></div>
        </MainContainer>



    );
}


export default Home;
