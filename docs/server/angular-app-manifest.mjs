
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  assets: new Map([
['index.csr.html', {size: 509, hash: '3613fc69bcf3e1364f453ffec08432c2325ffb1ba4f1ee7f76b634a615ee527a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1022, hash: '41a1534895830028b4164a6d2f0fb783d826e1efc3d57b0a1cb0b9a23f5a0846', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 20842, hash: '46b72effd3426646496e4feaf435005ac817818bb7b6755b5bf1a7bf4736898a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['styles-5INURTSO.css', {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
