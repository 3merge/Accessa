import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Grid,
  Typography,
  Container,
} from '@material-ui/core';
import { Link } from '@reach/router';
import useStyles from './useStyles';
import SocialIcons from '../SocialIcons';

const DigitalProperties = ({
  company,
  socials,
  path,
  text,
}) => {
  const classes = useStyles();

  return (
    <Box mt={5} className={classes.wrapper} pt={3} pb={3}>
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="center"
        >
          <Grid container item sm={12} md={8} spacing={4}>
            <Grid item>
              <Typography variant="body1" color="inherit">
                {company}
              </Typography>
            </Grid>
            <Grid item>
              {text ? (
                <Typography variant="body1" color="inherit">
                  <Link className={classes.link} to={path}>
                    {text}
                  </Link>
                </Typography>
              ) : null}
            </Grid>
          </Grid>
          <Grid item className={classes.iconWrapper}>
            <SocialIcons socials={socials} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

DigitalProperties.defaultProps = {
  path: '',
  text: '',
};

DigitalProperties.propTypes = {
  company: PropTypes.string.isRequired,
  socials: PropTypes.arrayOf(PropTypes.string).isRequired,
  path: PropTypes.string,
  text: PropTypes.string,
};

export default DigitalProperties;
