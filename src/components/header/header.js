import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <main>
            <header>
                <div className='header'>
                    <div>
                        <Link to='/' className='topic'>Movies</Link>
                    </div>
                    <form>
                        <input></input>
                        <button>Search</button>
                    </form>
                    <nav>
                        <Link className='link'>Movies</Link>
                        <Link className='link'>People</Link>
                        <Link className='link'>Login</Link>
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

export default Header;