import React from 'react';
import './cast-crew-list.css';

export default ({ person, url, role }) => {
    return (
        <div className='cast-crew' key={person.id}>
            <figure>
                <img src={url} alt='None'/>
                <figcaption>
                    <div className='cast-crew-name'>{person.name}</div>
                    <div className='cast-crew-role'>{role}</div>
                </figcaption>
            </figure>
        </div>
    )
}