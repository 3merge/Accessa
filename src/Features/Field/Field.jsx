import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import {
  Card,
  CardContent,
  Typography,
  Grid,
} from '@material-ui/core';
import { renderListSafely } from '../../Hocs';
import useStyles from './useStyles';

const Field = ({ lists, fill, spacing, ...rest }) => {
  const {
    body1,
    card,
    cardTitle,
    li,
    noCta,
    subtitle,
    ul,
  } = useStyles({ fill });

  return (
    <Grid
      container
      spacing={spacing}
      component="ul"
      className={ul}
    >
      {lists.map((img, i) => (
        <Grid
          item
          component="li"
          key={i}
          className={li}
          {...rest}
        >
          <Card
            onClick={img.onClick}
            onKeyPress={img.onClick}
            className={
              img.onClick ? card : [card, noCta].join(' ')
            }
            tabIndex={0}
          >
            <Image
              fluid={img.fluid}
              imgStyle={{
                objectFit: 'cover',
              }}
              style={{ width: '100%', height: '200px' }}
            />
            <CardContent>
              {img.subtitle ? (
                <span className={subtitle}>
                  {img.subtitle}
                </span>
              ) : null}
              <Typography
                variant="h3"
                className={cardTitle}
              >
                {img.title}
              </Typography>
              <Typography variant="body1" className={body1}>
                {img.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

Field.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      src: PropTypes.string,
      onClick: PropTypes.func,
    }),
  ).isRequired,
  fill: PropTypes.bool,
  lg: PropTypes.number,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  spacing: PropTypes.number,
};

Field.defaultProps = {
  fill: false,
  lg: 4,
  xs: 12,
  sm: 6,
  md: 4,
  spacing: 6,
};

export default renderListSafely(Field);
