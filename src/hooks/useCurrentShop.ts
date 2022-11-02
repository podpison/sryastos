import { useParams } from "react-router-dom";
import { shops } from "../components/pages/main/otherCoffeShops/OtherCoffeShops";

export const useCurrentShop = () => {
	const { shopName } = useParams();

  const currentShop = shops.find(s => s.to === shopName);

  return currentShop;
};