import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import RootComponent from './RootComponent';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';


const sagaMiddleware = createSagaMiddleware();
const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);
const store = createStoreWithMiddleware(
    rootReducer, {},
    window.devToolsExtension ? window.devToolsExtension() : undefined
);


const renderApp = () => render(
    <Provider store={store}>
        <RootComponent />
    </Provider>,
    document.getElementById('app')
);


sagaMiddleware.run(rootSaga);
renderApp();