import React from 'react';
import {
  CarouselProvider,
  Slider,
} from 'pure-react-carousel';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import SlideshowStepper from '../SlideshowStepper';
import useStyle from './useStyle';
import withSlideCount from '../withSlideCount';
import SlideshowNext from '../SlideshowNext';
import SlideshowBack from '../SlideshowBack';

export const getListContainerWidth = (
  innerRef,
  numberOfSlides,
  numberOfVisibleSlides,
) => {
  const [width, setWidth] = React.useState(0);

  React.useLayoutEffect(() => {
    let num = 0;
    try {
      num =
        parseFloat(
          innerRef.current.querySelector('ul').style.width,
        ) / numberOfSlides;
    } catch (e) {
      num = 100 / numberOfSlides;
    }

    setWidth(num);
  }, [numberOfVisibleSlides]);

  return width;
};

export default withSlideCount(
  ({ data, visibleSlides, component: Slide, ...rest }) => {
    const ref = React.useRef();
    const width = getListContainerWidth(
      ref,
      data.length,
      visibleSlides,
    );

    const cls = useStyle();

    return (
      <Container maxWidth="xl">
        <CarouselProvider
          visibleSlides={visibleSlides}
          {...rest}
        >
          <Grid alignItems="center" container>
            <SlideshowBack />
            <Grid
              className={cls.root}
              ref={ref}
              item
              xs
              zeroMinWidth
            >
              <Slider aria-label="Slider container">
                {data.map((item, index) => (
                  <Box
                    display="inline-block"
                    height="auto"
                    width={`${width}%`}
                  >
                    <Slide
                      key={index}
                      currentSlide={index}
                      {...item}
                      {...rest}
                    />
                  </Box>
                ))}
              </Slider>
            </Grid>
            <SlideshowNext />
          </Grid>
          <Grid xs={12}>
            <SlideshowStepper />
          </Grid>
        </CarouselProvider>
      </Container>
    );
  },
);
