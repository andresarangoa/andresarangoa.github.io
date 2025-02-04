
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
    'index.csr.html': {size: 2189, hash: '1d4772eb5dc8bc163228ca092dbae6a842c3a841be83c7e95404837795f2ed83', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1002, hash: 'ff8ad3fa09b0d626a67ffa28958db6fef5fec6f70645fccd94e8e70973efd22a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 40432, hash: 'ffb4401decdbf93aca0852679bd8f87ee6f91b79ad535d11cf0c986b08a255ff', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 40432, hash: 'ffb4401decdbf93aca0852679bd8f87ee6f91b79ad535d11cf0c986b08a255ff', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 11646, hash: '294795cc656ab45a4623c65f69a95e2450f8b5974d01446af1a01d4321223f78', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 11619, hash: '3604bcb652a64d20095e53db9b5d061fd824956fcdecdfb23e4dd555a62ed2aa', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'index.html': {size: 40432, hash: 'ffb4401decdbf93aca0852679bd8f87ee6f91b79ad535d11cf0c986b08a255ff', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-P2U6XG7Z.css': {size: 4970, hash: 'I2bPc10v8Bo', text: () => import('./assets-chunks/styles-P2U6XG7Z_css.mjs').then(m => m.default)}
  },
};
