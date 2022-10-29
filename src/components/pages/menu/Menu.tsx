import './menu.scss';
import { useScrollTop } from './../../../hooks/useScrollTop';
import { Menu as Header } from './../../ui/menu/Menu';
import { HashLinks } from '../../ui/hashLinks/HashLinks';
import { useStaticItems } from '../../../hooks/useStaticItems';
import { useSelector } from 'react-redux';
import { selectMenuItems } from '../../../redux/selectors';
import { Category } from './category/Category';
import { Subcategory } from './subcategory/subcategory';

const hashLinks = [
  {
    name: 'Кофе',
    hash: 'coffee'
  },
  {
    name: 'Авторские',
    hash: 'Authors'
  },
  {
    name: 'Ice Кофе',
    hash: 'iceCoffe'
  },
  {
    name: 'Смузи',
    hash: 'smoothies'
  },
  {
    name: 'Чай_какао',
    hash: 'tea_cocoa'
  },
  {
    name: 'Покушать',
    hash: 'eat'
  },
]

export const Menu: React.FC = () => {
  useScrollTop();
  useStaticItems('menu');

  let categories = useSelector(selectMenuItems);

  let Categories = categories.map((c, index) => {
    let Items = c.items.map((i, index) => {
      let capacities = [];
      let prices = [];
      for (let item of i.capacity) {
        capacities.push(item.capacity);
        prices.push(item.price);
      };

      return <div className='menu__category-item' key={index}>
        <p className='menu__name'>{i.name}</p>
        <p className='menu__capacities'>{capacities.join('/')}</p>
        <p className='menu__prices'>{prices.join('/')}</p>
      </div>
    });

    return <Category {...c} key={index}>
      <Subcategory subcategory={c.subcategory}>
        <div className='menu__coffee'>
          {Items}
        </div>
      </Subcategory>
    </Category>
  })

  return <main className='menu-page'>
    <Header className='menu-page__header' />
    <HashLinks data={hashLinks} />
    <div className='menu-page__categories-container'>
      {Categories}
    </div>
  </main>
};