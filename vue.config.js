module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.module
      .rule(/.md$/)
      .test(/.md$/)
      .use('text-loader')
      .loader('text-loader')
      .end()
  }
}
