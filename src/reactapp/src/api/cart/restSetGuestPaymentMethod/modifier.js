export default function restSetGuestPaymentMethodModifier(result) {
  return {
    order_number: result,
    redirectUrl: '/payone/onepage/redirect/',
  };
}
