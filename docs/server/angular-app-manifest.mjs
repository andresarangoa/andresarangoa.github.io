
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
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
    'index.csr.html': {size: 462, hash: 'ecb933d61775aec0eefa42e2b24ab4ea787b2a3077198feeba13739dc351d4d6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1002, hash: '6d263b86dcf5e2e42c6ce6a4ef2fe92bc38668671193d9f296ee9addd5730966', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 40005, hash: '3f5c8bb640ab816070cef47d36e063e2996edd2e478e4ce7ae4a4a2c38894b18', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 40005, hash: '3f5c8bb640ab816070cef47d36e063e2996edd2e478e4ce7ae4a4a2c38894b18', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 9628, hash: '9d4866a59489721f447ebba20bf815f209d78e61981360b33f85c3817556deb9', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 40005, hash: '3f5c8bb640ab816070cef47d36e063e2996edd2e478e4ce7ae4a4a2c38894b18', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 9601, hash: 'c076890624148a26163c9a851dc7db73ddd939b42c12d6ddd1b49b9f51ad6736', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)}
  },
};
