import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Collapse,
  Fade,
} from '@material-ui/core';
import { Link } from '@reach/router';
import useStyles from './useStyles';

const Dropdown = React.forwardRef(({ item }, ref) => {
  const [active, setActive] = React.useState(false);

  const activate = () => setActive(true);
  const deactivate = () => setActive(false);

  const { dropdownList, ul, li } = useStyles({
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
          aria-haspopup="true"
          aria-expanded={active}
          color={active ? 'primary' : 'inherit'}
          {...(item.href
            ? {
                component: Link,
                to: item.href,
              }
            : {})}
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
            className={[dropdownList, ul].join(' ')}
            component="ul"
            position="absolute"
            pb={4}
            pt={2}
            ref={ref}
          >
            {item.items.map((sub, i) => (
              <li key={sub.label.concat(i)} className={li}>
                <Fade in timeout={1250 + i * 1.35}>
                  <Button
                    color="inherit"
                    component={Link}
                    to={sub.href}
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
