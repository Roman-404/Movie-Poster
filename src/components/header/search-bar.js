import React, { useState } from 'react';
import Api from '../../api';
import { loadFilms, setKeyword, setTotalPages } from '../../actions';
import { connect } from 'react-redux';

const { searchMovie, getFilms } = new Api();

const SearchBar = ({movies: { movies, page }, loadFilms, setTotalPages, setKeyword, keyword}) => {

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
        const query = keyword.split(' ').join('+');
        if (keyword) {
            searchMovie(query).then(data => {
                setMoviesPage(data)
            })
        }
        else {
            getFilms(page).then(data => {
                setMoviesPage(data)
            })
        }
    }

    const setMoviesPage = async data => {
        await setTotalPages(data.total_pages)
        loadFilms(data.results)
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
    setKeyword,
    setTotalPages
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);