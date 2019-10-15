import Vue from 'vue';
import Router from 'vue-router';
import Resourses from 'vue-resource';

Vue.use(Router);
Vue.use(Resourses);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/items',
      name: 'collectionItems',
      component: () => import('./views/ItemsCollection.vue'),
      children: [
        {
          path: ':id',
          name: 'collectionItemsItem',
          component: () => import('./views/ItemsCollectionItem.vue'),
        },
      ],
    },
    {
      path: '/quests',
      name: 'questList',
      component: () => import('./views/Quest.vue'),
      children: [
        {
          path: ':id',
          name: 'questItem',
          component: () => import('./views/QuestItem.vue'),
        },
      ],
    },
    {
      path: '/heroes',
      name: 'heroList',
      component: () => import('./views/Heroes.vue'),
      children: [
        {
          path: ':id',
          name: 'heroItem',
          component: () => import('./views/HeroItem.vue'),
        },
      ],
    },
    {
      path: '/gamemode',
      name: 'gamemode',
      component: () => import('./views/GameMode.vue'),
    },
  ],
});
