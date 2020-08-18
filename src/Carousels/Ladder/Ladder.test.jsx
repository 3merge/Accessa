import React from 'react';
import { CarouselProvider } from 'pure-react-carousel';
import { shallow } from 'enzyme';
import Ladder from './Ladder';
import useWindowResize from '../../Utils/useWindowResize';

jest.mock('../../Utils/useWindowResize', () => jest.fn());

const generateSlideData = (num = 10) => {
  return new Array(num).fill({
    title: 'title',
    img: 'https://google.ca',
    alt: 'alt text',
  });
};

const renderCarouselProviderInResponsiveEnv = (
  isMobile,
  providerProps,
) => {
  useWindowResize.mockReturnValue(isMobile);
  return shallow(<Ladder {...providerProps} />)
    .find(CarouselProvider)
    .props();
};

const checkCarouselProviderOrientation = (
  isMobile,
  expectedOrientationValue,
) => {
  const {
    orientation,
  } = renderCarouselProviderInResponsiveEnv(isMobile, {
    data: generateSlideData(),
  });

  expect(orientation).toBe(expectedOrientationValue);
};

const checkCarouselProviderMinSlides = (
  isMobile,
  expectedNum,
) => {
  const data = generateSlideData();
  const {
    visibleSlides,
  } = renderCarouselProviderInResponsiveEnv(isMobile, {
    data,
  });

  expect(visibleSlides).toBe(expectedNum);
};

describe('Ladder', () => {
  it('should render the Carousel provider as horizontal in mobile environments', () =>
    checkCarouselProviderOrientation(true, 'horizontal'));

  it('should render the Carousel provider as vertical in desktop environments', () =>
    checkCarouselProviderOrientation(false, 'vertical'));

  it('should render 2 slides in mobile environments', () =>
    checkCarouselProviderMinSlides(true, 2));

  it('should render 3 slides in desktop environments', () =>
    checkCarouselProviderMinSlides(false, 3));

  it('should enable drag if the number of slides exceeds the number of visible', () => {
    const {
      dragEnabled,
    } = renderCarouselProviderInResponsiveEnv(true, {
      data: generateSlideData(),
    });
    expect(dragEnabled).toBe(true);
  });

  it('should not enable drag if the number of slides does not exceed the number of visible', () => {
    const {
      dragEnabled,
    } = renderCarouselProviderInResponsiveEnv(true, {
      data: generateSlideData(2),
    });
    expect(dragEnabled).toBe(false);
  });

  it('should not render the component with bad data', () => {
    const result = Ladder({ data: 'Not valid data' });
    expect(result).toBeNull();
  });
});
