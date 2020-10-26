import React from 'react';
import { CarouselContext } from 'pure-react-carousel';
import get from 'lodash.get';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';

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
      component="ol"
      display="flex"
      justifyContent="center"
      textAlign="center"
      m={0}
      p={0}
      style={{
        listStyle: 'none',
      }}
    >
      {Array.from({ length: steps }).map((_, index) => (
        <Box
          color={
            index === activeStep
              ? 'primary.main'
              : undefined
          }
          component="li"
          key={index}
        >
          <IconButton
            color="inherit"
            aria-label={`Jump to slide ${index}`}
            tabIndex={0}
            onClick={() =>
              carouselContext.setStoreState({
                currentSlide: index,
              })
            }
            size="small"
          >
            <FiberManualRecordIcon
              style={{
                height: 14,
                width: 14,
              }}
            />
          </IconButton>
        </Box>
      ))}
    </Box>
  );
};

export default SlideshowStepper;
