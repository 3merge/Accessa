import React from 'react';
import {
  CarouselProvider,
  Slider,
} from 'pure-react-carousel';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import SlideshowStepper from '../SlideshowStepper';
import useStyle from './useStyle';
import withSlideCount from '../withSlideCount';
import SlideshowNext from '../SlideshowNext';
import SlideshowBack from '../SlideshowBack';
import SlideshowSlide from '../SlideshowSlide';

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
              <Slider
                role={undefined}
                trayProps={{
                  role: 'listbox',
                  'aria-label':
                    'Carousel listbox container',
                }}
                style={{
                  overflow: 'hidden',
                }}
              >
                {data.map((item, index) => (
                  <SlideshowSlide
                    {...item}
                    {...rest}
                    index={index}
                    width={width}
                  >
                    <Slide
                      currentSlide={index}
                      {...item}
                      {...rest}
                    />
                  </SlideshowSlide>
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
