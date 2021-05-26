export default function restSetGuestPaymentMethodModifier(result) {
  return {
    orderId: result,
    redirectUrl: '/payone/onepage/redirect/',
  };
}
