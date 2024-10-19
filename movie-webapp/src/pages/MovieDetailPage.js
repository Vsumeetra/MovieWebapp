import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails, getImageUrl } from '../api';
import './MovieDetailPage.css'; // Optional: For custom CSS

const MovieDetailPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetchMovieDetails(id)
            .then((response) => {
                setMovie(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching movie details:", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!movie) {
        return <div>Movie not found</div>;
    }

    return (
        <div className="movie-detail-page container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <img
                        src={getImageUrl(movie.poster_path)}
                        alt={movie.title}
                        className="img-fluid rounded shadow"
                    />
                </div>
                <div className="col-md-8">
                    <h2>{movie.title}</h2>
                    <p><strong>Overview:</strong> {movie.overview}</p>
                    <p><strong>Release Date:</strong> {movie.release_date}</p>
                    <p><strong>Rating:</strong> {movie.vote_average} / 10</p>
                    <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
                    <p><strong>Genres:</strong> {movie.genres.map((genre) => genre.name).join(', ')}</p>
                    <h4>Cast:</h4>
                    {/* Add code to fetch and display cast information if needed */}
                    {/* You can fetch movie cast using another API call if required */}
                </div>
            </div>
        </div>
    );
};

export default MovieDetailPage;
