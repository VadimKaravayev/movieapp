import styled from 'styled-components';

export const MovieCardWrapper = styled.div`
  width: 100%;
  color: #ffffff;
  font-family: sans-serif;
  justify-self: center;
  position: relative;

  img {
    width: 100%;
  }
`;

export const CardInfo = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

export const MovieTitle = styled.div`
  font-size: 20px;
  letter-spacing: 3px;
`;

export const MovieReleaseDate = styled.div`
  align-self: start;
  justify-self: end;
  border: 0.5px solid;
  padding: 5px 5px 5px 5px;
  text-align: center;
`;
