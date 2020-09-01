import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withLocation } from 'with-location';
import Drawer from '@material-ui/core/Drawer';
import { useToggle } from 'useful-state';
import { IconButton } from '@material-ui/core';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import * as Utils from '../../Utils';

const Align = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
`;

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
            aria-label="Open menu"
            id="menu-button"
            aria-controls="menu"
            aria-expanded={state}
            onClick={open}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Drawer
          variant="temporary"
          anchor="right"
          open={state}
        >
          <Utils.Viewport
            style={{
              backgroundColor: '#FFF',
              overflow: 'auto',
            }}
          >
            <Align>
              {logo}
              <IconButton
                aria-label="Close menu"
                onClick={close}
              >
                <CloseIcon />
              </IconButton>
            </Align>
            {children}
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
