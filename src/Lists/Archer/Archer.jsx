import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemWrapper from '../ListItemWrapper';
import useStyles from '../useStyles';
import { renderListSafely } from '../../Hocs';

export const Archer = ({
  subheader,
  subheaderComponent,
  underline,
  lists,
}) => {
  const classes = useStyles({
    underline,
  });

  const HeadingLevel = (props) =>
    React.createElement(subheaderComponent, props);

  return (
    <List
      className={classes.root}
      subheader={
        subheader ? (
          <ListSubheader
            color="inherit"
            className={classes.root}
            component="li"
            disableSticky
          >
            <HeadingLevel className={classes.heading}>
              {subheader}
            </HeadingLevel>
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
  subheaderComponent: 'h3',
};

Archer.propTypes = {
  underline: PropTypes.bool,
  subheader: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  lists: PropTypes.array,
  subheaderComponent: PropTypes.string,
};

export default renderListSafely(Archer);
