import './interier.scss';
import img1 from '../../../../assets/img/shops/balashikha/1.webp';
import img2 from '../../../../assets/img/shops/balashikha/2.webp';
import img3 from '../../../../assets/img/shops/balashikha/3.webp';
import img4 from '../../../../assets/img/shops/balashikha/4.webp';

export const Interier: React.FC = () => {
  return <section className='interier' id='interier'>
    <img className='interier__img1' src={img1} alt='image 1' />
    <img className='interier__img2' src={img2} alt='image 2' />
    <div className='interier__inner1'>
      <img className='interier__img3' src={img3} alt='image 3' />
      <img className='interier__img4' src={img4} alt='image 4' />
    </div>
  </section>
};