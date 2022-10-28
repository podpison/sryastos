import { shops } from '../../main/otherCoffeShops/OtherCoffeShops';
import './header.scss';

const navItems = ['Локация', 'Интерьер', 'Оставить отзыв', 'Карта', 'Event'];

type Props = {
  shopName: string
}

export const Header: React.FC<Props> = ({ shopName }) => {
  const currentShop = shops.find(s => s.to === shopName);
  const NavItems = navItems.map((i, index) => <li className='shops-page__nav-item' key={index}>{i}</li>);

  return <section className='shops-page__header'>
    <h1>Sorrrybabuska<br />{currentShop?.name || ''}</h1>
    <div className='shops-page__shop-information'>
      <div>
        <h5>Время работы</h5>
        <p>{currentShop?.workingHours || ''}</p>
      </div>
      <div>
        <h5>Адрес</h5>
        <p>{currentShop?.address || ''}</p>
      </div>
    </div>
    <nav className='shops-page__nav'>
      <ul className='shops-page__nav-inner'>
        {NavItems}
      </ul>
    </nav>
  </section>
};