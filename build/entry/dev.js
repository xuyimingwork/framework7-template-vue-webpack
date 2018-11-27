const ora = require('ora');
const chalk = require('chalk');

const rm = require('rimraf');

const webpack = require('webpack');
const config = require('../webpack/webpack.config.dev.js');

const spinner = ora('正在构建开发版本...')
spinner.start();

rm('../output/dev/', (removeErr) => {
  if (removeErr) throw removeErr;

  webpack(config, (err, stats) => {
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

    console.log(chalk.cyan('开发版本构建完成.\n'));
  });
});
