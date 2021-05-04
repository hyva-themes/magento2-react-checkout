import React from 'react';

import Card from '../common/Card';
import Header from '../common/Header';
import useTotalsCartContext from './hooks/useTotalsCartContext';

function Totals() {
  const { shippingMethodRate, subTotal, grandTotal } = useTotalsCartContext();

  return (
    <Card bg="dark">
      <Header>Order Summary</Header>
      <div className="py-4">
        <div>
          <div className="pb-2 space-y-3 border-b">
            {subTotal && (
              <div className="flex justify-between">
                <div>Cart Subtotal</div>
                <div>{subTotal}</div>
              </div>
            )}

            {shippingMethodRate && (
              <div className="flex justify-between">
                <div>Shipping</div>
                <div>{shippingMethodRate}</div>
              </div>
            )}
          </div>

          <div className="mt-3">
            <div className="flex justify-between text-xl font-bold">
              <div>Order Total</div>
              <div>{grandTotal || '0'}</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Totals;
