import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// 参考：https://cn.vitejs.dev/config/
export default defineConfig({
	base: './',
	resolve: {
		// 配置别名
		alias: {
			'@': resolve(__dirname, './src')
		}
	},
	plugins: [
		vue(),
		createSvgIconsPlugin({
			iconDirs: [resolve(__dirname, 'src/icons')],
			symbolId: 'icon-[dir]-[name]'
		})
	],
	server: {
		host: '0.0.0.0',
		port: 3008, // 端口号
		open: false // 是否自动打开浏览器
	}
})
