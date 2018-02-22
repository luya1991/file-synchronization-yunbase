'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'

const shell = require('shelljs')
const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')

const spinner = ora('building for production...')
spinner.start()

shell.mkdir('-p', './node_modules/' + config.build.assetsSubDirectory)
shell.cp('-R', ['src', 'package.json'], './node_modules/' + config.build.assetsSubDirectory)

rm(path.join(config.build.assetsRoot, '*'), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    shell.rm('-rf', './node_modules/' + config.build.assetsSubDirectory);
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    shell.cp('-R', ['favicon.ico'], path.join(config.build.assetsRoot, config.build.assetsSubDirectory))

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
