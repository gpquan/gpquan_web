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
import Manage from '@/components/financing/manage'
import ManageP from '@/components/financing/ManageP'
import ManageO from '@/components/financing/ManageO'
 


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
            path:'/login',
            name:'log',
            component:Login,
        },   {
            path:'/Sign',
            name:'SignIn',
            component:Sign,
        },
    {
        path: '/accelerate',
        name: 'accelerate',
        component: accelerate,
        redirect:'/accelerate/Manage',
        children:[
            {
                path:'/accelerate/Manage',
                name:'manage',
                component:Manage,
                redirect:'/accelerate/Manage/p',
                children:[
                    {
                        path:'/accelerate/Manage/p', //项目
                        name:'ManageP',
                        component:ManageP,
                        meta:{
                            keep:1
                        }

                    },{
                        path:'/accelerate/Manage/o', //机构
                        name:'ManageO',
                        component:ManageO,
                        meta:{
                            keep:2
                        }
                    }
                ]
            }
        ]
    },
    ]
})