import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'teams',
      path: '/teams',
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
    { path: '/users', components: { default: UsersList, footer: UsersFooter } },
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
  next();
});

const app = createApp(App);

app.use(router);

app.mount('#app');
