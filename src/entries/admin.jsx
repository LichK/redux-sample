import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';
import App from '../components/App';
import AddTask from '../components/task/AddTask';
import TaskList from '../components/task/TaskList';
import TaskDetail from '../components/task/TaskDetail';

// 应用redux router
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const _routerMiddleware = routerMiddleware(appHistory);

const rootReducers = combineReducers({
    ...reducers,
    routing: routerReducer
});

// compose函数: 实现传递内的函数依次链式调用
const middlewares = compose(
    applyMiddleware(thunk, _routerMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f // 支持图形化调试
);
const store = createStore(
    rootReducers,
    middlewares
);

// 将router状态同步至store
const history = syncHistoryWithStore(appHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router history={history}>
                <Route path="/" component={App}>
                    <Route path="/task">
                        <Route path="add" component={AddTask} />
                        <Route path="list" component={TaskList} />
                        <Route path="detail/:id" component={TaskDetail} />
                    </Route>
                </Route>
            </Router>
        </div>
    </Provider>,
    document.getElementById('root')
);
