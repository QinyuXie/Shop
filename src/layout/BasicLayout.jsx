import React from 'react';
import { Component } from 'react';
import { Layout } from 'antd';

import ShopHeader from '../components/common/ShopHeader';

const {Content, Footer } = Layout;

class BasicLayout extends Component {
    render() {
        return (
            <Layout className="layout">
                <ShopHeader style = {{background: '#fff'}}></ShopHeader>
                <Content style={{ margin: '24px 16px 0', height: '100%' }}>
                        {this.props.children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>Shop by Qinyu @2020</Footer>
            </Layout>
        )
    }
}

export default BasicLayout;