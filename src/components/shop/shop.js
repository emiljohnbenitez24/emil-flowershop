import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import ShopItems from './shopItems'
import { Col, Row, Container, Form, FormControl, Button, Card } from 'react-bootstrap'
import img from '../../assets/creator.jpg'
import Footer from '../footer/footer'
import Carousel from '../carousel'

const MainContainer = styled.div`
text-align: center;
}
.row{
    height:50vh;
}
.sidebar{
    background:#FFFAFA;
}
h1{
    color:#ff8c00;
    font-family:Bangers, cursive;
}
.card{
    font-family:Bangers;
}
.featured{
    margin-top:2rem;
    font-family:Bangers;
}
.card-img{
    padding: 5px;
}
`


const Shop = () => {

    const items = useSelector(state => state.cart.plants)
    const [state, setState] = useState("")

    console.log(state)
    return (
        <MainContainer>
            <Carousel />
            <div style={{ padding: '30px' }}>
                <h1 >Our <span style={{ color: '#00008b' }}>Products</span></h1>
            </div>
            <Container>
                <Row>
                    <Col sm={4} className="sidebar">
                        <Form inline className="justify-content-center"
                            style={{ marginTop: '10px' }}
                        >
                            <FormControl onChange={(e) => setState(e.target.value)} type="text" placeholder="Search" className="mr-sm-2" />
                        </Form>
                        <h1 className="featured">Owner</h1>
                        <Card className="mx-auto" style={{ width: '12rem', border: 'none' }}  >
                            <Card.Header style={{ color: "black" }}>
                                <h5>Emil John E. Benitez</h5>
                            </Card.Header>
                            <Card.Img className="card-img" src={img} style={{ height: '10rem' }} />
                            <Card.Body>
                                <p>        BSIT </p>
                                <p>        Pccian </p>
                                <p>        ReactJS Developer </p>
                            </Card.Body>
                            <Card.Text style={{ color: "black" }} >
                            </Card.Text>

                        </Card>
                    </Col>
                    <Col sm={8} >
                        {items
                            .filter(item =>
                                item.name.toLowerCase().indexOf(state.toLowerCase()) >= 0)
                            .map(item =>
                                <ShopItems key={item.id} item={item} />
                            )
                        }

                    </Col>
                </Row>
            </Container>
        </MainContainer>


    );
}


export default Shop;
