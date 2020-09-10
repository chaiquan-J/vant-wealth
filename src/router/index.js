import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
		path: '/login',
		name: 'Login',
		component: () => import('../views/Login.vue')
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About.vue')
	},
	{
		path: '/discovery',
		name: 'Discovery',
		component: () => import('../views/Discovery.vue')
	},
	{
		path: '/',
		name: 'Optional',
		component: () => import('../views/Optional.vue'),
		redirect:'/optional/opt_stock',
		children:[
			{
				path:'/optional/opt_stock',
				name:'opt_stock',
				component: () => import('../components/opt_stock.vue')
			},
			{
				path:'/optional/opt_fund',
				name:'opt_fund',
				component: () => import('../components/opt_fund.vue')
			},
		]
	},
	{
		path: '/property',
		name: 'Property',
		component: () => import('../views/Property.vue')
	},
	{
		path: '/community',
		name: 'Community',
		component: () => import('../views/Community.vue')
	}
]

const router = new VueRouter({
	routes
})

export default router
