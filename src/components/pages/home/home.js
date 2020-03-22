import React, { Component } from 'react';
import './home.css';
import Api from '../../../api';

const { getFilm, getPeople, getFilms, getPerson } = new Api()

export default class Home extends Component {
    
    componentDidMount() {
        getFilm(550).then(result => console.log(result))
        getPeople(3).then(result => console.log(result))
        getFilms().then(result => console.log(result))
        getPerson(287).then(result => console.log(result))
    }
    render() {
        return (
            <div>Home</div>
        )
    }
}