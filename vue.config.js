module.exports = {
    // options...
    publicPath: process.env.NODE_ENV === 'production'
        ? '/testTaskMEDODS_task2/'
        : '/',
    assetsDir: '',
    productionSourceMap: false,
    filenameHashing: true,
}
