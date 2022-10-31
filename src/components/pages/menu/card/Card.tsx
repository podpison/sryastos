import { capacityHelper } from '../../../../helpers/capacityHelper';
import { MenuCardItemType } from '../../../../redux/reducers/static';
import './card.scss';

export const Card: React.FC<MenuCardItemType> = ({ capacity, description, name, src, kbju }) => {
  let { capacities, prices } = capacityHelper(capacity);

  return <div className='card'>
    <div className='card__inner'>
      <div className='card__front'>
        <div className='card__name-and-price'>
          <h6 className='card__name'>{name}</h6>
          <img className='card__img' src={src} alt='product' />
        </div>
        <p className='card__description'>{description}</p>
        <div className='card__capacity-and-prices'>
          <p className='card__capacity'>{capacities} мл.</p>
          <p className='card__prices'>{prices}₽</p>
        </div>
      </div>
      <div className='card__back'>
        <h6 className='card__heading'>КБЖУ</h6>
        <ul className='card__kbju-container'>
          <li className='card__item'>Калории {kbju.calories}</li>
          <li className='card__item'>Белки {kbju.proteins}</li>
          <li className='card__item'>Жиры {kbju.fats}</li>
          <li className='card__item'>Углеводы {kbju.carbohydrates}</li>
        </ul>
      </div>
    </div>
  </div>
};