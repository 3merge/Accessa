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

export const isAltAvailable = (alt) =>
  typeof alt === 'string' && alt.length > 0;

const Field = ({
  lists,
  fill,
  spacing,
  gatsbyImageClass,
  ...rest
}) => {
  const {
    body1,
    card,
    cardTitle,
    li,
    noCta,
    subtitle,
    ul,
    gatsbyImage,
  } = useStyles({ fill });

  return (
    <Grid
      container
      spacing={spacing}
      component="ul"
      className={ul}
    >
      {lists.map((img, i) => {
        const getCardProps = () =>
          img.onClick
            ? {
                role: 'link',
                className: card,
                tabIndex: 0,
              }
            : {
                className: [card, noCta].join(' '),
              };

        return (
          <Grid
            item
            className={li}
            component="li"
            key={i}
            {...rest}
          >
            <Card
              onClick={img.onClick}
              onKeyPress={img.onClick}
              {...getCardProps()}
            >
              <div aria-hidden={!isAltAvailable(img.alt)}>
                <Image
                  fluid={img.fluid}
                  imgStyle={{
                    objectFit: 'cover',
                  }}
                  className={
                    gatsbyImageClass || gatsbyImage
                  }
                  alt={img.alt || ''}
                />
              </div>
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
                <Typography
                  variant="body1"
                  className={body1}
                >
                  {img.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
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
  // eslint-disable-next-line react/forbid-prop-types
  gatsbyImageClass: PropTypes.string,
};

Field.defaultProps = {
  fill: false,
  lg: 4,
  xs: 12,
  sm: 6,
  md: 4,
  spacing: 6,
  gatsbyImageClass: '',
};

export default renderListSafely(Field);
