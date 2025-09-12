export function calculationTotal(cartitems){
    return cartitems.reduce((sum, item) => sum + item.price * item.quantity,0)
}
export function caluculateButtonDiscount(totalprice, discountpercentage) {
  return (totalprice * discountpercentage) /  100;
}
export function getCoupnDiscount(Coupon, totalprice) {
  let discountpercentage = 0;
  switch (Coupon) {
    case "Mani10":
      discountpercentage = 10;
      break;
    case "Mani20":
      discountpercentage = 20;
      break;
    case "Mani30":
      discountpercentage = 30;
      break;
    default:
      discountpercentage = 0;
  }
  const discountAmount = (totalprice * discountpercentage) / 100;
  return {
    isvalid: discountpercentage > 0,
    discountpercentage,
    discountAmount
  };
}