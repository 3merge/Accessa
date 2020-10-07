import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
} from '@material-ui/core';
import { renderListSafely } from '../../Hocs';
import useStyles from './useStyles';

const Field = ({
  component: Wrapper,
  lists,
  title,
  description,
}) => {
  const {
    card,
    cardTitle,
    subtitle,
    title: pageTitle,
    body1,
    ul,
  } = useStyles();

  return (
    <Wrapper>
      {title && (
        <Typography variant="h3" className={pageTitle}>
          {title}
        </Typography>
      )}
      {description && (
        <Box mt={-2} mb={2}>
          <Typography component="p" variant="subtitle1">
            {description}
          </Typography>
        </Box>
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
            key={i}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            style={{
              flexGrow: 1,
              maxWidth: '100%',
            }}
          >
            <Card
              onClick={img.onClick}
              onKeyPress={img.onClick}
              className={card}
              tabIndex={0}
            >
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
            </Card>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
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
  description: PropTypes.string,
  component: PropTypes.func,
};

Field.defaultProps = {
  component: (props) => React.createElement('div', props),
  title: '',
  description: '',
};

export default renderListSafely(Field);
