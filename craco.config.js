module.exports = {
    devServer: {
        port: 3002,
    },
    webpack: {
        configure: (webpackConfig) => {
            webpackConfig.output.publicPath = process.env.ENV === 'dev' ? '' : 'https://sinupdater.nira.one/';
            return webpackConfig;
        },
    },
};