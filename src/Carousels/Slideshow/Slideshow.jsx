import React from 'react';
import PropTypes from 'prop-types';
import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext,
  CarouselContext,
} from 'pure-react-carousel';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import MobileStepper from '@material-ui/core/MobileStepper';
import get from 'lodash.get';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(() => ({
  root: {
    '& ul': {
      display: 'flex !important',
    },
  },
}));

const SlideshowStepper = () => {
  const carouselContext = React.useContext(CarouselContext);
  const { subscribe, unsubscribe } = carouselContext;

  const getActiveStep = () =>
    get(carouselContext, 'state.currentSlide', 0);

  const getSteps = () =>
    get(carouselContext, 'state.totalSlides', 0) -
    get(carouselContext, 'state.visibleSlides', 0) +
    1;

  const [
    { activeStep, steps },
    setCurrent,
  ] = React.useState({
    activeStep: getActiveStep(),
    steps: getSteps(),
  });

  React.useEffect(() => {
    function onChange() {
      setCurrent({
        activeStep: getActiveStep(),
        steps: getSteps(),
      });
    }

    subscribe(onChange);
    return () => unsubscribe(onChange);
  }, [carouselContext]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      textAlign="center"
    >
      <MobileStepper
        activeStep={activeStep}
        steps={steps}
        position="static"
        variant="dots"
      />
    </Box>
  );
};

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
