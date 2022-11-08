import { NavLink } from 'react-router-dom';
import './link.scss';
import { NavHashLink } from 'react-router-hash-link'

type Props = {
  to: string
  name: string
  hashLink?: boolean
  closeBurger?: () => void
}

export const Link: React.FC<Props> = ({ to, name, hashLink, closeBurger }) => {

  const Link = hashLink ? NavHashLink : NavLink;

  return <Link className={({ isActive }) => 'header__nav-item'} to={to} onClick={closeBurger}>
    {name}
  </Link>
};