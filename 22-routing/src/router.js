import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';
import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'teams',
      path: '/teams',
      meta: {
        needsAuth: true,
      },
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      beforeEnter: function (to, from, next) {
        console.log('beforeEnter');
        console.log(to, from, next);
        next();
      },
    },
    // this should be put above dynamic data else it will never match, because
    // dynamic data matches also /new
    // { path: '/teams/new', component: TeamsList },

    { path: '/:notFound(.*)', redirect: { path: 'teams' } },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    else
      return {
        top: 0,
        left: 0,
      };
  },
});

router.beforeEach(function (to, from, next) {
  console.log('global beforeeach');
  console.log(to, from);
  if (to.meta.needsAuth) {
    console.log('needs authentication');
  }
  next();
});

router.afterEach(function (to, from) {
  //sending analytics
  console.log('global afrer each', to, from);
  console.log(arguments);
});
