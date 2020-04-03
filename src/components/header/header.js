import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { connect } from 'react-redux';
import SearchBar from './search-bar';

const Header = ({ page }) => {
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
                </div>
            </div>
        </main>
    )
}

const mapStateToProps = ({ movies: { page }}) => {
    return { page }
}

export default connect(mapStateToProps)(Header);