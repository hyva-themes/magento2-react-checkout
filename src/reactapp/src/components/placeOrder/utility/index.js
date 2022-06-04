import _get from 'lodash/get';

import {
  LOGIN_FORM,
  SHIPPING_METHOD,
  BILLING_ADDR_FORM,
  SHIPPING_ADDR_FORM,
  PAYMENT_METHOD_FORM,
  CHECKOUT_AGREEMENTS_FORM,
} from '../../../config';
import { _isObjEmpty } from '../../../utils';

export function hasLoginErrors(errors) {
  const loginErrors = _get(errors, LOGIN_FORM);

  return !_isObjEmpty(loginErrors);
}

export function hasShippingAddressErrors(errors) {
  const shippingAddressErrors = _get(errors, SHIPPING_ADDR_FORM);

  return !_isObjEmpty(shippingAddressErrors);
}

export function hasBillingAddressErrors(errors, values, isVirtualCart) {
  const billingAddressErrors = _get(errors, BILLING_ADDR_FORM);
  const isBillingSameAsShipping = _get(
    values,
    `${BILLING_ADDR_FORM}.isSameAsShipping`
  );

  if (isVirtualCart || !isBillingSameAsShipping) {
    return !_isObjEmpty(billingAddressErrors);
  }

  return false;
}

export function hasShippingMethodErrors(errors) {
  const shippingMethodErrors = _get(errors, SHIPPING_METHOD);

  return !_isObjEmpty(shippingMethodErrors);
}

export function hasPaymentMethodErrors(errors) {
  const paymentMethodErrors = _get(errors, PAYMENT_METHOD_FORM);

  return !_isObjEmpty(paymentMethodErrors);
}

export function hasTermsAndConditionsAgreed(errors) {
  const agreementErrors = _get(errors, CHECKOUT_AGREEMENTS_FORM);

  return !_isObjEmpty(agreementErrors);
}

export function isAddressSame(address1, address2) {
  const {
    city: city1,
    phone: phone1,
    street: street1,
    region: region1,
    company: company1,
    zipcode: zipCode1,
    country: country1,
    lastname: lastName1,
    firstname: firstName1,
  } = address1;
  const {
    city: city2,
    phone: phone2,
    street: street2,
    region: region2,
    company: company2,
    zipcode: zipCode2,
    country: country2,
    lastname: lastName2,
    firstname: firstName2,
  } = address2;

  return (
    city1 === city2 &&
    phone1 === phone2 &&
    region1 === region2 &&
    country1 === country2 &&
    company1 === company2 &&
    zipCode1 === zipCode2 &&
    lastName1 === lastName2 &&
    firstName1 === firstName2 &&
    (street1 || []).join() === (street2 || []).join()
  );
}

export function ShippingMethodRequiredException(message) {
  this.message = message;
}
