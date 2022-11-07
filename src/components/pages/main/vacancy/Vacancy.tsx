import './vacancy.scss';
import employeeImg from './../../../../assets/img/main_page/vacancy/vacancy.webp';
import { Leaf } from './../../../ui/laef/Leaf';
import leaf from './../../../../assets/img/leaf/6.webp';

export const Vacancy: React.FC = () => {
  return <section id='vacancy' className='vacancy'>
    <div className='vacancy__vector-container'>
      <div className='vacancy__vector'/>
    </div>
    <img src={employeeImg} className='vacancy__employee' alt='employee' />
    <div className='vacancy__content'>
      <h3 className='vacancy__sign1'>Вакансии</h3>
      <div className='vacancy__sings23'>
        <h4 className='vacancy__sign2'>Стань частью команды</h4>
        <p className='vacancy__sign3'>Работа в сети кофейн</p>
      </div>
      <button className='vacancy__button'>Заполнить анкету</button>
    </div>
    <Leaf src={leaf} className='vacancy__leaf' />
  </section>
};