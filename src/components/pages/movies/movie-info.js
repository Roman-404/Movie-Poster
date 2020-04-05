import React, { useEffect, useState, Fragment } from 'react';
import './movie-info.css';
import Api from '../../../api';
import Loading from '../../loading/loading';
import { setLoading } from '../../../actions';
import { connect } from 'react-redux';
import MovieFromCollection from './movie-from-collection';

const { getFilm, loadCollection } = new Api();
const img_url = 'https://image.tmdb.org/t/p/w500';
const img_url_orig = 'https://image.tmdb.org/t/p/original';

const MovieInfo = ({ match, setLoading, loading }) => {

    const {id} = match.params;
    const [film, setFilm] = useState({});
    const [trailer, setTrailer] = useState(null);
    const [collection, setCollection] = useState([]);
    const [collection_description, setCollectionDescription] = useState(null);

    useEffect(() => {
        getFilm(id).then(film => {
            setFilm(film)
            getTrailer(film)
            getCollection(film)
            setLoading(false)
            console.log(film)
        })
    }, [id, setLoading])

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

    const getCollection = (film) => {
        film.belongs_to_collection && loadCollection(film.belongs_to_collection.id)
        .then(e => {
            setCollectionDescription(e.overview)
            setCollection(e.parts)
        })
    }

    const createMovieFromCollectionItem = (film) => {
        if (film) {
            const { id, title, poster_path, release_date} = film;
            return {
                id,
                title,
                poster_path: img_url.concat(poster_path),
                year: new Date(release_date).getFullYear()
            }
        }
        return {}
    }

    return (
        <div>
            <Loading loading={loading}/>
            <div className='movie-page'>
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
                        {/* <div className='movie-info'> */}
                            <ul className='movie-list-info'>
                                {film.budget ? <li>Budget: {film.budget} &#36;</li> : null}
                                {film.revenue ? <li>Revenue: {film.revenue} &#36;</li> : null}
                                {film.homepage && <li><p>Homepage: <a href={film.homepage}>{film.homepage}</a></p></li>}
                                <li>Release Date: {new Date(film.release_date).toLocaleDateString('en-GB', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric'
                                })}</li>
                                <li>Duration: {setTimeFromMinutes(film.runtime)}</li>
                                <li>{film.production_countries.map((e,i) => <div key={i} className='item'>{`${e.name}\n(${e.iso_3166_1})`}</div>)}</li>
                                <li>{film.production_companies.map(e => <div key={e.id}
                                                                             className='item'>
                                                                             {`${e.name}\n${e.origin_country ? `(${e.origin_country})` : String.fromCharCode(174)}`}
                                                                        </div>)}
                                </li>
                            </ul>
                            <div className='rating'>
                                Rating: <br/>
                                <div className='rating-value'>
                                    {film.vote_average}
                                </div>
                            </div>
                        {/* </div> */}
                        {/* <div className='cast-crew'>cast</div> */}
                    </div>
                    {film.belongs_to_collection ? 
                                <figure className='movie-figure'>
                                    <p><b>{film.belongs_to_collection.name}</b></p>
                                    <img src={`${img_url_orig}${film.belongs_to_collection.backdrop_path}`} alt='None'></img>
                                    <section className='collection-description'>
                                        {collection_description}
                                     </section>
                                </figure> : null}
                    <ul className='movie-collection-container'>
                        {collection.filter(e => e.id !== film.id)
                                   .map(film => <MovieFromCollection key={film.id}
                                                                     film={createMovieFromCollectionItem(film)}/>)}
                    </ul>
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

const mapStateToProps = ({ loading }) => {
    return { loading }
}

const mapDispatchToProps = {
    setLoading
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);