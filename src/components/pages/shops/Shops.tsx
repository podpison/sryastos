import './shops.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from './header/Header';
import { Review } from './review/Review';
import { Interier } from './interier/interier';
import { Location } from './location/location';
import { OtherImages } from './otherImages/OtherImages';
import { Map } from './map/Map';
import { useScrollTop } from '../../../hooks/useScrollTop';
import { useCurrentShop } from '../../../hooks/useCurrentShop';
import { NotFound } from '../notFound/NotFound';

export const Shops: React.FC = () => {
  const { shopName } = useParams();
  const currentShop = useCurrentShop();
  const navigate = useNavigate();
  useScrollTop(!shopName);

  if (!currentShop?.name) { //the shop name that user provides is not exist
    return <NotFound />
  } else if (!shopName) { //there is lack of shop name in the path
    navigate('/');
    return <></>
  };

  return <main className='shops-page'>
    <Header shopName={shopName} />
    <Interier />
    <Location />
    <OtherImages />
    <Review />
    <Map />
  </main>
};