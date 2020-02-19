module.exports = {
    banner: true,
    name: 'bw-material',
    plugins: {
        vue: {
            style: {
                preprocessOptions: {
                    scss: {
                        includePaths: ['node_modules']
                    }
                }
            }
        }
    },
    alias: {
      resolve: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
};