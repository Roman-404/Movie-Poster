import React, { Component } from 'react';
import * as actions from '../../../actions';
import './home.css';
import { connect } from 'react-redux';

class Home extends Component {
    
    componentDidMount() {
        this.props.setStyles({
            disabled: true,
            visibility: 'visible'
        })
    }
    
    render() {
        return (
            <div className='home-page'>
                <div className='container'>Welcome to Movie store</div>
            </div>
        )
    }
}

export default connect(null, actions)(Home);