import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
} from '@material-ui/core';
import { renderListSafely } from '../../Hocs';
import useStyles from './useStyles';

const Field = ({ lists, title }) => {
  const {
    cardTitle,
    subtitle,
    title: pageTitle,
    body1,
    ul,
  } = useStyles();

  return (
    <div>
      {title && <p className={pageTitle}>{title}</p>}
      <Grid
        container
        spacing={6}
        component="ul"
        className={ul}
      >
        {lists.map((img, i) => (
          <Grid
            item
            component="li"
            key={i}
            xs={12}
            sm={6}
            md={4}
            lg={3}
          >
            <Card style={{ height: '100%' }}>
              <CardActionArea
                onClick={img.onClick}
                onKeyPress={img.onClick}
                style={{ height: '100%' }}
              >
                <Image
                  fluid={img.fluid}
                  style={{ width: '100%', height: '180px' }}
                />
                <CardContent>
                  {img.subtitle ? (
                    <span className={subtitle}>
                      {img.subtitle}
                    </span>
                  ) : null}
                  <Typography
                    variant="h4"
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
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
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
  title: PropTypes.string,
};

Field.defaultProps = {
  title: '',
};

export default renderListSafely(Field);
