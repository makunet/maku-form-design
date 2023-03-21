import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
	base: './',
	resolve: {
		// 配置别名
		alias: {
			'@': resolve(__dirname, './src')
		}
	},
	plugins: [vue()],
	server: {
		host: '0.0.0.0',
		port: 3008, // 端口号
		open: false // 是否自动打开浏览器
	}
})
