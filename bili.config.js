// import path from 'path';
// import magicImporter from 'node-sass-magic-importer';
// const aliasImporter = require("node-sass-alias-importer");


module.exports = {
    banner: true,
    name: 'bw-material',
    plugins: {
        vue: {
            style: {
                preprocessOptions: {
                    scss: {
                        data: `@import "./src/global.scss";`,
                        includePaths: ['node_modules']
                    }
                },
            }
        },
        postcss: {
            minimize: {
                preset: ['advanced', {
                    discardDuplicates: true
                }]
            }
        }
    },
    alias: {
      resolve: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
};