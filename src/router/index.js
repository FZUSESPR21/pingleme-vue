import Vue from "vue"
import Router from "vue-router"
import CreateEvaluation from "../normal/CreateEvaluation.vue";
import CrEvaform from "../normal/CreateEvaluationForm.vue";

Vue.use(Router)

export default new Router({
	routes:[
		{
			path:'/',
			name:'CrEva',
			component:CreateEvaluation
		},
		{
			path:'/evacr',
			name:'CrEvaf',
			component:CrEvaform
		},
	]
})