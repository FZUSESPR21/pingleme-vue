<template>
  <div>
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="grade"> <a-icon type="file-done" />成绩列表 </a-menu-item>
      <a-menu-item key="assit" > <a-icon type="edit" />管理助教</a-menu-item>
      <a-menu-item key="addstu" > <a-icon type="usergroup-add" />导入学生</a-menu-item>
      <a-menu-item key="hwdone" > <a-icon type="highlight" />批改作业</a-menu-item>
      <a-menu-item key="crthw" > <a-icon type="plus-square" />创建作业</a-menu-item>
      <a-menu-item key="evateam" > <a-icon type="form" />评审团队</a-menu-item>
	</a-menu>

  </div>
</template>
<script>
export default {
	name:'ClassHeader',
    data() {
		return {
		current: ['grade'],
		};
	},
};
</script>
