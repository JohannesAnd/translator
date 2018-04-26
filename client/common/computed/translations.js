import { Compute } from 'cerebral';
import { state } from 'cerebral/tags';

export default Compute(
  state`content`,
  state`selectedKey`,
  (content, selectedKey) => {
    if (selectedKey.length === 0) return [];

    return Object.keys(content).map(language => {
      return {
        language,
        translation: get(content[language].phrases, ...selectedKey.split('.'))
      };
    }, {});
  }
);

function get(data) {
  const keys = [...arguments].slice(1);
  if (keys.length === 0) return data;

  if (!data[keys[0]]) return false;

  return get(data[keys[0]], ...keys.slice(1));
}
