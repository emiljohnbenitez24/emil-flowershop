import React, { useState } from 'react';
import { Nav, Navbar, NavItem, Jumbotron } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { TiShoppingCart } from 'react-icons/ti'
import logo from '../assets/logo.png'

import './nav.css';


const Styles = styled.div`
    .navbar-brand, .navbar-nav .nav-link {
        color: black;
        font-family: 'Bangers';
        font-size:3vh;
    &:hover {
        color:grey;
    }
    &:focus{
        color:#ff8c00;
        outline:none;
    }
    }
    `



const NavigationBar = () => {

    const cart = useSelector(state => state.cart.cart)
    return (
        <Styles>
            <Navbar bg="light" variant="dark" >
                <Navbar.Brand> <Nav.Link as={Link} to="/" tabIndex="1">
                    <img
                        src={logo}
                        width="100"
                        height="100"
                        className="d-inline-block align-top-left"
                    />
                </Nav.Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"
                    style={{ background: 'grey' }}
                />
                <Navbar.Collapse id="responsive-navbar-nav"  >
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav >
                        <Nav.Link as={Link} to="/about" >About</Nav.Link>
                        <Nav.Link as={Link} to="/shop"  >Shop</Nav.Link>
                        <Nav.Link as={Link} to="/cart"  ><TiShoppingCart />cart:{cart.length}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        </Styles>
    )
}

export default NavigationBar