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
}) => {
  const attrs = useLinkAttributes({
    title,
    ...rest,
  });

  return (
    <Box
      index={index}
      display="inline-block"
      height="auto"
      width={`${width}%`}
      component={PureSlide}
      {...attrs}
    >
      {React.cloneElement(children, {
        elementId: attrs['aria-labelledby'],
      })}
    </Box>
  );
};

SlideshowSlide.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default SlideshowSlide;
