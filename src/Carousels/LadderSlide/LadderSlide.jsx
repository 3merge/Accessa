import React from 'react';
import PropTypes from 'prop-types';
import { Slide } from 'pure-react-carousel';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import Image from 'gatsby-image';
import useLinkAttributes from '../useLinkAttributes';

const LINK = 'link';

const ImageContainer = styled.div`
  display: block;
  height: 8rem;
  position: relative;
  width: 100%;
`;

const ImageText = styled.span`
  display: -webkit-box;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1;
  margin: 0.5rem 0 1rem;
  max-height: 2rem;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  ${media.lessThan('large')`
    margin-bottom: 0;
  `}

  ${media.lessThan('medium')`
    max-height: none;
  `}
`;

const SlideWrapper = styled(Slide)`
  height: 12rem;

  ${({ role }) =>
    role === LINK
      ? css`
          cursor: pointer;
          span {
            text-decoration: underline;
          }
        `
      : undefined}
`;

const SlideContent = styled.article`
  overflow: hidden;
  padding: 0 0 1rem;
  margin: 0;

  ${media.lessThan('large')`
    padding-bottom: 0;
  `}
`;

const LadderSlide = ({ currentSlide, title, ...rest }) => {
  const attrs = useLinkAttributes({
    title,
    ...rest,
  });

  return (
    <SlideWrapper index={currentSlide} {...attrs}>
      <SlideContent>
        <ImageContainer>
          <Image {...rest} />
        </ImageContainer>
        <ImageText id={attrs['aria-labelledby']}>
          {title}
        </ImageText>
      </SlideContent>
    </SlideWrapper>
  );
};

LadderSlide.propTypes = {
  currentSlide: PropTypes.number.isRequired,
  fluid: PropTypes.shape({
    src: PropTypes.string,
  }).isRequired,
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
  redirect: PropTypes.func,
  alt: PropTypes.string.isRequired,
  style: PropTypes.shape({
    height: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    width: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  }),
};

LadderSlide.defaultProps = {
  href: '',
  redirect: undefined,
  style: {
    height: '100%',
    width: '100%',
  },
};

export default LadderSlide;
