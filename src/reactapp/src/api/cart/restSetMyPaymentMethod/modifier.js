export default function restSetGuestPaymentMethod(result) {
  return {
    orderId: result,
    redirectUrl: '/payone/onepage/redirect/',
  };
}
