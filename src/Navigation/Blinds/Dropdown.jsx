import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Collapse,
  Fade,
} from '@material-ui/core';
import useStyles from './useStyles';
import { getButtonProps } from './helpers';

const Dropdown = React.forwardRef(({ item }, ref) => {
  const [active, setActive] = React.useState(false);

  const activate = () => setActive(true);
  const deactivate = () => setActive(false);

  const { dropdownList, li } = useStyles({
    columnCount:
      item.items.length > 5
        ? Math.round(item.items.length / 5)
        : 1,
  });

  return (
    <>
      <Box
        onMouseOver={activate}
        onMouseLeave={deactivate}
        onFocus={activate}
        onBlur={deactivate}
        position="relative"
      >
        <Button
          {...getButtonProps(item)}
          aria-haspopup="true"
          aria-expanded={active}
          color={active ? 'primary' : 'inherit'}
        >
          {item.label}
        </Button>
        <Collapse
          mountOnEnter
          unmountOnExit
          timeout={150}
          aria-hidden={!active}
          in={active}
        >
          <Box
            className={dropdownList}
            position="absolute"
            pb={4}
            pt={2}
            ref={ref}
          >
            {item.items.map((sub, i) => (
              <li key={sub.label.concat(i)} className={li}>
                <Fade in timeout={1250 + i * 1.35}>
                  <Button
                    {...getButtonProps(sub)}
                    color="inherit"
                  >
                    {sub.label}
                  </Button>
                </Fade>
              </li>
            ))}
          </Box>
        </Collapse>
      </Box>
    </>
  );
});

Dropdown.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default Dropdown;
