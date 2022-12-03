import type { App, Plugin } from 'vue'

// 全局组件安装
export const withInstall = <T>(name: string, component: T, alias?: string) => {
	const comp = component as any
	comp.install = (app: App) => {
		app.component(name, component)
		if (alias) {
			app.config.globalProperties[alias] = component
		}
	}
	return component as T & Plugin
}
