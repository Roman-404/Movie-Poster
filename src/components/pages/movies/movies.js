import React, { Component, Fragment } from 'react';
import './movies.css';
import * as actions from '../../../actions';
import Api from '../../../api';
import { connect } from 'react-redux';
import Loading from '../../loading/loading';
import Pagination from '../pagination';

const { getFilms } = new Api();

class Movies extends Component {

    state = {
        total_pages: null,
    }

    onLoadFilms = movies => {
        this.props.loadFilms(movies)
        this.props.setLoading(false)
    }

    componentDidMount() {
        const { location: { search }, getCurrPage} = this.props;
        const page = search.match(/\d+/g);
        getCurrPage(page)
        getFilms(page).then(data => {
            this.setState({ total_pages: data.total_pages })
            return data.results
        }).then(this.onLoadFilms)
    }

    componentDidUpdate(prevProps, prevState) {
        const { page } = this.props;
        if (prevProps.page !== page) {
            this.props.setLoading(true)
            getFilms(page).then(data => this.onLoadFilms(data.results))
        }
    }

    componentWillUnmount() {
        this.props.setLoading(true)
    }

    
    render() {
        const { history, movies, loading } = this.props;
        const { total_pages } = this.state;
        console.log(this.props)

        return (
            <Fragment>
                <Loading loading={loading}/>
                <div className='pagination'>
                    <Pagination total_pages={total_pages}/>
                </div>
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

const mapStateToProps = ({ movies: { movies, page }, util: { loading, keyword }}) => {
    return { movies, page, loading, keyword }
};

export default connect(mapStateToProps, actions)(Movies);