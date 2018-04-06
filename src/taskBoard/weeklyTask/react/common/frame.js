import React from 'react';
import { Layout } from 'antd';
import './style/style.less';

const { Header, Footer } = Layout;

export default class Frame extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Layout>
                <Header>
                    <div className="logo">
                        <h1>Boring Title</h1>
                    </div>
                </Header>
                <Layout>
                    {this.props.children}
                </Layout>
                <Footer style={{ textAlign: 'center' }}>
                    powered by Phospher Lau
                </Footer>
            </Layout >
        );
    }
}