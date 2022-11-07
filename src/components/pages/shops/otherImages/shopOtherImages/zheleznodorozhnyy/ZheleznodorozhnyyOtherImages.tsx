import './zheleznodorozhnyyOtherImages.scss';
import { useCurrentShop } from './../../../../../../hooks/useCurrentShop';
import { Item } from '../../item/Item';

export const ZheleznodorozhnyyOtherImages: React.FC = () => {
  const currentShop = useCurrentShop();

  if (!currentShop) return <></>;

  const Items = currentShop.otherImgs.slice(3).map((i, index) => <Item {...i} index={index} key={index} />)

  return <section className='other-images zheleznodorozhnyy-other-images'>
    <div className='other-images__inner1'>
      {Items.slice(0, 2)}
    </div>
    <div className='other-images__inner2'>
      {Items.slice(2)}
    </div>
  </section>
};