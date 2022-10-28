import './otherImages.scss';
import img5 from '../../../../assets/img/shops/balashikha/5.webp';
import img6 from '../../../../assets/img/shops/balashikha/6.webp';
import img7 from '../../../../assets/img/shops/balashikha/7.webp';
import img8 from '../../../../assets/img/shops/balashikha/8.webp';
import img9 from '../../../../assets/img/shops/balashikha/9.webp';

//I do understand that this name is totaly awful but I hope that I'll change it to smth better

export const OtherImages: React.FC = () => {
  return <section className='otherImages'>
    <div className='otherImages__inner1'>
      <img className='otherImages__img5' src={img5} alt='image 5' />
      <img className='otherImages__img6' src={img6} alt='image 6' />
    </div>
    <img className='otherImages__img7' src={img7} alt='image 7' />
    <img className='otherImages__img8' src={img8} alt='image 8' />
    <img className='otherImages__img9' src={img9} alt='image 9' />
  </section>
};