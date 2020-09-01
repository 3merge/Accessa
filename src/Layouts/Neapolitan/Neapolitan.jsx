import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Ladder from '../../Carousels/Ladder';
import Focal from '../Focal';

const useStyle = makeStyles((theme) => ({
  root: ({ reverseOnMobile }) => ({
    flexDirection: 'row-reverse',
    flexWrap: 'nowrap',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      height: 'auto',
      flexDirection: reverseOnMobile
        ? 'column'
        : 'column-reverse',
    },
  }),
  wrapper: {
    height: '100%',
  },
}));

const Neapolitan = ({
  carousel,
  focalComponent,
  navComponent,
  children,
  reverseOnMobile,
  ...rest
}) => {
  const cls = useStyle({
    reverseOnMobile,
  });

  return (
    <Container
      className={cls.wrapper}
      maxWidth="xl"
      disableGutters
      component="main"
    >
      <Grid className={cls.root} container {...rest}>
        <Grid item xs>
          {navComponent}
          <Grid container>
            <Grid item lg xs={12}>
              <Box p={1}>{children}</Box>
            </Grid>
            <Grid item lg="auto" sm={12}>
              <Box p={2}>
                <Ladder data={carousel} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Focal>{focalComponent}</Focal>
      </Grid>
    </Container>
  );
};

Neapolitan.defaultProps = {
  carousel: [],
  focalComponent: null,
  reverseOnMobile: false,
};

Neapolitan.propTypes = {
  carousel: PropTypes.arrayOf(PropTypes.object),
  focalComponent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object,
    PropTypes.array,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  reverseOnMobile: PropTypes.bool,
};

export default Neapolitan;
