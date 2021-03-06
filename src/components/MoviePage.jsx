import React, { Component } from 'react';
import Styled from 'styled-components';

import BasePage from './BasePage'

const MovieContainer = Styled.section`
  width: 750px;
  float: left;
  display: inline-block; 
`;

const SideRecommendedMovies = Styled.section`
  width: 255px;
  float: right;
  display: inline-block;
`;

const MovieTitle = Styled.h1`
  background: #31353d;
  color: #fff;
  padding: 1rem;
  font-size: 1rem;
  text-transform: uppercase;
`;

const MovieImage = Styled.img`
  width: 100%;
`;

const RecommendationTitle = Styled.h1`
  background: #ed0105;
  color: #fff;
  padding: 1rem;
  font-size: 1rem;
  text-transform: uppercase;
`;

const MovieRecommendations = ({ movies }) => (
  <SideRecommendedMovies>
    <RecommendationTitle>Recommendations</RecommendationTitle>
    <ul>
      { movies && movies.map(({ id, title }) => (
        <li key={ id }>
          <a href={ `/movie/${id}` }>{id} - { title }</a>
        </li>
      )) }
    </ul>
  </SideRecommendedMovies>
);

class MoviePage extends Component {
  componentDidMount() {
    this.props.fetchMovieDetails(this.props.match.params.id);
  }

  render () {
    const { movieDetails, movieRecommendations } = this.props;
    const {
      backdrop_path,
      overview,
      popularity,
      // poster_path,
      production_companies,
      release_date,
      // revenue,
      // budget,
      // runtime,
      // vote_average,
      // vote_count,
      title,
      // imdb_id,
      homepage,
      genres
    } = movieDetails.details;
    console.log(this.props);
    return (
      <BasePage>
        <MovieContainer>
          <MovieTitle>{ title }</MovieTitle>
          <MovieImage src={ `https://image.tmdb.org/t/p/w780${backdrop_path}` } />
          <p>{ overview }</p>

          <h1>Details</h1>
          <hr/>
          <h3>Release Date</h3>
          <p>{ release_date }</p>
          <h3>Homepage</h3>
          <p><a href={ homepage }>{ homepage }</a></p>
          <h3>Genres</h3>
          <ul>
            { genres && genres.map(({ id, name}) => <li key={ id }>{ name }</li>)}
          </ul>
          <h3>Production Companies</h3>
          <ul>
            { production_companies && production_companies.map(({ id, name}) => <li key={ id }>{ name }</li>)}
          </ul>
          <h3>Popularity</h3>
          <p>{ popularity }</p>
        </MovieContainer>
        <MovieRecommendations movies={ movieRecommendations.movies } />
      </BasePage>
    );
  }
}

export default MoviePage;
