export default function ajaxLoginModifier(response) {
  const { customerData, ...result } = response;

  return {
    ...result,
    data: customerData,
  };
}
