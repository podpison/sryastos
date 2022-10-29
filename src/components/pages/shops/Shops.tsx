import './shops.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from './header/Header';
import { Review } from './review/Review';
import { Interier } from './interier/interier';
import { Location } from './location/location';
import { OtherImages } from './otherImages/OtherImages';
import { Map } from './map/Map';
import { useScrollTop } from '../../../hooks/useScrollTop';

export const Shops: React.FC = () => {
	const { shopName } = useParams();
	const navigate = useNavigate();
	useScrollTop(!shopName);

	if (!shopName) {
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