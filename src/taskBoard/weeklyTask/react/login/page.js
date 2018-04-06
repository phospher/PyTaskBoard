import React from 'react';
import Frame from '../common/frame';
import { Layout, Row, Col, Divider, Form, Icon, Input, Button, Alert } from 'antd';
import './style/style.less';
import { axiosCsrf } from '../common/request';

const { Content } = Layout;

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            alertMessage: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let formData = new FormData();
                for (let key in values) {
                    formData.append(key, values[key]);
                }

                axiosCsrf.post(urls.CHECK_LOGIN, formData).then(response => {
                    if (response.status == 200) {
                        if (response.data) {
                            if (response.data.result == 'Failure') {
                                this.setState({
                                    alertMessage: response.data.message
                                });
                            } else {
                                window.location.href = document.getElementById('hiddenRedirect').value
                            }
                        }
                    } else {
                        alert(response.data);
                    }
                });
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItems = [
            (
                <Form.Item key="username">
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'please enter username' }]
                    })(
                        <Input prefix={<Icon type="user" />} placeholder="UserName" />
                    )}
                </Form.Item>
            ),
            (
                <Form.Item key="password">
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'please enter password' }]
                    })(
                        <Input type="password" prefix={<Icon type="lock" />} placeholder="Password" />
                    )}
                </Form.Item>
            )
        ];
        if (this.state.alertMessage) {
            formItems.push((
                <Form.Item key="alertMessage">
                    <Alert message={this.state.alertMessage} type="error" showIcon={true} iconType="close-circle-o" />
                </Form.Item>
            ));
        }
        formItems.push((
            <Form.Item key="submit">
                <Button htmlType="submit" type="primary" style={{ width: '100%' }}>
                    Log In
                    </Button>
            </Form.Item>
        ));
        return (
            <Form onSubmit={this.handleSubmit}>
                {formItems}
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