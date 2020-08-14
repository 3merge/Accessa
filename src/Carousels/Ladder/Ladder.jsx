import React from 'react';
import PropTypes from 'prop-types';
import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import LadderSlide from '../LadderSlide';
import useWindowResize from '../../Utils/useWindowResize';

const Button = css`
  background-color: transparent;
  border: 0;
  box-sizing: border-box;
  display: inline-block;
  font-size: 2.5rem;
  height: 145px;
  left: 50%;
  padding: 0;
  transform: rotate(90deg) translateX(-50%);
  width: auto;

  ${media.lessThan('large')`
    height: auto;
    transform: translateY(-80%);
  `}

  &[disabled] {
    cursor: not-allowed;
  }
`;

const Container = styled.div`
  align-self: center;
  box-sizing: border-box;
  height: auto;
  margin: 0 2rem;
  padding: 5rem 0;
  position: relative;
  width: 145px;

  ${media.lessThan('large')`
    height: 10rem;
    padding: 2rem 3rem;
    width: 100%;
  `}
`;

const Back = styled(ButtonBack)`
  ${Button};
  position: absolute;
  top: -3rem;
  ${media.lessThan('large')`
    left: 1rem;
    top: 50%;
  `}
`;

const Next = styled(ButtonNext)`
  ${Button};
  bottom: -3rem;
  position: absolute;

  ${media.lessThan('large')`
    bottom: auto;
    left: auto;
    right: 1rem;
    top: 50%;
  `}
`;

const Ladder = ({ data, visibleSlides, ...rest }) => {
  const isDataValid = Array.isArray(data) && data.length;
  if (!isDataValid) return null;

  const responsive = useWindowResize('lessThan', 'large');
  const mobile = useWindowResize(
    'between',
    'large',
    'medium',
  );

  const len = data.length;
  const numOfSlides = Math.min(
    mobile ? visibleSlides.mobile : visibleSlides.desktop,
    len,
  );

  return (
    <Container>
      <CarouselProvider
        visibleSlides={numOfSlides}
        orientation={responsive ? 'horizontal' : 'vertical'}
        naturalSlideWidth={145}
        naturalSlideHeight={16 * 11.5}
        totalSlides={len}
        dragEnabled={len > numOfSlides}
      >
        <Back aria-label="Show previous slides">‹</Back>
        <Slider>
          {data.map((item, index) => (
            <LadderSlide
              key={index}
              currentSlide={index}
              {...item}
              {...rest}
            />
          ))}
        </Slider>
        <Next aria-label="Show next slides">›</Next>
      </CarouselProvider>
    </Container>
  );
};

Ladder.defaultProps = {
  data: [],
  visibleSlides: {
    mobile: 2,
    desktop: 3,
  },
};

Ladder.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  visibleSlides: PropTypes.shape({
    mobile: PropTypes.number,
    desktop: PropTypes.number,
  }),
};

export default Ladder;
