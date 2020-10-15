import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemWrapper from '../ListItemWrapper';
import useStyles from '../useStyles';
import { renderListSafely } from '../../Hocs';

export const Archer = ({ subheader, underline, lists }) => {
  const classes = useStyles({
    underline,
  });

  return (
    <List
      className={classes.root}
      subheader={
        subheader ? (
          <ListSubheader
            color="inherit"
            className={classes.root}
            component="li"
          >
            {subheader}
          </ListSubheader>
        ) : null
      }
    >
      <ListItemWrapper
        lists={lists}
        underline={underline}
      />
    </List>
  );
};

Archer.defaultProps = {
  underline: false,
  subheader: '',
  lists: [],
};

Archer.propTypes = {
  underline: PropTypes.bool,
  subheader: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  lists: PropTypes.array,
};

export default renderListSafely(Archer);
