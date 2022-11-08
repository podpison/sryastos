import './electrostalInterier.scss';
import img1 from '../../../../../../assets/img/shops/electrostal/1.webp';
import img2 from '../../../../../../assets/img/shops/electrostal/2.webp';
import img3 from '../../../../../../assets/img/shops/electrostal/3.webp';
import img4 from '../../../../../../assets/img/shops/electrostal/4.webp';

export const ElectrostalInterier: React.FC = () => {
  return <section className='interier electrostal-interier' id='interier'>
    <img className='interier__img1' src={img1} alt='image 1' />
    <div className='electrostal-inner1'>
      <img className='interier__img2' src={img2} alt='image 2' />
      <img className='interier__img3' src={img3} alt='image 3' />
      <img className='interier__img4' src={img4} alt='image 4' />
    </div>
  </section>
};