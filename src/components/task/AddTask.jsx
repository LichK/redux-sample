import React, { Component } from 'react';
import { Row, Col, Input, Button } from 'antd';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask, inputTask } from '../../actions/task';

import _ from 'lodash';

class AddTask extends Component {

    render() {
        let { taskForm, addTask, inputTask } = this.props;
        let { title, comment } = taskForm;

        return (
            <section>
                <h1>创建任务</h1>
                <Row>
                    <Col span="4">任务名</Col>
                    <Col span="16">
                        <Input value={title} onChange={e => {
                            let val = e.target.value;
                            inputTask({
                                title: val,
                                comment
                            });
                        }} />
                    </Col>
                </Row>
                <Row>
                    <Col span="4">备注</Col>
                    <Col span="16">
                        <Input value={comment} type="textarea" rows="4" onChange={e => {
                            let val = e.target.value;
                            inputTask({
                                title,
                                comment: val
                            });
                        }} />
                    </Col>
                </Row>
                <Row>
                    <Col span="16" offset="4">
                        <Button type="primary"
                                onClick={e => {
                                    addTask({ title, comment });
                                }}>
                            确定
                        </Button>
                    </Col>
                </Row>
            </section>
        )
    }
}

export default connect(
    state => ({
        taskForm: state.taskForm
    }),
    dispatch => bindActionCreators({ addTask, inputTask }, dispatch)
)(AddTask);