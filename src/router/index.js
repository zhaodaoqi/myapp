import Vue from 'vue'
import VueRouter from 'vue-router'

import SayHi from '@/components/SayHi.vue'

Vue.use(VueRouter)

export default new VueRouter({
	routes: [
		{
			path:'/say_hi',
			name: 'SayHi',
			component: SayHi
		}
		
	]
})