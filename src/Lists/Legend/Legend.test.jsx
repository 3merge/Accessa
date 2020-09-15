import { addLeadingZero } from './Legend';

describe('Legend', () => {
  describe('"addLeadingZero"', () => {
    it('should add leading zero', () =>
      expect(addLeadingZero(1)).toMatch('01'));

    it('should not add leading zero', () =>
      expect(addLeadingZero(11)).toMatch('11'));
  });
});
