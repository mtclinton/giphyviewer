import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import App from './App';
import Team from "./Team";

ReactDOM.render(
        <React.StrictMode>
            <Router>

                <Switch>
                    <Route path="/about">
                        <App />
                    </Route>
                    <Route path="/team">
                        <Team />
                    </Route>
                    <Route path="/">
                        <App />
                    </Route>
                </Switch>
            </Router>

        </React.StrictMode>,
        document.getElementById('root')

);
