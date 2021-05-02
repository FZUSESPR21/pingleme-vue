<template>
  <div style="width: 200px" id="navleft">
    <div><span>&emsp;<a-button type="primary" v-bind:disabled="this.studentButton" @click="studentClick()">学生</a-button>
    &emsp;<a-button type="primary" v-bind:disabled="this.headmanButton" @click="headmanClick()">组长</a-button>
    <br/><br/>
    <a-button type="primary" v-bind:disabled="this.assistantButton" @click="assistantClick()">助教</a-button>&emsp;
    <a-button type="primary" v-bind:disabled="this.teacherButton" @click="teacherClick()">老师</a-button></span>
    <br/><br/>
    <a-button type="primary" v-bind:disabled="this.superButton" @click="superClick()">管理员</a-button>&emsp;</div>
    
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
      <a-menu-item key="hwlist" @click="goToHwList()" v-if="getLimits()==1||getLimits()==2">
        <a-icon type="book" />
        <span>作业列表</span>
      </a-menu-item>
      <a-menu-item key="GL" @click="goToGL()" v-if="getLimits()==1||getLimits()==2">
        <a-icon type="file-done" />
        <span>成绩列表</span>
      </a-menu-item>
	  <a-menu-item key="" @click="goTocrEva()" v-if="getLimits()==2">
	    <a-icon type="form" />
	    <span>创建评审表</span>
	  </a-menu-item>
    <a-menu-item key="performance" @click="goToPerformance()" v-if="getLimits()==2">
	    <a-icon type="form" />
	    <span>绩效填写</span>
	  </a-menu-item>
    <a-sub-menu key="clsmanage" v-if="getLimits()==3||getLimits()==4">
          <span slot="title"> <a-icon type="bar-chart" /><span>班级管理</span></span>
          <a-menu-item key="clsinfo" @click="goToClsInfo()">
            班级列表
          </a-menu-item>
          <a-menu-item key="crtclass" @click="goToCrtClass()" v-if="getLimits()==4">
            创建班级
          </a-menu-item>
          <a-menu-item key="astlist" @click="goToAstList()" v-if="getLimits()==4">
            助教列表
          </a-menu-item>
        </a-sub-menu>
    <a-menu-item key="user" @click="goToUser()" v-if="getLimits()==5">
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
    limits:1,
    studentButton:true,
    headmanButton:false,
    assistantButton:false,
    teacherButton:false,
    superButton:false,
		};
	},
	methods: {
    openKeys(){
      if(this.$route.path.replace('/','')=='clsinfo'||
      this.$route.path.replace('/','')=='astlist'||
      this.$route.path.replace('/','')=='crtclass')
        return 'clsmanage';
    },
    studentClick(){
      this.limits=1;
      this.studentButton=true;
      this.headmanButton=false;
      this.assistantButton=false;
      this.teacherButton=false;
      this.superButton=false;
    },
    headmanClick(){
      this.limits=2;
      this.studentButton=false;
      this.headmanButton=true;
      this.assistantButton=false;
      this.teacherButton=false;
      this.superButton=false;
    },
    assistantClick(){
      this.limits=3;
      this.studentButton=false;
      this.headmanButton=false;
      this.assistantButton=true;
      this.teacherButton=false;
      this.superButton=false;
    },
    teacherClick(){
      this.limits=4;
      this.studentButton=false;
      this.headmanButton=false;
      this.assistantButton=false;
      this.teacherButton=true;
      this.superButton=false;
    },
    superClick(){
      this.limits=5;
      this.studentButton=false;
      this.headmanButton=false;
      this.assistantButton=false;
      this.teacherButton=false;
      this.superButton=true;
    },
    getLimits(){
      return this.limits;
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