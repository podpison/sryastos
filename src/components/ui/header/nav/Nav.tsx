import { Link } from './link/Link';
import './nav.scss';
import cn from 'classnames';

type Props = {
  className?: string
}

export const Nav: React.FC<Props> = ({ className }) => {
  return <nav className={cn('header__nav', className)}>
    <Link hashLink to='/#coffe-shops' name='Наши кофейни' />
    <Link to='/menu' name='Меню' />
    <Link hashLink to='/#vacancy' name='Вакансии' />
  </nav>
};