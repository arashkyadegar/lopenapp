export const getNewPrice = (price: number, discount: number): number => {
  return price - (discount / 100) * price;
};

export const converEnDateToFaDate = (date: string) => {
  var moment = require("jalali-moment");
  var iso = new Date(date).toISOString();
  return moment(iso, "YYYY/MM/DD").locale("fa").format("YYYY/MM/DD");
};