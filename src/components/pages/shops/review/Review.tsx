import './review.scss';
import yandexImg from './../../../../assets/img/shops/balashikha/yandex.webp';

export const Review: React.FC = () => {
  return <div className='review'>
    <h2 className='review__heading'>Оставь свой отзыв</h2>
    <a href='https://cloud.yandex.com/en-ru/services/forms' className='review__yandex-img' target="_blank" rel="noopener noreferrer">
      <img src={yandexImg} alt='yandex' />
    </a>
  </div>
};