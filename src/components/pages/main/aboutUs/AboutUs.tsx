import './aboutUs.scss';
import img1 from './../../../../assets/img/aboutUs/1.webp';
import img2 from './../../../../assets/img/aboutUs/2.webp';
import img3 from './../../../../assets/img/aboutUs/3.webp';
import { ImgCard } from '../../../ui/ImgCard/ImgCard';

export const AboutUs: React.FC = () => {
  return <div className='about-us'>
    <img className='about-us__img1' src={img1} alt='our cup' />
    <div className='about-us__content'>
      <div className='about-us__img-cards'>
        <ImgCard className='about-us__img-card' src={img2} />
        <ImgCard className='about-us__img-card' src={img3} />
      </div>
      <div className='abous_us_info'>
        <h2 className='abous_us_info-heading'>О нас</h2>
        <p className='abous_us_info-description'>Мы варим кофе, создаем крутые пространства, где каждый может почувствовать себя на маленьком острове в каменных джунглях.<br />Мы за качество, необычные вкусы и дружественную атмосферу, которую создают наши бариста</p>
      </div>
    </div>
  </div>
};