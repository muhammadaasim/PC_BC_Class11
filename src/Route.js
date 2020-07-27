import React from 'react';
// import ReactDOM from 'react-dom';
import {  BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import ProductItem from './Components/ProductItems';

function RouteConfig() {
    return (
        <div>
            <Router>
                {/* <swich> */}
                    <Route path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/product" component={Product}/>
                    <Route path="/product/:id" component={ProductItem}/>
                {/* </swich> */}
            </Router>
        </div>
    )
}

export default RouteConfig;
