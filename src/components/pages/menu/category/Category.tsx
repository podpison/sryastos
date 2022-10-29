import './category.scss';
import { ReactNode } from 'react';

type Props = {
	category: string
	description: string
	children: ReactNode
}

export const Category: React.FC<Props> = ({ category, description, children }) => {
	return <div className='menu__category'>
		<div className='menu__category-name-container'>
			<h4 className='menu__category-name'>{category}</h4>
			<p className='menu__category-description'>{description}</p>
		</div>
		{children}
	</div>
};