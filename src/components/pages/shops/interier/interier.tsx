import './interier.scss';
import { useParams } from 'react-router-dom';
import { NoginskInterier } from './shops/noginsk/NoginskInterier';
import { BalashikhaInterier } from './shops/balashikha/BalashikhaInterier';

export const Interier: React.FC = () => {
  const { shopName } = useParams();

  switch (shopName) {
    case 'balashikha':
      
    return <BalashikhaInterier />
    case 'noginsk':
      
    return <NoginskInterier />;
    case 'zheleznodorozhnyy':
      
    return <></>
    case 'electrostal':
      
    return <></>
    default:
      return <></>;
  };
};