import Vue from "vue"
import Router from "vue-router"
//import {fetch} from '@/util/http'
//import {delCookie,getCookie} from '@/util/util'

import Login from "@/Login/Login.vue"	//登录

import TInfo from "@/Teacher/TInfo.vue"
import User from "@/normal/User.vue"
import SelfInfo from '@/normal/SelfInfo.vue'
import LeaderInfo from '@/normal/LeaderInfo.vue'

import CrClass from "@/Teacher/CrClass.vue"
import TClass from "@/Teacher/TClass.vue"

import mngAddstu from "@/ClassMng/mngAddstu.vue"
import mngSL from "@/ClassMng/mngScoreList.vue"
import PersonSL from "../score/personscore.vue"

import CrEvaform from "@/normal/CreateEvaluationForm.vue";
import CreateEvaluation from "@/normal/CreateEvaluation.vue";
import Performance from "@/normal/Performance.vue"
import PfmDetail from "@/normal/PerformanceDetail.vue"


import HwList from "@/normal/HomeworkList.vue"
import AstList from "@/normal/AssistantList.vue"
import GradeList from "@/normal/GradeList.vue"
import AstPage from "@/normal/AssistantPage.vue"
import AstCorrect from '@/normal/AsCorrect.vue'

import ClsInfo from "@/normal/ClassInfo.vue"

import HwCorrecting from '@/normal/HomeworkCorrecting.vue'
import ImpHomework from '@/normal/ImportHomework.vue'

import JdgTeam from '../normal/JudgeTeam.vue'
import TeamList from '../normal/TeamList.vue'


import test from "../Login/test.vue"


Vue.use(Router)

	const routes= [
		{
			path: '/',
			name: 'Login',
			component: Login,
		},
		
		{
			path:'/test',
			name: 'test',
			component: test
		},
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
			path: '/tclass/mngaddstu/',
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
	];
	const router=new Router({
		routes
	});
	/*
//这个是请求页面路由的时候会验证token存不存在，不存在的话会到登录页
router.beforeEach((to, from, next) => {
 if(to.meta.requireAuth) {
  fetch('/').then(res => {
   if(res.code == 401) {
    next();
   } else {
    if(getCookie('session')) {
     delCookie('session');
    }
    if(getCookie('u_uuid')) {
     delCookie('u_uuid');
    }
    next({
     path: '/'
    });
   }
  });
 } else {
  next();
 }
});*/
export default router;
