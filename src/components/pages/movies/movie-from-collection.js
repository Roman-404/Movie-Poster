import React from 'react';
import './movie-from-collection.css';

export default function MovieFromCollection({film}) {
    const { id, title, poster_path } = film;
    return (
        <div className='movie-collection'>
            <figure key={id} className='movie-collection-fig'>
                <img src={poster_path} alt=''/>
                <figcaption className='movie-collection-title'>{title}</figcaption>
            </figure>
        </div>
    )
}