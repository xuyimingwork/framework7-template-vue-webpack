export default [
  {
    path: '/',
    async(routeTo, routeFrom, resolve, reject) {
      // dynamic import component; returns promise
      const vueComponent = () => import('../../pages/home.vue');
      // resolve promise
      vueComponent().then((vc) => {
        // resolve with component
        resolve({ component: vc.default })
      });
    },
  },
  {
    path: '/panel-left/',
    async(routeTo, routeFrom, resolve, reject) {
      // dynamic import component; returns promise
      const vueComponent = () => import('../../pages/panel-left.vue');
      // resolve promise
      vueComponent().then((vc) => {
        // resolve with component
        resolve({ component: vc.default })
      });
    },
  },
  {
    path: '/panel-right/',
    async(routeTo, routeFrom, resolve, reject) {
      // dynamic import component; returns promise
      const vueComponent = () => import('../../pages/panel-right.vue');
      // resolve promise
      vueComponent().then((vc) => {
        // resolve with component
        resolve({ component: vc.default })
      });
    },
  },
  {
    path: '/about/',
    async(routeTo, routeFrom, resolve, reject) {
      // dynamic import component; returns promise
      const vueComponent = () => import('../../pages/about.vue');
      // resolve promise
      vueComponent().then((vc) => {
        // resolve with component
        resolve({ component: vc.default })
      });
    },
  },
  {
    path: '/form/',
    async(routeTo, routeFrom, resolve, reject) {
      // dynamic import component; returns promise
      const vueComponent = () => import('../../pages/form.vue');
      // resolve promise
      vueComponent().then((vc) => {
        // resolve with component
        resolve({ component: vc.default })
      });
    },
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    async(routeTo, routeFrom, resolve, reject) {
      // dynamic import component; returns promise
      const vueComponent = () => import('../../pages/dynamic-route.vue');
      // resolve promise
      vueComponent().then((vc) => {
        // resolve with component
        resolve({ component: vc.default })
      });
    },
  },
  {
    path: '(.*)',
    async(routeTo, routeFrom, resolve, reject) {
      // dynamic import component; returns promise
      const vueComponent = () => import('../../pages/not-found.vue');
      // resolve promise
      vueComponent().then((vc) => {
        // resolve with component
        resolve({ component: vc.default })
      });
    },
  },
];
