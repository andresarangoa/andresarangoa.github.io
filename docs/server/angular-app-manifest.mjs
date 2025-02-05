
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
    'index.csr.html': {size: 710, hash: 'd7a823b5bdf969ba2cff70359cd534b745d8cacbb1c986222f37b74980390338', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1113, hash: '3960c0a910fe54826c9b2af572c8c644df1b8ee2ce3f0a6fdda93199cfb695e0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 60421, hash: '0c6dade6fb9ddce02eb604f9ceeff271eb5ea443b53347c55fc2cd7de48efa43', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 11846, hash: '3dd42ad17fe0aa166b78052d34cb5a6101f5236bc6d6078d062a1020c22a8bd6', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 10934, hash: 'b0d269d29fc5f7597363cbf702f9c2a7e019654c9e94c844130650deb3d41894', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 60421, hash: '0c6dade6fb9ddce02eb604f9ceeff271eb5ea443b53347c55fc2cd7de48efa43', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 10988, hash: '35dc947591cfdf3e9db7d034c87257b2e245037e45921ba891a9006f6b7f63ae', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'styles-USLPTMVG.css': {size: 57, hash: 'APJ5sWkotCA', text: () => import('./assets-chunks/styles-USLPTMVG_css.mjs').then(m => m.default)}
  },
};
