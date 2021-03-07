import React from 'react';

interface SearchMovieProps {
    heading: string;
    placeholder: string;
    cta: string;
}

export const SearchMovie: React.FC<SearchMovieProps> = ({heading, placeholder, cta}) =>
    (
        <div className="search-container">
            <div className="heading">{heading}</div>
            <input className="search-bar" placeholder={placeholder}/>
            <button className="btn search-movie-btn">{cta}</button>
        </div>
    );
