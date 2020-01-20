import React from 'react';
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import ShopItems from './shopItems'
import img from '../../assets/background-flower.jpg'
import { Col, Row } from 'react-bootstrap'
import Footer from '../footer/footer'
import Carousel from '.././carousel'

const MainContainer = styled.div`
text-align: center;
}
.row{
    margin:0 auto;
    background:grey;
    height:50vh;
}
.column-two{
    background-image: url(${img});
}
h1{
    color:#ff8c00;
    font-family: 'Bangers', cursive;
}
`


const Shop = () => {

    const items = useSelector(state => state.cart.plants)

    return (
        <MainContainer>
            <Carousel />
            <div style={{ margin: '20px' }}>
                <h1 >Our <span style={{ color: '#00008b' }}>Products</span></h1>
            </div>
            {items.map(item => {
                return <ShopItems key={item.id} item={item} />
            })}
        </MainContainer>


    );
}


export default Shop;
