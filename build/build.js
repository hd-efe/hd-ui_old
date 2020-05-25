require('shelljs/global')
var config = require('../config')
const path = require('path')

if(!process.env.NODE_ENV) {
    process.env.NODE_ENV = JSON.parse(config.build.env.NODE_ENV)
}

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)

console.log(process.env.NODE_ENV)
console.log(assetsPath)