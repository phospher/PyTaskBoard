import React from 'react';
import Frame from '../common/frame';
import { Layout, Row, Col, Divider, Form, Icon, Input, Button } from 'antd';
import './style/style.less';

const { Content } = Layout;

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form>
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'please enter username' }]
                    })(
                        <Input prefix={<Icon type="user" />} placeholder="UserName" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'please enter password' }]
                    })(
                        <Input type="password" prefix={<Icon type="lock" />} placeholder="Password" />
                    )}
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" type="primary" style={{ width: '100%' }}>
                        Log In
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const LoginFormWrapper = Form.create()(LoginForm);

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Frame>
                <Content>
                    <Row style={{ marginTop: '2em' }}>
                        <Col span={10}></Col>
                        <Col span={4}>
                            <div className="login-panel">
                                <h1>Login</h1>
                                <Divider />
                                <LoginFormWrapper />
                            </div>
                        </Col>
                        <Col span={10}></Col>
                    </Row>
                </Content>
            </Frame>
        );
    }
}

export default Login;