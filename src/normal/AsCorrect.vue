<template>
	<a-layout id="components-layout-demo-responsive-form">
		<a-layout-sider breakpoint="lg" collapsed-width="0" @collapse="onCollapse" @breakpoint="onBreakpoint"
			id="formsider1">
			<div class="formlogo">
				<a-button type="link" style="margin-bottom: 16px; margin-top: 10px;"
					@click="() => (collapsed = !collapsed)">
					&nbsp;PingLeMe
				</a-button>
			</div>
			<NormalNav></NormalNav>
		</a-layout-sider>

		<a-layout>
			<a-layout-header :style="{ background: '#fff', padding: 0 }">
				<div class="info">
					<a-icon type="user" />&nbsp;用户：XXX
					<a-divider type="vertical" />
					<a-icon type="team" />&nbsp;团队：XXX团队
					<a-divider type="vertical" />
					<a-icon type="book" />&nbsp;作业：作业XXX
				</div>
			</a-layout-header>
			<a-layout-content :style="{ margin: '24px 16px 0' }">
				<hr>
				<Correct></Correct>
			</a-layout-content>
			<a-layout-footer style="textAlign: center">
				PingLeMe ©2021 Created by Ant UED
			</a-layout-footer>
		</a-layout>
	</a-layout>
</template>

<script>
	import NormalNav from "../components/NormalNav.vue";
	import Correct from "../components/Correct.vue";
	export default {
		name: 'AC',
		components: {
			Correct,
			NormalNav,
		},
		data() {
			return {
				collapsed: false,
			}
		},
		methods: {
			onCollapse(collapsed, type) {
				console.log(collapsed, type);
			},
			onBreakpoint(broken) {
				console.log(broken);
			},
		},
	}
</script>

<style>
	#components-layout-demo-evaluationform-trigger .formlogo {
		height: 32px;
		background: rgba(255, 255, 255, 0);
		margin: 16px;
	}

	#formsider1 {
		background-color: white;
	}
</style>
