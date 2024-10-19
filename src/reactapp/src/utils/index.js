export function _keys(obj = {}) {
  return Object.keys(obj);
}

export function _isArrayEmpty(arr = []) {
  return (arr || []).length === 0;
}

export function _isArray(arr) {
  return Array.isArray(arr);
}

export function _isObjEmpty(obj = {}) {
  return _keys(obj).length === 0;
}

export function _objToArray(obj) {
  return _keys(obj || {}).map((key) => obj[key]);
}

export function _makePromise(asyncFunc, ...params) {
  return () => asyncFunc(...params);
}

export function _isBoolean(value) {
  return typeof value === 'boolean';
}

export function _toString(value) {
  return (value || '').toString();
}

export function _cleanObjByKeys(obj, keys = []) {
  const newObj = { ...obj };
  keys.forEach((key) => delete newObj[key]);
  return newObj;
}

export function _emptyFunc() {
  return () => {};
}

export function _uniqueArray(arr) {
  return [...new Set(arr)];
}

export function _findById(arr, itemId) {
  return arr.find((item) => item.id === itemId);
}

export function _findIndexById(arr, itemId) {
  return arr.findIndex((item) => item.id === itemId);
}

export function _replace(str, searchTerm, replaceWith = '') {
  return (str || '').replace(searchTerm, replaceWith);
}

export function _abs(num) {
  return Math.abs(num);
}

export function _min(num1, num2) {
  return Math.min(Number(num1), Number(num2));
}

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function _ucFirst(str) {
  if (!str) {
    return str;
  }
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

export function _isNumber(value) {
  return !Number.isNaN(Number(value));
}

export function _numberRange(count, start = 0) {
  const range = [...Array(count).keys()];

  if (start === 0) {
    return range;
  }

  return range.map((num) => num + start);
}
