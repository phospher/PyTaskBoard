import React from "react";
import ReactDOM from "react-dom";
import { Layout, Menu } from 'antd';

const { Header, Content, Sider, Footer } = Layout;

export default class TaskInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>test</div>
        )
    }
};

ReactDOM.render(
    <TaskInput />,
    document.getElementById('main')
);