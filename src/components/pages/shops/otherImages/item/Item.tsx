import './item.scss';
import { shops } from './../../../main/otherCoffeShops/OtherCoffeShops';

type Props = {
  index: number
} & typeof shops[0]['otherImgs'][0];

export const Item: React.FC<Props> = ({ src, sign, index }) => {
  const id = index + 1;

  return <div className={`otherImages__img${id}-container`}>
    <img className={`otherImages__img${id}`} src={src} alt={`image${id}`} />
    {sign && <p className='otherImage__sign'>{sign}</p>}
  </div>
};