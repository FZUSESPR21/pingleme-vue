  
<template>
	<div style="width: 200px" id="navleft">
		
		<!-- <div><span>&emsp;<a-button type="primary" v-bind:disabled="$store.getters.getStudentButton"
					@click="$store.commit('studentClick')">学生</a-button>
				&emsp;<a-button type="primary" v-bind:disabled="$store.getters.getHeadmanButton"
					@click="$store.commit('headmanClick')">组长</a-button>
				<br /><br />
				<a-button type="primary" v-bind:disabled="$store.getters.getAssistantButton"
					@click="$store.commit('assistantClick')">助教</a-button>&emsp;
				<a-button type="primary" v-bind:disabled="$store.getters.getTeacherButton"
					@click="$store.commit('teacherClick')">老师</a-button>
			</span>
			<br /><br />
			<a-button type="primary" v-bind:disabled="$store.getters.getSuperButton"
				@click="$store.commit('superClick')">管理员</a-button>&emsp;
		</div> -->
		<a-menu :default-selected-keys="[this.$route.path.replace('/','')]" :default-open-keys="[openKeys()]"
			mode="inline" theme="light" :inline-collapsed="collapsed">
			<a-menu-item key="SelfInfo" @click="goTo('/SelfInfo')" v-if="$store.getters.getLimits==1">
				<a-icon type="user" />
				<span>个人信息</span>
			</a-menu-item>
			<a-menu-item key="LeaderInfo" @click="goTo('/LeaderInfo')" v-if="$store.getters.getLimits==2">
				<a-icon type="user" />
				<span>个人信息</span>
			</a-menu-item>
			<a-menu-item key="tinfo" @click="goTo('/tinfo')"
				v-if="$store.getters.getLimits==3||$store.getters.getLimits==4||$store.getters.getLimits==5">
				<a-icon type="user" />
				<span>个人信息</span>
			</a-menu-item>

			<a-menu-item key="hwlist" @click="goTo('/hwlist')"
				v-if="$store.getters.getLimits==1||$store.getters.getLimits==2">
				<a-icon type="book" />
				<span>作业列表</span>
			</a-menu-item>
			<a-menu-item key="GradeList" @click="goTo('/GradeList')"
				v-if="$store.getters.getLimits==1||$store.getters.getLimits==2">
				<a-icon type="file-done" />
				<span>成绩列表</span>
			</a-menu-item>
			<a-menu-item key="TClass" @click="goTo('/tclass')" v-if="$store.getters.getLimits==3||$store.getters.getLimits==4">
				<a-icon type="audit" />
				<span>班级信息</span>
			</a-menu-item>
			<a-menu-item key="" @click="goTo('/creva')" v-if="$store.getters.getLimits==2">
				<a-icon type="form" />
				<span>创建评审表</span>
			</a-menu-item>
			<a-menu-item key="performance" @click="goTo('/performance')" v-if="$store.getters.getLimits==2">
				<a-icon type="form" />
				<span>绩效填写</span>
			</a-menu-item>
      <a-menu-item key="teamlist" @click="goTo('/teamlist')" v-if="$store.getters.getLimits==2||$store.getters.getLimits==3||$store.getters.getLimits==4">
				<a-icon type="form" />
				<span>评审团队</span>
			</a-menu-item>
			<a-menu-item key="AstPage" @click="goTo('/AstPage')"
				v-if="$store.getters.getLimits==3||$store.getters.getLimits==4">
				<a-icon type="form" />
				<span>作业管理</span>
			</a-menu-item>
			<a-sub-menu key="clsmanage" v-if="$store.getters.getLimits==3||$store.getters.getLimits==4">
				<span slot="title">
					<a-icon type="bar-chart" /><span>班级管理</span>
				</span>
				<a-menu-item key="clsinfo" @click="goTo('/clsinfo')">
					班级列表
				</a-menu-item>
				<a-menu-item key="crtclass" @click="goTo('/crclass')" v-if="$store.getters.getLimits==4">
					创建班级
				</a-menu-item>
				<a-menu-item key="astlist" @click="goTo('/astlist')" v-if="$store.getters.getLimits==4">
					助教列表
				</a-menu-item>
			</a-sub-menu>
			<a-menu-item key="user" @click="goToUser('/user')" v-if="$store.getters.getLimits==5">
				<a-icon type="form" />
				<span>用户列表</span>

			</a-menu-item>
		</a-menu>
	</div>
</template>

<script>
	export default {
		name: 'NormalNav',
		data() {
			return {
				collapsed: false,
			};
		},
		methods: {
			goTo(path) {
				this.$router.push(path);
			},
			openKeys() {
				if (this.$route.path.replace('/', '') == 'clsinfo' ||
					this.$route.path.replace('/', '') == 'astlist' ||
					this.$route.path.replace('/', '') == 'crtclass')
					return 'clsmanage';
			},
			toggleCollapsed() {
				this.collapsed = !this.collapsed;
			},
		},

	};
</script>

<style>


</style>
