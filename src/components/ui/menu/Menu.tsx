import { ReactNode } from 'react';
import './menu.scss';
import cn from 'classnames';

type Props = {
  children?: ReactNode
  className?: string
}

export const Menu: React.FC<Props> = ({ children, className }) => {
  return <section className={cn('menu', className)}>
    <div className='menu__heading-container'>
      <h3 className='menu__heading'>Меню</h3>
    </div>
    {children}
  </section>
};