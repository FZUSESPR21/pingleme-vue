<template>
  <div style="width: 200px" id="navleft">
    <a-menu
      :default-selected-keys="[this.$route.path.replace('/','')]"
      mode="inline"
      theme="light"
      :inline-collapsed="collapsed"
    >
      <a-menu-item key="info" @click="goTo('/tinfo')">
        <a-icon type="user" />
        <span>个人信息</span>
      </a-menu-item>
      <a-menu-item key="hwlist" @click="goTo('/hwlist')">
        <a-icon type="book" />
        <span>作业列表</span>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="file-done" />
        <span>成绩列表</span>
      </a-menu-item>
	  <a-menu-item key="creva" @click="goTo('/creva')">
	    <a-icon type="form" />
	    <span>创建评审表</span>
	  </a-menu-item>
	  <a-menu-item key="performance" @click="goTo('/performance')">
	    <a-icon type="form" />
	    <span>绩效填写</span>
	  </a-menu-item>
	  <a-menu-item key="CrClass" @click="goTo('/crclass')">
	    <a-icon type="usergroup-add" />
	    <span>创建班级</span>
	  </a-menu-item>	  
	  <a-menu-item key="TClass" @click="goTo('/tclass')">
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
		goTo(path){
			this.$router.replace(path);
		},
	},
};
</script>

<style>
	
</style>