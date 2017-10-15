import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const Container = Styled.div`
  display: block;
  width: 154px;
`;

const Image = Styled.img`
  background: red;
  height: 231px;
  width: 154px;
`;

const MovieName = Styled.h1`
  color #63676f;
  font-size: 1rem;
  font-weight: 300;
  margin: 10px 0 0;
  text-transform: uppercase;
`;

const MovieReleaseDate = Styled.h4`
  color: #ed0005;
  font-size: 0.8rem;
  font-weight: 600;
  margin: 0;
`;

const MovieThumbnail = ({ title, poster_path, release_date }) => (
  <Container>
    <Image src={`https://image.tmdb.org/t/p/w154${poster_path}`} />
    <MovieName>{ title }</MovieName>
    <MovieReleaseDate>({ release_date })</MovieReleaseDate>
  </Container>
);

MovieThumbnail.propTypes = {
  poster_path: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MovieThumbnail;
