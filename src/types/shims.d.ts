declare module '*.svg'
declare module '*.scss'
declare module '*.ts'
declare module '*.js'

declare module '*.vue' {
	import type { DefineComponent } from 'vue'
	const component: DefineComponent<{}, {}, any>
	export default component
}

declare module 'maku-form-design'
