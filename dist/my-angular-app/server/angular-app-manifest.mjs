
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
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
  }
],
  assets: new Map([
['index.csr.html', {size: 2330, hash: '2400e6d3f7c9b8f5c0d7153f7c87709ae5e43a790a027cf2e0202233f205e27e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1144, hash: '06447dac335aff0b889a07708e07e70b058be771c56d2838c100e4bf3ebaaf08', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['projects/index.html', {size: 47904, hash: 'd2422cb6c07577f0ff58952cf6bd0c3c19590ad187df4c27bb01f7dd034ab3c7', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)}], 
['blog/index.html', {size: 21208, hash: 'b9d3c1d947dd935d8dac469e3a6a8f7996fd977b1f7d0fb2fc65644f427972fc', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)}], 
['home/index.html', {size: 47904, hash: 'd2422cb6c07577f0ff58952cf6bd0c3c19590ad187df4c27bb01f7dd034ab3c7', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)}], 
['contact/index.html', {size: 21125, hash: '245c402a7a44b642c13bedfffdf76ffe267ec71377fcee6b2bfc6ab551c56cad', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)}], 
['styles-P2U6XG7Z.css', {size: 4970, hash: 'I2bPc10v8Bo', text: () => import('./assets-chunks/styles-P2U6XG7Z_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
