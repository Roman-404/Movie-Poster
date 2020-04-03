import React, { useState } from 'react';
import Api from '../../api';
import { loadFilms, setKeyword } from '../../actions';
import { connect } from 'react-redux';

const { searchMovie, getFilms } = new Api();

const SearchBar = ({movies: { movies, page }, loadFilms, setKeyword, keyword}) => {

    const [filter_movies, setFilter] = useState([])

    const handleFilterFilms = e => {
        e.preventDefault()
        loadFilms(filter_movies)
        setKeyword('')
    }

    const onSearch = (event, arr) => {
        const value = event.target.value.toLowerCase()
        const filter = arr.filter(e => {
            return e.title.toLowerCase().includes(value)
        })
        filterMovies(setKeyword(value).payload)
        setFilter(filter)
        console.log(keyword, value)
    }

    const filterMovies = keyword => {
        if (keyword) {
            searchMovie(keyword.split(' ').join('+')).then(data => loadFilms(data.results))
        }
        else {
            getFilms(page).then(data => loadFilms(data.results))
        }
    }

    return (
        <form onSubmit={handleFilterFilms}>
            <fieldset>
                <input placeholder='search'
                       onChange={(e) => onSearch(e, movies)}
                       value={keyword}/>
                <button type='submit'>Search</button>
            </fieldset>
        </form>
    )
}

const mapStateToProps = ({ movies, util: {keyword} }) => {
    return { movies, keyword }
}

const mapDispatchToProps = {
    loadFilms,
    setKeyword
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);