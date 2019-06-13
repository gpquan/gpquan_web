import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import Home from './components/home/home'
import Project from './components/project/project'
import ProjectList from './components/project/projectList'
import ProjectDetails from './components/project/project_details'
import addProject from '@/components/project/add_project'
import ProjectPersonage from './components/project/ProjectPersonage'
import FA from './components/FA/FA'
import UserCenter from './components/userCenter/user'
import Login from './components/logins/login'
import Sign from './components/logins/sign'
import accelerate from './components/financing/accelerate'
import accelerateHome from './components/financing/accelerateHome'
import Manage from '@/components/financing/manage'
import ManageP from '@/components/financing/ManageP'
import ManageO from '@/components/financing/ManageO'
import ManageA from '@/components/financing/ManageA'
import ManageA_details from '@/components/financing/ManageA_details'


Vue.use(Router)

const router = new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: Home,
        redirect: '/accelerate',
        children: [
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
                            showFooter: true
                        }
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
                        component: ProjectPersonage
                    },

                ]
            },
            {
                path: '/FA',
                name: 'FA',
                component: FA,
                meta: {
                    showFooter: true
                }

            },
            {
                path: '/userCenter',
                name: 'user',
                component: UserCenter,
                meta: {
                    showFooter: true
                }

            },

            {
                path: '/accelerate',
                name: 'accelerate',
                component: accelerateHome,
                redirect: '/accelerate/Manage',
                children: [
                    {
                        path: '/accelerate/Manage',
                        name: 'manage',
                        component: Manage,
                        redirect: '/accelerate/Manage/p',
                        children: [
                            {
                                path: '/accelerate/Manage/p', //项目
                                name: 'ManageP',
                                component: ManageP,
                                meta: {
                                    keep: 1
                                }

                            }, {
                                path: '/accelerate/Manage/o', //机构
                                name: 'ManageO',
                                component: ManageO,
                                meta: {
                                    keep: 2
                                }
                            }
                        ]
                    },
                    {
                        path:'/accelerate/Manage/a', //融资加速
                        name:'ManageA',
                        component:ManageA,
                      },
                      {
                        path:'/accelerate/Manage/a/details', //融资加速详情
                        name:'ManageA_details',
                        component:ManageA_details,
                      },

                ]
            },
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
    console.log(to)
    if(!JSON.parse(sessionStorage.getItem("userInfo"))){
        console.log("未登录")
        if(to.name=='log'){
            next()
        }else{
            next({
                    path: '/Login',
                    query: {} // 将跳转的路由path作为参数，登录成功后跳转到该路由
                  })
        }
    }else{
        next()
        console.log("已登录")
    }
  })
export default router