import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <main>
            <header>
                <div className='header'>
                    <div className='topic'>Movies</div>
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
            <div className='intro'></div>
        </main>
    )
}

export default Header;