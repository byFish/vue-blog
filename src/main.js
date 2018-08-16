// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入全局css
import './assets/css/index.less'

Vue.config.productionTip = false



//引入自定义组件
import fishNav from './components/common/fishNav'
import fishInput from './components/common/fishInput'
import fishButton from './components/common/fishButton'
import fishTyping from './components/common/fishTyping'
//注册自定义组件
Vue.component(fishNav.name,fishNav);
Vue.component(fishInput.name,fishInput);
Vue.component(fishButton.name,fishButton);
Vue.component(fishTyping.name,fishTyping);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {//声明组件
   App,
   fishNav,
   fishInput,
   fishButton,
   fishTyping },
  template: '<App/>'
})



