import React, { useState } from 'react'
import { Modal, Button, Image } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const MyVerticallyCenteredModal = (props) => {

    const MainContainer = styled.div`
    font-family:bangers;
    text-align:center;
    margin:0 auto;
     `
    return (
        <MainContainer>
            <Modal
                {...props}
                size="sm"
                className="modal"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                style={{ textAlign: "center", fontFamily: "bangers" }}
            >
                <Modal.Header style={{ background: "#ff8c00" }} >
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h1>Added on Cart</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={props.img} fluid style={{ height: '200px' }} />
                </Modal.Body>
                <Modal.Footer>
                    <Link to="/cart">
                        <Button size="md" style={{ background: '#00008b' }}>Go to Cart
                    </Button>
                    </Link>
                    <Link to="/shop">
                        <Button size="md" style={{ background: '#00008b' }} onClick={props.onHide}>Continue Shopping</Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </MainContainer>
    );
}

export default MyVerticallyCenteredModal;