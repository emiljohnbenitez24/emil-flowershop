import React from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import img from '../../assets/flowershop.jpg'




const Home = () => {

    const MainContainer = styled.div`
    background-image:url(${img});
    display:flex;
    background-size:100% 100%;
    width:100%;
    height:25rem;
    justify-content:center;
    .body-container{
        text-align:center;
        color:white;
        background:#000;
        width:100%;
        opacity:.6;
    }
    .jumbotron{
        background:#000;
        border-radius: 50px;
        border:green;
        font-family:"bangers"
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
            <div class="body-container">
                <Row>
                    <Col >
                        <Jumbotron >
                            <h1 className="h1">Welcome to Emil's Flower shop</h1>
                            <p className="p">
                                Nice & Beautiful
                             </p>
                            <p>
                                <Link to="/shop">
                                    <Button variant="success">View Items</Button>
                                </Link>
                            </p>
                        </Jumbotron>
                    </Col>
                </Row>
            </div>
        </MainContainer>



    );
}


export default Home;
