import RootElement from '../utils/rootElement';

/**
 * Use to fetch translation json file stored in `public` directory
 * and then convert it into JSON data.
 */
export default function fetchTranslation() {
  const languageCode = RootElement.getLanguage();
  const languageJsonFile = `/i18n/${languageCode}.json`;

  return fetch(languageJsonFile, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(response => response.json())
    .catch(error => {
      console.log({ error });
      return {};
    });
}
