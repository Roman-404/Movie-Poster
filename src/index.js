import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/content/app';
import { Provider } from 'react-redux';
import CatchError from './components/error-catch/error-catch';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
// import './static/theme/bootstrap.css';

ReactDOM.render(
    <Provider store={store}>
        <CatchError>
            <Router>
                <App/>
            </Router>
        </CatchError>
    </Provider>,
    document.getElementById('root'));