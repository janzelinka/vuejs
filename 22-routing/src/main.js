import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'teams',
      path: '/teams',
      component: TeamsList,
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    { path: '/users', component: UsersList },
    // this should be put above dynamic data else it will never match, because
    // dynamic data matches also /new
    // { path: '/teams/new', component: TeamsList },

    { path: '/:notFound(.*)', redirect: { path: 'teams' } },
  ],
});

const app = createApp(App);

app.use(router);

app.mount('#app');
