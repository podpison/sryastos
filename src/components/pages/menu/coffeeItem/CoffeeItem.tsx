import './coffeeItem.scss';
import cn from 'classnames';
import { CoffeeItemItemType } from '../../../../redux/reducers/static';
import { capacityHelper } from '../../../../helpers/capacityHelper';

type Props = {
  plusMode?: boolean // if plus symbol before prices is required
  className?: string
} & CoffeeItemItemType

export const CoffeeItem: React.FC<Props> = ({ capacity, name, cyrup, plusMode, className }) => {
  let { capacities, prices } = capacityHelper(capacity);

  return <div className={cn('menu-page__category-item', className)}>
    <p className='menu-page__name-and-capacities'>
      <span className='menu-page__name'>{name}</span>
      <span className='menu-page__dots'>....................................................................................................................................................................................</span>
      <span className='menu-page__capacities'>{capacities} мл.</span>
    </p>
    <p className='menu-page__prices'>{plusMode && '+'}{prices}₽</p>
    {cyrup && <p className='menu-page__cyrup'>С добавлением сиропа</p>}
  </div>
};