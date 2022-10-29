import './hashLinks.scss';
import { HashLinksItem, Item } from './item/Item';

type Props = {
  data: HashLinksItem[]
}

export const HashLinks: React.FC<Props> = ({ data }) => {
  const Items = data.map((i, index) => <Item {...i} key={index} />);

  return <nav className='hashLinks'>
    <ul className='hashLinks__inner'>
      {Items}
    </ul>
  </nav>
};