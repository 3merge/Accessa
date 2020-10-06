import React from 'react';
import { shallow } from 'enzyme';
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
      new Promise((resolve) => resolve(d))
        .then((x) => x)
        .catch((e) => {
          return e;
        });

    const getProps = (search, callback) =>
      shallow(
        <SearchOverlay
          searchRequest={search}
          onSubmitCallback={callback}
        />,
      )
        .dive()
        .find('form')
        .props();

    it('should throw an error for unexpected data shape', () => {
      const { onSubmit } = getProps(
        searchRequest({ data: {} }),
      );

      return expect(onSubmit()).resolves.toBeDefined();
    });

    it('should call onSubmitCallback when provided', async () => {
      const onSubmitCallback = jest.fn();
      const { onSubmit } = getProps(
        searchRequest({ docs: ['here'] }),
        onSubmitCallback,
      );

      await onSubmit();

      expect(onSubmitCallback).toHaveBeenCalledWith({
        docs: ['here'],
      });
    });
  });
});
