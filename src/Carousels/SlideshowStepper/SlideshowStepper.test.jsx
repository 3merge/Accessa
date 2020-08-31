import React from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import { shallow } from 'enzyme';
import SlideshowStepper from './SlideshowStepper';

const onChange = jest.fn();

const context = {
  subscribe: (f) => f(),
  unsubscribe: jest.fn(),
  state: {
    totalSlides: 10,
    currentSlide: 5,
    visibleSlides: 2,
  },
};

describe('SlideshowStepper', () => {
  const carouselContext = jest
    .spyOn(React, 'useContext')
    .mockReturnValue(context);

  it('should subtract number of visible slides by total slides for paginating slideshows with multiple slides per view', () => {
    const wrapper = shallow(<SlideshowStepper />);
    const steps = wrapper.find(MobileStepper).prop('steps');
    expect(steps).toBe(9);
  });

  it('should get active slide number and forward into the Stepper component', () => {
    const wrapper = shallow(<SlideshowStepper />);
    const activeStep = wrapper
      .find(MobileStepper)
      .prop('activeStep');
    expect(activeStep).toBe(context.state.currentSlide);
  });

  it("should call onChange when the context's subscribe function is invoked", () => {
    context.subscribe(onChange);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
