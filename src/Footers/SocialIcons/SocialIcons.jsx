import React from 'react';
import PropTypes from 'prop-types';
import { SocialIcon } from 'react-social-icons';

const SocialIcons = ({ socials }) =>
  Array.isArray(socials) && socials.length > 0
    ? socials.map((sm) => (
        <SocialIcon
          url={sm}
          key={sm}
          rel="noreferrer noopener"
          target="_blank"
          style={{
            margin: '0.25rem',
          }}
        />
      ))
    : null;

SocialIcons.defaultProps = {
  socials: [],
};

SocialIcons.propTypes = {
  socials: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SocialIcons;
