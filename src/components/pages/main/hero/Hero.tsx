import './hero.scss';
import logo from './../../../../assets/img/logo.svg';

export const Hero: React.FC = () => {
    return <section className='main-page__hero'>
        <img className='main-page__hero-logo' src={logo} alt='logo' />
        <h1 className='main-page__hero-heading'>Нашо небо всегда в пальмах</h1>
    </section>
};