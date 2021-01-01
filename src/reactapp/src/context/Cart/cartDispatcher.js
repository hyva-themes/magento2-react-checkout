import { setEmailOnGuestCartAction } from './email/actions';
import { getGuestCartInfoAction } from './guestCart/actions';
import { addCartShippingAddressAction } from './shippingAddress/actions';

const dispatchMapper = {
  setEmailOnGuestCart: setEmailOnGuestCartAction,
  getGuestCartInfo: getGuestCartInfoAction,
  addCartShippingAddress: addCartShippingAddressAction,
};

function cartDispatchers(dispatch) {
  const dispatchers = {};

  Object.keys(dispatchMapper).forEach(dispatchName => {
    dispatchers[dispatchName] = dispatchMapper[dispatchName].bind(
      null,
      dispatch
    );
  });

  return dispatchers;
}

export default cartDispatchers;
