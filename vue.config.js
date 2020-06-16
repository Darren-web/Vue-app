const path = require('path')
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
            'vue$': 'vue/dist/vue.esm.js' ,
            'styles':path.resolve(__dirname,'./src/assets/styles'),
            'common':path.resolve(__dirname,'./src/common')
            }
        }
    }
}