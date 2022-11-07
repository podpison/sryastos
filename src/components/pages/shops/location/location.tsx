import { useCurrentShop } from '../../../../hooks/useCurrentShop';
import './location.scss';

export const Location: React.FC = () => {
  const location = useCurrentShop()?.location || ['', ''];

  return <section className='location' id='location'>
    <div className='location__inner'>
      <h2 className='location__heading'>Локация</h2>
      <p className='location__item'>{location[0]}</p>
      <p className='location__item'>{location[1]}</p>
    </div>
  </section>
};