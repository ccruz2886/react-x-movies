import React, { Component } from 'react';
import Styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Container = Styled.div`
  background: #FFF;
  z-index: 1;
  opacity: 0;
  transition: opacity 1s;
  width: 100%;
  float: left;
  margin-right: -100%;
  display: flex;

  ${props => props.active && css`
    opacity: 1;
    z-index: 2;
  `}
`;

const Image = Styled.img`
  flex: 1;
`;

const DetailsContainer = Styled.div`
  flex: 1;
  padding: 10px;
`;

const Header = Styled.h1`
  font-size: 2em;
  color: #ed0105;
`;

const Details = ({ title, date, rate, overview }) => {
  return (
    <DetailsContainer>
      <Header>{ title }</Header>
      <p><b>Release: </b>{date}</p>
      <p><b>Rating: </b>{rate}</p>
      <p>{overview}</p>
    </DetailsContainer>
  )
};

class Slide extends Component {
  state = {
    loaded: false,
  }

  componentDidMount () {
    this.props.active && this.setState({ loaded: true });
  }

  componentWillReceiveProps() {
    !this.state.loaded && this.props.active && this.setState({ loaded: true });
  }

  render () {
    const { active, title, image, preLoad, overview, release, rate } = this.props;
    const { loaded } = this.state;

    return (
      <Container active={active}>
        {(loaded || active || preLoad)
        && [
          <Image key="slide-image" src={`https://image.tmdb.org/t/p/w780/${image}`} alt={title} />,
          <Details key="slide-details" title={title} date={release} rate={rate} overview={overview}/>
        ]
        }
      </Container>
    )
  }
}

Slide.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  preLoad: PropTypes.bool.isRequired,
};

export default Slide;
