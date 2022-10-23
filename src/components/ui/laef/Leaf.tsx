import './leaf.scss';

type Props = {
  src: string
  className: string
}

export const Leaf: React.FC<Props> = ({ src, className }) => {
  return <img src={src} className={`leaf ${className}`} alt='leaf' />
};