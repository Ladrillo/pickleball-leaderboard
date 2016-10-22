import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import Router from 'react-router/BrowserRouter';
import Match from 'react-router/Match';
import Link from 'react-router/Link';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

import Home from './components/Home';
import LoginPage from './components/LoginPage';
import About from './components/About';


const sagaMiddleware = createSagaMiddleware();
const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);
const store = createStoreWithMiddleware(
    rootReducer, {},
    window.devToolsExtension ? window.devToolsExtension() : undefined
);


const renderApp = () => render(
    <Provider store = { store }>
        <Router>
            <div>
                <Match exactly pattern = '/' component = { Home } />
                <Match pattern = '/login' component = { LoginPage } />
                <Match pattern = '/about' component = { About } />
            </div>
        </Router>
    </Provider>,
    document.getElementById('reactApp')
);


sagaMiddleware.run(rootSaga);
renderApp();