<template>
  <div>
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="grade"> <a-icon type="file-done" />成绩列表 </a-menu-item>
      <a-menu-item key="assit" > <a-icon type="edit" />管理助教</a-menu-item>
      <a-menu-item key="stu" > <a-icon type="usergroup-add" />导入学生</a-menu-item>
      <a-menu-item key="eva" > <a-icon type="highlight" />评审团队</a-menu-item>
      <a-menu-item key="group"> <a-icon type="pushpin"/>开始/结束结对</a-menu-item>
	  <a-menu-item key="team"> <a-icon type="pushpin"/>开始/结束团队创建</a-menu-item>
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
