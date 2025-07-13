export const formatPrice = (price?: number) => {
  if (!price || !Number.isInteger(price)) return '';
  const priceString = (price / 100).toFixed(2);
  return priceString.replace(/\d(?=(\d{3})+\.)/g, '$&,');
};