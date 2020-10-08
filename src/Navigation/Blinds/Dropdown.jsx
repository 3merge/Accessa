import React from 'react';
import PropTypes from 'prop-types';
import { Box, Collapse } from '@material-ui/core';
import { Link } from '@reach/router';
import useStyles from './useStyles';

const Dropdown = ({ item }) => {
  const [active, setActive] = React.useState(false);
  const activate = () => setActive(true);
  const deactivate = () => setActive(false);
  const ref = React.useRef(null);
  const { ul, a, li, collapse } = useStyles();

  const { top = 0, left = 0, height = 0 } =
    ref?.current?.getBoundingClientRect() || {};

  return (
    <Box
      onMouseOver={activate}
      onMouseLeave={deactivate}
      onFocus={activate}
      onBlur={deactivate}
    >
      <Box
        aria-haspopup="true"
        aria-expanded={active}
        component="span"
        ref={ref}
        role="button"
        tabIndex={0}
      >
        {item.main}
      </Box>
      <Collapse
        aria-hidden={!active}
        in={active}
        style={{
          position: 'absolute',
          top: top + height * 2,
          left: left * -1,
          right: 0,
          paddingLeft: left * 2,
          paddingTop: height,
          paddingBottom: height,
        }}
        className={collapse}
      >
        <ul className={ul}>
          {item.subitems.map((sub, i) => (
            <li key={sub.sub.concat(i)} className={li}>
              <Link to={sub.path} className={a}>
                {sub.sub}
              </Link>
            </li>
          ))}
        </ul>
      </Collapse>
    </Box>
  );
};

Dropdown.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default Dropdown;
