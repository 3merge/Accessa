import { isAltAvailable } from './Field';

describe('Field', () => {
  describe('"isAltAvailable"', () => {
    const cases = [
      ['alt', true],
      ['', false],
      [{}, false],
      [[], false],
      [true, false],
    ];
    it.each(cases)(
      'should return boolean respectively',
      (val, result) => {
        expect(isAltAvailable(val)).toBe(result);
      },
    );
  });
});
