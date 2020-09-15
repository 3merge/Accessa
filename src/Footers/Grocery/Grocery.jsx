import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import media from 'styled-media-query';
import PropTypes from 'prop-types';
import * as Utils from '../../Utils';
import SocialIcons from '../SocialIcons';

const ColHeader = styled.div`
  padding: 1rem;

  ${media.lessThan('medium')`
    text-align: center;
    width: 100%;

    img { 
      display: block;
      margin: 0 auto;
    }
  `}
`;

const Col = styled.div`
  padding: 1rem;
`;

const ColList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ColListTitle = styled.h4`
  font-weight: bold;
  font-size: 1rem;
  margin: 0 0 1rem;
`;

const ColListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const ColListItemLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  transition: color 500ms;

  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
`;

const Footer = styled.footer`
  background: ${({ theme: { dark = '#222' } }) => dark};
  color: #fff;
  padding: 1rem;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  ${media.lessThan('small')`
    justify-content: flex-start;
  `}
`;

export const getLinkProps = ({ isCurrent }) => ({
  style: {
    opacity: isCurrent ? '1' : '.65',
  },
});

const Grocery = ({ children, columns, social }) => {
  return (
    <Footer>
      <Utils.Container size="large">
        <Grid>
          <ColHeader>
            {children}
            <br />
            <small>
              © {new Date().getFullYear()}. All rights
              reserved
            </small>
          </ColHeader>
          {columns.map((co) => (
            <Col>
              <ColListTitle>{co.label}</ColListTitle>
              <ColList>
                {co.items.map(({ label, href = '/' }) => (
                  <ColListItem key={label}>
                    <ColListItemLink
                      to={href}
                      getProps={getLinkProps}
                    >
                      {label}
                    </ColListItemLink>
                  </ColListItem>
                ))}
              </ColList>
            </Col>
          ))}
          <ColHeader>
            <SocialIcons socials={social} />
          </ColHeader>
        </Grid>
      </Utils.Container>
    </Footer>
  );
};

Grocery.propTypes = {
  social: PropTypes.arrayOf(PropTypes.string),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
    }),
  ),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.array,
  ]),
};

Grocery.defaultProps = {
  social: [],
  columns: [],
  children: null,
};

export default Grocery;
