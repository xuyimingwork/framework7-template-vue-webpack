const ora = require('ora');
const chalk = require('chalk');

const rm = require('rimraf');
const path = require('path');

const webpack = require('webpack');

const i18n = {
  'development': '开发',
  'production': '生产',
};

const getOraText = function(str) {
  return `${chalk.cyan(str)}`;
};

function run(webpackConfig) {
  const versionName = i18n[webpackConfig.mode];
  const spinner = ora();
  spinner.start(getOraText('初始化...'));

  const projectDir = path.resolve('.');
  const outputDir = path.resolve(webpackConfig.output.path);
  const relativeOutputDir = `./${path.relative(projectDir, outputDir).replace('\\', '/')}/`;
  
  spinner.text = getOraText('正在清理目标文件夹...');
  rm(relativeOutputDir, (removeErr) => {
    if (removeErr) throw removeErr;
    
    spinner.text = getOraText(`正在构建${versionName}版本...`);
    webpack(webpackConfig, (err, stats) => {
      if (err) throw err;
      spinner.clear();
      
      process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
        chunks: false,
        chunkModules: false
      }) + '\n\n');
  
      if (stats.hasErrors()) {
        spinner.fail(chalk.red('出现错误，构建失败.'));
        process.exit(1);
      }
  
      spinner.succeed(chalk.cyan(`${versionName}版本构建完成.`));
    });
  });
}

module.exports = run;


