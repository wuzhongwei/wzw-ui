const path = require('path')
module.exports = {
 pluginOptions: {
   'style-resources-loader': {
     'preProcessor': 'scss', // 可以改成对应的scss 或者less
     'patterns': [
       path.resolve(__dirname, './src/styles/_val.scss'),
     ]
   }
 }
}