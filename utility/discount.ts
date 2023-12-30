export const getNewPrice = (price: number, discount: number): number => {
  return price - (discount / 100) * price;
};
