import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import About from './components/About';
import Home from './components/Home';
import Navigation from './components/Navigation';


const RootComponent = () => (
    <Router history = { browserHistory }>
        <Route path = '/' component = { Navigation }>
            <Route path = '/home' component = { Home }></Route>
            <Route path = '/about' component = { About }></Route>
        </Route>
    </Router>
);


export default RootComponent;