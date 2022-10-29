import './mobileMenu.scss';
import burger from './../../../../assets/img/burger.svg';
import { useState, useEffect, useRef } from 'react';
import { Nav } from '../nav/Nav';
import closeMenuIcon from './../../../../assets/img/close.svg'; //Close icon by Icons8
import logo from './../../../../assets/img/logo.svg';
import cn from 'classnames';
import { Link } from 'react-router-dom';

export const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const shadowRef = useRef<HTMLDivElement>(null);

  const handleOpenStatus = () => setIsOpen(prev => !prev);

  useEffect(() => {
    const callback = (e: MouseEvent) => {
      (isOpen && e.target === shadowRef.current) && setIsOpen(false);
    };

    document.addEventListener('click', callback);
    return () => document.removeEventListener('click', callback);
  }, [shadowRef]);

  return <div className={cn('mobile-menu', isOpen && 'mobile-menu_open')}>
    <div ref={shadowRef} className='mobile-menu__shadow' />
    <img src={burger} className='mobile-menu__burger' onClick={handleOpenStatus} alt='burger' />
    <div className='mobile-menu__inner'>
      <Link to='/'>
        <img className='mobile-menu__logo' src={logo} alt='logo' />
      </Link>
      <Nav className='mobile-menu__nav' />
      <img src={closeMenuIcon} onClick={handleOpenStatus} className='mobile-menu__nav-closer' alt='close' />
    </div>
  </div>
};