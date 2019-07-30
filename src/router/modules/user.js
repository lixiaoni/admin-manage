/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const userRouter = {
  path: '/userManage',
  component: Layout,
  redirect: '/userManage/page',
  alwaysShow: true, // will always show the root menu
  name: 'MserManage',
  meta: {
    title: '用户管理',
    icon: 'user',
    roles: ['admin', 'editor'] // you can set roles in root nav
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/userManage/list'),
      name: 'UserList',
      meta: {
        title: '用户列表',
        roles: ['admin']
      }
    }
  ]
}

export default userRouter
