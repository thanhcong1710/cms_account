import Vue from 'vue'
import Router from 'vue-router'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views - New Layout
const TheContainerNew = () => import('@/containers/TheContainerNew')

// Views
const Switch = () => import('@/views/pages/Switch')

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const SingleSignOn = () => import('@/views/pages/SingleSignOn')
const Register = () => import('@/views/pages/Register')

// Users
const Users = () => import('@/views/users/list')
const User = () => import('@/views/users/detail')
const EditUser = () => import('@/views/users/edit')
const AddUser = () => import('@/views/users/add')
const UserDetail = () => import('@/views/users/user_detail')
const UserEdit = () => import('@/views/users/user_edit')
const ChangePass = () => import('@/views/users/change_pass')

//Roles
const Roles = () => import('@/views/roles/Roles')
const Role = () => import('@/views/roles/Role')
const EditRole = () => import('@/views/roles/EditRole')
const CreateRole = () => import('@/views/roles/CreateRole')

//Menus
const Menus       = () => import('@/views/menu/MenuIndex')
const CreateMenu  = () => import('@/views/menu/CreateMenu')
const EditMenu    = () => import('@/views/menu/EditMenu')
const DeleteMenu  = () => import('@/views/menu/DeleteMenu')

//MenuElements
const MenuElements = () => import('@/views/menuElements/ElementsIndex')
const CreateMenuElement = () => import('@/views/menuElements/CreateMenuElement')
const EditMenuElement = () => import('@/views/menuElements/EditMenuElement')
const ShowMenuElement = () => import('@/views/menuElements/ShowMenuElement')
const DeleteMenuElement = () => import('@/views/menuElements/DeleteMenuElement')

const Media = () => import('@/views/media/Media')


Vue.use(Router)

let router = new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})


router.beforeEach((to, from, next) => {
  let roles = localStorage.getItem("roles");
  if(roles != null && roles != ''){
    roles = roles.split(',')
  }
  if(to.matched.some(record => record.meta.requiresAdmin)) {
    // if(roles != null && roles.indexOf('admin') >= 0 ){
    if(roles != null && roles != '' && roles != 'undefined'){  
      next()
    }else{
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    }
  }else if(to.matched.some(record => record.meta.requiresUser)) {
    // if(roles != null && roles.indexOf('user') >= 0 ){
    if(roles != null && roles != '' && roles != 'undefined'){  
      next()
    }else{
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    }
  }else{
    next()
  }
})

export default router

function configRoutes () {
  return [
    {
      path: '/',
      redirect: '/switch',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: '/user_change_password',
          meta: { label: 'Đổi mật khẩu'},
          name: 'Đổi mật khẩu',
          component: ChangePass,
          meta:{
            requiresAdmin: true
          }
        },
        {
          path: '/user_detail',
          meta: { label: 'Thông tin tài khoản'},
          name: 'Thông tin tài khoản',
          component: UserDetail,
          meta:{
            requiresAdmin: true
          }
        },
        {
          path: '/user_edit',
          meta: { label: 'Cập nhật thông tin' },
          name: 'Cập nhật thông tin',
          component: UserEdit,
          meta:{
            requiresAdmin: true
          }
        },
        {
          path: 'media',
          name: 'Media',
          component: Media,
          meta:{
            requiresAdmin: true
          }
        },
        {
          path: 'menu',
          meta: { label: 'Menu'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Menus,
              meta:{
                requiresAdmin: true
              }
            },
            {
              path: 'create',
              meta: { label: 'Create Menu' },
              name: 'CreateMenu',
              component: CreateMenu,
              meta:{
                requiresAdmin: true
              }
            },
            {
              path: ':id/edit',
              meta: { label: 'Edit Menu' },
              name: 'EditMenu',
              component: EditMenu,
              meta:{
                requiresAdmin: true
              }
            },
            {
              path: ':id/delete',
              meta: { label: 'Delete Menu' },
              name: 'DeleteMenu',
              component: DeleteMenu,
              meta:{
                requiresAdmin: true
              }
            },
          ]
        },
        {
          path: 'menuelement',
          meta: { label: 'MenuElement'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: ':menu/menuelement',
              component: MenuElements,
              meta:{
                requiresAdmin: true
              }
            },
            {
              path: ':menu/menuelement/create',
              meta: { label: 'Create Menu Element' },
              name: 'Create Menu Element',
              component: CreateMenuElement,
              meta:{
                requiresAdmin: true
              }
            },
            {
              path: ':menu/menuelement/:id',
              meta: { label: 'Menu Element Details'},
              name: 'Menu Element',
              component: ShowMenuElement,
              meta:{
                requiresAdmin: true
              }
            },
            {
              path: ':menu/menuelement/:id/edit',
              meta: { label: 'Edit Menu Element' },
              name: 'Edit Menu Element',
              component: EditMenuElement,
              meta:{
                requiresAdmin: true
              }
            },
            {
              path: ':menu/menuelement/:id/delete',
              meta: { label: 'Delete Menu Element' },
              name: 'Delete Menu Element',
              component: DeleteMenuElement,
              meta:{
                requiresAdmin: true
              }
            },
          ]
        },
        {
          path: 'users',
          meta: { label: 'Nhân viên'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Users,
              meta:{
                requiresAdmin: true
              }
            },
            {
              path: 'add',
              meta: { label: 'Thêm mới nhân viên' },
              name: 'Add User',
              component: AddUser,
              meta:{
                requiresAdmin: true
              }
            },
            {
              path: ':id',
              meta: { label: 'Chi tiết nhân viên'},
              name: 'User',
              component: User,
              meta:{
                requiresAdmin: true
              }
            },
            {
              path: ':id/edit',
              meta: { label: 'Cập nhật nhân viên' },
              name: 'Edit User',
              component: EditUser,
              meta:{
                requiresAdmin: true
              }
            },
          ]
        },
        {
          path: 'roles',
          meta: { label: 'Roles'},
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: '',
              component: Roles,
              meta:{
                requiresAdmin: true
              }
            },
            {
              path: 'create',
              meta: { label: 'Create Role' },
              name: 'Create Role',
              component: CreateRole,
              meta:{
                requiresAdmin: true
              }
            },
            {
              path: ':id',
              meta: { label: 'Role Details'},
              name: 'Role',
              component: Role,
              meta:{
                requiresAdmin: true
              }
            },
            {
              path: ':id/edit',
              meta: { label: 'Edit Role' },
              name: 'Edit Role',
              component: EditRole,
              meta:{
                requiresAdmin: true
              }
            },
          ]
        },
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
      ]
    },
    {
      path: '/',
      redirect: '/login',
      name: 'Auth',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        },
      ]
    },
    {
      path: '*',
      name: '404',
      component: Page404
    },
    {
      path: '/switch',
      name: 'Switch',
      component:Switch,
      meta:{
        requiresAdmin: true
      }
    },
    {
      path: '/single-sign-on/:hrm_id/:token',
      name: 'Single Sign On',
      component: SingleSignOn
    },
  ]
}
