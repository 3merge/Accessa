import React from 'react';
import { Link } from '@reach/router';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';
import media from 'styled-media-query';
import * as Utils from '../../Utils';

const ColHeader = styled.div`
  padding: 1rem;

  ${media.lessThan('medium')`
    text-align: center;
    width: 100%;
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

  ${media.lessThan('medium')`
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
            <small>©. {new Date().getFullYear()}</small>
          </ColHeader>
          {columns.map((co) => (
            <Col>
              <ColListTitle>{co.name}</ColListTitle>
              <ColList>
                {co.items.map((li) => (
                  <ColListItem>
                    <ColListItemLink
                      to="li"
                      getProps={getLinkProps}
                    >
                      HI
                    </ColListItemLink>
                  </ColListItem>
                ))}
              </ColList>
            </Col>
          ))}
          <ColHeader>
            {social.map((media) => (
              <SocialIcon
                url={media}
                key={media}
                rel="noreferrer noopener"
                target="_blank"
                style={{
                  margin: '0.25rem',
                }}
              />
            ))}
          </ColHeader>
        </Grid>
      </Utils.Container>
    </Footer>
  );
};

export default Grocery;
