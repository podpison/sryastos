import './item.scss';
import { shops } from './../../../main/otherCoffeShops/OtherCoffeShops';
import cn from 'classnames';

type Props = {
  index: number
} & typeof shops[0]['otherImgs'][0];

export const Item: React.FC<Props> = ({ src, sign, index }) => {
  const id = index + 1;
  const componentClassName = `other-images__img${id}-container`;

  return <div className={cn(componentClassName, 'other-images__img-container', sign && `other-images__img-container_signed`)}>
    <img className={`other-images__img${id}`} src={src} alt={`image${id}`} />
    {sign && <p className='other-images__sign'>{sign}</p>}
  </div>
};