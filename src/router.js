import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import Team from './pages/Team';
import Home from "./pages/Home";

import history from './history';

function NotFound() {
    return (
        <div>
            <h1>That page was not found</h1>
        </div>
    );
}

function AppRouter() {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/about">
                    <Home />
                </Route>
                <Route exact path="/team">
                    <Team />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}

export default AppRouter;