import React, { Component } from 'react';
import { Table, Button } from 'antd';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { deleteTask } from '../../actions/task';
import { push } from 'react-router-redux';

class TaskList extends Component {

    render() {
        const { push, deleteTask } = this.props;

        let cols = [{
            dataIndex: 'title',
            title: '任务名'
        }, {
            dataIndex: 'comment',
            title: '备注'
        }, {
            dataIndex: 'op',
            title: '操作',
            render(idx) {
                return (
                    <div>
                        <Button type="primary"
                                onClick={() => {
                                    push('/task/detail/' + idx);
                                }}>查看</Button>
                        <Button type="ghost"
                                onClick={() => {
                                    deleteTask(idx);
                                }}>删除</Button>
                    </div>
                )
            }
        }];

        let ds = this.props.task.list.map((task, i) => {
            let { title, comment } = task;

            return {
                title, comment, op: i
            };
        });

        return (
            <section>
                <h1>任务列表</h1>
                <Table dataSource={ds} columns={cols} />
            </section>
        );
    }
}

export default connect(
    state => ({
        task: state.task
    }),
    dispatch => bindActionCreators({ push, deleteTask }, dispatch)
)(TaskList);
