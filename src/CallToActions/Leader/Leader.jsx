import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import styled from 'styled-components';
import media from 'styled-media-query';
import * as Utils from '../../Utils';

const Section = styled.section`
  padding: 1rem;
  text-align: center;
`;

const Overline = styled.span`
  font-size: 0.731rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: 0.2px;
  margin: 0;
  text-transform: uppercase;
`;

const Body = styled.h3`
  font-size: 1.63rem;
  font-weight: 400;
  margin: 0.5rem 0 1.5rem 0;

  ${media.lessThan('medium')`
    font-size: 1.277rem;
  `}

  ${media.lessThan('small')`
    font-size: 1.13rem;
  `}
`;

const Leader = ({
  children,
  description,
  fluid,
  title,
}) => (
  <Utils.Container size="small">
    <Section>
      {fluid && (
        <Image
          fluid={fluid}
          alt={title}
          objectFit="contain"
          objectPosition="50% 50%"
          style={{
            display: 'block',
            margin: 'auto',
            height: 65,
            width: 65,
          }}
        />
      )}
      <Overline>{title}</Overline>
      <Body>{description}</Body>
      {children}
    </Section>
  </Utils.Container>
);

Leader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object,
  ]),

  title: PropTypes.string.isRequired,

  description: PropTypes.string.isRequired,

  fluid: PropTypes.shape({
    src: PropTypes.string,
  }),
};

Leader.defaultProps = {
  children: null,
  fluid: null,
};

export default Leader;
