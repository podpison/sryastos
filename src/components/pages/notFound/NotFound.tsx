import './notFound.scss';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return <main>
    <section className='not-found'>
      <h1 className='not-found__heading'>Не найдено :(</h1>
      <Link className='not-found__to-main-page' to='/'>На главную страницу</Link>
    </section>
  </main>
};