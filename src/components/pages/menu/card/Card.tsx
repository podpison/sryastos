import { capacityHelper } from '../../../../helpers/capacityHelper';
import { MenuCardItemType } from '../../../../redux/reducers/static';
import './card.scss';

export const Card: React.FC<MenuCardItemType> = ({ capacity, description, name, src }) => {
  let { capacities, prices } = capacityHelper(capacity);

  return <div className='card'>
    <div className='card__name-and-price'>
      <p className='card__name'>{name}</p>
      <img className='card__img' src={src} alt='product' />
    </div>
    <p className='card__description'>{description}</p>
    <div className='card__capacity-and-prices'>
      <p className='card__capacity'>{capacities} мл.</p>
      <p className='card__prices'>{prices}₽</p>
    </div>
  </div>
};