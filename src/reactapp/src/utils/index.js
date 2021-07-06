/* eslint-disable no-underscore-dangle */
export function _keys(obj = {}) {
  return Object.keys(obj);
}

export function _isArrayEmpty(arr = []) {
  return arr.length === 0;
}

export function _isObjEmpty(obj = {}) {
  return _keys(obj).length === 0;
}

export function _objToArray(obj) {
  return _keys(obj).map(key => obj[key]);
}

export function _makePromise(asyncFunc, ...params) {
  return async () => asyncFunc(...params);
}

export function _toString(value) {
  return (value || '').toString();
}

export function _cleanObjByKeys(obj, keys = []) {
  const newObj = { ...obj };
  keys.forEach(key => delete newObj[key]);
  return newObj;
}

export function _emptyFunc() {
  return () => {};
}

export function _uniqueArray(arr) {
  return [...new Set(arr)];
}

export function _findById(arr, itemId) {
  return arr.find(item => item.id === itemId);
}

export function _replace(str, searchTerm, replaceWith = '') {
  return (str || '').replace(searchTerm, replaceWith);
}
