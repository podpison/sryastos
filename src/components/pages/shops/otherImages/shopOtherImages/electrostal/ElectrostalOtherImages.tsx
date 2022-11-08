import './electrostalOtherImages.scss';
import { useCurrentShop } from './../../../../../../hooks/useCurrentShop';
import { Item } from './../../item/Item';

export const ElectrostalOtherImages: React.FC = () => {
  const currentShop = useCurrentShop();

  if (!currentShop) return <></>;

  const Items = currentShop.otherImgs.slice(3).map((i, index) => <Item {...i} index={index} key={index} />)

  return <section className='other-images electrostal-other-images'>
    {Items.slice(0, 1)}
    <div className='other-images__inner1'>
      {Items.slice(1)}
    </div>
  </section>
};