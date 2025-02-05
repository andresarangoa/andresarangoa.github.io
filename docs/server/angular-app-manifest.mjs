
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
    'index.csr.html': {size: 710, hash: '5302a783dc82b6042aa481cfa41b335e9f238dea4c434ed3e00c231603f7d888', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1113, hash: '1fd7a3cb7611cdec8c65361c8ed12f770bc099475f3be192dd09824aba9d4f1f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 10934, hash: 'cdaa252e5f7919873877fb62a6595eb00d346974781ade7729600eb8519eb6a9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 60421, hash: '8d6d0726b0af46f96de9c5cb42fca7eb99b1d4b5ba407b39bbf3411888b7e512', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 14553, hash: 'b0d490744aaf30a62b47920df0314ed2cd610fe32d956a8b81fbefddcdba8b7d', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 10988, hash: '8591bc6352bae80d20362dc5be1dbd89a8a1007d13c8d613814e260bad749b6a', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 60421, hash: '8d6d0726b0af46f96de9c5cb42fca7eb99b1d4b5ba407b39bbf3411888b7e512', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-USLPTMVG.css': {size: 57, hash: 'APJ5sWkotCA', text: () => import('./assets-chunks/styles-USLPTMVG_css.mjs').then(m => m.default)}
  },
};
