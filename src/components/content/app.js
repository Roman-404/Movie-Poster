import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Movies, People } from '../pages';
import Header from '../header/header';
import './app.css';

const App = () => {
    return (
        <Fragment>
            <Header/>
            <Switch>
                <Route
                    path='/'
                    component={Home}
                    exact/>
                <Route
                    path='/movies'
                    component={Movies}/>
                <Route
                    path='/people'
                    component={People}/>
            </Switch>
        </Fragment>
    )
}

export default App;