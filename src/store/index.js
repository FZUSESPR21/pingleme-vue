import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        limits: 4,
        studentButton:true,
        headmanButton:false,
        assistantButton:false,
        teacherButton:false,
        superButton:false,
    },
    getters:{
        getLimits(state){
            return state.limits;
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