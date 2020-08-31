import React from 'react';
import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import LadderSlide from '../LadderSlide';
import withSlideCount from '../withSlideCount';

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
    padding: 2rem 3rem;
    min-width: calc(100%  - 6rem);
    width: 100%;
  `}

  ${media.lessThan('medium')`
    margin: 1rem 0;
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

export default withSlideCount(
  ({ data, visibleSlides, ...rest }) => {
    const isBreakpoint = useMediaQuery('(max-width:600px)');

    return (
      <Container>
        <CarouselProvider
          visibleSlides={visibleSlides}
          orientation={
            isBreakpoint ? 'horizontal' : 'vertical'
          }
          naturalSlideWidth={145}
          naturalSlideHeight={16 * 11.5}
          {...rest}
        >
          <Back aria-label="Show previous slides">‹</Back>
          <Slider aria-label="Slider container">
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
  },
);
