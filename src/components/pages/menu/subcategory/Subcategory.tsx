import './subcategory.scss';
import { ReactNode } from 'react';

type Props = {
  subcategory: string
  children: ReactNode
}

export const Subcategory: React.FC<Props> = ({ subcategory, children }) => {
  return <div className='menu__subcategory'>
    <div className='menu__subcategory-heading-container'>
      <h5 className='menu__subcategory-heading'>{subcategory}</h5>
    </div>
    {children}
  </div>
};