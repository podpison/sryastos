import './mobileMenu.scss';
import burger from './../../../../assets/img/burger.svg';
import { useState, useEffect, useRef } from 'react';
import { Nav } from '../nav/Nav';
import closeMenuIcon from './../../../../assets/img/close.svg'; //Close icon by Icons8
import logo from './../../../../assets/img/logo.svg';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Vk } from '../../vk/Vk';
import { Phone } from '../../phone/Phone';

export const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const shadowRef = useRef<HTMLDivElement>(null);

  const handleOpenStatus = () => setIsOpen(prev => !prev);
  const closeBurger = () => setIsOpen(false);

  useEffect(() => {
    const callback = (e: MouseEvent) => {
      if (isOpen && e.target === shadowRef.current) {
        closeBurger();
      };
    };

    document.addEventListener('click', callback);
    return () => document.removeEventListener('click', callback);
  }, [isOpen, shadowRef]);

  return <div className={cn('mobile-menu', isOpen && 'mobile-menu_open')}>
    <div ref={shadowRef} className='mobile-menu__shadow' />
    <img src={burger} className='mobile-menu__burger' onClick={handleOpenStatus} alt='burger' />
    <div className='mobile-menu__inner'>
      <img src={closeMenuIcon} onClick={handleOpenStatus} className='mobile-menu__nav-closer' alt='close' />
      <Link onClick={closeBurger} className='mobile-menu__logo' to='/'>
        <img src={logo} alt='logo' />
      </Link>
      <Nav closeBurger={closeBurger} className='mobile-menu__nav' />
      <div className='mobile-menu__useful-links'>
        <Phone />
        <Vk className='mobile-menu__vk' />
      </div>
    </div>
  </div>
};