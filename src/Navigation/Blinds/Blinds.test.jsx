import React from 'react';
import { shallow, mount } from 'enzyme';
import { Box } from '@material-ui/core';
import Blinds from './Blinds';
import { getFromBounding } from './Blinds';
import Dropdown from './Dropdown';
import useStyles from './useStyles';
import items from '../../../cypress/fixtures/blinds.json';

describe('Blinds', () => {
  it.todo(
    'should call useStyle as isOpen when height exceeds resting height',
  );

  it.todo(
    'should should an initial resting and overlay height on nav ref change',
  );

  it.todo(
    'should change the overlay height on dropdown ref change',
  );

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
    it.todo('should render as 3 columns with 16 subitems');
  });

  describe('"DropdownNavigation"', () => {
    it('should render dropdown when subitems present', () => {});
  });
});
