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

  Promise.all([
    write.promise(filename, prettier.format(exp + '{' + indexContent + '};')),

    ...languages.map(language => {
      const keys = Object.keys(parsed[language]);
      const indexContent = keys.reduce((a, k) => {
        a += `${k}: require("./${language}/${k}.js"),`;

        return a;
      }, '');

      return Promise.all([
        ...keys.map(key => {
          return write.promise(
            `${foldername}/${language}/${key}.js`,
            prettier.format(exp + JSON.stringify(parsed[language][key]))
          );
        }),
        write.promise(
          `${foldername}/${language}/index.js`,
          prettier.format(exp + '{' + indexContent + '};')
        )
      ]);
    })
  ])
    .then(res => {
      console.log('written to files');
    })
    .catch(err => {
      console.log(error);
    });
};
