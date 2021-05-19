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

function NotFound() {
    return (
        <div>
            <h1>That page was not found</h1>
        </div>
    );
}


ReactDOM.render(
        <React.StrictMode>
            <Router>

                <Switch>
                    <Route exact path="/about">
                        <App />
                    </Route>
                    <Route exact path="/team">
                        <Team />
                    </Route>
                    <Route exact path="/">
                        <App />
                    </Route>
                    <Route path="" component={NotFound} />
                </Switch>
            </Router>

        </React.StrictMode>,
        document.getElementById('root')

);
