import Vue from "vue"
import Router from "vue-router"
import CreateEvaluation from "../normal/CreateEvaluation.vue";
import CrEvaform from "../normal/CreateEvaluationForm.vue";
import HwList from "../normal/HomeworkList.vue"
import HwDetail from "../normal/HomeworkDetail.vue"
import Performance from "../normal/Performance.vue"
import PfmDetail from "../normal/PerformanceDetail.vue"
import GL from "../normal/GradeList.vue"
Vue.use(Router)

export default new Router({
	routes:[
		{
			path:'/GL',
			name:'GL',
			component:GL
		},
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
	]
})