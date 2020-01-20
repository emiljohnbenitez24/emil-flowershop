import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/home/home';
import About from './components/about/about'
import Shop from './components/shop/shop';
import Details from './components/shop/shopDetails'
import Cart from './components/cart/cart'
import Nav from './components/nav'
import styled from 'styled-components';


const App = () => {

    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/shop" component={Shop} />
                    <Route path="/details" component={Details} />
                    <Route path="/cart" component={Cart} />
                </Switch>
            </div>
        </Router >
    )
}

export default App;