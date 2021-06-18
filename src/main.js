import Vue from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import router from "./router"
import store from "./store"
import { FormModel } from 'ant-design-vue';
import echarts from "echarts"
import ElementUI from "element-ui"
import qs from 'qs';

//import './mock/mock'
//import './util/util'
//import './util/http'

import '../config/axios'

import axios from 'axios'
axios.defaults.withCredentials=true;//让ajax携带cookie



Vue.use(ElementUI);
Vue.use(FormModel);
Vue.use(Antd);
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
Vue.prototype.$ajax = axios;
Vue.prototype.$qs=qs;
Vue.prototype.$axios = axios;

new Vue({
	el:'#app',
	router,
	store,
  render: (h) => h(App),
}).$mount("#app");
