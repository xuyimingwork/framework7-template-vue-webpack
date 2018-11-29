export default [
  {
    path: '/',
    async(routeTo, routeFrom, resolve, reject) {
      // dynamic import component; returns promise
      const vueComponent = () => import('../page/home.vue');
      // resolve promise
      vueComponent().then((vc) => {
        // resolve with component
        resolve({ component: vc.default });
      });
    },
  },
  {
    path: '/panel-left/',
    async(routeTo, routeFrom, resolve, reject) {
      // dynamic import component; returns promise
      const vueComponent = () => import('../page/panel-left.vue');
      // resolve promise
      vueComponent().then((vc) => {
        // resolve with component
        resolve({ component: vc.default });
      });
    },
  },
  {
    path: '/panel-right/',
    async(routeTo, routeFrom, resolve, reject) {
      // dynamic import component; returns promise
      const vueComponent = () => import('../page/panel-right.vue');
      // resolve promise
      vueComponent().then((vc) => {
        // resolve with component
        resolve({ component: vc.default });
      });
    },
  },
  {
    path: '/about/',
    async(routeTo, routeFrom, resolve, reject) {
      // dynamic import component; returns promise
      const vueComponent = () => import('../page/about.vue');
      // resolve promise
      vueComponent().then((vc) => {
        // resolve with component
        resolve({ component: vc.default }); 
      });
    },
  },
  {
    path: '/form/',
    async(routeTo, routeFrom, resolve, reject) {
      // dynamic import component; returns promise
      const vueComponent = () => import('../page/form.vue');
      // resolve promise
      vueComponent().then((vc) => {
        // resolve with component
        resolve({ component: vc.default });
      });
    },
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    async(routeTo, routeFrom, resolve, reject) {
      // dynamic import component; returns promise
      const vueComponent = () => import('../page/dynamic-route.vue');
      // resolve promise
      vueComponent().then((vc) => {
        // resolve with component
        resolve({ component: vc.default });
      });
    },
  },
  {
    path: '(.*)',
    async(routeTo, routeFrom, resolve, reject) {
      // dynamic import component; returns promise
      const vueComponent = () => import('../page/not-found.vue');
      // resolve promise
      vueComponent().then((vc) => {
        // resolve with component
        resolve({ component: vc.default });
      });
    },
  },
];
