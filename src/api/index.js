import axios from 'axios';

export default class Api {

    API_KEY = 'ad9cb08f0b66570ea6d73f877b1be0d8';
    
    getResourceData = async (URL) => {
        const response = await axios.get(`https://api.themoviedb.org/3${URL}&api_key=${this.API_KEY}`)
        try {
            return await response.data
        } catch (error) {
            throw new Error(error, response.status)
        }
    }

    loadFilms = async (page) => {
        const result = await this.getResourceData(`/movie/popular?page=${page}`)
        return result
    }

    loadSimilarFilms = id => {
        return this.getResourceData(`/movie/${id}/similar?`)
    }

    getFilm = async (id) => {
        const result = await this.getResourceData(`/movie/${id}?append_to_response=videos,images`)
              .then(async data => {
                const people = await this.getResourceData(`/movie/${data.id}/credits?`)
                .catch(() => {return {}})
                const { cast, crew } = people
                return {
                    ...data,
                    cast,
                    crew
                }
            })
        return result
    }

    loadCollection = (id) => {
        return this.getResourceData(`/collection/${id}?`)
    }
    
    loadPeople = async (page) => {
        const result = await this.getResourceData(`/person/popular?language=en-US&page=${page}`)
        return result
    }
    
    searchMovie = async (value, page) => {
        const result = await this.getResourceData(`/search/movie?include_adult=false&page=${page}&language=en-US&query=${value}`)
        return result
    }

    loadPerson = async (id, page) => {
        const result = await this.getResourceData(`/person/${id}?`)
              .then(async data => {
                  const [rec_films, movies] = await Promise.all([
                    this.getResourceData(`/search/movie?query=${data.name}&page=${page}`),
                    this.getResourceData(`/discover/movie?&with_cast=${data.id}&page=${page}`)
                  ])
                  .catch(() => {return []})
                  return {
                      ...data,
                      movies,
                      rec_films
                  }
              })
        return result
    }
}