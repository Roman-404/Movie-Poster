import React from 'react';
import './cast-crew-list.css';

export default ({ person, url, role }) => {
    return (
        <div className='cast-crew' key={person.id}>
            <figure>
                <img src={url} alt='None' onError={e => getBrokenImageIcon(e, person.gender)}/>
                <figcaption>
                    <div className='cast-crew-name'>{person.name}</div>
                    <div className='cast-crew-role'>{role}</div>
                </figcaption>
            </figure>
        </div>
    )
}

const getBrokenImageIcon = (event, gender) => {
    event.target.style = 'width: 100%; height: 300px'
    event.target.src = require(`../../../static/img/${gender ? gender === 2 ? 'male.png' : 'famale.png' : 'man.png'}`)
}