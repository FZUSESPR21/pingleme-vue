import Vue from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import router from "./router"
import store from "./store"
import { FormModel } from 'ant-design-vue';


Vue.use(FormModel);
Vue.use(Antd);
Vue.config.productionTip = false;

new Vue({
	el:'#app',
	router,
	store,
  render: (h) => h(App),
}).$mount("#app");
