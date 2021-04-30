<template>
  <div style="width: 200px" id="navleft">
    <a-menu
      :default-selected-keys="[this.$route.path.replace('/','')]"
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
      <a-menu-item key="3">
        <a-icon type="file-done" />
        <span>成绩列表</span>
      </a-menu-item>
	  <a-menu-item key="creva" @click="goTocrEva()">
	    <a-icon type="form" />
	    <span>创建评审表</span>
	  </a-menu-item>
	  <a-menu-item key="performance" @click="goToPerformance()">
	    <a-icon type="form" />
	    <span>绩效填写</span>
	  </a-menu-item>
	  <a-menu-item key="CrClass" @click="goToCrClass()">
	    <a-icon type="usergroup-add" />
	    <span>创建班级</span>
	  </a-menu-item>	  
	  <a-menu-item key="TClass" @click="goToTClass()">
	    <a-icon type="audit" />
	    <span>班级信息</span>
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
		goTocrEva(){
			this.$router.push('/creva');
		},
		goToHwList() {
			this.$router.push('/hwlist');
		},
		goToPerformance() {
			this.$router.push('/performance');
		},
		goToTClass() {
			this.$router.push('/tclass');
		},
		goToCrClass() {
			this.$router.push('/crclass');
		}
	},
};
</script>

<style>
	
</style>