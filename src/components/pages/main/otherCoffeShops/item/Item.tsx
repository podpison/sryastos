import { Link } from 'react-router-dom';
import './item.scss';

type Props = {
  name: string
  src: string
  address: string
  to: string
}

export const Item: React.FC<Props> = ({ address, name, src, to }) => {
  return <Link to={`/shop/${to}`} className='other-coffe-shops__item image-shadow-element'>
    <div className='other-coffe-shops__item-heading'>
      <h5 className='other-coffe-shops__item-name'>{name}</h5>
      <h6 className='other-coffe-shops__item-address'>{address}</h6>
    </div>
    <div className='other-coffe-shops__item-img-container image-shadow-container'>
      <div className='image-shadow' />
      <img className='other-coffe-shops__item-img' src={src} alt='shop image' />
    </div>
  </Link>
};