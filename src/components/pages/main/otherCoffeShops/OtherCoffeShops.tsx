import './otherCoffeShops.scss';
import shop1Img from './../../../../assets/img/main_page/otherCoffeShops/1.webp';
import shop2Img from './../../../../assets/img/main_page/otherCoffeShops/2.webp';
import shop3Img from './../../../../assets/img/main_page/otherCoffeShops/3.webp';
import shop4Img from './../../../../assets/img/main_page/otherCoffeShops/4.webp';
import balashikha1 from '../../../../assets/img/shops/balashikha/5.webp';
import balashikha2 from '../../../../assets/img/shops/balashikha/6.webp';
import balashikha3 from '../../../../assets/img/shops/balashikha/7.webp';
import balashikha4 from '../../../../assets/img/shops/balashikha/8.webp';
import balashikha5 from '../../../../assets/img/shops/balashikha/9.webp';
import { Item } from './item/Item';
import leaf2 from './../../../../assets/img/main_page/leaf/2.webp';
import { Leaf } from '../../../ui/laef/Leaf';

export const shops = [
  {
    name: 'Балашиха',
    address: 'ул. Советская, влд. 4В',
    src: shop1Img,
    to: 'balashikha',
    workingHours: '10:00 - 22:00',
    otherImgs: [
      {
        src: balashikha1,
        sign: 'Внутри тепло, уютно и душевно!'
      },
      {
        src: balashikha2,
        sign: null
      },
      {
        src: balashikha3,
        sign: null
      },
      {
        src: balashikha4,
        sign: null
      },
      {
        src: balashikha5,
        sign: 'Любимые гости'
      },
    ]
  },
  {
    name: 'Ногинск',
    address: 'ул. 3-го интерниционала 67',
    src: shop2Img,
    to: 'noginsk',
    workingHours: '10:00 - 22:00',
    otherImgs: []
  },
  {
    name: 'Железнодорожный',
    address: 'ул. новая 16',
    src: shop3Img,
    to: 'zheleznodorozhnyy',
    workingHours: '10:00 - 22:00',
    otherImgs: []
  },
  {
    name: 'Электросталь',
    address: 'ПР-т. ленина 45',
    src: shop4Img,
    to: 'electrostal',
    workingHours: '10:00 - 22:00',
    otherImgs: []
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