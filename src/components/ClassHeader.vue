<template>
  <div>
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="grade" @click="goTo('/tclass/mngsl/')"> <a-icon type="file-done" />成绩列表 </a-menu-item>
      <a-menu-item key="assit" > <a-icon type="edit" />管理助教</a-menu-item>
      <a-menu-item key="addstu" @click="goTo('/tclass/mngaddstu/')"> <a-icon type="usergroup-add" />学生管理</a-menu-item>
      <a-menu-item key="crthw" @click="goTo('/tclass/mngaddhw/')"> <a-icon type="plus-square" />创建作业</a-menu-item>
      <a-menu-item key="evateam" > <a-icon type="form" />评审团队</a-menu-item>
	</a-menu>

  </div>
</template>
<script>
export default {
	name:'ClassHeader',
    data() {
		return {
			clsname:'',
		}
	},
	mounted(){
		this.getClsparams();
	},
	methods:{
		getClsparams(){
			var routerPname=this.$route.params.cname
			this.clsname=routerPname
		},
		goTo(path){
			this.$router.replace(path);
		},
	}
};
</script>
