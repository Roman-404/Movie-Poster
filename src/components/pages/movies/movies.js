import React, { Component } from 'react';
import './movies.css';
import Api from '../../../api';

const { getFilms, getFilm } = new Api();
const img_url = 'https://image.tmdb.org/t/p/w500';

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
            console.log(data)
            this.setState({ total_pages: data.total_pages })
            return data.results
        }).then(this.onLoadFilms)
    }
    
    render() {
        const { movies } = this.state;
        console.log(this.state)
        return (
            <div className='movies-page'>
                <div className='movies-content'>
                    {movies.map(film => (
                        <article key={film.id}>
                            <figure>
                                <p><img src={`${img_url}${film.poster_path}`} alt={film.title}/></p>
                                <figcaption>{film.title}</figcaption>
                            </figure>
                        </article>
                    ))}
                </div>
            </div>
        )
    }
}