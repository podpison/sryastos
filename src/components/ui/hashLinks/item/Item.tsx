import { NavHashLink } from 'react-router-hash-link';

export type HashLinksItem = {
  name: string
  hash: string
}

export const Item: React.FC<HashLinksItem> = ({ hash, name }) => {
  return <li className='hashLinks__item'>
    <NavHashLink to={`#${hash}`}>{name}</NavHashLink>
  </li>
};