import React from 'react';
import { bool, shape, string } from 'prop-types';
import _get from 'lodash.get';
import { useFormikContext } from 'formik';

import Button from '../../common/Button';
import TextInput from '../../common/Form/TextInput';
import useItemsFormContext from '../hooks/useItemsFormContext';
import { CART_ITEMS_FORM } from '../../../config';
import { __ } from '../../../i18n';

function CartItem({ item, isLastItem }) {
  const { touched } = useFormikContext();
  const { handleKeyDown, itemUpdateHandler } = useItemsFormContext();
  const qtyField = `${CART_ITEMS_FORM}.${item.id}.quantity`;
  const isQtyFieldTouched = _get(touched, qtyField);

  return (
    <tr className={`border-2 md:border-0 ${isLastItem ? '' : 'md:border-b-2'}`}>
      {/** DESKTOP TD ELEMENTS */}
      <td className="hidden w-1/3 md:table-cell">
        <div className="py-2 pl-2">
          <img
            className="w-12 h-auto"
            alt={item.productSku}
            src={item.productSmallImgUrl}
          />
          <div className="text-xs">
            <div>{item.productName}</div>
            <div>{item.productSku}</div>
          </div>
        </div>
      </td>
      <td className="hidden md:table-cell">
        <TextInput
          width="w-10"
          id={`${qtyField}-desktop`}
          className="w-10 h-10"
          name={qtyField}
          onKeyDown={handleKeyDown}
        />
      </td>
      <td className="hidden md:table-cell">{item.price}</td>
      <td className="hidden md:table-cell">{item.rowTotal}</td>
      <td className="hidden md:table-cell">
        <Button
          variant="success"
          disable={!isQtyFieldTouched}
          click={itemUpdateHandler}
        >
          {__('Update')}
        </Button>
      </td>

      {/** MOBILE TD ELEMENTS */}
      <td className="px-2 py-2 md:hidden">
        <table className="w-full">
          <tbody>
            <tr className="">
              <td>
                <table className="text-xs">
                  <tbody>
                    <tr className="border-b">
                      <th className="px-2 py-2">{__('Name')}</th>
                      <td className="pl-1 text-sm">
                        <div className="flex items-center py-1">
                          <img
                            className="w-8 h-8"
                            alt={item.productSku}
                            src={item.productSmallImgUrl}
                          />
                          <div className="pl-2">{item.productName}</div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th className="px-2 py-2">{__('SKU')}</th>
                      <td className="pl-2 text-sm">{item.productSku}</td>
                    </tr>
                    <tr className="border-b">
                      <th className="px-2 py-2">{__('Price')}</th>
                      <td className="pl-2 text-sm">{item.price}</td>
                    </tr>
                    <tr className="border-b">
                      <th className="px-2 py-2">{__('Qty')}</th>
                      <td className="px-1 pb-2">
                        <div className="flex items-center justify-between">
                          <TextInput
                            id={`${qtyField}-mobile`}
                            className="h-8"
                            name={qtyField}
                            onKeyDown={handleKeyDown}
                          />
                          <div className="pt-2 pl-2">
                            <Button
                              variant="success"
                              disable={!isQtyFieldTouched}
                              click={itemUpdateHandler}
                            >
                              {__('Update')}
                            </Button>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th className="px-2 py-2 text-base">{__('Total')}</th>
                      <td className="pl-2 text-base text-right">
                        {item.rowTotal}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}

CartItem.propTypes = {
  item: shape({
    id: string,
  }).isRequired,
  isLastItem: bool,
};

CartItem.defaultProps = {
  isLastItem: false,
};

export default CartItem;
