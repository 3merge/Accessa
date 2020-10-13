import React from 'react';
import { shallow } from 'enzyme';
import DropdownNavigation from './DropdownNavigation';
import Blinds from './Blinds';
import { getFromBounding } from './Blinds';
import Dropdown from './Dropdown';
import useStyles from './useStyles';

let useCallback;
let useState;

const runBoundClientMock = (
  at,
  boundClientReturnValue,
  expectedStateResult,
) => {
  const callback = jest.fn();
  useState.mockReturnValue([0, callback]);
  shallow(<Blinds items={[]} />);

  const [fn] = useCallback.mock.calls[at];

  fn({
    getBoundingClientRect: jest
      .fn()
      .mockReturnValue(boundClientReturnValue),
  });

  expect(callback).toHaveBeenCalledWith(
    expectedStateResult,
  );
};

jest.mock('./useStyles', () =>
  jest.fn(() => ({
    ul: '',
  })),
);

beforeAll(() => {
  useCallback = jest.spyOn(React, 'useCallback');
  useState = jest.spyOn(React, 'useState');
});

beforeEach(() => {
  [useStyles, useCallback, useState].forEach((item) => {
    item.mockClear();
  });
});

describe('Blinds', () => {
  it('should call useStyle as isOpen when height exceeds resting height', () => {
    // height
    useState.mockReturnValueOnce([25]);

    // resting height
    useState.mockReturnValueOnce([10]);

    shallow(<Blinds items={[]} />);
    expect(useStyles).toHaveBeenCalledWith(
      expect.objectContaining({
        isOpen: true,
      }),
    );
  });

  it('should set an initial resting and overlay height on nav ref change', () =>
    runBoundClientMock(
      0,
      {
        height: 100,
      },
      100,
    ));

  it('should change the overlay height on dropdown ref change', () =>
    runBoundClientMock(
      1,
      {
        height: 100,
        top: 10,
      },
      110,
    ));

  describe('"getFromBounding"', () => {
    it('should return a property of getBoundingClientRect', () => {
      const el = {
        getBoundingClientRect: jest
          .fn()
          .mockReturnValue({ top: 2 }),
      };
      expect(getFromBounding(el, 'top')).toBe(2);
    });
  });

  describe('"Dropdown"', () => {
    it('should render as 3 columns with 16 subitems', () => {
      shallow(<Dropdown item={{ items: new Array(16) }} />);

      expect(useStyles).toHaveBeenCalledWith(
        expect.objectContaining({
          columnCount: 3,
        }),
      );
    });
  });

  describe('"DropdownNavigation"', () => {
    it('should render dropdown when subitems present', () => {
      expect(
        shallow(
          <DropdownNavigation
            item={{ items: new Array(2) }}
          />,
        )
          .find(Dropdown)
          .exists(),
      ).toBeTruthy();
    });
  });
});
