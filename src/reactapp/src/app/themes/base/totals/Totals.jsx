import React from 'react';

import Card from '../common/Card';
import ToggleBox from '../common/ToggleBox';
import { __ } from '../../../../i18n';
import { useTotalsCartContext } from '../../../code/totals/hooks';

function Totals() {
  const {
    discounts,
    grandTotal,
    hasSubTotal,
    subTotalIncl,
    appliedTaxes,
    hasDiscounts,
    hasAppliedTaxes,
    hasShippingRate,
    shippingMethodRate,
  } = useTotalsCartContext();

  return (
    <Card>
      <ToggleBox show title={__('Order Summary')}>
        <div className="py-4">
          <div>
            <div className="pb-4 space-y-3 border-b">
              {hasSubTotal && (
                <div className="flex justify-between">
                  <div>{__('Cart Subtotal')}</div>
                  <div>{subTotalIncl}</div>
                </div>
              )}

              {hasShippingRate && (
                <div className="flex justify-between">
                  <div>{__('Shipping')}</div>
                  <div>{shippingMethodRate}</div>
                </div>
              )}
              {hasAppliedTaxes && (
                <div>
                  <h4>{__('Tax')}</h4>
                  <ul className="mt-2 space-y-1">
                    {appliedTaxes.map((tax) => (
                      <li
                        key={tax.label}
                        className="flex items-center justify-between"
                      >
                        <span className="pl-4 text-sm">{tax.label}</span>
                        <span>{tax.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {hasDiscounts &&
                discounts.map((discount) => (
                  <div key={discount.label} className="flex justify-between">
                    <div>{__(discount.label)}</div>
                    <div>{discount.price}</div>
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
      </ToggleBox>
    </Card>
  );
}

export default Totals;
