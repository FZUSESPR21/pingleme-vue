<template>
	<a-layout id="components-layout-demo-responsive-form">
		<a-layout-sider breakpoint="sm" collapsed-width="0" @collapse="onCollapse" @breakpoint="onBreakpoint"
			id="formsider1">
			<div class="formlogo">
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
					<a-table :columns="columns" :data-source="data">
						<span slot="action">
							<a-button type="link" style="margin-left:0px;" @click="goTo('/HwCorrecting')"><a>
									<a-icon type="edit" />
								</a></a-button>
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
	const columns = [{
			title: '学号',
			dataIndex: 'id',
			key: 'id',

		},
		{
			title: '姓名',
			dataIndex: 'name',
			key: 'name',
		},

		{
			title: '操作',
			'key': 'action',
			scopedSlots: {
				customRender: 'action'
			},
		},
	];

	const data = [];
	export default {
		name: 'AstCorrect',
		components: {

			NormalNav,
		},
		data() {
			return {

				collapsed: false,
				data,
				columns,
				myPagination: {
					defaultPageSize: 5
				}
			};
		},
		mounted() {

			this.$axios.get('http://xx.com/api/v1/homework/student')
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
