import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../../Utils/Container';
import Image from '../../Utils/Image';
import ImageWrapper from '../../Utils/ImageWrapper';

const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style: none;
  margin: 2rem 0;
  padding: 0;
`;

const ListItem = styled.li`
  flex: 0 0 calc(33.3% - 1em);
  margin: 1rem 0;
  min-width: 325px;
`;

const ListItemGrid = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const ListItemText = styled.div`
  flex: 1;
  padding: 1rem;

  h4 {
    font-size: 1.13rem;
  }

  p {
    font-size: 1rem;
  }

  p,
  h4 {
    margin: 0;
  }
`;

const ListItemImage = styled.div`
  border-radius: 500px;
  overflow: hidden;
`;

const Title = styled.h3`
  font-size: calc(
    29.479px + (29.479 - 23.086) *
      ((100vw - 300px) / (1600 - 300))
  );
  margin: 0;
  text-align: center;
`;

const Bubbles = ({ images, title }) => (
  <Container>
    {title && <Title>{title}</Title>}
    <List>
      {images.map((img) => (
        <ListItem>
          <ListItemGrid>
            <ListItemImage>
              <ImageWrapper
                height="8rem"
                width="8rem"
                fit="cover"
              >
                <Image alt={img.title} srcList={img.src} />
              </ImageWrapper>
            </ListItemImage>
            <ListItemText>
              <h4>{img.title}</h4>
              <p>{img.description}</p>
            </ListItemText>
          </ListItemGrid>
        </ListItem>
      ))}
    </List>
  </Container>
);

Bubbles.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      src: PropTypes.string,
    }),
  ),
  title: PropTypes.string,
};

Bubbles.defaultProps = {
  title: '',
  images: [],
};

export default Bubbles;
