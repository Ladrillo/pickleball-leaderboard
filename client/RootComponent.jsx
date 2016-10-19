import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Home from './components/Home';
import Navigation from './components/Navigation';


const RootComponent = () => (
    <Router history = { browserHistory }>
        <Route path = '/' component = { Navigation }>
            <IndexRoute component = { Home }></IndexRoute>
        </Route>
    </Router>
);


export default RootComponent;