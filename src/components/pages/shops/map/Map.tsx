import './map.scss';
import GoogleMapReact from 'google-map-react';
import { useCurrentShop } from '../../../../hooks/useCurrentShop';

const defaultProps = {
  center: {
    lat: 55.79679867002461,
    lng: 37.934745873917436
  },
  zoom: 20
};

export const Map: React.FC = () => {
  const currentShop = useCurrentShop();

  return <section className='map' id='map'>
    <div className='map__shop'>
      <h4>Sorrrybabuska<br />{currentShop?.name || ''}</h4>
      <div>
        <h6>Адрес</h6>
        <p>{currentShop?.address}</p>
      </div>
      <div>
        <h6>Телефон</h6>
        <p>{currentShop?.phone}</p>
      </div>
    </div>
    <GoogleMapReact
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
      bootstrapURLKeys={{ key: '' }}
    >
    </GoogleMapReact>
  </section>
};