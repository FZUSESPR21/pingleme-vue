<template>
  <div style="width: 200px" id="navleft">
    <div><span>&emsp;<a-button type="primary" v-bind:disabled="$store.getters.getStudentButton" @click="$store.commit('studentClick')">学生</a-button>
    &emsp;<a-button type="primary" v-bind:disabled="$store.getters.getHeadmanButton" @click="$store.commit('headmanClick')">组长</a-button>
    <br/><br/>
    <a-button type="primary" v-bind:disabled="$store.getters.getAssistantButton" @click="$store.commit('assistantClick')">助教</a-button>&emsp;
    <a-button type="primary" v-bind:disabled="$store.getters.getTeacherButton" @click="$store.commit('teacherClick')">老师</a-button></span>
    <br/><br/>
    <a-button type="primary" v-bind:disabled="$store.getters.getSuperButton" @click="$store.commit('superClick')">管理员</a-button>&emsp;</div>
    
    <a-menu
      :default-selected-keys="[this.$route.path.replace('/','')]"
      :default-open-keys="[openKeys()]"
      mode="inline"
      theme="light"
      :inline-collapsed="collapsed"
    >
      <a-menu-item key="1">
        <a-icon type="user" />
        <span>个人信息</span>
      </a-menu-item>
      <a-menu-item key="hwlist" @click="goToHwList()" v-if="$store.getters.getLimits==1||$store.getters.getLimits==2">
        <a-icon type="book" />
        <span>作业列表</span>
      </a-menu-item>
      <a-menu-item key="GL" @click="goToGL()" v-if="$store.getters.getLimits==1||$store.getters.getLimits==2">
        <a-icon type="file-done" />
        <span>成绩列表</span>
      </a-menu-item>
	  <a-menu-item key="" @click="goTocrEva()" v-if="$store.getters.getLimits==2">
	    <a-icon type="form" />
	    <span>创建评审表</span>
	  </a-menu-item>
    <a-menu-item key="performance" @click="goToPerformance()" v-if="$store.getters.getLimits==2">
	    <a-icon type="form" />
	    <span>绩效填写</span>
	  </a-menu-item>
    <a-sub-menu key="clsmanage" v-if="$store.getters.getLimits==3||$store.getters.getLimits==4">
          <span slot="title"> <a-icon type="bar-chart" /><span>班级管理</span></span>
          <a-menu-item key="clsinfo" @click="goToClsInfo()">
            班级列表
          </a-menu-item>
          <a-menu-item key="crtclass" @click="goToCrtClass()" v-if="$store.getters.getLimits==4">
            创建班级
          </a-menu-item>
          <a-menu-item key="astlist" @click="goToAstList()" v-if="$store.getters.getLimits==4">
            助教列表
          </a-menu-item>
        </a-sub-menu>
    <a-menu-item key="user" @click="goToUser()" v-if="$store.getters.getLimits==5">
	    <a-icon type="form" />
	    <span>用户列表</span>
	  </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
	name:'NormalNav',
	data() {
		return {
		collapsed: false,
		};
	},
	methods: {
    openKeys(){
      if(this.$route.path.replace('/','')=='clsinfo'||
      this.$route.path.replace('/','')=='astlist'||
      this.$route.path.replace('/','')=='crtclass')
        return 'clsmanage';
    },
		toggleCollapsed() {
			this.collapsed = !this.collapsed;
		},
		goTocrEva(){
			this.$router.push('/');
		},
    goToHwList() {
      this.$router.push('/hwlist');
    },
    goToPerformance() {
      this.$router.push('/performance');
    },

    goToAstList() {
      this.$router.push('/astlist');
    },
    goToClsInfo() {
      this.$router.push('/clsinfo');
    },
    goToCrtClass() {
      this.$router.push('/crtclass');
    },
  	goToGL(){
  		this.$router.push('/GL');
  	},
    goToUser(){
  		this.$router.push('/user');
  	},
	},
};
</script>

<style>
	
</style>