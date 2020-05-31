import React, { Component } from 'react';
import './App.css';
import "antd/dist/antd.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from './page/product/Product';
import Coupon from './page/coupon/Coupon';
import Login from './page/login/Login'; 
import { Layout } from 'antd';
import ShopHeader from './components/common/ShopHeader';

const {Content, Footer } = Layout;

const BasicLayout = props => {

    return (
        <Layout className="layout">
          <ShopHeader style = {{background: '#fff'}}></ShopHeader>
          <Content style={{ margin: '24px 16px 0', height: '100%' }}>
            <switch>
              <Route path="/product"><Product/></Route>
              <Route path="/coupon"><Coupon /></Route>
              <Route path="/login"><Login /></Route>
            </switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Shop by Qinyu @2020</Footer>
      </Layout>
    )
  
}

function App() {
  return (
    <Router>
        <Route path="/"><BasicLayout /></Route>
    </Router>
  );
}

export default App;
