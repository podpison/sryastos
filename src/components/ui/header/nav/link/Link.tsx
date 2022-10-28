import { NavLink, useNavigate } from 'react-router-dom';
import './link.scss';
import { NavHashLink } from 'react-router-hash-link'

type Props = {
  to: string
  name: string
  hashLink?: boolean
}

export const Link: React.FC<Props> = ({ to, name, hashLink }) => {

  const Link = hashLink ? NavHashLink : NavLink;

  return <Link className={({ isActive }) => 'header__nav-item'} to={to}>
    {name}
  </Link>
};