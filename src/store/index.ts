import { defineStore } from 'pinia'

export const appStore = defineStore({
	id: 'counter',
	state: () => ({
		counter: 0
	}),
	actions: {
		increment() {
			this.counter++
		}
	}
})
