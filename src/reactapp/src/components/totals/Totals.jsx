import React from 'react';
import { __mt } from '../../i18n';

import Card from '../common/Card';
import Header from '../common/Header';
import useTotalsCartContext from './hooks/useTotalsCartContext';

function Totals() {
  const {
    shippingMethodRate,
    subTotal,
    grandTotal,
    discounts,
    hasDiscounts,
    hasShippingRate,
    hasSubTotal,
  } = useTotalsCartContext();

  return (
    <Card>
      <Header>{__mt('Order Summary')}</Header>
      <div className="py-4">
        <div>
          <div className="pb-2 space-y-3 border-b">
            {hasSubTotal && (
              <div className="flex justify-between">
                <div>{__mt('Cart Subtotal')}</div>
                <div>{subTotal}</div>
              </div>
            )}

            {hasShippingRate && (
              <div className="flex justify-between">
                <div>{__mt('Shipping')}</div>
                <div>{shippingMethodRate}</div>
              </div>
            )}
            {hasDiscounts &&
              discounts.map((discount) => (
                <div key={discount.label} className="flex justify-between">
                  <div>{__mt(discount.label)}</div>
                  <div>{discount.price}</div>
                </div>
              ))}
          </div>

          <div className="mt-3">
            <div className="flex justify-between text-xl font-bold">
              <div>{__mt('Order Total')}</div>
              <div>{grandTotal || '0'}</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Totals;
