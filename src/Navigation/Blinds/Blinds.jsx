import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
import debounce from 'lodash.debounce';
import get from 'lodash.get';
import useStyles from './useStyles';
import DropdownNavigation from './DropdownNavigation';

export const getFromBounding = (el, attribute) =>
  get(el.getBoundingClientRect(), attribute);

const getHeight = (el) => getFromBounding(el, 'height');
const getTop = (el) => getFromBounding(el, 'top');

const Blinds = ({ items }) => {
  const [height, setHeight] = React.useState(0);
  const [restingHeight, setRestingHeight] = React.useState(
    0,
  );

  const { ul, nav, overlay } = useStyles({
    isOpen: restingHeight < height,
    height,
  });

  const init = React.useCallback((el) => {
    if (!el) return;
    const h = getHeight(el);
    setRestingHeight(h);
    setHeight(h);
  }, []);

  const onRefChange = React.useCallback(
    (node) => {
      setHeight(
        node
          ? getHeight(node) + getTop(node)
          : restingHeight,
      );
    },
    [height],
  );

  const resetDropdown = debounce(() => {
    setHeight(0);
  }, 100);

  React.useLayoutEffect(() => {
    window.addEventListener('scroll', resetDropdown);

    return () => {
      window.removeEventListener('scroll', resetDropdown);
    };
  }, []);

  return (
    <nav ref={init} className={nav}>
      <Box
        bgcolor="background.paper"
        className={overlay}
        position="fixed"
        width="100%"
      />
      <Grid
        container
        component="ul"
        className={ul}
        spacing={5}
      >
        {items.map((x, i) => (
          <DropdownNavigation
            key={
              typeof x.main === 'string'
                ? x.main.concat(i)
                : `dropdownNav${i}`
            }
            ref={onRefChange}
            item={x}
          />
        ))}
      </Grid>
    </nav>
  );
};

Blinds.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          href: PropTypes.string.isRequired,
        }),
      ),
    }),
  ).isRequired,
};

export default Blinds;
