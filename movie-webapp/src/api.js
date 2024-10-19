import axios from 'axios';

const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const fetchPopularMovies = async (page = 1) => {
    return axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
};

export const fetchTopRatedMovies = async (page = 1) => {
    return axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=${page}`);
};

export const fetchUpcomingMovies = async (page = 1) => {
    return axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&page=${page}`);
};

export const fetchMovieDetails = async (id) => {
    return axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
};

export const fetchMovieSearchResults = async (query, page = 1) => {
    return axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`);
};

export const getImageUrl = (path) => `${IMAGE_BASE_URL}${path}`;
