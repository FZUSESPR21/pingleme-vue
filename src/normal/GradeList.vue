<template>
	<a-layout id="components-layout-demo-responsive">
		<a-layout-sider breakpoint="lg" collapsed-width="0" @collapse="onCollapse" @breakpoint="onBreakpoint"
			id="sider1">
			<div class="logo">
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
				</div>
			</a-layout-header>
			<a-layout-content :style="{ margin: '24px 16px 0' }">
				<div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
					<a-collapse v-model="activeKey">

						<a-collapse-panel key="1" header="团队第二次作业github编程实战">
							<a-table :columns="columns" :data-source="data" :scroll={x:1500} bordered
								:pagination="false">

							</a-table>
						</a-collapse-panel>
						<a-collapse-panel key="2" header="结对一">

						</a-collapse-panel>
					</a-collapse>
				</div>

			</a-layout-content>
			<a-layout-footer style="textAlign: center">
				PingLeMe ©2021 Created by Ant UED
			</a-layout-footer>
		</a-layout>
	</a-layout>
</template>

<script>
	import NormalNav from "../components/NormalNav.vue";
	const columns = [{
			title: "组号",
			dataIndex: "no",
		},
		{
			title: "组名",
			dataIndex: "name",
		},
		{
			title: "模块1",
			dataIndex: "work1",
		},
		{
			title: "模块2",
			dataIndex: "work2",
		},
		{
			title: "模块...",
			dataIndex: "workn",
		},
		{
			title: "模块1",
			dataIndex: "work1",
		},
		{
			title: "模块2",
			dataIndex: "work2",
		},
		{
			title: "模块...",
			dataIndex: "workn",
		},
		{
			title: "模块1",
			dataIndex: "work1",
		},
		{
			title: "模块2",
			dataIndex: "work2",
		},
		{
			title: "模块...",
			dataIndex: "workn",
		},
		{
			title: "小组分数",
			dataIndex: "teamgrade",
		},
		{
			title: "个人贡献",
			dataIndex: "self",
		},
		{
			title: "个人分数",
			dataIndex: "grade",
		},
		{
			title: "本次作业占比",
			dataIndex: "percent",
		},
	];

	const data = [{
		key: "1",
		no: "9",
		name: "评了么",
		work1: "XX",
		work2: "XX",
		workn: "XX",
		teamgrade: "XX",
		self: "XX",
		grade: "XX",
		percent: "XX",
	}, ];
	export default {
		name: 'GL',
		components: {
			NormalNav,
		},
		data() {
			return {
				data,
				columns,
				activeKey: ['1'],
				collapsed: false,
			};
		},
		watch: {
			activeKey(key) {
				console.log(key);
			},
		},
		methods: {
			onCollapse(collapsed, type) {
				console.log(collapsed, type);
			},
			onBreakpoint(broken) {
				console.log(broken);
			},
		},
	};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

	#components-layout-demo-responsive .logo {
		height: 32px;
		background: rgba(255, 255, 255, 0);
		margin: 16px;
	}

	#sider1 {
		background-color: white;
	}
</style>
