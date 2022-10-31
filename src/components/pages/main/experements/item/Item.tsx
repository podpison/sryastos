import { HashLink } from 'react-router-hash-link';
import './item.scss';

type Props = {
  src: string
  name: string
  description: string
  hash: string
}

export const Item: React.FC<Props> = ({ description, name, src, hash }) => {
  return <HashLink to={`/menu#${hash}`} className='main-page__experements-item'>
    <img className='main-page__experements-item-img' src={src} alt='experement' />
    <h6 className='main-page__experements-items-heading'>{name}</h6>
    <p className='main-page__experements-items-description'>{description}</p>
  </HashLink>
};