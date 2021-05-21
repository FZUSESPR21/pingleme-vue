<template>
	<a-layout id="components-layout-demo-responsive">
		<a-layout-sider
			breakpoint="sm"
			collapsed-width="0"
			@collapse="onCollapse"
			@breakpoint="onBreakpoint"
			id="sider1"
		>
			<div class="logo">
				<a-button type="link"
						style="margin-bottom: 16px; margin-top: 10px;"
						>
							&nbsp;PingLeMe
				</a-button>
			</div>
			<NormalNav></NormalNav>
		</a-layout-sider>
		
		<a-layout style="background: white;">
			<a-layout-header :style="{ background: '#fff', padding: 0,'text-align':'center' }">

			</a-layout-header>
			<a-layout-content :style="{ margin: '24px 16px 0',minHeight:'360px' }">
				<div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
					<a-input-search placeholder="按作业标题搜索" style="width: 200px;margin-left:0px;" @search="onSearch()" />
					<hr>
					<a-table :columns="columns" :data-source="data"  :pagination="myPagination">
						<a slot="name" slot-scope="text">{{ text }}</a>
						<span slot="customTitle"><a-icon type="smile-o" /> 作业</span>
						<span slot="action" >
							<a-button type="link" style="margin-left:0px;" @click="goToPfmDetail()"><a><a-icon type="edit" /></a></a-button>
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
	    dataIndex: 'name',
	    key: 'name',
	    slots: { title: 'customTitle' },
	    scopedSlots: { customRender: 'name' },
	  },
	  {
	    title: '截止日期',
	    dataIndex: 'end_time',
	    key: 'end_time',
	  },
	  {
	    title: '团队绩效',
	    dataIndex: 'eva_exist',
	    key: 'eva_exist',
	  },
	  {
	    title: '操作',
		'key':'action',
		scopedSlots: { customRender: 'action' },
	  },
	];
	
	const data = [
	  {
	    key: '1',
	    name: '团队作业三',
	    end_time: '2021.3.10',
		eva_exist:'未填写'
	  },
	  {
	    key: '2',
	    name: '团队作业二',
	    end_time: '2021.3.10',
		eva_exist:'已填写'
	  },
	  {
	    key: '3',
	    name: '团队作业一',
	    end_time: '2021.3.10',
		eva_exist:'已填写'
	  },
	  {
	    key: '4',
	    name: '团队作业',
	    end_time: '2021.3.10',
	  		eva_exist:'未填写'
	  },
	  {
	    key: '5',
	    name: '团队作',
	    end_time: '2021.3.10',
	  		eva_exist:'填写'
	  },
	  {
	    key: '6',
	    name: '团队',
	    end_time: '2021.3.10',
	  		eva_exist:'未填写'
	  },
	  {
	    key: '7',
	    name: '团',
	    end_time: '2021.3.10',
	  		eva_exist:'未填写'
	  },
	  {
	    key: '8',
	    name: '团8',
	    end_time: '2021.3.10',
	  		eva_exist:'未填写'
	  },
	  {
	    key: '9',
	    name: '团9',
	    end_time: '2021.3.10',
	  		eva_exist:'未填写'
	  },
	  {
	    key: '10',
	    name: '团10',
	    end_time: '2021.3.10',
	  		eva_exist:'未填写'
	  },
	  {
	    key: '11',
	    name: '团11',
	    end_time: '2021.3.10',
	  		eva_exist:'未填写'
	  },
	  {
	    key: '12',
	    name: '团12',
	    end_time: '2021.3.10',
	  		eva_exist:'未填写'
	  },
	];
	export default{
		name:'Performance',
		components:{
			NormalNav,
		},
		data() {  
		    return {
				collapsed: false,
				data,
				columns,
				myPagination: {
				    defaultPageSize: 10
				}
		    };
		},
		methods:{
			goToPfmDetail(){
				this.$router.push('/pfmdetail')
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
#components-layout-demo-responsive .logo{
  height: 32px;
  background: rgba(255, 255, 255, 0);
  margin: 16px;
}
#sider1{
	background-color: white;
}
</style>