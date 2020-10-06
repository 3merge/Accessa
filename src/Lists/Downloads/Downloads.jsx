import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Grid } from '@material-ui/core';
import { GetApp } from '@material-ui/icons';
import { renderListSafely } from '../../Hocs';
import useStyles from './useStyles';

const Downloads = ({ lists, gridItem }) => {
  const { wrapper, title, size, icon } = useStyles();
  return (
    <Grid container component="ul" spacing={4}>
      {lists.map((list) => (
        <Grid container item component="li" {...gridItem}>
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
              <span className={[title]}>{list.title}</span>
              <span className={size}>{list.size}</span>
            </Grid>
            <Grid item>
              <a href={list.path} download={list.file}>
                <IconButton aria-label="download">
                  <GetApp className={icon} />
                </IconButton>
              </a>
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
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      size: PropTypes.string,
      file: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  gridItem: PropTypes.shape({
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
  }),
};

export default renderListSafely(Downloads);
