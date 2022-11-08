import { Link } from './link/Link';
import './nav.scss';
import cn from 'classnames';

type Props = {
  className?: string
  closeBurger?: () => void
}

export const Nav: React.FC<Props> = ({ className, closeBurger }) => {
  return <nav className={cn('header__nav', className)}>
    <Link hashLink to='/#coffe-shops' name='Наши кофейни' closeBurger={closeBurger} />
    <Link to='/menu' name='Меню' closeBurger={closeBurger} />
    <Link hashLink to='/#vacancy' name='Вакансии' closeBurger={closeBurger} />
  </nav>
};