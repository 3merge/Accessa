import React from 'react';
import PropTypes from 'prop-types';
import AccessibleOffCanvas from 'react-aria-offcanvas';
import { useToggle } from 'useful-state';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import twotoneClose from '@iconify/icons-ic/twotone-close';
import twotoneMenuOpen from '@iconify/icons-ic/twotone-menu-open';
import * as Utils from '../../Utils';

const Align = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
`;

const Button = styled.div`
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;
  flex: 0 0 auto;
  padding: 6px;
  text-align: center;
  transition: background-color 500ms;
  width: 1.232rem;
  height: 1.232rem;
  font-size: 1.232rem;

  &:hover {
    background-color: whitesmoke;
  }
`;

const Content = styled.div`
  padding: 0.75rem;
`;

const Offcanvas = ({ logo, children, menuRenderer }) => {
  const { state, toggle, close } = useToggle();

  return (
    <>
      {menuRenderer ? (
        menuRenderer(toggle, state)
      ) : (
        <Button
          type="button"
          aria-label="Open menu"
          id="menu-button"
          aria-controls="menu"
          aria-expanded={state}
          onClick={toggle}
        >
          <Icon icon={twotoneMenuOpen} />
        </Button>
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
            <Button
              type="button"
              aria-label="Close menu"
              onClick={close}
            >
              <Icon icon={twotoneClose} />
            </Button>
          </Align>
          <Content>{children}</Content>
        </Utils.Viewport>
      </AccessibleOffCanvas>
    </>
  );
};

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
