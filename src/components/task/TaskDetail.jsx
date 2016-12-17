import React, { Component } from 'react';
import { Row, Col } from 'antd';

import { connect } from 'react-redux';

class TaskDetail extends Component {

    render() {
        let idx = this.props.params.id;
        let task = this.props.list[parseInt(idx)];

        if (!task) {
            return <h3>任务不存在!</h3>
        }
        const { title, comment } = this.props.list[idx];

        return (
            <section>
                <h1>任务详情</h1>
                <Row>
                    <Col span="4">任务名</Col>
                    <Col span="16">{title}</Col>
                </Row>
                <Row>
                    <Col span="4">备注</Col>
                    <Col span="16">{comment}</Col>
                </Row>
            </section>
        );
    }
}

export default connect(
    state => ({
        task: state.task,
        list: state.task.list
    })
)(TaskDetail);