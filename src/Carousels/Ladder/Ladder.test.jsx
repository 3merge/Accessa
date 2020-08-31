import React from 'react';
import { CarouselProvider } from 'pure-react-carousel';
import { shallow } from 'enzyme';
import useWindowResize from '@material-ui/core/useMediaQuery';
import Ladder from './Ladder';
import carousel from '../../../cypress/fixtures/carousels.json';

jest.mock('@material-ui/core/useMediaQuery', () =>
  jest.fn(),
);

const checkCarouselProviderOrientation = (
  expectedOrientationValue,
) =>
  expect(
    shallow(<Ladder data={carousel} />)
      .dive()
      .find(CarouselProvider)
      .props(),
  ).toHaveProperty('orientation', expectedOrientationValue);

describe('Ladder', () => {
  it('should render the Carousel provider as horizontal in mobile environments', () => {
    useWindowResize.mockReturnValue(true);
    checkCarouselProviderOrientation('horizontal');
  });

  it('should render the Carousel provider as vertical in desktop environments', () => {
    useWindowResize.mockReturnValue(false);
    checkCarouselProviderOrientation('vertical');
  });
});
