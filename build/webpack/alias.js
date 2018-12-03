const jsconfig = require('../../jsconfig.json');
const path = require('path');

function resolvePath(dir) {
  return path.join(__dirname, '../..', dir);
}

const alias = {
  'vue$': 'vue/dist/vue.esm.js',
};

const jsconfigPaths = jsconfig.compilerOptions.paths;
Object.keys(jsconfigPaths).forEach((key) => {
  const jsconfigPath = jsconfigPaths[key][0];

  const targetKey = key.substring(0, key.length - 2);
  const targetPath = 2 < jsconfigPath.length - 2 ? jsconfigPath.substring(2, jsconfigPath.length - 2) : '';
  
  alias[targetKey] = resolvePath(targetPath);
});


module.exports = alias;