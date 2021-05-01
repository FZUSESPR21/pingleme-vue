<template>
	<div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
		<a-table :columns="columns" :data-source="data">
			<span slot="action">
				<a-button type="link" style="margin-left:0px;"><a>
						<a-icon type="edit" />
					</a></a-button>
			</span>

		</a-table>
	</div>
</template>

<script>
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

	const data = [{
			key: '1',
			id: '221801XXX',
			name: 'XXX',

		},
		{
			key: '2',
			id: '221801XXX',
			name: 'XXX',

		},
		{
			key: '3',
			id: '221801XXX',
			name: 'XXX',

		},
		{
			key: '4',
			id: '221801XXX',
			name: 'XXX',

		},
		{
			key: '5',
			id: '221801XXX',
			name: 'XXX',

		},
		{
			key: '6',
			id: '221801XXX',
			name: 'XXX',

		},
		{
			key: '7',
			id: '221801XXX',
			name: 'XXX',
		},
		{
			key: '8',
			id: '221801XXX',
			name: 'XXX',
		},
		{
			key: '9',
			id: '221801XXX',
			name: 'XXX',
		},
		{
			key: '10',
			id: '221801XXX',
			name: 'XXX',

		},
		{
			key: '11',
			id: '221801XXX',
			name: 'XXX',

		},
		{
			key: '12',
			id: '221801XXX',
			name: 'XXX',

		},
	];
	export default {
		name: 'Correct',
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
		methods: {

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
	};
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
