import { CapaciyType } from "../redux/reducers/static";

export const capacityHelper = (capacity: CapaciyType[]) => {
  let capacities = [];
  let prices = [];
  for (let item of capacity) {
    capacities.push(item.capacity);
    prices.push(item.price);
  };

  return {
    capacities: capacities.join('/'),
    prices: prices.join('/')
  }
};