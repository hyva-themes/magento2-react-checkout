import React from 'react';
import Button from '../Common/Button';

function PlaceOrder() {
  return (
    <div className="flex items-center justify-center h-24">
      <Button variant="warning" big>
        Place Order
      </Button>
    </div>
  );
}

export default PlaceOrder;
