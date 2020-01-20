import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addData } from '../../redux/actions'
import { Col, Row, Container, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import styled from 'styled-components'
import MyVerticallyCenteredModal from '../modal/modal'

const shopDetails = () => {

    const detailedPlants = useSelector(state => state.cart.detailedPlants)
    const [state, setState] = useState(detailedPlants.inCart)
    const [modalShow, setModalShow] = useState(false);
    const dispatch = useDispatch()

    const MainContainer = styled.div`
        text-align:center;
        align-items:center;
        color:black;
        h1{
            font-family: 'Bangers';
        }
        .buttons{
            bottom:20px;
        }
        .back{
            background:#00008b;
            font-family: 'Bangers';
            color:white;
        }
        .cart-btn{
            background:#ff8c00;
            font-family: 'Bangers';
            color:white;
        }
    `
    return (

        <MainContainer>
            <Container>
                <Row>
                    <Col>
                        <Image src={detailedPlants.img} fluid style={{ height: '500px' }} />
                    </Col>
                    <Col>
                        <h1>
                            {detailedPlants.name}
                        </h1>
                        <p>
                            {detailedPlants.description}
                        </p>

                        <Link to="/shop">
                            <Button className="back">Back</Button>
                        </Link>
                        <Button variant="warning" style={{ height: '6vh' }} className="cart-btn"
                            disabled={detailedPlants.inCart}
                            onClick={() => {
                                dispatch(addData(detailedPlants.id));
                                setState();
                                setModalShow(true)
                            }}
                        >
                            {detailedPlants.inCart ?
                                (<p disabled>
                                    {""}
                                    In Cart
                                                </p>
                                ) : <FaShoppingCart />
                            }
                        </Button>
                    </Col>

                </Row>

                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    img={detailedPlants.img}
                    className="modal"
                />
            </Container>
        </MainContainer>


    )
}

export default shopDetails