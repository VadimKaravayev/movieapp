import React from 'react';
import { ThreeDotsIcon } from '../ThreeDotsIcon/ThreeDotsIcon';

import {
  MovieCardWrapper,
  CardInfo,
  MovieTitle,
  MovieReleaseDate
} from './styled/MovieCard.styled';

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
}) => (
  <MovieCardWrapper>
    <img src={imageUrl} alt={imageAlt} />
    <CardInfo>
      <MovieTitle>{title}</MovieTitle>
      <MovieReleaseDate>{releaseDate}</MovieReleaseDate>
      <div>{genre}</div>
    </CardInfo>
    <ThreeDotsIcon />
  </MovieCardWrapper>
);
