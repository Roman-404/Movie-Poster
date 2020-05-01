import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';

export default ({ page }) => {
    return (
        <div className='burger-menu'>
            <Menu>
                <Link to={`/movies/${page ? `?page=${page}` : ''}`}>Movies</Link>
                <Link to='/people/'>People</Link>
                <Link to='#'>Login</Link>
            </Menu>
        </div>
    )
}