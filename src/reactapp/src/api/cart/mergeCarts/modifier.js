import fetchGuestCartModifier from "../fetchGuestCart/modifier";

export default function modifyMergeCarts(result) {
  return fetchGuestCartModifier(result, 'mergeCarts');
}
