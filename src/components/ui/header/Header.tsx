import './header.scss';
import { MobileMenu } from './mobileMenu/MobileMenu';
import { PcMenu } from './pcMenu/pcMenu';

export const Header: React.FC = () => {
  return <header className='header'>
    <PcMenu />
    <MobileMenu />
  </header>
};