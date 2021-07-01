import _get from 'lodash.get';

export default function restSetGuestPaymentMethodModifier(result) {
  const agreements = _get(result, 'data.checkoutAgreements', []) || [];

  return agreements.reduce((agreementList, agreement) => {
    const {
      mode,
      name,
      content,
      is_html: isHtml,
      agreement_id: id,
      checkbox_text: label,
      content_height: height,
    } = agreement;

    // eslint-disable-next-line no-param-reassign
    agreementList[id] = {
      id,
      name,
      label,
      height,
      isHtml,
      content,
      isAutomatic: mode === 'AUTO',
    };

    return agreementList;
  }, {});
}
