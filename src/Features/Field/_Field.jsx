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
      {title && (
        <Typography variant="h3" className={pageTitle}>
          {title}
        </Typography>
      )}
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
            onClick={img.onClick}
            onKeyPress={img.onClick}
            key={i}
            xs={12}
            sm={6}
            md={4}
            lg={3}
          >
            <Card style={{ height: '100%' }}>
              <CardActionArea>
                <Image
                  fluid={img.fluid}
                  style={{ width: '100%', height: '200px' }}
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
  title: '',
};

Field.defaultProps = {
  title: PropTypes.string,
};

export default renderListSafely(Field);
