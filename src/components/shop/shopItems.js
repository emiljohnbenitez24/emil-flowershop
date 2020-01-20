import React, { useState } from 'react';
import { addData } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { viewData } from '../../redux/actions'
import { FaShoppingCart } from "react-icons/fa";
import styled from 'styled-components';
import MyVerticallyCenteredModal from '../modal/modal'


const AnotherDiv = styled.div`
  transition-property: all;
  transition-property: transform;
  display: inline-block;
  margin:10px;
.card{
    font-family: 'Bangers';
    font-size:3vh;
    overflow:hidden;
}
.card-img{
    transition: all 0.5s;
}
.cart-btn{
    height:7vh;
    bottom:0;
    right:0;
    position:absolute;
    transition: all 0.5s;
    border-radius:20px 0 0 0;
    transform:translate(100%,100%);
    background:#00008b;
}
.card:hover .cart-btn{
    transform:scale(1.0);
}
.card:hover .card-img{
    transform:scale(1.3);
}
`



const ShopItems = (props) => {

    const { id, img, name, description, price, inCart } = props.item;
    const [state, setState] = useState(inCart);
    const [modalShow, setModalShow] = useState(false);
    const dispatch = useDispatch();

    return (
        <AnotherDiv>
            <Card className="mx-auto" style={{ width: '15rem', border: 'none' }}  >
                <Card.Header style={{ color: "black" }}>
                    <Col>
                        <p className="plantName">{name}</p>
                    </Col>
                    <Col>
                        <span className="plantPrice">₱{price}</span>
                    </Col>
                </Card.Header>
                < Link to="/details" >
                    <Card.Img className="card-img" src={img}
                        onClick={() => {
                            dispatch(viewData(id));

                        }} style={{ padding: '50px  ' }} />
                </Link>
                <Card.Body>
                    <Button className="cart-btn "
                        disabled={inCart}
                        onClick={() => {
                            setModalShow(true)
                            dispatch(addData(id));
                            setState();
                        }}
                    >
                        {inCart ?
                            (<p className="incart" disabled>
                                {""}
                                In Cart
                                                </p>
                            ) : <FaShoppingCart />
                        }
                    </Button>
                </Card.Body>
                <Card.Text style={{ color: "black" }} >
                </Card.Text>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    img={img}
                    className="modal"
                />
            </Card>
        </AnotherDiv >


    );
}


export default ShopItems;

