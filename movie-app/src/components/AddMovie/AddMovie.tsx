import React from 'react';
import styled from 'styled-components';

interface AddMovieProps {
    text: string;
}

const AddMovieBtn = styled.button`
  color: #F65261;
  font-weight: 600;
  font-size: 20px;
  padding: 12px 20px;
  background-color: #FFFFFF;
  opacity: 0.6;
  position: absolute;
  right: 40px;
  top: 20px;
`;

export const AddMovie: React.FC<AddMovieProps> = ({text}) =>
    (
        <div>
            <AddMovieBtn className="btn">{text}</AddMovieBtn>
        </div>
    );
