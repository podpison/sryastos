import './hashLinks.scss';
import { HashLinksItem, Item } from './item/Item';
import cn from 'classnames';

type Props = {
  data: HashLinksItem[]
  className?: string
}

export const HashLinks: React.FC<Props> = ({ data, className }) => {
  const Items = data.map((i, index) => <Item {...i} key={index} />);

  return <nav className={cn('hashLinks', className)}>
    <ul className='hashLinks__inner'>
      {Items}
    </ul>
  </nav>
};