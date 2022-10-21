import './recordCard.scss';
import recordCardImg from './../../../../assets/img/card/card.webp'

export const RecordCard: React.FC = () => {
  return <section className='main-page__record-card'>
    <img src={recordCardImg} className='main-page__record-card-card' alt='record card' />
    <div className='main-page__record-card-vector-container'>
      <div className='main-page__record-card-vector' />
    </div>
  </section>
};