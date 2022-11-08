import './menu.scss';
import { useScrollTop } from './../../../hooks/useScrollTop';
import { Menu as Header } from './../../ui/menu/Menu';
import { HashLinks } from '../../ui/hashLinks/HashLinks';
import { useStaticItems } from '../../../hooks/useStaticItems';
import { useSelector } from 'react-redux';
import { selectMenuItems } from '../../../redux/selectors';
import { Category } from './category/Category';
import { Subcategory } from './subcategory/Subcategory';
import { CoffeeItem } from './coffeeItem/CoffeeItem';
import { CoffeeItemType, MenuCardType } from '../../../redux/reducers/static';
import { Card } from './card/Card';
import { Leaf } from '../../ui/laef/Leaf';
// import leaf1 from '../../../assets/img/menu/leaf/1.webp';
// import leaf2 from '../../../assets/img/menu/leaf/2.webp';

const isCoffeeType = (item: CoffeeItemType | MenuCardType): item is CoffeeItemType => {
  return (item as CoffeeItemType).subcategory !== undefined;
};

const hashLinks = [
  {
    name: 'Кофе',
    hash: 'coffee'
  },
  {
    name: 'Авторские',
    hash: 'authors'
  },
  {
    name: 'Ice Кофе',
    hash: 'ice_coffee'
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
];
const samePriceItemsItem = {
  capacity: [
    {
      capacity: '250',
      price: '75'
    },
    {
      capacity: '350',
      price: '120'
    },
    {
      capacity: '450',
      price: '150'
    },
  ],
  name: 'К объему',
};

export const Menu: React.FC = () => {
  useScrollTop();
  useStaticItems('menu');

  let categories = useSelector(selectMenuItems);

  let coffeeCategoryIndex = categories.findIndex(c => c.category === 'Кофе');
  //@ts-ignore
  let categoriesInRightOrder: typeof categories = categories.filter(c => c.category !== 'Кофе');
  //@ts-ignore
  categories.length !== 0 ? categoriesInRightOrder.unshift(categories[coffeeCategoryIndex]) : [];

  let Categories = categoriesInRightOrder.map((c, index) => {
    if (isCoffeeType(c)) {
      let Items = c.items.map((i, index) => <CoffeeItem className='menu-page__item' {...i} key={index} />);
      let SamePriceItems = c.samePriceItems.map((i, index) => <CoffeeItem className='menu-page__same-price-item' {...i} key={index} />);

      return <Category {...c} key={index}>
        <Subcategory subcategory={c.subcategory}>
          <div className='menu-page__coffee'>
            {/* <Leaf className='menu-page__leaf2' src={leaf2} /> */}
            <div className='menu-page__items'>
              {Items}
            </div>
            <div className='menu-page__same-price-items'>
              <div className='menu-page__items'>
                {SamePriceItems}
              </div>
              <p className='menu-page__note'>Любой напиток можем приготовить на растительном молоке: кокосовом/соевом/миндальном</p>
              <CoffeeItem className='menu-page__to-volume' {...samePriceItemsItem} plusMode />
            </div>
          </div>
        </Subcategory>
      </Category>
    }

    let Subcategories = c.subcategories.map((s, index) => {
      let Cards = s.items.map((c, index) => <Card {...c} key={index} />)

      return <Subcategory subcategory={s.name} key={index}>
        <div className='main-page__cards-container'>
          {Cards}
        </div>
      </Subcategory>
    })

    return <Category {...c} key={index}>
      {Subcategories}
    </Category>
  })

  return <main className='menu-page'>
    <Header className='menu-page__header' />
    <div className='menu-page__hash-links-container'>
      <HashLinks className='menu-page__hash-links' data={hashLinks} />
      {/* <Leaf className='menu-page__leaf1' src={leaf1} /> */}
    </div>
    <div className='menu-page__categories-container'>
      {Categories}
    </div>
    <HashLinks className='menu-page__links2' data={hashLinks} />
  </main>
};