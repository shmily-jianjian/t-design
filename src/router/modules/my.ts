import Layout from '@/layouts/index.vue';
import ListIcon from '@/assets/assets-slide-list.svg';

export default [
  {
    path: '/my',
    name: 'my',
    component: Layout,
    redirect: '/my/search-form',
    meta: {
      title: '个人组件',
      icon: ListIcon,
    },
    children: [
      {
        path: 'search-form',
        name: 'searchForm',
        component: () => import('@/pages/my/index.vue'),
        meta: {
          title: '基础查询表单',
        },
      },
    ],
  },
];
