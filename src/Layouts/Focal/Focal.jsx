import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    backgroundColor: '#fafbfc',
    display: 'flex',
    justifyContent: 'center',
    overflow: 'hidden',
    minHeight: '100%',
    minWidth: 514,
    width: 514,
    position: 'relative',

    [theme.breakpoints.down('md')]: {
      minWidth: 435,
      width: 435,
    },

    [theme.breakpoints.down('sm')]: {
      minHeight: 'auto',
      minWidth: 'auto',
      width: '100%',
    },
  },
}));

const Focal = ({ children, focalBackground }) => {
  const cls = useStyle();
  return (
    <Box
      component="aside"
      className={cls.root}
      style={focalBackground}
    >
      {children}
    </Box>
  );
};

Focal.defaultProps = {
  focalBackground: {},
};

Focal.propTypes = {
  children: PropTypes.node.isRequired,
  focalBackground: PropTypes.objectOf(PropTypes.string),
};

export default Focal;
