import fetchGuestCartModifier from "../fetchGuestCart/modifier";

export default function modifyMergeCarts(result) {
  console.log({ result, out: fetchGuestCartModifier(result, 'mergeCarts')})
  return fetchGuestCartModifier(result, 'mergeCarts');
}
