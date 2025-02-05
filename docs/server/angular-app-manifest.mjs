
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
  },
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 710, hash: '2db27164a7634ba702b0ad20bfbe624a7c06b30c04ba11511c1af04a6834bd36', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1113, hash: '99bf33a79876b709b2a3dff7fef400d3fa3d7f62e949afd2be529807c40c12eb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 10988, hash: '231e2fd6866f874b4cae5e086fdfbf950285e3f6900c43392ed61356f0427243', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 60421, hash: '3caccea6264999be0a7831b1726a8bca3fddcde7c6be119b75605468504de268', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 60421, hash: '3caccea6264999be0a7831b1726a8bca3fddcde7c6be119b75605468504de268', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 14553, hash: '0851d51b0d2cc7965bedb01cbfe049c113f6ee33f3213a706bcb17b5df4eb187', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-USLPTMVG.css': {size: 57, hash: 'APJ5sWkotCA', text: () => import('./assets-chunks/styles-USLPTMVG_css.mjs').then(m => m.default)}
  },
};
