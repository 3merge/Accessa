import React from 'react';
import PropTypes from 'prop-types';
import { Slide as PureSlide } from 'pure-react-carousel';
import Box from '@material-ui/core/Box';
import useLinkAttributes from '../useLinkAttributes';

const SlideshowSlide = ({
  children,
  index,
  title,
  width,
  ...rest
}) => (
  <Box
    index={index}
    display="inline-block"
    height="auto"
    width={`${width}%`}
    component={PureSlide}
    {...useLinkAttributes({
      title,
      ...rest,
    })}
  >
    {children}
  </Box>
);

SlideshowSlide.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default SlideshowSlide;
