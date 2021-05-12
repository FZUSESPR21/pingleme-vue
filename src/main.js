import Vue from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import router from "./router"
import store from "./store"
import { FormModel } from 'ant-design-vue';
import echarts from "echarts"
import ElementUI from "element-ui"
import './mock/mock'
import axios from 'axios'
import '../config/axios'


Vue.use(ElementUI);
Vue.use(FormModel);
Vue.use(Antd);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;

new Vue({
	el:'#app',
	router,
	store,
  render: (h) => h(App),
}).$mount("#app");
