import React from 'react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../api';

const MovieCard = ({ movie }) => {
    return (
        <div className="card mb-4">
            <img src={getImageUrl(movie.poster_path)} className="card-img-top" alt={movie.title} />
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <Link to={`/movie/${movie.id}`} className="btn btn-primary">View Details</Link>
            </div>
        </div>
    );
};

export default MovieCard;
