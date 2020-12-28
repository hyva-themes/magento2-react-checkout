import { setEmailOnGuestCartAction } from './email/actions';

function cartDispatchers(dispatch) {
  const setEmailOnGuestCart = setEmailOnGuestCartAction.bind(null, dispatch);

  return {
    setEmailOnGuestCart,
  };
}

// const cartDispatchers = {
//   setEmailOnGuestCart: setEmailOnGuestCartAction,
// };

export default cartDispatchers;
