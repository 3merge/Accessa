import React from 'react';
import { mount } from 'enzyme';
import { Slide } from 'pure-react-carousel';
import LadderSlide from './LadderSlide';

jest.mock('pure-react-carousel', () => {
  const setStoreState = jest.fn();

  return {
    Slide: jest.fn().mockImplementation(({ children }) => {
      return children;
    }),
    WithStore: jest
      .fn()
      .mockImplementation((Component) => (props) => (
        <Component
          carouselStore={{
            setStoreState,
            getStoreState: jest.fn().mockReturnValue({
              totalSlides: 5,
              visibleSlides: 3,
            }),
          }}
          {...props}
        />
      )),
  };
});

jest.mock('../../Utils/Image', () =>
  jest.fn().mockImplementation(() => <div />),
);

const genSlide = (props) => {
  const el = mount(<LadderSlide {...props} />).find(Slide);
  expect(el.exists()).toBeTruthy();

  el.expectTabIndex = (expectedValue) =>
    expect(el.props()).toHaveProperty(
      'tabIndex',
      expectedValue,
    );

  return el;
};

describe('LadderSlide', () => {
  it('should not control the tab index', () =>
    genSlide().expectTabIndex(null));

  it('should control the tab index', () =>
    genSlide({
      href: 'https://google.ca',
    }).expectTabIndex(-1));

  it('should render custom component', () => {
    const id = 'test';

    // eslint-disable-next-line
    const Test = ({ children }) => (
      <div id={id}>{children}</div>
    );

    expect(
      mount(<LadderSlide linkComponent={Test} />)
        .find(`#${id}`)
        .exists(),
    ).toBeTruthy();
  });
});
