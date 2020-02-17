module.exports = {
    css: {
        loaderOptions: {
            sass: {
                sassOptions: {
                    includePaths: [require('path').resolve(__dirname, 'node_modules')]
                }    
            }
        }
    },
    chainWebpack: config => {
        config.optimization.delete('splitChunks')
        if(config.plugins.has('extract-css')) {
          const extractCSSPlugin = config.plugin('extract-css')
          extractCSSPlugin && extractCSSPlugin.tap(() => [{
            filename: 'index.css'
          }])
        }
      },
      configureWebpack: {
        output: {
          filename: 'index.js'
        }
      },
    pluginOptions: {
        sourceDir: "src"
    },
    publicPath: './',
    filenameHashing: false,
    assetsDir: './',
};