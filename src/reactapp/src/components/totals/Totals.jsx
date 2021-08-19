import React from 'react';
import { __ } from '../../i18n';

import Card from '../common/Card';
import Header from '../common/Header';
import useTotalsCartContext from './hooks/useTotalsCartContext';
import { config } from '../../config';

function Totals() {
  const {
    shippingMethodRate,
    subTotalIncTax,
    subTotalExTax,
    grandTotal,
    discounts,
    hasDiscounts,
    taxes,
    hasTaxes,
    hasShippingRate,
    hasSubTotal,
  } = useTotalsCartContext();

  return (
    <Card>
      <Header>{__('Order Summary')}</Header>
      <div className="py-4">
        <div>
          <div className="pb-2 space-y-3 border-b">
            {hasSubTotal && (
              <div className="flex justify-between">
                <div>{__('Cart Subtotal')}</div>
                {(config.displaySubTotalPrices === 'including')
                  ? <div>{subTotalIncTax}</div>
                  : <div>{subTotalExTax}</div>
                }
              </div>
            )}

            {hasShippingRate && (
              <div className="flex justify-between">
                <div>{__('Shipping')}</div>
                <div>{shippingMethodRate}</div>
              </div>
            )}
            {hasDiscounts &&
              discounts.map(discount => (
                <div key={discount.label} className="flex justify-between">
                  <div>{__(discount.label)}</div>
                  <div>{discount.price}</div>
                </div>
              ))}
            {hasTaxes &&
              taxes.map(tax => (
                <div key={tax.label} className="flex justify-between">
                  <div>{__(tax.label)}</div>
                  <div>{tax.price}</div>
                </div>
              ))}
          </div>

          <div className="mt-3">
            <div className="flex justify-between text-xl font-bold">
              <div>{__('Order Total')}</div>
              <div>{grandTotal || '0'}</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Totals;
