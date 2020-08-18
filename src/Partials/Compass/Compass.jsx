import React from 'react';
import PropTypes from 'prop-types';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';

const MarkerLocator = ({ coordinates, renderMap }) => {
  React.useEffect(() => {
    renderMap(new window.google.maps.Geocoder());
  }, []);

  if (!coordinates.length) return null;

  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={coordinates[0]}
    >
      {coordinates.map((obj, i) => (
        <Marker
          key={i}
          position={{ lat: obj.lat, lng: obj.lng }}
        />
      ))}
    </GoogleMap>
  );
};

MarkerLocator.propTypes = {
  renderMap: PropTypes.func.isRequired,
  coordinates: PropTypes.arrayOf(
    PropTypes.shape({
      lng: PropTypes.number,
      lat: PropTypes.number,
    }),
  ).isRequired,
};

const Wrapped = withScriptjs(withGoogleMap(MarkerLocator));

const Compass = ({
  apiKey,
  street,
  city,
  postal,

  ...rest
}) => {
  const [coordinates, setCoordinates] = React.useState([]);

  const renderMap = (google) => {
    const address = `${street}, ${city}, ${postal}`;
    google.geocode(
      {
        'address': address,
      },
      (results, status) => {
        if (status === 'OK') {
          setCoordinates([
            {
              lng: results[0].geometry.location.lng(),
              lat: results[0].geometry.location.lat(),
            },
          ]);
        }
      },
    );
  };

  return (
    <Wrapped
      {...rest}
      mapElement={<div style={{ height: '100%' }} />}
      loadingElement={<div />}
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${apiKey}&libraries=geometry,drawing,places `}
      coordinates={coordinates}
      renderMap={renderMap}
      containerElement={
        <div style={{ height: '100%', width: '100%' }} />
      }
    />
  );
};

Compass.propTypes = {
  apiKey: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  postal: PropTypes.string.isRequired,
};

Compass.defaultProps = {};

export default Compass;
