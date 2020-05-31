import React, { Component } from 'react';
import './App.css';
import "antd/dist/antd.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from './page/product/Product';
import Coupon from './page/coupon/Coupon';
import Login from './page/login/Login'; 
import { Layout, Menu, Button } from 'antd';
import { Link } from "react-router-dom";

const { Header } = Layout;
const {Content, Footer } = Layout;

const ShopHeader = () => {
  return (
    <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1" ><Link to = '/'>首页</Link></Menu.Item>
          <Menu.Item key="2"><Link to = '/product'>商品</Link></Menu.Item>
          <Menu.Item key="3"><Link to = '/coupon'>优惠券</Link></Menu.Item>
          <Button type="primary" style={{'float':'right', 'top': '15px'}}>
          <Link to = '/login'>Log in</Link></Button>
        </Menu>
        
    </Header>
  );
}


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
