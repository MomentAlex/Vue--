import Vue from 'vue'
import Router from 'vue-router'
import { uiRouter } from './uiRouter'
import { prdRouter } from './prdRouter'


Vue.use(Router)

let routerConfig = uiRouter.concat(prdRouter)

let router = new Router({
  routes: routerConfig
})
let linkCssObj = document.getElementById('classLink');
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  if (to.meta.class) { //动态载入css文件

    linkCssObj.href = `/static/css/${to.meta.class}.css`
    linkCssObj.onload = () => {
      console.log('onload');
      next()
    }
  }
  next()
})
export default router
