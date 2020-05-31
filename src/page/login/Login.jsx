import React from 'react';
import LoginForm from './LoginForm';
import { Row, Col } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

const formStyle = {
    margin: 40,
    align: 'center',
  };
  

const Login = () => {
    return (
        <>
        <Row>
            <Col span={8}></Col>

            <Col span={8}>            
                <div className="loginForm">
                    <Title level={3}>Log in</Title>
                    <LoginForm />
                </div>
            </Col>
            <Col span={8}></Col>
        </Row>
        <Row></Row>
        </>
    );
}

export default Login;