import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'welcome',
		component: () => import('../views/welcome.vue')
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/Login.vue')
	},
	{
		path: '/discovery',
		name: 'Discovery',
		component: () => import('../views/Discovery.vue')
	},
	{
		path: '/optional',
		name: 'Optional',
		component: () => import('../views/Optional.vue'),
		redirect: '/optional/opt_stock',
		children: [{
				path: '/optional/opt_stock',
				name: 'opt_stock',
				component: () => import('../components/optional/opt_stock.vue')
			},
			{
				path: '/optional/opt_fund',
				name: 'opt_fund',
				component: () => import('../components/optional/opt_fund.vue')
			},
		]
	},
	{
		path: '/community',
		name: 'Community',
		component: () => import('../views/Community.vue')
	},
	{
		path: '/property',
		name: 'Property',
		component: () => import('../views/Property.vue')
	}
]

const router = new VueRouter({
	routes
})

export default router
