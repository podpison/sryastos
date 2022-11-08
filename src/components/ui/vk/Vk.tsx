import './vk.scss';
import vk from './../../../assets/img/vk.svg';
import cn from 'classnames';

type Props = {
  className?: string
}

export const Vk: React.FC<Props> = ({ className }) => {
  return <a className={cn('vk', className)} href='https://vk.com' target="_blank" rel="noreferrer">
    <img src={vk} alt='vk' />
  </a>
};