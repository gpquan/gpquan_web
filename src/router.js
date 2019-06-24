import Vue from 'vue'
import Router from 'vue-router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.use(MintUI)

//组件模块
import Home from './components/home/home'
import Project from './components/project/project'
import ProjectList from './components/project/projectList'
import ProjectDetails from './components/project/project_details'
import addProject from '@/components/project/add_project'
import ProjectPersonage from './components/project/ProjectPersonage'
import FA from './components/FA/FA'
import UserCenter from './components/userCenter/user'
import UserCenterA from './components/userCenter/userAll'
import UserCenterSet from './components/userCenter/userSet'
import UserSet_about_as from './components/userCenter/UserSet_about_as'
import User_message from './components/userCenter/User_message'
import User_details from './components/userCenter/User_details'

import Login from './components/logins/login'
import Sign from './components/logins/sign'
import accelerate from './components/financing/accelerate'
import accelerateHome from './components/financing/accelerateHome'
import Manage from '@/components/financing/manage'
import ManageP from '@/components/financing/ManageP'
import ManageO from '@/components/financing/ManageO'
import ManageA from '@/components/financing/ManageA'
import ManageA_details from '@/components/financing/ManageA_details'
import Organ from '@/components/organ/organ'
import OrganDetails from '@/components/organ/organdetails'


import Demo from '@/components/project/demo'
import ManageO_add from '@/components/financing/ManageO_add'
import ManageP_add from '@/components/financing/ManageP_add'
import Project_Profile from '@/components/financing/Project_Profile'  //项目简介点击进入页面
import Recommend from '@/components/recommend/Recommend' // fa
import Manage2 from '@/components/manage2/manage2'
import Manage_ListC from '@/components/manage2/Manage_ListC'
import Manage_ListO from '@/components/manage2/Manage_ListO'
import Manage_ListFA from '@/components/manage2/Manage_ListFA'
import Speed from '@/components/manage2/Speed'
import SpeedHome from '@/components/manage2/SpeedHome'
import dimQ from '@/components/project/dimQuery'
Vue.use(Router)

const router = new Router({
	routes: [{
		path: '/',
		name: 'home',
		component: Home,
		redirect: '/accelerate',
		children: [
			{
				path: '/demo',
				name: 'demo',
				component: Demo
			},
		
			{
				path: '/project',
				name: 'project',
				component: Project,
				redirect: '/project/List',
				children: [
					{
						path: '/project/List',
						name: 'projectList',
						component: ProjectList,
						meta: {
							fshow: true
						},
					},
					{
						path: '/project/details',
						name: 'projectDetails',
						component: ProjectDetails

					},
					{
						path: '/project/addProject',
						name: 'addProject',
						component: addProject,
					},
					{
						path: '/project/personage',
						name: 'personage',
						component: ProjectPersonage,
						meta:{
							keep:'bz'
						}
					},
					{
						path:'/project/dimQ',
						name:'dimQ',
						component:dimQ
					},

				]
			},
			{
				path: '/organ',
				name: 'organ',
				component: Organ,
				redirect: '/Organ/details',
				children: [
					{
						path: '/organ/details',
						name: 'organDetails',
						component: OrganDetails,
					}
				]
			},
			{
				path: '/FA',
				name: 'FA',
				component: FA,
				meta: {
					fshow: true
				}

			},
			{
				path: '/userCenter',
				name: 'userA',
				component: UserCenterA,
				redirect:'/userCenter/a',
				meta: {
					fshow: true
				},
				children:[
					{
						path:"/userCenter/a",
						name: 'user',
						component: UserCenter,
						meta: {
							fshow: true
						},
					},{
						path:"/userCenter/Set",
						name: 'userset',
						component: UserCenterSet,
						meta: {
							fshow: false
						},
					},{
						path:"/userCenter/Set_about",
						name: 'UserSet_about_as',
						component: UserSet_about_as,
						meta: {
							fshow: false
						},
						
					},{
						path:"/userCenter/User_message",
						name: 'User_message',
						component: User_message,
						meta: {
							fshow: false
						},
						
					},{
						path:"/userCenter/User_details",
						name: 'User_details',
						component: User_details,
						meta: {
							fshow: false
						},
						
					},
				],
				

			},

			{
				path: '/accelerate',
				name: 'accelerate',
				component: accelerateHome,
				redirect: '/accelerate/Manage',

				children: [{
					path: '/accelerate/Manage',
					name: 'manage',
					component: Manage,
					redirect: '/accelerate/Manage/o',
					children: [{
						path: '/accelerate/Manage/p', //项目
						name: 'ManageP',
						component: ManageP,
						meta: {
							keep: 1,
							fshow: true
						}

					}, {
						path: '/accelerate/Manage/o', //机构
						name: 'ManageO',
						component: ManageO,
						meta: {
							keep: 2,
							fshow: true
						}
					},]
				},
				{
					path: '/accelerate/Manage/a', //融资加速
					name: 'ManageA',
					component: ManageA,
					meta: {
						fshow: true
					},
				},
				{
					path: '/accelerate/Manage/a/details', //融资加速详情
					name: 'ManageA_details',
					component: ManageA_details,
					meta: {
						fshow: true
					},
				}, {
					path: '/accelerate/Manage/o/add', //添加机构
					name: 'ManageO_add',
					component: ManageO_add,
					meta: {

					}
				}, {
					path: '/accelerate/Manage/o/Project_Profile', //添加机构中的机构简介
					name: 'Project_Profile',
					component: Project_Profile,
					meta: {

					}
				},
				{
					path: '/accelerate/Manage/p/add', //添加项目
					name: 'ManageP_add',
					component: ManageP_add,
					meta: {
				
					}
				},
				]
			},
			{
				path: '/recommend',
				name: 'recommend',
				component: Recommend,
				meta: {
					fshow: true
				}

			}, 	{
				path: '/speed',
				name: 'speed',
				component: Speed,
				redirect:'/speed/Home',
				meta: {
					fshow: true
				},
				children:[
					{
						path:'/speed/Home',
						name:'SpeedHome',
						component:SpeedHome,
						meta: {
							fshow: true
						},
					}
				]

			},{
				path: '/Manage2',
				name: 'manage2',
				component: Manage2,
				redirect: '/Manage2/C',
				meta: {
					fshow: true
				},
				children: [
					{
						path: '/Manage2/C',//项目竞品
						name: 'Manage2C',
						component: Manage_ListC,
						meta: {
							keep: 'C',
							fshow: true
						}
					}, {
						path: '/Manage2/O',
						name: "Manage2O",
						component: Manage_ListO,
						meta: {
							keep: 'O',
							fshow: true
						}
					}, {
						path: '/Manage2/FA',
						name: "Manage2FA",
						component: Manage_ListFA,
						meta: {
							keep: 'FA',
							fshow: true
						}
					},
				]
			}
		]
	},
	{
		path: '/login',
		name: 'log',
		component: Login,
	}, {
		path: '/Sign',
		name: 'SignIn',
		component: Sign,
	},
	]
})
router.beforeEach((to, from, next) => {
	// console.log(to)
	if (!JSON.parse(sessionStorage.getItem("userInfo"))) {
		// console.log("未登录")
		if (to.name == 'log') {
			next()
		} else {
			next({
				path: '/Login',
				query: {} // 将跳转的路由path作为参数，登录成功后跳转到该路由
			})
		}
	} else {
		if ((to.name == 'ManageO'||to.name == 'home')) {
			// console.log(JSON.parse(sessionStorage.getItem("userInfo")).role)
			if (JSON.parse(sessionStorage.getItem("userInfo")).role == 1&&(to.name == 'ManageO'||to.name == 'home')) {
				next()
			} else if(JSON.parse(sessionStorage.getItem("userInfo")).role == 2&&(to.name == 'ManageO'||to.name == 'home')){
				next({
					path: '/Manage2',
					query: {}
				})
			}
		}
		else{
			next()
		}
		
		// console.log("已登录")
	}
})
router.afterEach((to, from, next) => {

})
export default router
