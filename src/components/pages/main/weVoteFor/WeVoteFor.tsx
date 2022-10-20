import './weVoteFor.scss';
import item1Img from './../../../../assets/img/weVoteFor/1.webp';
import item2Img from './../../../../assets/img/weVoteFor/2.webp';
import item3Img from './../../../../assets/img/weVoteFor/3.webp';
import item4Img from './../../../../assets/img/weVoteFor/4.webp';
import { Item } from './item/Item';

const cardsData = [
  {
    src: item1Img,
    name: 'Крутые локации'
  },
  {
    src: item2Img,
    name: 'Атмосфера Бали'
  },
  {
    src: item3Img,
    name: 'Авторское меню'
  },
  {
    src: item4Img,
    name: 'Люди'
  },
]

export const WeVoteFor: React.FC = () => {
  const Cards = cardsData.map((c, index) => <Item {...c} key={index} />)

  return <div className='weVoteFor'>
    <h3 className='weVoteFor__heading'>Мы топим за..</h3>
    <div className='weVoteFor__items'>{Cards}</div>
  </div>
};