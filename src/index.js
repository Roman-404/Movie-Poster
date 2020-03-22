import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/content/app';
import { Provider } from 'react-redux';
import ErrorBoundry from './components/error-boundry/error-boundry';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <Router>
                <App/>
            </Router>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root'));