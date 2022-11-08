import { useCurrentShop } from '../../../../hooks/useCurrentShop';
import './location.scss';
import leaf1 from './../../../../assets/img/leaf/4.webp';
import leaf2 from './../../../../assets/img/leaf/5.webp';
import leaf3 from './../../../../assets/img/leaf/3.webp';
import { Leaf } from '../../../ui/laef/Leaf';

export const Location: React.FC = () => {
  const location = useCurrentShop()?.location || ['', ''];

  return <section className='location' id='location'>
    <Leaf src={leaf1} className='location__leaf1' />
    <Leaf src={leaf2} className='location__leaf2' />
    <Leaf src={leaf3} className='location__leaf3' />
    <Leaf src={leaf2} className='location__leaf4' />
    <div className='location__inner'>
      <h2 className='location__heading'>Локация</h2>
      <p className='location__item'>{location[0]}</p>
      <p className='location__item'>{location[1]}</p>
    </div>
  </section>
};