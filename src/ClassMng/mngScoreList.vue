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
			<a-layout-header :style="{ background: '#fff', padding: 0,margin:'12px' }">
			<ClassHeader></ClassHeader>
			</a-layout-header>
			<a-layout style="background: white;">
				<a-layout-content >
					<div style="padding:24px;background: #fff;">
						<a-label style="font-size: 20px;"><a-icon type="team"/>班级：{{$store.getters.Userclass}}</a-label>
					</div>
					<div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
						<hr>
						<a-table :columns="columns" :data-source="data"  :pagination="myPagination">
							<a slot="name" slot-scope="text">{{ text }}</a>
							<span slot="customTitle"><a-icon type="team" /> 作业</span>
							<span slot="type" slot-scope="text, record" >
									<a v-if="record.type=='1'">个人作业</a>
									<a v-else-if="record.type=='2'">结对作业</a>
									<a v-else>团队作业</a>
							</span>
							<span slot="action1" slot-scope="text, record">
								<a-button type="link" style="margin-left:0px;" @click="goToSList(record.type)"><a><a-icon type="eye" /></a></a-button>
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
	import axios from "axios"

	const columns = [
	  {
	    dataIndex: 'title',
	    key: 'name',
	    slots: { title: 'customTitle' },
	    scopedSlots: { customRender: 'name' },
	  },
	  {
	    title: '作业类型',
	    key: 'type',
		dataIndex:'type',
		scopedSlots:{customRender:'type'},
	  },
	  {
	    title: '查看',
		'key':'action1',
		scopedSlots: { customRender: 'action1' },
		align:'center',
	  },
	];

	
	export default{
		name:'mngSL',
		data(){
			return {
				data:[],
				columns,
				myPagination: {
					defaultPageSize: 5
				},
			}
		},

		mounted(){
			this.getScorelist();
		},
		components:{
			NormalNav,
			ClassHeader,
		},
		methods:{
			//响应式布局的函数
			onCollapse(collapsed, type) {
			    console.log(collapsed, type);
			 },
			onBreakpoint(broken) {
			    console.log(broken);
			},
			
			
			//跳转到成绩
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
			
			//连班级作业列表接口的
			getScorelist(){
				axios
				//.get('http://pingleme.top:3000/api/v1/class/homework/list?class_id='+this.$store.getters.Userclass)
					.get('http://47.101.54.43/api/v1/class/homework/list?class_id='+this.$store.getters.Userclass)
					.then(res => {
						if(res.data.code=='0'){
							this.data=res.data.data.list
						}
						else{
							if(res.data.code=='401'){
								alert("未登录，请登录");
								this.$router.replace('/');
							}
							else{
								alert('code:'+res.data.code+' msg:'+res.data.msg)
							}
						}
					})
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
