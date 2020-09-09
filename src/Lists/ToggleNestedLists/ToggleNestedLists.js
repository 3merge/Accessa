import { useState } from 'react';

const ToggleCollapse = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return children({ isOpen, setIsOpen });
};

export default ToggleCollapse;
