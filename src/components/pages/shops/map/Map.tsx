import './map.scss';
import GoogleMapReact from 'google-map-react';

const defaultProps = {
  center: {
    lat: 55.79679867002461,
    lng: 37.934745873917436
  },
  zoom: 20
};

export const Map: React.FC = () => {
  return <section className='map' id='map'>
    <GoogleMapReact
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
      bootstrapURLKeys={{ key: '' }}
    >
    </GoogleMapReact>
  </section>
};