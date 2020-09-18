import { generateLeading } from './helpers';

describe('Legend', () => {
  describe('"generateLeading"', () => {
    it('should add leading zero', () =>
      expect(generateLeading(0)).toMatch('01'));

    it('should not add leading zero', () =>
      expect(generateLeading(10)).toMatch('11'));
  });
});
