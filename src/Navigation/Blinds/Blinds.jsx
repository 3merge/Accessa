import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid } from '@material-ui/core';
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
        {items.map((x) => (
          <DropdownNavigation
            key={x.main}
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
      main: PropTypes.string.isRequired,
      path: PropTypes.string,
      subitems: PropTypes.arrayOf(
        PropTypes.shape({
          sub: PropTypes.string.isRequired,
          path: PropTypes.string.isRequired,
        }),
      ),
    }),
  ).isRequired,
};

export default Blinds;
