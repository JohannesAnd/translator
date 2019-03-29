const write = require('write');
const prettier = require('prettier');

const exp = 'module.exports =';

module.exports = function printContent(filename, content) {
  const parsed = JSON.parse(content);
  const languages = Object.keys(parsed);
  const pieces = filename.split('/');
  const foldername = pieces.slice(0, pieces.length - 1).join('/');
  const indexContent = languages.reduce((a, l) => {
    a += `${l}: require("./${l}/index.js"),`;

    return a;
  }, '');

  // Write index.js
  write.promise(`${foldername}/index.js`, prettier.format(exp + '{' + indexContent + '};'));

  // Write language folders
  languages.map(language => {
    const data = parsed[language];

    const indexData = Object.assign({}, data, {
      phrases: Object.keys(data.phrases).reduce((reqs, phraseKey) => {
        reqs[phraseKey] = `require('./${phraseKey}')`

        return reqs;
      }, {})
    })

    write(
      `${foldername}/${language}/index.js`,
      prettier.format(exp + JSON.stringify(indexData).replace(/"require\(/g, 'require(').replace(/\)"/g, ')'))
    );

    Object.keys(data.phrases).map(phraseKey => {
      write(`${foldername}/${language}/${phraseKey}.js`, prettier.format(exp + JSON.stringify(data.phrases[phraseKey])));
    })
  });

  // Write page folders

  // Write content to individual files
};