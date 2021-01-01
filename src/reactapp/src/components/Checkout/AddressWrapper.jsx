import React, { useEffect } from 'react';
import useAppContext from '../../hook/useAppContext';

function AddressWrapper({ children }) {
  const [, { fetchCountries }] = useAppContext();

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  return <>{children}</>;
}

export default AddressWrapper;
