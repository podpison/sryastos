import logo from './../../../assets/img/logo.svg';
import vk from './../../../assets/img/vk.svg';
import './header.scss';
import { Nav } from './nav/Nav';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return <header className='header'>
    <Link to='/'>
      <img src={logo} className='header__logo' alt='logo' />
    </Link>
    <Nav />
    <a className='header__phone' href='tel:+74959897723'>8 (495) 989 - 77 23</a>
    <a href='https://vk.com' target="_blank" rel="noreferrer">
      <img src={vk} className='header__vk' alt='vk' />
    </a>
  </header>
};