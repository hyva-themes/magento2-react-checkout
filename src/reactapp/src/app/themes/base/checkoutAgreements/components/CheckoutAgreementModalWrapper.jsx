import React, { useEffect, useRef, useState } from 'react';
import { node } from 'prop-types';

import CheckoutAgreementModal from './CheckoutAgreementModal';
import { CheckoutAgreementsModalContext } from '../../../../code/checkoutAgreements/context';

function CheckoutAgreementModalWrapper({ children }) {
  const modalRef = useRef();
  const [activeModalId, setActiveModalId] = useState(false);

  // Side effect that deals with event registration on modal open/close action
  useEffect(() => {
    // Event handler that closes the modal on pressing `ESC` in keyboard.
    const keyDownHandler = (event) => {
      if (event.key === 'Esc' || event.key === 'Escape') {
        setActiveModalId(false);
      }
    };
    // Event handler that closes the modal when click outside of the modal
    const mouseDownHandler = (event) => {
      const agreementBoxDom = modalRef.current.querySelector('.agreement-box');

      if (!agreementBoxDom.contains(event.target)) {
        setActiveModalId(false);
      }
    };

    // We only want to register events when we have the modal active.
    if (activeModalId) {
      document.addEventListener('keydown', keyDownHandler);
      document.addEventListener('mousedown', mouseDownHandler);
    }

    // Removing event listeners; be a good boy by sticking on best practices.👍
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
      document.removeEventListener('mousedown', mouseDownHandler);
    };
  }, [activeModalId]);

  const context = { activeModalId, setActiveModalId };

  return (
    <CheckoutAgreementsModalContext.Provider value={context}>
      {children}
      <div ref={modalRef}>{activeModalId && <CheckoutAgreementModal />}</div>
    </CheckoutAgreementsModalContext.Provider>
  );
}

CheckoutAgreementModalWrapper.propTypes = {
  children: node.isRequired,
};

export default CheckoutAgreementModalWrapper;
