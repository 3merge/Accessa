import { useState } from 'react';
import PropTypes from 'prop-types';

const ToggleCollapse = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return children({ isOpen, setIsOpen });
};

ToggleCollapse.propTypes = {
  children: PropTypes.func.isRequired,
};

export default ToggleCollapse;
