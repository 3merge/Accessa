import React from 'react';
import {
  CarouselProvider,
  Slider,
} from 'pure-react-carousel';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LadderSlide from '../LadderSlide';
import withSlideCount from '../withSlideCount';
import SlideshowBack from '../SlideshowBack';
import SlideshowNext from '../SlideshowNext';
import useStyle from './useStyle';

export default withSlideCount(
  ({ data, visibleSlides, ...rest }) => {
    const theme = useTheme();
    const isBreakpoint = useMediaQuery(
      theme.breakpoints.down('md'),
    );

    const cls = useStyle();

    return (
      <Box className={cls.root}>
        <CarouselProvider
          naturalSlideHeight="12rem"
          visibleSlides={visibleSlides}
          orientation={
            isBreakpoint ? 'horizontal' : 'vertical'
          }
          {...rest}
        >
          <Grid className={cls.stack} container>
            <SlideshowBack className={cls.back} />
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
            <SlideshowNext className={cls.next} />
          </Grid>
        </CarouselProvider>
      </Box>
    );
  },
);
