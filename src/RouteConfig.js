import React from 'react';
// import ReactDOM from 'react-dom';
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import ProductItem from './Components/ProductItems';
import NF from './Components/404'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

function RouteConfig() {
    return (
        <div>
            <Router>
                <Navbar />
                {/* <Switch> */}
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route exact path="/product" component={Product} />
                    <Route path="/product/:id" component={ProductItem} />
                    <Route path="*" component={NF}/>
                {/* </Switch> */}
            </Router>
        </div>
    )
}

export default RouteConfig;
