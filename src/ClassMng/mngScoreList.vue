<template>
	<a-layout id="components-layout-demo-responsive">
		<a-layout-sider
			breakpoint="lg"
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
			<a-layout-header :style="{ background: '#fff', padding: 0,margin:'12px' }">
			<ClassHeader></ClassHeader>
			</a-layout-header>
			<a-layout style="background: white;">
				<a-layout-header style="background: white;text-align:center;margin-top:0px">成绩列表</a-layout-header>
				<a-layout-content :style="{ margin: '0px 16px 0',minHeight:'360px' }">
					<div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
						<a-input-search placeholder="按作业名搜索" style="width: 200px;margin-left:0px;" @search="onSearch" />
						<hr>
						<a-table :columns="columns" :data-source="data"  :pagination="myPagination">
							<a slot="name" slot-scope="text">{{ text }}</a>
							<span slot="customTitle"><a-icon type="team" /> 作业</span>
							<span slot="hwtype" slot-scope="text, record" >
									<a v-if="record.hwtype=='1'">个人作业</a>
									<a v-else-if="record.hwtype=='2'">结对作业</a>
									<a v-else>团队作业</a>
							</span>
							<span slot="action1" slot-scope="text, record">
								<a-button type="link" style="margin-left:0px;" @click="goToSList(record.hwtype)"><a><a-icon type="eye" /></a></a-button>
							</span>
						</a-table>
					</div>
				</a-layout-content>
				<a-layout-footer style="textAlign: center;background:white">
					PingLeMe ©2021 Created by Ant UED
				</a-layout-footer>
			</a-layout>
		</a-layout>
	</a-layout>
</template>

<script>
	//班级信息-班级管理
	import NormalNav from "../components/NormalNav.vue"
	import ClassHeader from "../components/ClassHeader.vue"
	
	const columns = [
	  {
	    dataIndex: 'name',
	    key: 'name',
	    slots: { title: 'customTitle' },
	    scopedSlots: { customRender: 'name' },
	  },
	  {
	    title: '作业类型',
	    key: 'hwtype',
		scopedSlots:{customRender:'hwtype'},
	  },
	  {
	    title: '查看',
		'key':'action1',
		scopedSlots: { customRender: 'action1' },
		align:'center',
	  },
	];
	
	const data = [
	  {
	    key: '1',
	    name: '一个作业',
		hwtype:'1',
	  },
	  {
	    key: '2',
	    name: '两个作业',
		hwtype:'1',
	  },
	  {
	    key: '3',
	    name: '三个作业',
		hwtype:'2',
	  },
	  {
	    key: '4',
	    name: '四个作业',
	    hwtype:'3',
	  },
	  {
	    key: '5',
	    name: '五个作业',
	    hwtype:'3',
	  },
	  {
	    key: '6',
	    name: '六个作业',
	    hwtype:'2',
	  },
	  {
	    key: '7',
	    name: '七个作业',
	    hwtype:'3',
	  },
	  {
	    key: '8',
	    name: '八个作业',
	    hwtype:'3',
	  },
	  {
	    key: '9',
	    name: '九个作业',
	    hwtype:'3',
	  },
	  {
	    key: '10',
	    name: '十个作业',
	    hwtype:'1',
	  },
	  {
	    key: '11',
	    name: '十一个作业',
	    hwtype:'3',
	  },
	  {
	    key: '12',
	    name: '十二个作业',
	    hwtype:'1',
	  },
	];
	
	export default{
		name:'mngSL',
		data(){
			return {
				data,
				columns,
				myPagination: {
					defaultPageSize: 5
				},
			}
		},
		components:{
			NormalNav,
			ClassHeader,
		},
		methods:{
			onCollapse(collapsed, type) {
			    console.log(collapsed, type);
			 },
			onBreakpoint(broken) {
			    console.log(broken);
			},
			onSearch(value) {
			    console.log(value);
			},
			goToSList(value){
				if(value=='1')
					this.$router.push('/tclass/mngsl/personsl');
				else{
					if(value=='2')
						this.$router.push('/tclass/mngsl/twopsl');
					else
						this.$router.push('/tclass/mngsl/teamsl');
				}
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
