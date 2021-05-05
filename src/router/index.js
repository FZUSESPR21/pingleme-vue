import Vue from "vue"
import Router from "vue-router"
import CreateEvaluation from "../normal/CreateEvaluation.vue";
import CrEvaform from "../normal/CreateEvaluationForm.vue";
import HwList from "../normal/HomeworkList.vue"
import Performance from "../normal/Performance.vue"
import PfmDetail from "../normal/PerformanceDetail.vue"
import AstList from "../normal/AssistantList.vue"
import ClsInfo from "../normal/ClassInfo.vue"
<<<<<<< Updated upstream
import CrtClass from "../normal/CreatClass.vue"
import GL from "../normal/GradeList.vue"
=======
import GradeList from "../normal/GradeList.vue"
import mngSL from "../ClassMng/mngScoreList.vue"
import AstPage from "../normal/AssistantPage.vue"
import AstCorrect from '../normal/AsCorrect.vue'
import HwCorrecting from '../normal/HomeworkCorrecting.vue'
import ImpHomework from '../normal/ImportHomework.vue'
import mngAddstu from "../ClassMng/mngAddstu.vue"
import SelfInfo from '../normal/SelfInfo.vue'
import LeaderInfo from '../normal/LeaderInfo.vue'
import JdgTeam from '../normal/JudgeTeam.vue'
import TeamList from '../normal/TeamList.vue'
Vue.use(Router)

>>>>>>> Stashed changes
import User from "../normal/User.vue"

Vue.use(Router)
export default new Router({
<<<<<<< Updated upstream
	routes:[
		{
			path:'/user',
			name:'User',
			component:User
=======
	routes: [{
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
>>>>>>> Stashed changes
		},
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
		{
			path:'/astlist',
			name:'AstList',
			component:AstList
		},
		{
			path:'/clsinfo',
			name:'ClsInfo',
			component:ClsInfo
		},
		{
			path:'/crtclass',
			name:'CrtClass',
			component:CrtClass
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