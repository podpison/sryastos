import './shops.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from './header/Header';
import { useEffect } from 'react';
import { Review } from './review/Review';
import { Interier } from './interier/interier';
import { Location } from './location/location';
import { OtherImages } from './otherImages/otherImages';
import { Map } from './map/Map';

export const Shops: React.FC = () => {
	const { shopName } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (!shopName) return;

		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}, []);

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