const RootElement = {
  elem: document.getElementById('react-checkout'),

  getElement() {
    return RootElement.elem;
  },

  /**
   * Need to specify `data-language` attribute on the root element;
   */
  getLanguage() {
    return RootElement.elem.dataset.language;
  },

  getFilePath() {
    return RootElement.elem.dataset.static_file_path || '';
  },

  getPaymentConfig() {
    return JSON.parse(RootElement.elem.dataset.payment || '{}');
  },
};

export default RootElement;
