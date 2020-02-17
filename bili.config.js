module.exports = {
    banner: true,
    name: 'bw-material-button',
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
    }
};