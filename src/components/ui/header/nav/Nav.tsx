import { Link } from './link/Link';
import './nav.scss';

export const Nav: React.FC = () => {
  return <nav className='header__nav'>
    <Link to='/ourShops' name='Наши кофейни' />
    <Link to='/menu' name='Меню' />
    <Link to='/vacancy' name='Вакансии' />
  </nav>
};