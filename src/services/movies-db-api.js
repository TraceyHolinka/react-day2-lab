const BASE_URL = 'https://api.themoviedb.org/3/movie/'
const API_KEY = '4f13fb136c47299a2591acbdf775d3c9'

export const fetchPopularMovies = () => {
    return fetch(`${BASE_URL}popular?api_key=${API_KEY}&language=en-US&page=1`).then((response) => response.json())
}
