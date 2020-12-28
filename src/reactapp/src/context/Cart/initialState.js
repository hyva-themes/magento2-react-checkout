const initialState = {
  errors: false,
  orderId: false,
  cart: {
    loaded: false,
    email: null,
    id: null,
    billing_address: null,
    shipping_addresses: [],
    items: [],
    available_payment_methods: [],
    selected_payment_method: { code: '', title: '' },
    applied_coupons: null,
    prices: {},
    is_virtual: false,
  },
};

export default initialState;
