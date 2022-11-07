import './balashihaOtherImages.scss';
import { useCurrentShop } from './../../../../../../hooks/useCurrentShop';
import { Item } from '../../item/Item';

export const BalashihaOtherImages: React.FC = () => {
  const currentShop = useCurrentShop();
  const Items = currentShop?.otherImgs.map((i, index) => <Item {...i} index={index} key={index} />)

  return <section className='other-images'>
    <div className='other-images__inner1'>
      {Items?.slice(0, 4)}
    </div>
    {Items?.slice(4)}
  </section>
};