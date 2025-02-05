
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
    'index.csr.html': {size: 710, hash: '4b03226d710b14da585014a89c16727fa9e879584f0df0aa57aaeb962502b149', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1113, hash: '127903c42ece59dcbed6e1fa32e90893236a26faa7d8ced288e6d6fe69cd81b1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 10988, hash: '5c02a226ef040700d83ca48438749204e8d1f585eb50f6d16aeddb383dab635f', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 62661, hash: 'f38e3a8e7e9533686c71f902bc25c75380b8a403b6d49cdb9d43df12f21f7da5', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 62661, hash: 'f38e3a8e7e9533686c71f902bc25c75380b8a403b6d49cdb9d43df12f21f7da5', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 14553, hash: 'fd5490b03c4f722240481ccb458545180bc3b79338462b4adbff6e01aabd031e', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-USLPTMVG.css': {size: 57, hash: 'APJ5sWkotCA', text: () => import('./assets-chunks/styles-USLPTMVG_css.mjs').then(m => m.default)}
  },
};
