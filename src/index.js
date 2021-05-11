import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import App from './App';

ReactDOM.render(
    <Router>
        <React.StrictMode>
            <Switch>
                <Route path="/about">
                    <App />
                </Route>
                <Route path="/users">
                    <App />
                </Route>
                <Route path="/">
                    <App />
                </Route>
            </Switch>
        </React.StrictMode>,
        document.getElementById('root')
    </Router>

);
