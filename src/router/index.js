import Vue from "vue"
import Router from "vue-router"
import CreateEvaluation from "../normal/CreateEvaluation.vue";
import CrEvaform from "../normal/CreateEvaluationForm.vue";
import HwList from "../normal/HomeworkList.vue"
import Performance from "../normal/Performance.vue"
import PfmDetail from "../normal/PerformanceDetail.vue"
import Login from "../Login/Login.vue"
import TClass from "../Teacher/TClass.vue"
import CrClass from "../Teacher/CrClass.vue"
import TInfo from "../Teacher/TInfo.vue"
import AstList from "../normal/AssistantList.vue"
import ClsInfo from "../normal/ClassInfo.vue"
import GradeList from "../normal/GradeList.vue"
import mngSL from "../ClassMng/mngScoreList.vue"
import AstPage from "../normal/AssistantPage.vue"
import AstCorrect from '../normal/AsCorrect.vue'
import HwCorrecting from '../normal/HomeworkCorrecting.vue'
import ImpHomework from '../normal/ImportHomework.vue'
import mngAddstu from "../ClassMng/mngAddstu.vue"

import PersonSL from "../score/personscore.vue"
import SelfInfo from '../normal/SelfInfo.vue'
import LeaderInfo from '../normal/LeaderInfo.vue'
import JdgTeam from '../normal/JudgeTeam.vue'
import TeamList from '../normal/TeamList.vue'
import User from "../normal/User.vue"


Vue.use(Router)
export default new Router({
	routes: [
    {
			path: '/SelfInfo',
			name: 'SelfInfo',
			component: SelfInfo
		},
		{

			path: '/LeaderInfo',
			name: 'LeaderInfo',
			component: LeaderInfo
		},
		{
			path: '/HwCorrecting',
			name: 'HwCorrecting',
			component: HwCorrecting
		},
		{
			path: '/user',
			name: 'User',
			component: User

		},
		{
			path: '/GradeList',
			name: 'GradeList',
			component: GradeList
		},
		{
			path: '/',
			name: 'Login',
			component: Login,
		},
		{
			path: '/tinfo',
			name: 'TInfo',
			component: TInfo,
		},
		{
			path: '/creva',
			name: 'CrEva',
			component: CreateEvaluation
		},
		{
			path: '/creva/crevaf',
			name: 'CrEvaf',
			component: CrEvaform
		},
		{
			path: '/hwlist',
			name: 'HwList',
			component: HwList
		},
		{
			path: '/performance',
			name: 'Performance',
			component: Performance
		},
		{
			path: '/pfmdetail',
			name: 'PfmDetail',
			component: PfmDetail
		},
		{
			path: '/tclass',
			name: 'TClass',
			component: TClass
		},
		{
			path: '/tclass/mngsl',
			name: 'mngSL',
			component: mngSL,
		},
		{
			path:'/clsInfo',
			name:'TClass',
			component:TClass
    },
    {
			path: '/tclass/mngaddstu',
			name: 'mngAddstu',
			component: mngAddstu,
		},
		{
			path: '/crclass',
			name: 'CrClass',
			component: CrClass
		},
		{
			path: '/AstPage',
			name: 'AstPage',
			component: AstPage
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
			path: '/AstCorrect',
			name: 'AstCorrect',
			component: AstCorrect

		},
		{
			path: '/ImpHomework',
			name: 'ImpHomework',
			component: ImpHomework
		},
		{
			path: '/astlist',
			name: 'AstList',
			component: AstList
		},
		{
			path: '/clsinfo',
			name: 'ClsInfo',
			component: ClsInfo
		},
		{
			path: '/jdgteam',
			name: 'JdgTeam',
			component: JdgTeam
		},
		{
			path: '/teamlist',
			name: 'TeamList',
			component: TeamList
		},
	]
})
