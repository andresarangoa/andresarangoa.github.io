
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/https://andresarangoa.github.io/browser/home",
    "route": "/https://andresarangoa.github.io/browser"
  },
  {
    "renderMode": 2,
    "route": "/https://andresarangoa.github.io/browser/home"
  },
  {
    "renderMode": 2,
    "route": "/https://andresarangoa.github.io/browser/projects"
  },
  {
    "renderMode": 2,
    "route": "/https://andresarangoa.github.io/browser/blog"
  },
  {
    "renderMode": 2,
    "route": "/https://andresarangoa.github.io/browser/contact"
  }
],
  assets: new Map([
['index.csr.html', {size: 2368, hash: 'ad701e36b3ea727acc9799873a32ee75e6f325b2bac6c71e0e579a2388e72536', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1182, hash: 'facc72c67271dc5590ba579b2c735e25e397c43ade8f95d7e64fadd22fa5017f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['r/projects/index.html', {size: 20745, hash: '4a8f8fc41b4db3cdf9a6abf4aa709d8ec8b4364c1366787312cb9f861ac03051', text: () => import('./assets-chunks/r_projects_index_html.mjs').then(m => m.default)}], 
['r/blog/index.html', {size: 20745, hash: '4a8f8fc41b4db3cdf9a6abf4aa709d8ec8b4364c1366787312cb9f861ac03051', text: () => import('./assets-chunks/r_blog_index_html.mjs').then(m => m.default)}], 
['r/home/index.html', {size: 20745, hash: '4a8f8fc41b4db3cdf9a6abf4aa709d8ec8b4364c1366787312cb9f861ac03051', text: () => import('./assets-chunks/r_home_index_html.mjs').then(m => m.default)}], 
['r/contact/index.html', {size: 20745, hash: '4a8f8fc41b4db3cdf9a6abf4aa709d8ec8b4364c1366787312cb9f861ac03051', text: () => import('./assets-chunks/r_contact_index_html.mjs').then(m => m.default)}], 
['styles-P2U6XG7Z.css', {size: 4970, hash: 'I2bPc10v8Bo', text: () => import('./assets-chunks/styles-P2U6XG7Z_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
