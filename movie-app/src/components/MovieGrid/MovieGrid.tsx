import React from 'react';
import { movies } from '../../dummyData'
import { MovieCard } from "../MovieCard/MovieCard";

export const MovieGrid: React.FC<any> = () => {
    const found = movies?.length || 0;
    return(
        <>
            <div className="found-movies-info"><span>{found}</span> movies found</div>
            <div className="movies-grid">
                {movies.map(({
                     title,
                     imageUrl,
                     imageAlt,
                     releaseDate,
                     genre
                }) => (<MovieCard
                        key={title}
                        title={title}
                        imageUrl={imageUrl}
                        imageAlt={imageAlt}
                        releaseDate={releaseDate}
                        genre={genre} />))}
            </div>
        </>
    );
};
