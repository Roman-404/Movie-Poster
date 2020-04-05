import React from 'react';
import Api from '../../api';
import { getFilms, setKeyword, setTotalPages } from '../../actions';
import { connect } from 'react-redux';

const { searchMovie, loadFilms } = new Api();

const SearchBar = ({ movies: { movies, page }, styles, getFilms, setTotalPages, setKeyword, keyword }) => {

    const handleFilterFilms = e => {
        e.preventDefault()
        filterMovies(keyword)
    }

    const onSearch = (event, arr) => {
        const value = event.target.value.toLowerCase()
        filterMovies(setKeyword(value).payload)
    }

    const filterMovies = keyword => {
        const query = keyword.split(' ').join('+');
        if (keyword) {
            searchMovie(query).then(data => {
                setMoviesPage(data)
            })
        }
        else {
            loadFilms(page).then(data => {
                setMoviesPage(data)
            })
        }
    }

    const setMoviesPage = async data => {
        await setTotalPages(data.total_pages)
        getFilms(data.results)
    }

    return (
        <form onSubmit={handleFilterFilms}>
            <fieldset disabled={styles.disabled}>
                <input className='input-filter'
                       type='text'
                       placeholder='search...'
                       onChange={(e) => onSearch(e, movies)}
                       value={keyword}/>
                <button className='btn btn-outline-success button-submit'
                        style={{visibility: styles.visibility}}
                        type='submit'>Search</button>
            </fieldset>
        </form>
    )
}

const mapStateToProps = ({ movies, util: { keyword, styles }}) => {
    return { movies, keyword, styles }
}

const mapDispatchToProps = {
    getFilms,
    setKeyword,
    setTotalPages
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);