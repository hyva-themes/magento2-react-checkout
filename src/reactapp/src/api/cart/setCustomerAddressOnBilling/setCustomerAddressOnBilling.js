import modifier from './modifier';
import prepareMutation from './mutation';
import sendRequest from '../../sendRequest';
import LocalStorage from '../../../utils/localStorage';

export default async function setCustomerAddressOnBilling(
  dispatch,
  customerAddressId,
  sameAsShipping,
  isVirtualCart
) {
  const variables = {
    customerAddressId,
    cartId: LocalStorage.getCartId(),
  };

  if (!isVirtualCart) {
    variables.sameAsShipping = sameAsShipping;
  }

  return modifier(
    await sendRequest(dispatch, {
      query: prepareMutation(isVirtualCart),
      variables,
    })
  );
}
