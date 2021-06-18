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
					<a-input-search placeholder="按班级名搜索" style="width: 200px;margin-left:0px;" @search="onSearch" />
					<hr>
					<a-table  :columns="columns" :dataSource="clsinfo">
						<span slot="assist" slot-scope="text,record">
							<a-tag 
								v-for="item in record.assistants" 
								:key="item.AssistantID" 
								:color="item.AssistantID % 3 == '0' ? 'pink' : item.AssistantID % 3 == '1' ? 'geekblue' : 'green'">{{item.AssistantName}}</a-tag>
						</span>
						<span slot="mngaction" slot-scope="text,record">
							<a-button type="link" style="margin-left:0px;" @click="goTomngclass('/tclass/mngsl',record.class_id)"><a><a-icon type="edit" /></a></a-button>
						</span>
						<span slot="pairaction" slot-scope="text,record" >
							<a-button :type="record.pair_status?'danger':'primary'" ghost style="margin-left:0px;"  @click="changePair(record.class_id)">
								<a>{{record.pair_status?'结束':'开始'}}</a>
							</a-button>
						</span>
						<span slot="groupaction" slot-scope="text,record">
							<a-button :type="record.team_status?'danger':'primary'" ghost style="margin-left:0px;"  @click="changeTeam(record.class_id)">							
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

	const columns=[
		{
			title:'班级号',
			key:'clsid',
			dataIndex:'class_id',
			scopedSlots: { customRender: 'clsid' },
		},
		{
			title:'班级名',
			dataIndex:'class_name',
			key:'clsname',
			scopedSlots:{customRender:'clsname'},
		},
		{
			title:'老师',
			dataIndex:'teacher_name',
			key:'teacher',
			scopedSlots:{customRender:'teach'},
		},
		{
			title:'助教',
			dataIndex:'assistants',
			key:'assist',
			scopedSlots:{customRender:'assist'},
		},
		{
			title:'操作',
			key:'mngaction',
			scopedSlots:{customRender:'mngaction'},
		},
		{
			title:'结对状态',
			dataIndex:'pair_status',
			key:'pair_status',
			scopedSlots:{customRender:'pairaction'},
		},
		{
			title:'团队状态',
			dataIndex:'team_status',
			key:'team_status',
			scopedSlots:{customRender:'groupaction'},
		}
	];
	export default{
		name:'TClass',
		data(){
			return {
				clsinfo:[],
				columns,
				myPagination: {
				    defaultPageSize: 10
				},
			}
		},
		mounted(){
			this.getClassList();
		},
		components:{
			NormalNav,
		},

		methods:{
			goTo(path){
				this.$router.push(path);
			},
			onSearch(value) {
			    console.log(value);
			},
			//响应式布局的函数
			onCollapse(collapsed, type) {
			    console.log(collapsed, type);
			 },
			onBreakpoint(broken) {
			    console.log(broken);
			},
			//连班级接口的
			getClassList(){
				this.$axios.get('http://pingleme.top:3000/api/v1/class/list')
				.then(res => {
					if(res.data.code=='401'){
						alert("未登录，请登录");
						this.$router.replace('/');
					}
					else{
						this.clsinfo=res.data.data
					}
				})
			},
			goTomngclass(path,cid){
				this.$store.commit('handleUserclass',cid)
				this.goTo(path)
			},
			
			changePair(clsid){
				this.$axios
				.post('http://pingleme.top:3000/api/v1/class/pair/toggle?class_id='+clsid)
				.then(res=>{alert(res.data.msg)})
				location.reload();
			},
			changeTeam(clsid){
				this.$axios
				.post('http://pingleme.top:3000/api/v1/class/team/toggle?class_id='+clsid)
				.then(res=>{alert(res.data.msg)})

				location.reload();
			}
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
