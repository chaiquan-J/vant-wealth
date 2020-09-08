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
		path: '/',
		name: 'Discovery',
		component: () => import('../views/Discovery.vue')
	},
	{
		path: '/optional',
		name: 'Optional',
		component: () => import('../views/Optional.vue')
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
	},
]

const router = new VueRouter({
	routes
})

export default router
