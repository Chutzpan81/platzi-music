import config from '../config/index'

const apiKey = config.apikey;
const URL = `http://www.omdbapi.com/?s=:title&page=10&apikey=${apiKey}`;

export default function getMovies(title){
    const url = URL.replace(':title',title)
    return fetch(url)
        .then(res=>res.json())
        .then(json => json.Search)
}