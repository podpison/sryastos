import './item.scss';

type Props = {
	src: string
	name: string
}

export const Item: React.FC<Props> = ({ src, name }) => {
	return <div className='weVoteFor__item'>
		<img src={src} className='weVoteFor__item-img' alt='card image' />
		<p className='weVoteFor__item-name'>{name}</p>
	</div>
};