import React, { useState } from 'react';
import './movie-from-collection.css';
import { Redirect } from 'react-router-dom';

export default function MovieFromCollection({ film }) {
    const { id, title, poster_path, year } = film;
    const [selected, setSelect] = useState(false);
    
    if (selected) {
        return <Redirect to={`/movies/${id}`}/>
    }

    return (
        <div className='movie-collection'
             onClick={() => setSelect(true)}>
            <figure key={id} className='movie-collection-fig'>
                <img src={poster_path} alt=''/>
                <figcaption className='movie-collection-title'>{year ? title.concat(', ', year) : title}</figcaption>
            </figure>
        </div>
    )
}