import { HashLinks } from '../../../ui/hashLinks/HashLinks';
import { shops } from '../../main/otherCoffeShops/OtherCoffeShops';
import './header.scss';

const hashLinks = [
  {
    name: 'Интерьер',
    hash: 'interier'
  },
  {
    name: 'Локация',
    hash: 'location'
  },
  {
    name: 'Оставить отзыв',
    hash: 'review'
  },
  {
    name: 'Карта',
    hash: 'map'
  },
];

type Props = {
  shopName: string
}

export const Header: React.FC<Props> = ({ shopName }) => {
  const currentShop = shops.find(s => s.to === shopName);

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
    <HashLinks data={hashLinks} />
  </section>
};