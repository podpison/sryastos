import './item.scss';

type Props = {
  src: string
  name: string
  description: string
}

export const Item: React.FC<Props> = ({ description, name, src }) => {
  return <div className='main-page__experements-item'>
    <img className='main-page__experements-item-img' src={src} alt='experement' />
    <h6 className='main-page__experements-items-heading'>{name}</h6>
    <p className='main-page__experements-items-description'>{description}</p>
  </div>
};