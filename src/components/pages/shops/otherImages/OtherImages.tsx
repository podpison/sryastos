import './otherImages.scss';
import { useParams } from 'react-router-dom';
import { NoginskOtherImages } from './shopOtherImages/noginsk/NoginskOtherImages';
import { BalashihaOtherImages } from './shopOtherImages/balashiha/BalashihaOtherImages';
import { ZheleznodorozhnyyOtherImages } from './shopOtherImages/zheleznodorozhnyy/ZheleznodorozhnyyOtherImages';
import { ElectrostalOtherImages } from './shopOtherImages/electrostal/ElectrostalOtherImages';

export const OtherImages: React.FC = () => {
  const { shopName } = useParams();

  switch (shopName) {
    case 'balashikha':

      return <BalashihaOtherImages />
    case 'noginsk':

      return <NoginskOtherImages />;
    case 'zheleznodorozhnyy':

      return <ZheleznodorozhnyyOtherImages />
    case 'electrostal':

      return <ElectrostalOtherImages />
    default:
      return <></>;
  };
};