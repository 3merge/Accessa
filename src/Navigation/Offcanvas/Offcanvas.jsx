import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withLocation } from 'with-location';
import Drawer from '@material-ui/core/Drawer';
import { useToggle } from 'useful-state';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import * as Utils from '../../Utils';

const Offcanvas = withLocation(
  ({ logo, children, menuRenderer, location }) => {
    const { state, toggle, close, open } = useToggle();
    const ref = useRef(false);

    useEffect(() => {
      if (!ref.current) {
        ref.current = true;
      } else {
        close();
      }
    }, [location.pathname]);

    return (
      <>
        {menuRenderer ? (
          menuRenderer(toggle, state)
        ) : (
          <IconButton
            size="small"
            aria-label="Open menu"
            id="menu-button"
            aria-controls="menu"
            aria-expanded={state}
            onClick={open}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        )}
        <Drawer
          onClose={close}
          variant="temporary"
          anchor="right"
          open={state}
          PaperProps={{
            style: {
              width: 320,
            },
          }}
        >
          <Utils.Viewport
            style={{
              backgroundColor: '#FFF',
              overflow: 'auto',
            }}
          >
            <Box p={1}>
              <Toolbar
                disableGutters
                style={{ justifyContent: 'space-between' }}
              >
                {logo}
                <IconButton
                  aria-label="Close menu"
                  onClick={close}
                >
                  <CloseIcon />
                </IconButton>
              </Toolbar>
              {children}
            </Box>
          </Utils.Viewport>
        </Drawer>
      </>
    );
  },
);

Offcanvas.defaultProps = {
  logo: null,
  children: null,
  menuRenderer: undefined,
};

Offcanvas.propTypes = {
  logo: PropTypes.node,
  children: PropTypes.node,
  menuRenderer: PropTypes.func,
};

export default Offcanvas;
