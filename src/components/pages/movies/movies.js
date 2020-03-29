import React, { Component, Fragment } from 'react';
import './movies.css';
import * as actions from '../../../actions';
import Api from '../../../api';
import { connect } from 'react-redux';
import Loading from '../../loading/loading';

const { getFilms } = new Api();

class Movies extends Component {

    state = {
        page: null,
        total_pages: null,
        per_page: null,
        loading: true
    }

    onLoadFilms = movies => {
        this.props.loadFilms(movies)
        this.setState({
            loading: false
        })
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
        const { loading } = this.state;

        return (
            <Fragment>
                <Loading loading={loading}/>
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
            </Fragment>
        )
    };
};

const mapStateToProps = ({ movies }) => {
    return { movies }
};

export default connect(mapStateToProps, actions)(Movies);