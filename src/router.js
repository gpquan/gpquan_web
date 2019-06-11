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

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/project',
            name: 'project',
            component: Project,
            redirect:'/project/List',
            children:[
                {
                    path:'/project/List',
                    name:'projectList',
                    component:ProjectList,
                    meta: {
                        showFooter: true
                    }
            

                },
                {
                    path:'/project/details',
                    name:'projectDetails',
                    component:ProjectDetails

                },
                {
                    path:'/project/addProject',
                    name:'addProject',
                    component:addProject,
                },
                {
                    path:'/project/personage',
                    name:'personage',
                    component:ProjectPersonage
                }
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
            path:'/login',
            name:'log',
            component:Login,
        },   {
            path:'/Sign',
            name:'SignIn',
            component:Sign,
        }
    ]
})