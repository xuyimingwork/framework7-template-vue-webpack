const ora = require('ora');
const chalk = require('chalk');

const rm = require('rimraf');
const path = require('path');

const webpack = require('webpack');

const i18n = {
  'development': '开发',
  'production': '生产',
};

function run(webpackConfig) {
  const versionName = i18n[webpackConfig.mode];
  const spinner = ora(`正在构建${versionName}版本...`)
  spinner.start();

  const projectDir = path.resolve('.');
  const outputDir = path.resolve(webpackConfig.output.path);
  const relativeOutputDir = `./${path.relative(projectDir, outputDir).replace('\\', '/')}/`
  
  rm(relativeOutputDir, (removeErr) => {
    if (removeErr) throw removeErr;
  
    webpack(webpackConfig, (err, stats) => {
      if (err) throw err;
      spinner.stop();
  
      process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
        chunks: false,
        chunkModules: false
      }) + '\n\n');
  
      if (stats.hasErrors()) {
        console.log(chalk.red('出现错误，构建失败.\n'));
        process.exit(1);
      }
  
      console.log(chalk.cyan(`${versionName}版本构建完成.\n`));
    });
  });
}

module.exports = run;


