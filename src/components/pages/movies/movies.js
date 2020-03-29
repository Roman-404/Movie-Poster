import React, { Component } from 'react';
import './movies.css';
import * as actions from '../../../actions';
import Api from '../../../api';
import { connect } from 'react-redux';

const { getFilms } = new Api();

class Movies extends Component {

    state = {
        page: null,
        total_pages: null,
        per_page: null
    }

    onLoadFilms = movies => {
        this.props.loadFilms(movies)
    }

    componentDidMount() {
        const { page } = this.state;
        getFilms(page).then(data => {
            this.setState({ total_pages: data.total_pages })
            return data.results
        }).then(this.onLoadFilms)
    }
    
    render() {
        const { history, movies } = this.props;

        return (
            <div className='movies-page'>
                <div className='movies-content'>
                    {movies.map(film => (
                        <article key={film.id} className='movies-article'
                                 onClick={() => history.push(film.id.toString())}>
                            <figure className='movies-figure'>
                                <p><img className='img' src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt={film.title}/></p>
                                <figcaption className='movies-figcaption'>{film.title}</figcaption>
                            </figure>
                        </article>
                    ))}
                </div>
            </div>
        )
    };
};

const mapStateToProps = ({ movies }) => {
    return { movies }
};

export default connect(mapStateToProps, actions)(Movies);