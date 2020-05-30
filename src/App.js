import React from 'react';
import './App.css';
import "antd/dist/antd.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from './page/Product';
import Coupon from './page/Coupon';
import BasicLayout from './layout/BasicLayout';



function App() {
  return (
    <Router>
    <Route path="/" component={Product}>
      <Route path="product" component={Product} />
      <Route path="coupon" component={Coupon} />
    </Route>
  </Router>
  );
}

export default App;
