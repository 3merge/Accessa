/* eslint-disable */
import React from 'react';
import { Link } from '@reach/router';
import { useToggle } from 'useful-state';
import styled, { css } from 'styled-components';
import { InlineIcon } from '@iconify/react';
import outlineKeyboardArrowDown from '@iconify/icons-ic/outline-keyboard-arrow-down';
import outlineKeyboardArrowUp from '@iconify/icons-ic/outline-keyboard-arrow-up';

const sharedButtonStyles = css`
  font-size: 1rem;
  cursor: pointer;
  padding: 0.75rem 1rem;
  text-decoration: none;
  transition: background-color 250ms ease-in;
  width: 100%;

  &:hover,
  &:focus,
  &[aria-expanded='true'] {
    background-color: #e3e0e0;
  }
`;

const Button = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0;
  display: flex;
  font-size: 1rem;
  justify-content: space-between;
  ${sharedButtonStyles};
`;

const Count = styled.span`
  background-color: whitesmoke;
  border-radius: 500px;
  display: inline-block;
  font-size: 0.733rem;
  font-weight: bold;
  height: 1rem;
  padding: 0.25rem;
  text-align: center;
  width: 1rem;
`;

const TreeListItemLink = styled(Link)`
  display: block;
  ${sharedButtonStyles};
`;

const TreeList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  ul {
    margin-bottom: 1rem;
    li:last-of-type {
      border-bottom: 0;
    }
  }
`;

const TreeListItem = styled.li`
  border-bottom: 1px solid #e3e0e0;
  display: block;
  width: 100%;
`;

const ParentLink = ({
  children,
  hasItems,
  label,
  href,
  icon,
}) => {
  const { state, toggle } = useToggle(false);

  return (
    <>
      {hasItems ? (
        <Button
          type="button"
          onClick={toggle}
          aria-expanded={state}
        >
          <span>
            {icon}
            {label}
          </span>
          <span>
            <Count>{hasItems}</Count>
            {hasItems ? (
              <InlineIcon
                icon={
                  state
                    ? outlineKeyboardArrowUp
                    : outlineKeyboardArrowDown
                }
              />
            ) : null}
          </span>
        </Button>
      ) : (
        <TreeListItemLink
          to={href}
          getProps={({ isCurrent }) =>
            isCurrent
              ? { style: { backgroundColor: '#e3e0e0' } }
              : {}
          }
        >
          {icon}
          {label}
        </TreeListItemLink>
      )}
      {hasItems ? children(state) : null}
    </>
  );
};

ParentLink.defaultProps = {
  icon: null,
};

const generateChildLinks = (item) => {
  if (!item) return null;

  const hasItems = Array.isArray(item.items)
    ? item.items.length
    : 0;

  return (
    <TreeListItem>
      <ParentLink {...item} hasItems={hasItems}>
        {(open) => (
          <TreeList
            style={{ display: open ? 'block' : 'none' }}
          >
            {item.items
              .concat(
                item.href
                  ? [
                      null, // renders the divider
                      {
                        label: 'View all',
                        href: item.href,
                      },
                    ]
                  : [],
              )
              .map(generateChildLinks)}
          </TreeList>
        )}
      </ParentLink>
    </TreeListItem>
  );
};

const Tree = ({ items }) => (
  <TreeList>{items.map(generateChildLinks)}</TreeList>
);
export default Tree;
