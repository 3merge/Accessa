import React from 'react';
import { shallow, mount } from 'enzyme';
import { Dialog } from '../../Utils';
import { renderSearchResult } from './SearchOverlay';
import SearchOverlay from '.';

describe('SearchOverlay', () => {
  describe('"renderSearchResult"', () => {
    it('should return null when paramter does not contain keys', () => {
      expect(renderSearchResult({})).toBeNull();
    });

    it('should filter object of keys without values', () => {
      const result = renderSearchResult({
        docs: [],
      });

      expect(result.props.children).toBe('No match');
    });
  });

  describe('"onSubmit"', () => {
    const searchRequest = (d) => () =>
      new Promise((resolve) => resolve(d)).then((x) => x);

    it('should throw an error for unexpected data shape', () => {
      const wrapper = mount(
        <SearchOverlay
          searchRequest={searchRequest({ docs: [] })}
        />,
      );

      const { onSubmit } = wrapper
        .find(Dialog)
        .props()
        .children().props.children[0].props;

      expect(onSubmit()).toBeNull();
    });

    it.todo('should call onSubmitCallback when provided');
  });
});
