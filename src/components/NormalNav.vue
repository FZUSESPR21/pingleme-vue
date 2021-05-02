<template>
  <div style="width: 200px" id="navleft">
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
      <a-menu-item key="hwlist" @click="goToHwList()">
        <a-icon type="book" />
        <span>作业列表</span>
      </a-menu-item>
      <a-menu-item key="3" @click="goToGL()">
        <a-icon type="file-done" />
        <span>成绩列表</span>
      </a-menu-item>
	  <a-menu-item key="" @click="goTocrEva()">
	    <a-icon type="form" />
	    <span>创建评审表</span>
	  </a-menu-item>
    <a-menu-item key="performance" @click="goToPerformance()">
	    <a-icon type="form" />
	    <span>绩效填写</span>
	  </a-menu-item>
    <a-sub-menu key="clsmanage">
          <span slot="title"> <a-icon type="bar-chart" /><span>班级管理</span></span>
          <a-menu-item key="clsinfo" @click="goToClsInfo()">
            班级列表
          </a-menu-item>
          <a-menu-item key="crtclass" @click="goToCrtClass()">
            创建班级
          </a-menu-item>
          <a-menu-item key="astlist" @click="goToAstList()">
            助教列表
          </a-menu-item>
        </a-sub-menu>
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
	}
	},
};
</script>

<style>
	
</style>