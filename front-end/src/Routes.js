import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';
import SignUp from './pages/SignUp';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/sign-in" exact component={SignIn} />
                <Route path="/sign-out" exact component={SignOut} />
            </Switch>
        </BrowserRouter>   
    );
}