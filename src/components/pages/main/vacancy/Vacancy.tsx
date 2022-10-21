import './vacancy.scss';
import employeeImg from './../../../../assets/img/vacancy/vacancy.webp';
import vectorImg from './../../../../assets/img/vacancy/vacancy_vector.webp';

export const Vacancy: React.FC = () => {
  return <div className='vacancy'>
    <div className='vacancy__vector-container'>
      <img src={vectorImg} className='vacancy__vector' alt='vector' />
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
  </div>
};