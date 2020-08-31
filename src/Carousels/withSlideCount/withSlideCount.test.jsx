import React from 'react';
import { shallow } from 'enzyme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import withSlideCount from './withSlideCount';

jest.mock('@material-ui/core/useMediaQuery', () =>
  jest.fn(),
);

const generateSlideData = (num = 10) => {
  return new Array(num).fill({
    title: 'title',
    img: 'https://google.ca',
    alt: 'alt text',
  });
};

const renderInnerComponent = (isMobile, providerProps) => {
  useMediaQuery.mockReturnValue(isMobile);
  const El = () => null;
  const Comp = withSlideCount(El);

  return shallow(<Comp {...providerProps} />)
    .find(El)
    .props();
};

const checkMinSlides = (isMobile, expectedNum) => {
  const data = generateSlideData();
  const { visibleSlides } = renderInnerComponent(isMobile, {
    data,
  });

  expect(visibleSlides).toBe(expectedNum);
};

describe('Ladder', () => {
  it('should render 2 slides in mobile environments', () =>
    checkMinSlides(true, 2));

  it('should render 3 slides in desktop environments', () =>
    checkMinSlides(false, 3));

  it('should enable drag if the number of slides exceeds the number of visible', () => {
    const { dragEnabled } = renderInnerComponent(true, {
      data: generateSlideData(),
    });
    expect(dragEnabled).toBe(true);
  });

  it('should not enable drag if the number of slides does not exceed the number of visible', () => {
    const { dragEnabled } = renderInnerComponent(true, {
      data: generateSlideData(2),
    });

    expect(dragEnabled).toBe(false);
  });
});
