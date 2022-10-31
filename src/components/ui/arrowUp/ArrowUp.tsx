import { useEffect, useState } from 'react';
import './arrowUp.scss';
import cn from 'classnames';
import arrowUp from './../../../assets/img/arrowUp.png';

export const ArrowUp: React.FC = () => {
  const [prevPos, setPrevPos] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const callback = () => {
      let currentPos = window.scrollY;
      setPrevPos(currentPos);
      setShow(prevPos >= currentPos);
    };
    window.addEventListener('scroll', callback)
    return () => window.removeEventListener('scroll', callback)
  }, [prevPos]);

  const clickHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  };
  let hidden = !show || window.scrollY === 0;

  return <div onClick={clickHandler} className={cn('arrow-up', hidden && 'arrow-up_disabled')}>
    <img className='arrow-up__img' src={arrowUp} alt='arrow up' />
  </div>
};