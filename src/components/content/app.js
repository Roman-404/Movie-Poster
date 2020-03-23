import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../pages';
import Header from '../header/header';
import './app.css';

const App = () => {
    return (
        <Fragment>
            <Header/>
            <Switch>
                <Route
                    path='/'
                    component={Home}/>
            </Switch>
        </Fragment>
    )
}

export default App;