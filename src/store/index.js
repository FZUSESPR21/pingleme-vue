import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
		u_id:'',
		user_name:'',
		user_role:'',
		team_id:'',
		class_id:'',
        limits: 4,
        studentButton:false,
        headmanButton:false,
        assistantButton:false,
        teacherButton:false,
        superButton:false,

		url:"http://pingleme.top:3000",

    },
    getters:{
		Userid:(state) => state.u_id,
		UserName: (state) => state.user_name,
		UserRole: (state) => state.user_role,
		Userteam: (state) => state.team_id,
		Userclass: (state) => state.class_id,
		
        getLimits(state){
            return state.limits;
        },
		getUrl(state){
		    return state.url;
		},
        getStudentButton(state){
            return state.studentButton;
        },
        getHeadmanButton(state){
            return state.headmanButton;
        },
        getAssistantButton(state){
            return state.assistantButton;
        },
        getTeacherButton(state){
            return state.teacherButton;
        },
        getSuperButton(state){
            return state.superButton;
        },
    },
    mutations:{
		handleUserid: (state,u_id) => {
			state.u_id=u_id
		     // 把登录的用户的id保存到localStorage中，防止页面刷新，导致vuex重新启动，用户名就成为初始值（初始值为空）的情况
		    localStorage.setItem('u_id', u_id)
		},
		handleUserName: (state,user_name) => {
			state.user_name=user_name
		    localStorage.setItem('user_name', user_name)
		},
		handleUserRole: (state,user_role) => {
			state.user_role=user_role
		    localStorage.setItem('user_role', user_role)
		},
		handleUserTeam: (state,team_id) => {
			state.team_id=team_id
		    localStorage.setItem('team_id', team_id)
		},
		handleUserclass: (state,class_id) => {
			state.class_id=class_id
		    localStorage.setItem('class_id', class_id)
		},

		
        studentClick(state){
            state.limits=1;
            state.studentButton=true;
            state.headmanButton=false;
            state.assistantButton=false;
            state.teacherButton=false;
            state.superButton=false;
        },
        headmanClick(state){
            state.limits=2;
            state.studentButton=false;
            state.headmanButton=true;
            state.assistantButton=false;
            state.teacherButton=false;
            state.superButton=false;
        },
        assistantClick(state){
            state.limits=3;
            state.studentButton=false;
            state.headmanButton=false;
            state.assistantButton=true;
            state.teacherButton=false;
            state.superButton=false;
        },
        teacherClick(state){
            state.limits=4;
            state.studentButton=false;
            state.headmanButton=false;
            state.assistantButton=false;
            state.teacherButton=true;
            state.superButton=false;
        },
        superClick(state){
            state.limits=5;
            state.studentButton=false;
            state.headmanButton=false;
            state.assistantButton=false;
            state.teacherButton=false;
            state.superButton=true;
        },
    },
    actions:{},
    modules:{},
})