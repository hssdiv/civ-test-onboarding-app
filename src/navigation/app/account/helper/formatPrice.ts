export const formatPrice = (price?: number) => {
  if (!price || !Number.isInteger(price)) return '';
  const priceString = price.toString();
  return priceString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
};