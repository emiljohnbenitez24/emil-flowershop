import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Button, Table, Image, Col, Row, Container } from 'react-bootstrap'
import { addData, removeData, subData } from '../../redux/actions'
import styled from 'styled-components'
import { TiMinus } from 'react-icons/ti'
import { IoMdAdd } from 'react-icons/io'
import { FaWindowClose } from 'react-icons/fa'


const Shop = () => {

    const items = useSelector(state => state.cart.cart)
    const total = useSelector(state => state.cart.total)

    const [state, setState] = useState()

    const dispatch = useDispatch();

    const Div = styled.div`

        background:#F5F5F5;
        .rowone .col{
            font-weight:bold;
            font-size:17px;
            margin-top:2rem;
        }
        .rowtwo .col{
            margin-top:1rem;
        }
        .rowtwo p{
            opacity:.7;
        }
        .rowthree p{
            opacity:.7;
        }
        .remove-item{
            color:red;
        }
    `
    return (


        <div style={{ color: 'black', textAlign: 'center' }}>
            <h1 style={{ background: ' #ff8c00', color: 'black', fontFamily: 'bangers', fontSize: '50px' }}>
                Shopping Cart
                        </h1>
            {items.length === 0 ? <h1 style={{ fontFamily: 'bangers', fontSize: '50px', background: '#F5F5F5' }}>Cart is Empty</h1> :
                <div>
                    <Div>
                        <Container>
                            <Row className="rowone">
                                <Col>Items</Col>
                                <Col>Price</Col>
                                <Col>Quantity</Col>
                                <Col>Total</Col>
                                <Col></Col>
                            </Row>
                        </Container>
                        {items.map(item => {
                            return (

                                <Container key={item.id}>
                                    <Row className="rowtwo">
                                        <Col><Image src={item.img} width={70} height={70} /></Col>
                                        <Col><p>₱{item.price}</p></Col>
                                        <Col >

                                            <p>
                                                <IoMdAdd
                                                    onClick={() => { dispatch(addData(item.id)); setState(item.quantity) }}
                                                />{item.quantity}
                                                <TiMinus
                                                    onClick={() => { dispatch(subData(item.id)); setState(item.quantity) }}
                                                /></p>
                                        </Col>
                                        <Col><p>₱{item.total} </p></Col>
                                        <Col><FaWindowClose className="remove-item" onClick={() => dispatch(removeData(item.id))} /></Col>
                                    </Row>
                                </Container>

                            )
                        })}
                        <hr style={{ color: '5px solid black' }}></hr>
                        <Container>
                            <Row className="rowthree">
                                <Col></Col>
                                <Col></Col>
                                <Col></Col>
                                <Col><p>₱{total}</p></Col>
                                <Col><Button>Checkout</Button></Col>
                            </Row>
                        </Container>
                    </Div >
                </div>
            }
        </div>
    );
}



export default Shop;
