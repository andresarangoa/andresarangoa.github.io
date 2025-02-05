
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "route": "/blog"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 710, hash: 'fb08b2392a523923e0419189a19f2ed4db4fa6cc7ec840f2a35352bd087c8c61', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1113, hash: '961c4ebff39252ef8fb7e932b90e868fd23b21cfeab3dd316f2f389a135ea53a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 60421, hash: '3f08a5a88a9a9c9803c8688cc6e17e4d18b231a58d35ef611722a186080b044f', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 10988, hash: 'f037ebe7e8cda9143b703341346b7dc409532bfc88ef56496dfc4190c39e8502', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 14553, hash: '56ff436248cae2206b7c80813e7066e44f333685585ce32a399ea562943cf72e', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 60421, hash: '3f08a5a88a9a9c9803c8688cc6e17e4d18b231a58d35ef611722a186080b044f', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-USLPTMVG.css': {size: 57, hash: 'APJ5sWkotCA', text: () => import('./assets-chunks/styles-USLPTMVG_css.mjs').then(m => m.default)}
  },
};
