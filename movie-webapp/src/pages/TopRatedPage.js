import React, { useState, useEffect } from 'react';
import { fetchTopRatedMovies } from '../api';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';

const TopRatedPage = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchTopRatedMovies(page).then((response) => {
            setMovies(response.data.results);
        });
    }, [page]);

    return (
        <div>
            <h2>Top Rated Movies</h2>
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

export default TopRatedPage;
