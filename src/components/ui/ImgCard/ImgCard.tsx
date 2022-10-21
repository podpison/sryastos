import './ImgCard.scss';
import cn from 'classnames';

type Props = {
  src: string
  name?: string
  className?: string
}

export const ImgCard: React.FC<Props> = ({ src, name, className }) => {
  return <div className={cn('img-card', className)}>
    <img src={src} className='img-card__img' alt='card image' />
    {name && <p className='img-card__name'>{name}</p>}
  </div>
};