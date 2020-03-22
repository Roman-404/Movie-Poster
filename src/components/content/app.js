import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../pages';
import Header from '../header/header';


const App = () => {
    return (
        <main role='main'>
            <Header/>
            <Switch>
                <Route
                    path='/'
                    component={Home}/>
            </Switch>
        </main>
    )
}

export default App;