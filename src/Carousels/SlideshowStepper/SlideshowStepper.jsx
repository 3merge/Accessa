import React from 'react';
import { CarouselContext } from 'pure-react-carousel';
import Box from '@material-ui/core/Box';
import MobileStepper from '@material-ui/core/MobileStepper';
import get from 'lodash.get';

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

export default SlideshowStepper;
