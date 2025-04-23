import Home from '@/components/pages/Home.vue';
import Documentation from '@/components/pages/Documentation.vue';
import UnknownRoute from '@/components/pages/UnknownRoute.vue';
import DocsLoader from '@/components/docs/Loader.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

// prettier-ignore
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/docs', name: 'docs', component: Documentation, children: [
      { path: ':source', name: 'docs-source', component: DocsLoader, children: [
        { path: ':tag', name: 'docs-tag', component: Documentation, children: [
          { path: ':category/:file', name: 'docs-file', component: Documentation }
        ] },
      ] },
    ], },

    { path: '/:pathMatch(.*)*', component: UnknownRoute },
  ],
});

export default router;
