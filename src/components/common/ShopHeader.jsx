import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { Link } from "react-router-dom";

const { Header } = Layout;

const ShopHeader = () => {
  return (
    <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1" ><Link to = '/'>首页</Link></Menu.Item>
          <Menu.Item key="2"><Link to = '/product'>商品</Link></Menu.Item>
          <Menu.Item key="3"><Link to = '/coupon'>优惠券</Link></Menu.Item>
        </Menu>
        <Button>Log in</Button>
    </Header>
  );
}

export default ShopHeader;