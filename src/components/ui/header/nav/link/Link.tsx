import { NavLink, useLocation } from 'react-router-dom';
import './link.scss';
import './link_active.scss';
import { HashLink } from 'react-router-hash-link'
import cn from 'classnames';

type Props = {
  to: string
  name: string
  hashLink?: boolean
  closeBurger?: () => void
}

export const Link: React.FC<Props> = ({ to, name, hashLink, closeBurger }) => {
  const { pathname, hash } = useLocation();
  const url = pathname + hash;
  const Link = hashLink ? HashLink : NavLink;

  return <Link className={cn('header__nav-item', url.includes(to) && 'header__nav-item_active')} to={to} onClick={closeBurger}>
    {name}
  </Link>
};