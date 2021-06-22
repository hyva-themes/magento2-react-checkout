import LocalStorage from '../../utils/localStorage';

const selectedShippingAddress = LocalStorage.getCustomerShippingAddressId();

const initialState = {
  errors: false,
  order: {},
  cart: {
    loaded: false,
    email: null,
    id: null,
    billing_address: null,
    shipping_addresses: {},
    selected_shipping_address: selectedShippingAddress || '',
    shipping_methods: {},
    selected_shipping_method: {},
    items: {},
    available_payment_methods: {},
    selected_payment_method: { code: '', title: '' },
    applied_coupons: null,
    prices: {
      discount: '',
      discountLabel: '',
      discountAmount: 0,
      subTotal: '',
      subTotalAmount: 0,
      grandTotal: '',
      grandTotalAmount: 0,
    },
    is_virtual: false,
    checkout_agreements: [],
  },
};

export default initialState;
