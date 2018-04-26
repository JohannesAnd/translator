import { Compute } from 'cerebral';
import { state } from 'cerebral/tags';

const colors = ['red', 'green'];

export default Compute(
  state`content`,
  state`filtered`,
  state`textFilter`,
  (content, filtered, textFilter) => {
    const languages = Object.keys(content).reduce((acc, language) => {
      acc[language] = content[language].phrases;
      return acc;
    }, {});

    const keys = [];

    function recurse(object, path = []) {
      if (typeof object === 'string') {
        keys.push(path.slice(1).join('.'));
        return;
      }
      Object.keys(object).forEach(key =>
        recurse(object[key], path.concat([key]))
      );
    }

    recurse(languages);
    const res = [...new Set(keys)].map(key => {
      const value = Object.keys(languages).filter(language => {
        const value = get(languages[language], ...key.split('.'));
        return Boolean(value);
      }).length;

      return {
        key,
        missing: value !== Object.keys(languages).length,
        color: colors[value - 1]
      };
    });

    return res
      .filter(d => (filtered ? d.missing : true))
      .filter(d => d.key.indexOf(textFilter) > -1);
  }
);

function get(data) {
  const keys = [...arguments].slice(1);
  if (keys.length === 0) return data;

  if (!data[keys[0]]) return false;

  return get(data[keys[0]], ...keys.slice(1));
}
