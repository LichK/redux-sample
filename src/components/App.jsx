import React, { Component } from 'react';
import { Row, Col, Spin } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { push } from 'react-router-redux';

class App extends Component {

    render() {
        const { children, app, push } = this.props;
        if (!children) {
            push('/task/add');
        }

        return (
            <Spin spinning={app.loading}>
                <Row>
                    <Col span="6">
                        <p><a href="#/task/add">创建任务</a></p>
                        <p><a href="#/task/list">任务列表</a></p>
                    </Col>
                    <Col span="18">
                        {children}
                    </Col>
                </Row>
            </Spin>
        )
    }
}

// 定义selector
const mapStateToProps = state => ({
    app: state.app
});

// 使用 bindActionCreators 函数简化 mapDispatchToProps 创建
// const mapDispatchToProps = dispatch => ({
//     push: () => {
//         dispatch(push);
//     }
// });
const mapDispatchToProps = dispatch => bindActionCreators({ push }, dispatch);

// 将组件与redux store进行绑定
export default connect(mapStateToProps, mapDispatchToProps)(App)