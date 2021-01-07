import React from 'react';
import useCartContext from '../../hook/useCartContext';
import Card from '../Common/Card';
import RadioInput from '../Common/Form/RadioInput';
import Header from '../Common/Header';

function ShippingMethods() {
  const { selectedShippingMethods } = useCartContext();

  return (
    <Card bg="dark">
      <Header>Shipping Methods</Header>
      <div className="py-4">
        <ul>
          {selectedShippingMethods.map(method => (
            <li key={method.carrierCode} className="flex">
              <RadioInput
                label={`${method.carrierTitle} (${method.methodTitle}): `}
                name={method.carrierCode}
              />
              <span className="pt-2 pl-3 font-semibold">{`Price: ${method.price}`}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

export default ShippingMethods;
