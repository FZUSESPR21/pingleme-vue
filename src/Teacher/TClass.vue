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
			<a-layout-header :style="{ background: '#fff', padding: 0,'text-align':'center' }">
				<div class="info">
					<a-icon type="user" />&nbsp;用户：XXX
				</div>
			</a-layout-header>
			<a-layout-content :style="{ margin: '24px 16px 0',minHeight:'360px' }">
				<div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
					<a-input-search placeholder="按班级名搜索" style="width: 200px;margin-left:0px;" @search="onSearch" />
					<hr>
					<a-table :columns="columns" :data-source="data"  :pagination="myPagination">
						<a slot="name" slot-scope="text">{{ text }}</a>
						<span slot="customTitle"><a-icon type="team" /> 班级</span>
						<span slot="action1" >
							<a-button type="link" style="margin-left:0px;" @click="goTo('/tclass/mngsl')"><a><a-icon type="edit" /></a></a-button>
						</span>
						<span slot="action2" slot-scope="text, record" >
							<a-button :type="record.groupcollapsed?'primary':'danger'" ghost style="margin-left:0px;" @click="() => (record.groupcollapsed = !record.groupcollapsed)">
								<a>{{record.groupcollapsed?'开始':'结束'}}</a>
							</a-button>
						</span>
						<span slot="action3" slot-scope="text, record">
							<a-button :type="record.teamcollapsed?'primary':'danger'" ghost style="margin-left:0px;" @click="() => (record.teamcollapsed = !record.teamcollapsed)">							
								<a>{{record.teamcollapsed?'开始':'结束'}}</a>
							</a-button>
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
	//班级信息
	import NormalNav from "../components/NormalNav.vue"
	
	const columns = [
	  {
	    dataIndex: 'name',
	    key: 'name',
	    slots: { title: 'customTitle' },
	    scopedSlots: { customRender: 'name' },
	  },
	  {
	    title: '助教',
	    dataIndex: 'assistant',
	    key: 'end_time',
	  },
	  {
	    title: '班级管理',
		'key':'action1',
		scopedSlots: { customRender: 'action1' },
	  },
	  {
	    title: '结对组队',
	  	'key':'action2',
	  	scopedSlots: { customRender: 'action2' },
		align:'center'
	  },
	  {
	    title: '团队创建',
	  	'key':'action3',
	  	scopedSlots: { customRender: 'action3' },
		align:'center'
	  },
	];
	
	const data = [
	  {
	    key: '1',
	    name: '一个班',
	    assistant: '2021.3.10',
		groupcollapsed:true,
		teamcollapsed:true,
	  },
	  {
	    key: '2',
	    name: '两个班',
	    assistant: '2021.3.10',
		groupcollapsed:true,
		teamcollapsed:true,
	  },
	  {
	    key: '3',
	    name: '三个班',
	    assistant: '2021.3.10',
		groupcollapsed:true,
		teamcollapsed:true,
	  },
	  {
	    key: '4',
	    name: '四个班',
	    assistant: '2021.3.10',
		groupcollapsed:true,
		teamcollapsed:true,
	  },
	  {
	    key: '5',
	    name: '五个班',
	    assistant: '2021.3.10',
		groupcollapsed:true,
		teamcollapsed:true,
	  },
	  {
	    key: '6',
	    name: '六个班',
	    assistant: '2021.3.10',
		groupcollapsed:true,
		teamcollapsed:true,
	  },
	  {
	    key: '7',
	    name: '七个',
	    assistant: '2021.3.10',
		groupcollapsed:true,
		teamcollapsed:true,
	  },
	  {
	    key: '8',
	    name: '八个班',
	    assistant: '2021.3.10',
		groupcollapsed:true,
		teamcollapsed:true,
	  },
	  {
	    key: '9',
	    name: '九个班',
	    assistant: '2021.3.10',
		groupcollapsed:true,
		teamcollapsed:true,
	  },
	  {
	    key: '10',
	    name: '十个',
	    assistant: '2021.3.10',
		groupcollapsed:true,
		teamcollapsed:true,
	  },
	  {
	    key: '11',
	    name: '十一个班',
	    assistant: '2021.3.10',
		groupcollapsed:true,
		teamcollapsed:true,
	  },
	  {
	    key: '12',
	    name: '十二个班',
	    assistant: '2021.3.10',
		groupcollapsed:true,
		teamcollapsed:true,
	  },
	  {
	    key: '13',
	    name: '十三个班',
	    assistant: '2021.3.10',
		groupcollapsed:true,
		teamcollapsed:true,
	  },
	  {
	    key: '14',
	    name: '十四个班',
	    assistant: '2021.3.10',
		groupcollapsed:true,
		teamcollapsed:true,
	  },
	  {
	    key: '15',
	    name: '十五个班',
	    assistant: '2021.3.10',
		groupcollapsed:true,
		teamcollapsed:true,
	  },
	];
	
	export default{
		name:'TClass',
		data(){
			return {
				data,
				columns,
				myPagination: {
				    defaultPageSize: 10
				}
			}
		},
		components:{
			NormalNav,
		},
		methods:{
			goTo(path){
				this.$router.replace(path);
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
