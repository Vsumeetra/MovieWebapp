import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieSearchResults } from '../api';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';

const SearchPage = () => {
    const { query } = useParams();
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchMovieSearchResults(query, page).then((response) => {
            setMovies(response.data.results);
        });
    }, [query, page]);

    return (
        <div>
            <h2>Search Results for "{query}"</h2>
            <div className="row">
                {movies.map((movie) => (
                    <div className="col-md-3" key={movie.id}>
                        <MovieCard movie={movie} />
                    </div>
                ))}
            </div>
            <Pagination page={page} setPage={setPage} />
        </div>
    );
};

export default SearchPage;
