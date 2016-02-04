/**
 * Created by jj on 1/19/16.
 */


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Router, browserHistory } from 'react-router';

import RootReducer from './reducers/rootReducer';
import routes from './routes.jsx';

//var Styles = require('../css/app.scss');    // just to compile styles



ReactDOM.render(
    <Provider store={applyMiddleware(ReduxPromise)(createStore)(RootReducer)}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
    ,
    document.getElementById('app-container')
);