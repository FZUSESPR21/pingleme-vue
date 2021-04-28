<template>
  <div style="width: 200px" id="navleft">
    <a-menu
      :default-selected-keys="['4']"
      :default-open-keys="['sub1']"
      mode="inline"
      theme="light"
      :inline-collapsed="collapsed"
    >
      <a-menu-item key="1">
        <a-icon type="user" />
        <span>个人信息</span>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="book" />
        <span>作业列表</span>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="file-done" />
        <span>成绩列表</span>
      </a-menu-item>
	  <a-menu-item key="4" @click="goTocrEva()">
	    <a-icon type="form" />
	    <span>创建评审表</span>
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
		toggleCollapsed() {
			this.collapsed = !this.collapsed;
		},
		goTocrEva(){
			this.$router.push('/');
		}
	},
};
</script>

<style>
	
</style>