import { Link } from 'react-router-dom';
import './pcMenu.scss';
import logo from './../../../../assets/img/logo.svg';
import { Nav } from './../nav/Nav';
import { Vk } from '../../vk/Vk';

export const PcMenu: React.FC = () => {
  return <div className='pc-menu'>
    <Link to='/'>
      <img src={logo} className='pc-menu__logo' alt='logo' />
    </Link>
    <Nav />
    <a className='pc-menu__phone' href='tel:+74959897723'>8 (495) 989 - 77 23</a>
    <Vk />
  </div>
};