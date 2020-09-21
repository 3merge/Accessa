import { addLeadingZero } from './helpers';

describe('Legend', () => {
  describe('"addLeadingZero "', () => {
    it('should add leading zero', () =>
      expect(addLeadingZero(0)).toMatch('01'));

    it('should not add leading zero', () =>
      expect(addLeadingZero(10)).toMatch('11'));
  });
});
