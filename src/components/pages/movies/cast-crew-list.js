import React, { Fragment } from 'react';
import './cast-crew-list.css';

export default ({ person, url, field}) => {
    return (
        <div className='cast-crew' key={person.id}>
            <figure>
                <img src={url} alt='None'/>
                <figcaption>{format(person, field)}</figcaption>
            </figure>
        </div>
    )
}

const format = (item, field) => {
    return (
        <Fragment>
            <div>{item.name}</div>
            <div>{item[field]}</div>
        </Fragment>
    )
}