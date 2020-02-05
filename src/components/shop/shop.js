import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import ShopItems from './shopItems'
import { Col, Row, Container } from 'react-bootstrap';
import Carousel from '../carousel';

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
                    <Col>
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
