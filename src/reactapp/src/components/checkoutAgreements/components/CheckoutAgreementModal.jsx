/* eslint-disable react/no-danger */
import React from 'react';
import _get from 'lodash.get';
import { ClipboardCheckIcon } from '@heroicons/react/outline';
import { bool, func, oneOfType, shape, string } from 'prop-types';

import { __ } from '../../../i18n';
import useAgreementAppContext from '../hooks/useAgreementAppContext';

function CheckoutAgreementModal({ agreementId, actions }) {
  const { checkoutAgreements } = useAgreementAppContext();
  const modalAgreement = _get(checkoutAgreements, agreementId);
  const agreementTitle = _get(modalAgreement, 'name');
  const isContentHtml = _get(modalAgreement, 'isHtml');
  const agreementContent = _get(modalAgreement, 'content');

  return (
    <div
      className="fixed inset-0 z-10 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
          aria-hidden="true"
        ></div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-green-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                <ClipboardCheckIcon className="w-6 h-6 text-green-600" />
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg font-medium leading-6 text-gray-900"
                  id="modal-title"
                >
                  {agreementTitle}
                </h3>
                <div className="mt-2">
                  {isContentHtml ? (
                    <div
                      dangerouslySetInnerHTML={{ __html: agreementContent }}
                    />
                  ) : (
                    <p className="text-sm text-gray-500">{agreementContent}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => actions.setActiveModalId(false)}
            >
              {__('I agree')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

CheckoutAgreementModal.propTypes = {
  agreementId: oneOfType([bool, string]).isRequired,
  actions: shape({ setActiveModalId: func }).isRequired,
};

export default CheckoutAgreementModal;
