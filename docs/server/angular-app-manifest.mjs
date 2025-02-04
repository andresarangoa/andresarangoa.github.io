
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/https://andresarangoa.github.io/home",
    "route": "/https://andresarangoa.github.io"
  },
  {
    "renderMode": 2,
    "route": "/https://andresarangoa.github.io/home"
  },
  {
    "renderMode": 2,
    "route": "/https://andresarangoa.github.io/projects"
  },
  {
    "renderMode": 2,
    "route": "/https://andresarangoa.github.io/blog"
  },
  {
    "renderMode": 2,
    "route": "/https://andresarangoa.github.io/contact"
  }
],
  assets: new Map([
['index.csr.html', {size: 2360, hash: '2862058be2f54dffef2d54c7262ce44e8a3587b520733282a973ab7f5815cf8f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1174, hash: 'e310eba0fc9c68b4d862c0252e4901db9eb3c693cc11e3c34468dedc90bd9bae', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['o/projects/index.html', {size: 20713, hash: '530ee8adc83707e540062f66646872d5a2946928d3a05749e956e9c11abda428', text: () => import('./assets-chunks/o_projects_index_html.mjs').then(m => m.default)}], 
['o/blog/index.html', {size: 20713, hash: '530ee8adc83707e540062f66646872d5a2946928d3a05749e956e9c11abda428', text: () => import('./assets-chunks/o_blog_index_html.mjs').then(m => m.default)}], 
['o/home/index.html', {size: 20713, hash: '530ee8adc83707e540062f66646872d5a2946928d3a05749e956e9c11abda428', text: () => import('./assets-chunks/o_home_index_html.mjs').then(m => m.default)}], 
['o/contact/index.html', {size: 20713, hash: '530ee8adc83707e540062f66646872d5a2946928d3a05749e956e9c11abda428', text: () => import('./assets-chunks/o_contact_index_html.mjs').then(m => m.default)}], 
['styles-P2U6XG7Z.css', {size: 4970, hash: 'I2bPc10v8Bo', text: () => import('./assets-chunks/styles-P2U6XG7Z_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
