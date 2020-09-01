import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withLocation } from 'with-location';
import AccessibleOffCanvas from 'react-aria-offcanvas';
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

const Content = styled.div`
  padding: 0.75rem;
`;

const Offcanvas = withLocation(
  ({ logo, children, menuRenderer, location }) => {
    const { state, toggle, close } = useToggle();
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
            onClick={toggle}
          >
            <MenuIcon />
          </IconButton>
        )}
        <AccessibleOffCanvas
          isOpen={state}
          onClose={close}
          labelledby="menu-button"
          position="right"
          height="auto"
          style={{
            overlay: {
              backgroundColor: 'rgba(0,0,0,.2)',
            },
          }}
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
            <Content>{children}</Content>
          </Utils.Viewport>
        </AccessibleOffCanvas>
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
