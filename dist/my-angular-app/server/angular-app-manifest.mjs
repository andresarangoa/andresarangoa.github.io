
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
['index.csr.html', {size: 2361, hash: '71845486da6ebb21b8a6e22391a160d20c4f7a28e68fbfda66e16156c54e4c9f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1175, hash: '71b276a6464a59721d990d80aecaad818f5d1349ad6d9a8f3da686d5afaad195', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['projects/index.html', {size: 20714, hash: '2a2466e106a56f50ad712a0553c0196ca5b9a94427727a5fd2618ed201ab8c90', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)}], 
['home/index.html', {size: 20714, hash: '2a2466e106a56f50ad712a0553c0196ca5b9a94427727a5fd2618ed201ab8c90', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)}], 
['blog/index.html', {size: 20714, hash: '2a2466e106a56f50ad712a0553c0196ca5b9a94427727a5fd2618ed201ab8c90', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)}], 
['contact/index.html', {size: 20714, hash: '2a2466e106a56f50ad712a0553c0196ca5b9a94427727a5fd2618ed201ab8c90', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)}], 
['styles-P2U6XG7Z.css', {size: 4970, hash: 'I2bPc10v8Bo', text: () => import('./assets-chunks/styles-P2U6XG7Z_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
