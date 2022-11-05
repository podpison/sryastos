import { useParams } from "react-router-dom";
import { shops, ShopType } from "../components/pages/main/otherCoffeShops/OtherCoffeShops";
import { useState } from 'react';
import { useEffect } from 'react';

export const useCurrentShop = () => {
	const params = useParams();
  const [currentShop, setCurrentShop] = useState<undefined | ShopType>(undefined);

  useEffect(() => {
    let newShop = shops.find(s => s.to === params.shopName);
    setCurrentShop(newShop);
  }, [params.shopName]);

  return currentShop;
};