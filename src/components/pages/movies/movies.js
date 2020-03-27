import React, { Component } from 'react';
import './movies.css';
import Api from '../../../api';

const { getFilms } = new Api();

export default class Movies extends Component {

    state = {
        movies: [],
        page: null,
        total_pages: null,
        per_page: null
    }

    onLoadFilms = movies => {
        this.setState({ movies })
    }

    componentDidMount() {
        const { page } = this.state;
        getFilms(page).then(data => {
            this.setState({ total_pages: data.total_pages })
            return data.results
        }).then(this.onLoadFilms)
    }
    
    render() {
        const { movies } = this.state;
        const { history } = this.props;
        return (
            <div className='movies-page'>
                <div className='movies-content'>
                    {movies.map(film => (
                        <article key={film.id}
                                 onClick={() => history.push(film.id.toString())}>
                            <figure>
                                <p><img className='img' src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.title}/></p>
                                <figcaption>{film.title}</figcaption>
                            </figure>
                        </article>
                    ))}
                </div>
            </div>
        )
    }
}