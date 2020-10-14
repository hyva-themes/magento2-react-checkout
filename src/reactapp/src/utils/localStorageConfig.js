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

    const ttlValue = (ttl && getByPath(ttl, itemData)) || 3600;
    const timeStored = timestamp && getByPath(timestamp, itemData);

    if(timeStored) {
        const timePassed =
          now -
          timeStored *
          (timeStored.toString().length < now.toString().length ? 1000 : 1);

        if (ttlValue && timePassed > ttlValue * 1000) {
            window.localStorage.removeItem(storageKey);
            return undefined;
        }
    }
    return getByPath(path, itemData);
};

const getByPath = (path, object) => {
    return path
        .split('.')
        .reduce(
            (object, key) => (object && object[key] ? object[key] : null),
            object
        );
};
