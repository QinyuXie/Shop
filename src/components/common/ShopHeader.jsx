import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";

const { Header } = Layout;

const ShopHeader = () => {
  return (
    <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1" ><Link to = '/product'>首页</Link></Menu.Item>
          <Menu.Item key="2">商品</Menu.Item>
          <Menu.Item key="3">优惠券</Menu.Item>
        </Menu>
    </Header>
  );
}

export default ShopHeader;