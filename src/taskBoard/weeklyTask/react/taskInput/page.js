import React from "react";
import ReactDOM from "react-dom";
import { Layout, Menu, Button } from 'antd';
import './style/style.less';
import { TaskTableWrapper, AddTaskDialogWrapper } from './taskTable';
import { connect } from 'dva';

const { Header, Content, Sider, Footer } = Layout;

export default class TaskInput extends React.Component {
    constructor(props) {
        super(props);

        this.data = [
            {
                project: 'Project1',
                lastWeek: 'one\ntow',
                nextWeek: ''
            }
        ];
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
                    <Sider width={200} style={{ paddingTop: 20 }}>
                        <Menu mode="inline" theme="dark">
                            <Menu.Item key="1">Input Tasks</Menu.Item>
                            <Menu.Item key="2">Manage Task</Menu.Item>
                            <Menu.Item key="3">Open Task Date</Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content style={{ background: '#fff', marginTop: 24, marginLeft: 24, marginRight: 24, padding: 24, minHeight: 700 }}>
                            <AddTaskDialogWrapper />
                            <TaskTableWrapper />
                        </Content>
                    </Layout>
                </Layout>
                <Footer style={{ textAlign: 'center' }}>
                    powered by Phospher Lau
                </Footer>
            </Layout >
        )
    }
};