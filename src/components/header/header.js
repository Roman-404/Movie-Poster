import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { connect } from 'react-redux';
import SearchBar from './search-bar';
import SimilarMovies from './similar-movies';
import Swiper from 'react-id-swiper';
import BurgerMenu from './burger-menu';

import 'swiper/css/swiper.css';

const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: false
    },
    loop: true,
    slidesPerView: 3,
    spaceBetween: 50,
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
                        <Link to='#' className='link'>Login</Link>
                    </nav>
                    <BurgerMenu page = {page}/>
                </div>
            </header>
            <div className='intro'>
                <div className='recommendations'>
                    <h1 className='intro-title'>You may like it</h1>
                    <div className='similar-films'>
                        {similar_films.length ? 
                            <Swiper {...params}>
                                {similar_films.filter(({poster_path}) => !!poster_path)
                                .map((e, i) => {
                                    return (
                                        <div key={i}>
                                            <SimilarMovies {...e}/>
                                        </div>
                                    )
                                })}
                            </Swiper>
                        : null}
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