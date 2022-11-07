import './noginskOtherImages.scss';
import { useCurrentShop } from './../../../../../../hooks/useCurrentShop';
import { Item } from '../../item/Item';

export const NoginskOtherImages: React.FC = () => {
  const currentShop = useCurrentShop();
  const Items = currentShop?.otherImgs.map((i, index) => <Item {...i} index={index} key={index} />)

  return <section className='other-images noginsk-other-images'>
    <div className='other-images__inner1'>
      {Items?.slice(0, 2)}
    </div>
    {Items?.slice(2)}
  </section>
};