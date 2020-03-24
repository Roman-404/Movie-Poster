import React, { useEffect } from 'react';
import Api from '../../../api';

const { getFilm } = new Api();

const MovieInfo = ({ match }) => {

    const {id} = match.params;

    useEffect(() => {
        getFilm(id).then(film => (
            console.log(film)
        ))
    }, [id])

    return (
        <div>MovieInfo</div>
    )
}

export default MovieInfo;