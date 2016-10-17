import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import About from './components/About';
import Home from './components/Home';
import Navigation from './components/Navigation';


const RootComponent = () => (
    <Router history = { browserHistory }>
        <Route path = '/' component = { Navigation }>
            <IndexRoute component = { Home }></IndexRoute>
            <Route path = '/about' component = { About }></Route>
        </Route>
    </Router>
);


export default RootComponent;