const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        util: require.resolve("util/"),
        assert: require.resolve("assert/"),
        path: require.resolve("path-browserify"),
        "fs": false,
        "module": false,
        "process": false,
      }
    },

  }
})
