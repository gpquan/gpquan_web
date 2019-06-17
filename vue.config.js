const path = require('path')
const webpack = require('webpack')

function resolve(dir) {
	return path.join(__dirname, dir)
}
module.exports = {
	configureWebpack: {
		plugins: [
			new webpack.ProvidePlugin({
				$: "jquery",

				jQuery: "jquery",
				"windows.jQuery": "jquery"
			})
		]
	},
	lintOnSave: true,
	chainWebpack: config => {
		config.resolve.alias
			.set('@', resolve('src'))
			.set('assets', resolve('src/assets'))
			.set('components', resolve('src/components'))
			.set('layout', resolve('src/layout'))
	},
	devServer: {
		// open: process.platform === 'darwin',
		host: '0.0.0.0',
		port: 8080,
		// open: true, //配置自动启动浏览器
		proxy: {
			'/api': {
				target: 'http://114.115.216.31:8080/', //对应自己的接口
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/api': '/'
				}
			}
		}
	},
}
