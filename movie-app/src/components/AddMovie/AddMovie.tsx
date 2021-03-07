import React from 'react';
import styles from './AddMovie.module.scss';
import cl from 'classnames';

interface AddMovieProps {
    text: string;
}

export const AddMovie: React.FC<AddMovieProps> = ({text}) =>
    (
        <div>
            <button className={cl('btn', styles.addMovieBtn)}>{text}</button>
        </div>
    );
