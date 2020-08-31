import React from 'react';
import { getListContainerWidth } from './Slideshow';

const spy = jest.fn();

const setWidth = (width) => {
  const querySelector = jest.fn().mockReturnValue({
    style: {
      width,
    },
  });

  return {
    current: {
      querySelector,
    },
  };
};

beforeAll(() => {
  jest.spyOn(React, 'useState').mockImplementation(() => {
    return [0, spy];
  });

  jest
    .spyOn(React, 'useLayoutEffect')
    .mockImplementation((fn) => fn());
}, []);

describe('Slideshow', () => {
  it("should set equal widths on each slide by dividing the number of slides by the container's width", () => {
    getListContainerWidth(setWidth(150), 5, 2);
    expect(spy).toHaveBeenLastCalledWith(30);
  });
});
