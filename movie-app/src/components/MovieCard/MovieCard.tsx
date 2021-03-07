import React from 'react';

interface MovieCardProps {
    title: string;
    imageUrl: string;
    imageAlt: string;
    releaseDate: string;
    genre: string;
}

export const MovieCard: React.FC<MovieCardProps> = ({
    title,
    imageUrl,
    imageAlt,
    releaseDate,
    genre
}) =>
    (
        <div className="movie-card">
            <img src={imageUrl} alt={imageAlt}/>
            <div className="card-info">
                <div className="movie-title">{title}</div>
                <div className="movie-releasedate">{releaseDate}</div>
                <div className="movie-genre">{genre}</div>
            </div>
        </div>
    );
