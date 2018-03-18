import React from 'react';
import { Table, Button, Modal, Icon, Form, Input, Select } from 'antd';

export class TaskTable extends React.Component {
    constructor(props) {
        super(props);

        this.columns = [
            {
                title: 'Project',
                dataIndex: 'project',
                key: 'project'
            },
            {
                title: 'Last Week',
                dataIndex: 'lastWeek',
                key: 'lastWeek',
                render: (text, record) => {
                    return text.split('\n').map((item, key) => {
                        return (<span key={key}>{item}<br /></span>);
                    });
                }
            },
            {
                title: 'Next Week',
                dataIndex: 'nextWeek',
                key: 'nextWeek',
                render: (text, record) => {
                    return text.split('\n').map((item, key) => {
                        return (<span key={key}>{item}<br /></span>);
                    });
                }
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <a href="#">
                            Delete
                        </a>
                    </span>
                )
            }
        ];
    }

    render() {
        return (
            <Table columns={this.columns} dataSource={this.props.data} />
        )
    }
}

class AddTaskForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                span: 4
            },
            wrapperCol: {
                span: 20
            }
        };

        return (
            <Form>
                <Form.Item label="Project" {...formItemLayout}>
                    {getFieldDecorator('project', {})(
                        <Select>
                            <Select.Option value="1">Project1</Select.Option>
                            <Select.Option value="2">Project2</Select.Option>
                        </Select>
                    )}
                </Form.Item>
                <Form.Item label="Last Week" {...formItemLayout}>
                    {getFieldDecorator('lastWeek', {})(
                        <Input.TextArea autosize={{ minRows: 4, maxRows: 4 }} />
                    )}
                </Form.Item>
                <Form.Item label="Next Week" {...formItemLayout}>
                    {getFieldDecorator('nextWeek', {})(
                        <Input.TextArea autosize={{ minRows: 4, maxRows: 4 }} />
                    )}
                </Form.Item>
            </Form>
        );
    }
}

const AddTaskFormWrapper = Form.create()(AddTaskForm);

export class AddTaskDialog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisiable: false
        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal() {
        this.setState({
            modalVisiable: true
        });
    }

    hideModal() {
        this.setState({
            modalVisiable: false
        });
    }

    render() {
        return (
            <div style={{ marginBottom: 10 }}>
                <Button type="primary" onClick={this.showModal}><Icon type="plus" />Add&nbsp;Task</Button>
                <Modal title="Add Task" visible={this.state.modalVisiable} onCancel={this.hideModal}>
                    <AddTaskFormWrapper />
                </Modal>
            </div>
        );
    }
}