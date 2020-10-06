import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Grid } from '@material-ui/core';
import { GetApp } from '@material-ui/icons';
import { renderListSafely } from '../../Hocs';
import useStyles from './useStyles';

const Downloads = ({ lists }) => {
  const { title, size } = useStyles();
  return (
    <Grid container component="ul">
      {lists.map((list) => (
        <Grid
          item
          container
          key={list.title}
          component="li"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <span className={[title]}>{list.title}</span>
            <span>{list.size}</span>
          </Grid>
          <Grid item>
            <a href={list.path} download={list.file}>
              <IconButton aria-label="download">
                <GetApp />
              </IconButton>
            </a>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
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
};

export default renderListSafely(Downloads);
