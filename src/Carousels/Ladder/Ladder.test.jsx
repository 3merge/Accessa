import React from 'react';
import { CarouselProvider } from 'pure-react-carousel';
import { shallow } from 'enzyme';
import Ladder from './Ladder';
import useWindowResize from '../../Utils/useWindowResize';

jest.mock('../../Utils/useWindowResize', () => jest.fn());

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
    data: [],
  });

  expect(orientation).toBe(expectedOrientationValue);
};

const checkCarouselProviderMinSlides = (
  isMobile,
  expectedNum,
) => {
  const data = [];
  for (let i = 0; i < 10; i += 1)
    data.push({
      title: String(i),
      img: 'https://google.ca',
    });

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

  it.todo('should render the component with bad data');

  it.todo(
    'should not this slider component without slides',
  );

  it.todo(
    'should enable drag if the number of slides exceeds the number of visible',
  );
});
