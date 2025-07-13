export const formatPrice = (price?: number) => {
  if (!price || !Number.isInteger(price)) return '';
  const priceString = price.toFixed(2); // in some places price has ".00" at the end, in others not, prob need to add it everywhere as it looks "right" that way
  return priceString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");;
};