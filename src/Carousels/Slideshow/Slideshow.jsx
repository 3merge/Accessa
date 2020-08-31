import React from 'react';
import PropTypes from 'prop-types';
import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SlideshowStepper from '../SlideshowStepper';
import useStyle from './useStyle';

const Slideshow = ({
  data,
  visibleSlides,
  component: Slide,
  ...rest
}) => {
  const isDataValid = Array.isArray(data) && data.length;
  if (!isDataValid) return null;

  const ref = React.useRef();
  const mobile = useMediaQuery('(max-width:600px)');
  const [width, setWidth] = React.useState(0);
  const cls = useStyle();

  const len = data.length;

  // this also exists and is tested in Ladder
  // maybe we can abstract out to reduce redundancy?
  // might also give us a set of tests already written to work with
  const numOfSlides = Math.min(
    mobile ? visibleSlides.mobile : visibleSlides.desktop,
    len,
  );

  React.useLayoutEffect(() => {
    let num = 0;
    try {
      num =
        parseFloat(
          ref.current.querySelector('ul').style.width,
        ) / len;
    } catch (e) {
      num = 100 / len;
    }

    setWidth(num);
  }, [numOfSlides]);

  return (
    <Container maxWidth="xl">
      <CarouselProvider
        visibleSlides={numOfSlides}
        dragEnabled={len > numOfSlides}
        totalSlides={len}
      >
        <Grid alignItems="center" container>
          <Grid item>
            <IconButton size="small" component={ButtonBack}>
              <NavigateBeforeIcon />
            </IconButton>
          </Grid>
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
          <Grid item>
            <IconButton size="small" component={ButtonNext}>
              <NavigateNextIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid xs={12}>
          <SlideshowStepper />
        </Grid>
      </CarouselProvider>
    </Container>
  );
};

Slideshow.defaultProps = {
  data: [],
  visibleSlides: {
    mobile: 2,
    desktop: 3,
  },
};

Slideshow.propTypes = {
  component: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  visibleSlides: PropTypes.shape({
    mobile: PropTypes.number,
    desktop: PropTypes.number,
  }),
};

export default Slideshow;
