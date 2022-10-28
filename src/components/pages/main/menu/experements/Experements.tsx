import './experements.scss';
import item1Img from './../../../../../assets/img/main_page/experement/1.webp';
import item2Img from './../../../../../assets/img/main_page/experement/2.webp';
import item3Img from './../../../../../assets/img/main_page/experement/3.webp';
import item4Img from './../../../../../assets/img/main_page/experement/4.webp';
import item5Img from './../../../../../assets/img/main_page/experement/5.webp';
import item6Img from './../../../../../assets/img/main_page/experement/6.webp';
import { Item } from './item/Item';
import leaf3 from './../../../../../assets/img/main_page/leaf/3.webp';
import leaf4 from './../../../../../assets/img/main_page/leaf/4.webp';
import leaf5 from './../../../../../assets/img/main_page/leaf/5.webp';
import { Leaf } from '../../../../ui/laef/Leaf';

const items = [
  {
    src: item1Img,
    name: 'Кофе',
    description: 'Для ценителей кофейной классики всегда найдется местечко под нашими пальмами что бы сбежать от городской суеты и насладиться вкусом свежесваренного эспрессо или чашечкой капучино'
  },
  {
    src: item2Img,
    name: 'Авторские',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat suscipit quibusdam aspernatur earum incidunt quos nostrum exercitationem quo! Quibusdam, maxime?'
  },
  {
    src: item3Img,
    name: 'Смузи',
    description: 'Делаем смузи из натуральных ягод и фруктов прямиком с солнечного острова Бали!'
  },
  {
    src: item4Img,
    name: 'Ice кофе',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat suscipit quibusdam aspernatur earum incidunt quos nostrum exercitationem quo! Quibusdam, maxime?'
  },
  {
    src: item5Img,
    name: 'Чай_какао',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat suscipit quibusdam aspernatur earum incidunt quos nostrum exercitationem quo! Quibusdam, maxime?'
  },
  {
    src: item6Img,
    name: 'Покушать',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat suscipit quibusdam aspernatur earum incidunt quos nostrum exercitationem quo! Quibusdam, maxime?'
  }
]

export const Experements: React.FC = () => {
  const Items = items.map((i, index) => <Item {...i} key={index} />)

  return <div className='main-page__experements'>
    <Leaf className='main-page__leaf3' src={leaf3} />
    <Leaf className='main-page__leaf4' src={leaf4} />
    <Leaf className='main-page__leaf5' src={leaf5} />
    <h5 className='main-page__experements-heading'>Мы любим эксперименты, интересные вкусы и не боимся ломать стереотипы!</h5>
    <div className='main-page__experements-items'>
      {Items}
    </div>
  </div>
};