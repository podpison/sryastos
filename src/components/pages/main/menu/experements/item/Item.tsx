import './item.scss';

type Props = {
  src: string
  name: string
  description: string
}

export const Item: React.FC<Props> = ({ description, name, src }) => {
  return <div style={{backgroundImage: `url(${src})`}} className='main-page__experements-item'>
    <h6 className='main-page__experements-items-heading'>{name}</h6>
    <p className='main-page__experements-items-description'>{description}</p>
  </div>
};