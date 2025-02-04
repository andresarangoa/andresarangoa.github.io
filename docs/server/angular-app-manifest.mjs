
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
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
    'index.csr.html': {size: 489, hash: '703fe861762700445bb7dc8f0584151b84d884b73a301781bac679395c3d0964', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1002, hash: '19a1d43d010264631620182d73d1ba36e9c94d31eac74f400dbbce6711042c9b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3194, hash: '429f9f26ca81982e62cc39d97e7a199e05798078d74384c3cf918b0248599f9d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 3194, hash: '429f9f26ca81982e62cc39d97e7a199e05798078d74384c3cf918b0248599f9d', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 3194, hash: '429f9f26ca81982e62cc39d97e7a199e05798078d74384c3cf918b0248599f9d', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 3194, hash: '429f9f26ca81982e62cc39d97e7a199e05798078d74384c3cf918b0248599f9d', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 3194, hash: '429f9f26ca81982e62cc39d97e7a199e05798078d74384c3cf918b0248599f9d', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
