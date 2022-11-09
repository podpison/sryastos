import { Link } from 'react-router-dom';
import './pcMenu.scss';
import logo from './../../../../assets/img/logo.svg';
import { Nav } from './../nav/Nav';
import { Vk } from '../../vk/Vk';
import { Phone } from './../../phone/Phone';

export const PcMenu: React.FC = () => {
  return <div className='pc-menu'>
    <Link to='/'>
      <img src={logo} className='pc-menu__logo' alt='logo' />
    </Link>
    <Nav />
    <Phone />
    <Vk />
  </div>
};