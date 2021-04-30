import Vue from "vue"
import Router from "vue-router"
import CreateEvaluation from "../normal/CreateEvaluation.vue";
import CrEvaform from "../normal/CreateEvaluationForm.vue";
import HwList from "../normal/HomeworkList.vue"
import HwDetail from "../normal/HomeworkDetail.vue"
import Performance from "../normal/Performance.vue"
import PfmDetail from "../normal/PerformanceDetail.vue"
import Login from "../Login/Login.vue"
import TClass from "../Teacher/TClass.vue"
import CrClass from "../Teacher/CrClass.vue"

Vue.use(Router)

export default new Router({
	routes:[
		{
			path:'/',
			name:'Login',
			component:Login,
		},
		{
			path:'/creva',
			name:'CrEva',
			component:CreateEvaluation
		},
		{
			path:'/crevaf',
			name:'CrEvaf',
			component:CrEvaform
		},
		{
			path:'/hwlist',
			name:'HwList',
			component:HwList
		},
		{
			path:'/hwdetail',
			name:'HwDetail',
			component:HwDetail
		},
		{
			path:'/performance',
			name:'Performance',
			component:Performance
		},
		{
			path:'/pfmdetail',
			name:'PfmDetail',
			component:PfmDetail
		},
		{
			path:'/tclass',
			name:'TClass',
			component:TClass
		},
		{
			path:'/crclass',
			name:'CrClass',
			component:CrClass
		},
	]
})