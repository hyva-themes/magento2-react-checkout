import LocalStorage from '../../utils/localStorage';

const selectedShippingAddress = LocalStorage.getCustomerShippingAddressId();

const initialState = {
  cart: {
    applied_coupons: null,
    available_payment_methods: {},
    billing_address: null,
    email: null,
    id: null,
    is_virtual: false,
    items: {},
    loaded: false,
    prices: {
      discount: '',
      discountAmount: 0,
      discountLabel: '',
      grandTotal: '',
      grandTotalAmount: 0,
      subTotal: '',
      subTotalAmount: 0,
    },
    selected_payment_method: { code: '', title: '' },
    selected_shipping_address: selectedShippingAddress || '',
    selected_shipping_method: {},
    shipping_addresses: {},
    shipping_methods: {},
  },
  errors: false,
  order: {},
};

export default initialState;
