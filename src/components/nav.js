import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import { TiShoppingCart } from 'react-icons/ti'
import logo from '../assets/logo.png'

import './nav.css';


const Styles = styled.div`
    .navbar-nav .nav-link {
        color:black !important;
        font-family: 'Bangers';
        font-size:3vh;
    &:hover {
        color:grey;
    }
    &:focus{
        color:orange !important;
    }
    }
    `



const NavigationBar = () => {

    const cart = useSelector(state => state.cart.cart)
    return (
        <Styles>
            <Navbar collapseOnSelect bg="light" expand="lg" variant="dark" style={{ position: 'relative' }}>
                <Navbar.Brand className="navbar-brand">
                    <Nav.Link href="#home" as={NavLink} to="/"
                    >
                        <img
                            src={logo}
                            width="50"
                            height="50"
                            alt=""
                            className="d-inline-block align-top-left"
                        />
                    </Nav.Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"
                    style={{ background: 'grey' }}
                />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#shop" as={NavLink} to="/shop"  >Shop</Nav.Link>
                        <Nav.Link href="#cart" as={NavLink} to="/cart" ><p className="cart-count"
                        ><TiShoppingCart /><p style={{ display: 'inline-block' }}>{cart.length}</p></p></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        </Styles >
    )
}

export default NavigationBar