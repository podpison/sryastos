import './weVoteFor.scss';
import item1Img from './../../../../assets/img/weVoteFor/1.webp';
import item2Img from './../../../../assets/img/weVoteFor/2.webp';
import item3Img from './../../../../assets/img/weVoteFor/3.webp';
import item4Img from './../../../../assets/img/weVoteFor/4.webp';
import { ImgCard } from '../../../ui/ImgCard/ImgCard';

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
  const Cards = cardsData.map((c, index) => <ImgCard {...c} key={index} />)

  return <div className='we-vote-for'>
    <h3 className='we-vote-for__heading'>Мы топим за..</h3>
    <div className='we-vote-for__items'>{Cards}</div>
  </div>
};