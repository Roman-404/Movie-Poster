import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { connect } from 'react-redux';
import SearchBar from './search-bar';
import SimilarMovies from './similar-movies';
import Swiper from 'react-id-swiper';

import 'swiper/css/swiper.css';

const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
}

const Header = ({ page, similar_films }) => {
    return (
        <main>
            <header>
                <div className='header'>
                    <div>
                        <Link to='/' className='topic'>Movies</Link>
                    </div>
                    <SearchBar/>
                    <nav>
                        <Link to={`/movies/${page ? `?page=${page}` : ''}`} className='link'>Movies</Link>
                        <Link to='/people/' className='link'>People</Link>
                        <Link to='/' className='link'>Login</Link>
                    </nav>
                </div>
            </header>
            <div className='intro'>
                <div className='recommendations'>
                    <h1 className='intro-title'>You may like it</h1>
                    <div className='similar-films'>
                        <Swiper {...params}>
                            {similar_films.length ? similar_films.map((film, key) => <SimilarMovies key={key} {...film}/>) : null}
                        </Swiper>
                    </div>
                </div>
            </div>
        </main>
    )
}

const mapStateToProps = ({ movies: { page }, util: { similar_films }}) => {
    return { page, similar_films }
}

export default connect(mapStateToProps)(Header);