import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Grid } from '@material-ui/core';
import { GetApp } from '@material-ui/icons';
import { renderListSafely } from '../../Hocs';
import useStyles from './useStyles';

export const Downloads = ({ lists, gridItem }) => {
  const { wrapper, title, size, icon } = useStyles();

  return (
    <Grid container component="ul" spacing={4}>
      {lists
        .filter((item) => item.path && item.contentType)
        .map((list, i) => (
          <Grid
            key={list.path.concat(i)}
            container
            item
            component="li"
            {...gridItem}
          >
            <Grid
              container
              item
              key={list.title}
              justify="space-between"
              alignItems="center"
              spacing={2}
              className={wrapper}
            >
              <Grid item>
                <span className={title}>{list.title}</span>
                <span className={size}>
                  {list.size
                    ? list.contentType.concat(
                        ' ',
                        list.size,
                      )
                    : list.contentType}
                </span>
              </Grid>
              <Grid item>
                <IconButton
                  aria-label="Download file"
                  component="a"
                  download
                  href={list.path}
                >
                  <GetApp className={icon} />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        ))}
    </Grid>
  );
};

Downloads.defaultProps = {
  gridItem: {},
};

Downloads.propTypes = {
  /**
   * The list attribute is type-checked via `renderListSafely` HOC.
   */
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      size: PropTypes.number,
      contentType: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,

  /**
   * Used to customize the width of each download. This matches MUI's underlying grid item props.
   */
  gridItem: PropTypes.shape({
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
  }),
};

export default renderListSafely(Downloads);
