import { hasNestItem } from './MenuListComposition';
import { columns } from '../../../cypress/fixtures/footer';

test.each([
  [columns[0], false],
  [columns[1], true],
  [{}, false],
])(
  'should determine if nested items exist',
  (item, expectation) => {
    expect(hasNestItem(item)).toBe(expectation);
  },
);
