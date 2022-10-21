import './otherCoffeShops.scss';
import shop1Img from './../../../../assets/img/otherCoffeShops/1.webp';
import shop2Img from './../../../../assets/img/otherCoffeShops/2.webp';
import shop3Img from './../../../../assets/img/otherCoffeShops/3.webp';
import shop4Img from './../../../../assets/img/otherCoffeShops/4.webp';
import { Item } from './item/Item';

const shops = [
  {
    name: 'Балашиха',
    address: 'ул. Советская, влд. 4В',
    src: shop1Img,
    to: 'balashikha'
  },
  {
    name: 'Ногинск',
    address: 'ул. 3-го интерниционала 67',
    src: shop2Img,
    to: 'noginsk'
  },
  {
    name: 'Железнодорожный',
    address: 'ул. новая 16',
    src: shop3Img,
    to: 'zheleznodorozhnyy'
  },
  {
    name: 'Электросталь',
    address: 'ПР-т. ленина 45',
    src: shop4Img,
    to: 'electrostal'
  },
]

export const OtherCoffeShops: React.FC = () => {
  const Shops = shops.map((s, index) => <Item {...s} key={index} />)

  return <div className='other-coffe-shops'>
    <h1 className='other-coffe-shops__heading'>Наше небо всегда в пальмах! В каждом городе...</h1>
    <div className='other-coffe-shops__items'>
      {Shops}
    </div>
  </div>
};