import { Experements } from './experements/Experements';
import './menu.scss';

export const Menu: React.FC = () => {
  return <section className='main-page__menu'>
    <div className='main-page__menu-heading-container'>
      <h3 className='main-page__menu-heading'>Меню</h3>
    </div>
    <Experements />
  </section>
};