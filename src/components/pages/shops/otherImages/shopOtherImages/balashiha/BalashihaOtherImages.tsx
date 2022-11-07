import './balashihaOtherImages.scss';
import { useCurrentShop } from './../../../../../../hooks/useCurrentShop';
import { Item } from '../../item/Item';

export const BalashihaOtherImages: React.FC = () => {
  const currentShop = useCurrentShop();

  if (!currentShop) return <></>;

  const Items = currentShop.otherImgs.slice(4).map((i, index) => <Item {...i} index={index} key={index} />)

  return <section className='other-images balashiha-other-images'>
    {Items[0]}
    <div className='other-images__inner1'>
      {Items.slice(1, 3)}
    </div>
    <div className='other-images__inner2'>
      {Items.slice(3)}
    </div>
  </section>
};