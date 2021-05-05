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
import TInfo from "../Teacher/TInfo.vue"
import AstList from "../normal/AssistantList.vue"
import GL from "../normal/GradeList.vue"
import mngSL from "../ClassMng/mngScoreList.vue"
import AP from "../normal/AssistantPage.vue"
import AC from '../normal/AsCorrect.vue'
import HwCorrecting from '../normal/HomeworkCorrecting.vue'
import ImpHomework from '../normal/ImportHomework.vue'
import mngAddstu from "../ClassMng/mngAddstu.vue"
import test from"../ClassMng/test.vue"
import PersonSL from "../score/personscore.vue"

Vue.use(Router)

import User from "../normal/User.vue"


Vue.use(Router)
export default new Router({
	routes:[
		{
			path:'/test',
			name:'test',
			component:test,
		},
		{
			path:'/HwCorrecting',
			name:'HwCorrecting',
			component:HwCorrecting
    },
    {
			path:'/user',
			name:'User',
			component:User

		},
		{
			path:'/GL',
			name:'GL',
			component:GL
		},
		{
			path:'/',
			name:'Login',
			component:Login,
		},
		{
			path:'/tinfo',
			name:'TInfo',
			component:TInfo,
		},
		{
			path:'/creva',
			name:'CrEva',
			component:CreateEvaluation
		},
		{
			path:'/creva/crevaf',
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
			path:'/clsInfo',
			name:'TClass',
			component:TClass
		},
		{
			path:'/tclass/mngsl',
			name:'mngSL',
			component:mngSL,
		},
		{
			path:'/tclass/mngaddstu',
			name:'mngAddstu',
			component:mngAddstu,
		},
		{
			path:'/tclass/mngsl/personsl',
			name:'personsl',
			component:PersonSL,
		},
		{
			path:'/crclass',
			name:'CrClass',
			component:CrClass
		},
      {
			path:'/AP',
			name:'AP',
			component:AP
		},
		{
			path:'/AC',
			name:'AC',
			component:AC
		},
		{
			path:'/ImpHomework',
			name:'ImpHomework',
			component:ImpHomework
    },
    {
			path:'/astlist',
			name:'AstList',
			component:AstList
		},
	]
})