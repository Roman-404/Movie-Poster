import React from 'react';
import { Link } from 'react-router-dom';

const SimilarMovies = ({ id, poster_path }) => {

    return (
        <div key={id} className='similar-films-item'>
            <Link to={`/movies/${id}`}>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt=''/>
            </Link>
        </div>
    )
}

export default SimilarMovies;