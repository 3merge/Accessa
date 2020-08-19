import React from 'react';
import { Link } from '@reach/router';
import { useToggle } from 'useful-state';
import styled from 'styled-components';
import { InlineIcon } from '@iconify/react';
import outlineKeyboardArrowDown from '@iconify/icons-ic/outline-keyboard-arrow-down';
import outlineKeyboardArrowUp from '@iconify/icons-ic/outline-keyboard-arrow-up';

const Button = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0;
  display: flex;
  font-size: 1rem;
  justify-content: space-between;
  padding: 0.25rem;
  width: 100%;
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

const Divider = styled.span`
  background-color: whitesmoke;
  display: block;
  height: 1px;
  margin: 0.25rem 0;
  width: 100%;
`;

const TreeListItemLink = styled(Link)`
  display: block;
  font-size: 1rem;
  padding: 0.25rem;
  text-decoration: none;
`;

const TreeList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  ul {
    margin-bottom: 1rem;
    padding-left: 1.25rem;
  }
`;

const TreeListItem = styled.li`
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
        <Button type="button" onClick={toggle}>
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
        <TreeListItemLink to={href}>
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
  if (!item)
    return (
      <TreeListItem>
        <Divider />
      </TreeListItem>
    );

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