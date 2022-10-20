import { NavLink } from 'react-router-dom';
import './link.scss';

type Props = {
  to: string
  name: string
}

export const Link: React.FC<Props> = ({ to, name }) => {
  return <NavLink className='header__nav-item' to={to}>
    {name}
  </NavLink>
};