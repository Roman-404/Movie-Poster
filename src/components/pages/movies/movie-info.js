import React, { useEffect, useState, Fragment } from 'react';
import './movie-info.css';
import Api from '../../../api';

const { getFilm } = new Api();
const img_url = 'https://image.tmdb.org/t/p/w500';

const MovieInfo = ({ match }) => {

    const {id} = match.params;
    const [film, setFilm] = useState({});
    const [trailer, setTrailer] = useState(null);

    useEffect(() => {
        getFilm(id).then(film => {
            setFilm(film)
            getTrailer(film)
            console.log(film)
        })
    }, [id])

    const getTrailer = async film => {
        const N = film.videos.results.length;
        const index = Math.floor(Math.random()*N);
        const trailer = await N && film.videos.results[index].key;
        setTrailer(trailer)
    }

    const setTimeFromMinutes = (min) => {
        let hours = Math.trunc(min/60);
        let minutes = min % 60;
        return hours + 'h ' + minutes + 'min';
    };

    return (
        <div>
            <div className='movie-info'>
                {Object.keys(film).length ? 
                <Fragment>
                    <div className='images-container'>
                        <img className='poster' src={`${img_url}${film.poster_path}`} alt='None'/>
                        <div>
                            {film.images.backdrops.map((img, indx) => <img key={indx} className='image' src={`${img_url}${img.file_path}`} alt='None'/>).slice(0, 9)}
                        </div>
                    </div>
                    <section className='title'>
                        <h1>{film.title}</h1>
                        <p>{film.genres.map((e, i) => <span key={i} className='genre'>{e.name}</span>)}</p>
                    </section>
                    <section className='overview'>
                        <h3>{film.tagline ? film.tagline.concat('...') : null}</h3>
                        <p>{film.overview}</p>
                    </section>
                    <div className='about'>
                        {trailer ?
                            <iframe title='trailer' width='780' height='600'
                                src={`https://www.youtube.com/embed/${trailer}?autoplay=1`}>
                            </iframe>
                        : null}
                        <ul className='movie-list-info'>
                            <li>Budget: {film.budget} &#36;</li>
                            <li>Revenue: {film.revenue} &#36;</li>
                            {film.homepage && <li><p>Homepage: <a href={film.homepage}>{film.homepage}</a></p></li>}
                            <li>Release Date: {new Date(film.release_date).toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            })}</li>
                            <li>Duration: {setTimeFromMinutes(film.runtime)}</li>
                            <li>{film.production_countries.map((e,i) => <div key={i} className='item'>{`${e.name}\n(${e.iso_3166_1})`}</div>)}</li>
                            <li>{film.production_companies.map(e => <div key={e.id} className='item'>{`${e.name}\n(${e.origin_country})`}</div>)}</li>
                        </ul>
                        <div className='rating'>
                            Rating: <br/>
                            <div className='rating-value'>
                                {film.vote_average}
                            </div>
                        </div>
                    </div>
                    <footer className='container-production-companies'>
                        {film.production_companies.map(e => <img className='production-company'
                                                                 key={e.id}
                                                                 src={`${img_url}${e.logo_path}`}
                                                                 alt={e.name}
                                                                 onError={e => e.target.style.display = 'none'}></img>)}
                    </footer>
                </Fragment>
            : null}
            </div>
        </div>
    )
}

export default MovieInfo;