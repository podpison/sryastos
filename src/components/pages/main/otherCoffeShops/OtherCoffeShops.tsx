import './otherCoffeShops.scss';
import shop1Img from './../../../../assets/img/main_page/otherCoffeShops/1.webp';
import shop2Img from './../../../../assets/img/main_page/otherCoffeShops/2.webp';
import shop3Img from './../../../../assets/img/main_page/otherCoffeShops/3.webp';
import shop4Img from './../../../../assets/img/main_page/otherCoffeShops/4.webp';
import noginsk1 from '../../../../assets/img/shops/noginsk/5.webp';
import noginsk2 from '../../../../assets/img/shops/noginsk/6.webp';
import noginsk3 from '../../../../assets/img/shops/noginsk/7.webp';
import noginsk4 from '../../../../assets/img/shops/noginsk/8.webp';
import noginsk5 from '../../../../assets/img/shops/noginsk/9.webp';
import balashikha1 from '../../../../assets/img/shops/balashikha/2.webp';
import balashikha2 from '../../../../assets/img/shops/balashikha/3.webp';
import balashikha3 from '../../../../assets/img/shops/balashikha/4.webp';
import balashikha4 from '../../../../assets/img/shops/balashikha/5.webp';
import balashikha5 from '../../../../assets/img/shops/balashikha/6.webp';
import balashikha6 from '../../../../assets/img/shops/balashikha/7.webp';
import balashikha7 from '../../../../assets/img/shops/balashikha/8.webp';
import balashikha8 from '../../../../assets/img/shops/balashikha/9.webp';
import balashikha9 from '../../../../assets/img/shops/balashikha/10.webp';
import zheleznodorozhnyy1 from '../../../../assets/img/shops/zheleznodorozhnyy/2.webp';
import zheleznodorozhnyy2 from '../../../../assets/img/shops/zheleznodorozhnyy/3.webp';
import zheleznodorozhnyy3 from '../../../../assets/img/shops/zheleznodorozhnyy/4.webp';
import zheleznodorozhnyy4 from '../../../../assets/img/shops/zheleznodorozhnyy/5.webp';
import zheleznodorozhnyy5 from '../../../../assets/img/shops/zheleznodorozhnyy/6.webp';
import zheleznodorozhnyy6 from '../../../../assets/img/shops/zheleznodorozhnyy/7.webp';
import zheleznodorozhnyy7 from '../../../../assets/img/shops/zheleznodorozhnyy/8.webp';
import zheleznodorozhnyy8 from '../../../../assets/img/shops/zheleznodorozhnyy/9.webp';
import electrostal1 from '../../../../assets/img/shops/electrostal/2.webp';
import electrostal2 from '../../../../assets/img/shops/electrostal/3.webp';
import electrostal3 from '../../../../assets/img/shops/electrostal/4.webp';
import electrostal4 from '../../../../assets/img/shops/electrostal/5.webp';
import electrostal5 from '../../../../assets/img/shops/electrostal/6.webp';
import electrostal6 from '../../../../assets/img/shops/electrostal/7.webp';
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
    phone: '+7 (495) 989 - 77 - 23',
    otherImgs: [
      {
        src: balashikha1,
        sign: null
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
        sign: null
      },
      {
        src: balashikha6,
        sign: null
      },
      {
        src: balashikha6,
        sign: null
      },
      {
        src: balashikha7,
        sign: null
      },
      {
        src: balashikha8,
        sign: null
      },
      {
        src: balashikha9,
        sign: null
      },
    ]
  },
  {
    name: 'Ногинск',
    address: 'ул. 3-го интерниционала 67',
    src: shop2Img,
    to: 'noginsk',
    workingHours: '10:00 - 22:00',
    phone: '+7 (495) 989 - 77 - 23',
    otherImgs: [
      {
        src: noginsk1,
        sign: 'Внутри тепло, уютно и душевно!'
      },
      {
        src: noginsk2,
        sign: null
      },
      {
        src: noginsk3,
        sign: null
      },
      {
        src: noginsk4,
        sign: null
      },
      {
        src: noginsk5,
        sign: 'Любимые гости'
      },
    ]
  },
  {
    name: 'Железнодорожный',
    address: 'ул. новая 16',
    src: shop3Img,
    to: 'zheleznodorozhnyy',
    workingHours: '10:00 - 22:00',
    phone: '+7 (495) 989 - 77 - 23',
    otherImgs: [
      {
        src: zheleznodorozhnyy1,
        sign: null
      },
      {
        src: zheleznodorozhnyy2,
        sign: null
      },
      {
        src: zheleznodorozhnyy3,
        sign: null
      },
      {
        src: zheleznodorozhnyy4,
        sign: null
      },
      {
        src: zheleznodorozhnyy5,
        sign: null
      },
      {
        src: zheleznodorozhnyy6,
        sign: null
      },
      {
        src: zheleznodorozhnyy7,
        sign: null
      },
      {
        src: zheleznodorozhnyy8,
        sign: null
      },
    ]
  },
  {
    name: 'Электросталь',
    address: 'ПР-т. ленина 45',
    src: shop4Img,
    to: 'electrostal',
    workingHours: '10:00 - 22:00',
    phone: '+7 (495) 989 - 77 - 23',
    otherImgs: [
      {
        src: electrostal1,
        sign: null
      },
      {
        src: electrostal2,
        sign: null
      },
      {
        src: electrostal3,
        sign: null
      },
      {
        src: electrostal4,
        sign: null
      },
      {
        src: electrostal5,
        sign: null
      },
      {
        src: electrostal6,
        sign: null
      },
    ]
  },
]
export type ShopType = typeof shops[0];

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