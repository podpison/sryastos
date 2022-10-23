import { Link } from './link/Link';
import './nav.scss';
import cn from 'classnames';

type Props = {
  className?: string
}

export const Nav: React.FC<Props> = ({ className }) => {
  return <nav className={cn('header__nav', className)}>
    <Link to='/ourShops' name='Наши кофейни' />
    <Link to='/menu' name='Меню' />
    <Link to='/vacancy' name='Вакансии' />
  </nav>
};