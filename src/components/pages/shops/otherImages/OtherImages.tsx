import './otherImages.scss';
import { useParams } from 'react-router-dom';
import { NoginskOtherImages } from './shopOtherImages/noginsk/NoginskOtherImages';

//I do understand that the component name is totaly awful but I hope that I'll change it to smth better
export const OtherImages: React.FC = () => {
  const { shopName } = useParams();

  switch (shopName) {
    case 'balashikha':

      return <></>
    case 'noginsk':

      return <NoginskOtherImages />;
    case 'zheleznodorozhnyy':

      return <></>
    case 'electrostal':

      return <></>
    default:
      return <></>;
  };
};