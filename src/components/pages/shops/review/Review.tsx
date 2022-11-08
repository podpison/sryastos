import './review.scss';
import yandexImg from './../../../../assets/img/shops/yandex.webp';
import leaf1 from './../../../../assets/img/shops/leaf/1.webp';
import { Leaf } from './../../../ui/laef/Leaf';

export const Review: React.FC = () => {
  return <div className='review' id='review'>
    <Leaf src={leaf1} className='review__leaf1' />
    <h2 className='review__heading'>Оставь свой отзыв</h2>
    <a href='https://cloud.yandex.com/en-ru/services/forms' className='review__yandex-img' target="_blank" rel="noopener noreferrer">
      <img src={yandexImg} alt='yandex' />
    </a>
  </div>
};