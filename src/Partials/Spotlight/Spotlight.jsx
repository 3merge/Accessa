import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';
import Image from 'gatsby-image';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  root: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',

      '& > div': {
        minWidth: '50%',
        width: '50%',
      },
    },

    [theme.breakpoints.down('xs')]: {
      '&  > div': {
        minWidth: '100%',
        width: '100%',
      },
    },
  },
  headline: {
    fontSize: '2.083rem',
    lineHeight: '1.2',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(4),
    width: '87.5%',
  },
  text: {
    fontSize: '0.885rem',
    lineHeight: '1.7',
    marginTop: theme.spacing(4),
  },
}));

const LogoContainer = styled(Image)`
  height: 85px;
  width: 180px;

  ${media.lessThan('large')`
    width: 140px;
  `}

  ${media.lessThan('medium')`
    width: 90px;
  `}
`;

const Spotlight = ({
  children,
  color,
  title,
  description,
  logo,
}) => {
  const cls = useStyle();

  return (
    <Box p={3} height="100%">
      <Grid spacing={3} className={cls.root} container>
        <Grid item>
          <LogoContainer
            fluid={{ src: logo }}
            alt="Logo"
            imgStyle={{
              objectPosition: 'left',
              objectFit: 'contain',
            }}
          />
          <Typography
            className={cls.headline}
            variant="h2"
            style={{ color }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Box
            m="0 auto"
            maxWidth={300}
            textAlign="center"
            p={2}
          >
            {children}
            <Typography
              className={cls.text}
              style={{ color }}
            >
              {description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

Spotlight.defaultProps = {
  color: undefined,
};

Spotlight.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object,
  ]).isRequired,
  color: PropTypes.string,
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Spotlight;
