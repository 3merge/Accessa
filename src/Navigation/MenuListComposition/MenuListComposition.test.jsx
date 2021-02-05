import React from 'react';
import { shallow } from 'enzyme';
import { hasNestItem } from './MenuListComposition';
import Dropdown from './Dropdown';
import { columns } from '../../../cypress/fixtures/footer';
import useStyles from './useStyles';

jest.mock('./useStyles', () =>
  jest.fn(() => ({
    wrapper: '',
  })),
);

beforeEach(() => {
  useStyles.mockClear();
});

const itemWithoutNestedItems = columns[0];
const itemWith9NestedItems = columns[1];
const itemWith3NestedItems = columns[2];

const renderDropdown = (item, maxDepth, maxColumns) =>
  shallow(
    <Dropdown
      item={item}
      maxDepth={maxDepth}
      maxColumns={maxColumns}
    />,
  );

test.each([
  [itemWithoutNestedItems, false],
  [itemWith9NestedItems, true],
  [{}, false],
])(
  'should determine if nested items exist',
  (item, expectation) => {
    expect(hasNestItem(item)).toBe(expectation);
  },
);

test('should render a single column', () => {
  renderDropdown(itemWith9NestedItems, 1, 1);

  expect(useStyles).toHaveBeenCalledWith({
    isMultiColumns: true,
    columns: 1,
    rows: itemWith9NestedItems.items.length,
  });
});

test('should render a single column when item length is less than "maxDepth"', () => {
  renderDropdown(itemWith3NestedItems, 5, 2);
  expect(useStyles).toHaveBeenCalledWith(
    expect.objectContaining({
      isMultiColumns: false,
    }),
  );
});

test('should render 3 columns', () => {
  renderDropdown(itemWith3NestedItems, 1, 3);

  expect(useStyles).toHaveBeenCalledWith({
    isMultiColumns: true,
    columns: 3,
    rows: 1,
  });
});
