

const path = require('path');

module.exports = {
  //...\\
  configureWebpack: {
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, './src/components'),
            '@store': path.resolve(__dirname, './src/store'),
            '@services': path.resolve(__dirname, './src/services'), 
            '@views': path.resolve(__dirname, './src/views'), 
        },
    },
  }    
};