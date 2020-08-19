import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'gatsby-image';
import Container from '../../Utils/Container';

const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin: 2rem 0;
  padding: 0;
`;

const ListItem = styled.li`
  cursor: pointer;
  flex: 25%;
  margin: 1rem 0;
  max-width: 25%;

  img {
    transition: filter 500ms ease-in;
  }

  &:hover {
    text-decoration: underline;

    img {
      filter: grayscale(1);
    }
  }
`;

const ListItemText = styled.div`
  flex: 1;
  padding: 1rem;

  h4 {
    font-size: 1.443rem;
  }

  p {
    font-size: 1rem;
  }

  p,
  h4 {
    margin: 0;
  }
`;

const Title = styled.h3`
  font-size: calc(
    29.479px + (29.479 - 23.086) *
      ((100vw - 300px) / (1600 - 300))
  );
  margin: 0;
  text-align: center;
`;

const Field = ({ data, title }) => (
  <Container size="large">
    {title && <Title>{title}</Title>}
    <List>
      {data.map((img) => (
        <ListItem
          role="button"
          tabIndex="0"
          onClick={img.onClick}
          onKeyPress={img.onClick}
          aria-labelledby={img.title}
        >
          <Image {...img} />
          <ListItemText id={img.title}>
            <h4>{img.title}</h4>
            <p>{img.description}</p>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  </Container>
);

Field.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      src: PropTypes.string,
      onClick: PropTypes.func,
    }),
  ),
  title: '',
};

Field.defaultProps = {
  data: [],
  title: PropTypes.string,
};

export default Field;
