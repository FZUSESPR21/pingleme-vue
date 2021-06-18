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
						<span slot="pair_status" slot-scope="text,record" >
										<a-button :type="record.pair_status?'danger':'primary'" ghost style="margin-left:0px;" @click="changePair(record)">
											<a>{{record.pair_status?'结束':'开始'}}</a>
										</a-button>
						</span>
						<span slot="team_status" slot-scope="text,record">
										<a-button :type="record.team_status?'danger':'primary'" ghost style="margin-left:0px;" @click="changeTeam(record)">							
										<a>{{record.team_status?'结束':'开始'}}</a>
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
	import axios from "axios"

	const columns=[
		{
			dataIndex:'class_id',
			slots:{title:'customTitle'},
			scopedSlots: { customRender: 'class_id' },
		},
		{
			title:'班级名',
			dataIndex:'class_name',
			key:'class_name',
			scopedSlots:{customRender:'class_name'},
		},
		{
			title:'助教',
			dataIndex:'assistants',
			key:'assistants',
			scopedSlots:{customRender:'assistants'},
		},
		{
			title:'操作',
			key:'mngaction',
			scopedSlots:{customRender:'mngaction'},
		},
		{
			title:'结对状态',
			key:'pair_status',
			scopedSlots:{customRender:'pair_status'},
		},
		{
			title:'团队状态',
			key:'team_status',
			scopedSlots:{customRender:'team_status'},
		}
	];
	
	const clsinfo = [
	];
	
	export default{
		name:'TClass',
		data(){
			return {
				clsinfo,
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
			//连班级接口的
			getClassList(){
				axios.get('http://pingleme.top:3000/api/v1/class/list?page=1')
				.then(response => (this.clsinfo=response.data.data))
			},
			changePair(value){
				axios.post('http://pingleme.top:3000/api/v1/class/pair/toggle?class_id='+value.class_id)
				.then(response => (alert(response.data.msg)))
			},
			changeTeam(value){
				axios.post('http://pingleme.top:3000/api/v1/class/team/toggle?class_id='+value.class_id)
				.then(response => (alert(response.data.msg)))
			},
		},
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
