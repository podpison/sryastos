import './otherCoffeShops.scss';
import shop1Img from './../../../../assets/img/main_page/otherCoffeShops/1.webp';
import shop2Img from './../../../../assets/img/main_page/otherCoffeShops/2.webp';
import shop3Img from './../../../../assets/img/main_page/otherCoffeShops/3.webp';
import shop4Img from './../../../../assets/img/main_page/otherCoffeShops/4.webp';
import { Item } from './item/Item';
import leaf2 from './../../../../assets/img/main_page/leaf/2.webp';
import { Leaf } from '../../../ui/laef/Leaf';

export const shops = [
  {
    name: 'Балашиха',
    address: 'ул. Советская, влд. 4В',
    src: shop1Img,
    to: 'balashikha',
    workingHours: '10:00 - 22:00'
  },
  {
    name: 'Ногинск',
    address: 'ул. 3-го интерниционала 67',
    src: shop2Img,
    to: 'noginsk',
    workingHours: '10:00 - 22:00'
  },
  {
    name: 'Железнодорожный',
    address: 'ул. новая 16',
    src: shop3Img,
    to: 'zheleznodorozhnyy',
    workingHours: '10:00 - 22:00'
  },
  {
    name: 'Электросталь',
    address: 'ПР-т. ленина 45',
    src: shop4Img,
    to: 'electrostal',
    workingHours: '10:00 - 22:00'
  },
]

export const OtherCoffeShops: React.FC = () => {
  const Shops = shops.map((s, index) => <Item {...s} key={index} />)

  return <section className='other-coffe-shops'>
    <Leaf src={leaf2} className='other-coffe-shops__leaf' />
    <h1 className='other-coffe-shops__heading'>Наше небо всегда в пальмах!<br />В каждом городе...</h1>
    <div id='coffe-shops' className='other-coffe-shops__items'>
      {Shops}
    </div>
  </section>
};