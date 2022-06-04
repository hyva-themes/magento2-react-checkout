import _get from 'lodash/get';

export const getConfigFromLocalStorage = ({
  storageKey,
  value: path,
  ttl,
  timestamp,
}) => {
  const item = window.localStorage.getItem(storageKey);
  const now = Date.now();

  if (!item) {
    return undefined;
  }
  const itemData = JSON.parse(item);

  const ttlValue = (ttl && _get(itemData, ttl)) || 3600;
  const timeStored = timestamp && _get(itemData, timestamp);

  if (timeStored) {
    const timePassed =
      now -
      timeStored *
        (timeStored.toString().length < now.toString().length ? 1000 : 1);

    if (ttlValue && timePassed > ttlValue * 1000) {
      window.localStorage.removeItem(storageKey);
      return undefined;
    }
  }
  return _get(itemData, path);
};
