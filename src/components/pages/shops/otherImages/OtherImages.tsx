import './otherImages.scss';
import { useCurrentShop } from '../../../../hooks/useCurrentShop';
import { Item } from './item/Item';

//I do understand that the component name is totaly awful but I hope that I'll change it to smth better
export const OtherImages: React.FC = () => {
  const currentShop = useCurrentShop();
  const Items = currentShop?.otherImgs.map((i, index) => <Item {...i} index={index} key={index} />)

  return <section className='other-images'>
    <div className='other-images__inner1'>
      {Items?.slice(0, 2)}
    </div>
    {Items?.slice(2)}
  </section>
};