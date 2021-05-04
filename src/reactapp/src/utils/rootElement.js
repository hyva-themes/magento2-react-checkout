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
};

export default RootElement;
