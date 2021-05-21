<template>
	<a-layout id="components-layout-demo-responsive">
		<a-layout-sider breakpoint="sm" collapsed-width="0" @collapse="onCollapse" @breakpoint="onBreakpoint"
			id="sider1">
			<div class="logo">
				<a-button type="link" style="margin-bottom: 16px; margin-top: 10px;"
					@click="() => (collapsed = !collapsed)">
					&nbsp;PingLeMe
				</a-button>
			</div>
			<NormalNav></NormalNav>
		</a-layout-sider>

		<a-layout style="background: white;">
			<a-layout-header :style="{ background: '#fff', padding: 0 ,'text-align':'center'}">

			</a-layout-header>
			<a-layout-content :style="{ margin: '24px 16px 0' }">
				<div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
					<a-input-search placeholder="按作业标题搜索" style="width: 200px;margin-left:0px;" @search="onSearch" />
					<hr>
					<a-table :columns="columns" :data-source="data" :pagination="myPagination">
						<a slot="name" slot-scope="text">{{ text }}</a>
						<span slot="customTitle">
							<a-icon type="smile-o" /> 作业
						</span>
						<span slot="action">
							<a-button type="link" style="margin-left:0px;" @click="goTo('/AstCorrect')">
								批改</a-button>
							<a-divider type="vertical" />
							<a-button type="link" style="margin-left:0px;" @click="goTo('/ImpHomework')">
								导入</a-button>
						</span>

					</a-table>
				</div>
			</a-layout-content>
			<a-layout-footer style="textAlign: center;background:white">
				PingLeMe ©2021 Created by Ant UED
			</a-layout-footer>
		</a-layout>
	</a-layout>
</template>

<script>
	import NormalNav from "../components/NormalNav.vue";
	const columns = [
		{
			dataIndex: 'title',
			key: 'title',
			slots: {
				title: 'customTitle'
			},
			scopedSlots: {
				customRender: 'name'
			},
		},
		{
			title: '截止日期',
			dataIndex: 'end_time',
			key: 'end_time',
		},

		{
			title: '操作',
			'key': 'action',
			scopedSlots: {
				customRender: 'action'
			},
		},
	];

	
	export default {
		name: 'AstPage',
		components: {
			NormalNav,
		},
		data() {
			return {
				collapsed: false,
				data:[],
				columns,
				myPagination: {
					defaultPageSize: 5
				}
			};
		},
	mounted() {
	
		this.$axios.get('http://xx.com/api/v1/homework')
			.then(res => {
				this.data = res.data.list;
	
			}, );
	},
		methods: {
			goTo(path) {
				this.$router.push(path);
			},

			onSearch(value) {
				console.log(value);
			},
			onCollapse(collapsed, type) {
				console.log(collapsed, type);
			},
			onBreakpoint(broken) {
				console.log(broken);
			},
		}
	}
</script>

<style>
	#components-layout-demo-responsive .logo {
		height: 32px;
		background: rgba(255, 255, 255, 0);
		margin: 16px;
	}

	#sider1 {
		background-color: white;
	}
</style>
