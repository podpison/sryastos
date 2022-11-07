import './balashikhaInterier.scss';
import img1 from '../../../../../../assets/img/shops/balashikha/1.webp';
import img2 from '../../../../../../assets/img/shops/balashikha/2.webp';
import img3 from '../../../../../../assets/img/shops/balashikha/3.webp';
import img4 from '../../../../../../assets/img/shops/balashikha/4.webp';
import img5 from '../../../../../../assets/img/shops/balashikha/5.webp';

export const BalashikhaInterier: React.FC = () => {
  return <section className='interier balashikha-interier' id='interier'>
    <img className='interier__img1' src={img1} alt='image 1' />
    <div className='interier__inner1'>
      <img className='interier__img2' src={img2} alt='image 2' />
      <img className='interier__img3' src={img3} alt='image 3' />
    </div>
    <div className='interier__inner2'>
      <img className='interier__img4' src={img4} alt='image 4' />
      <img className='interier__img5' src={img5} alt='image 5' />
    </div>
  </section>
};