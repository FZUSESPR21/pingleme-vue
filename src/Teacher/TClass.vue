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
						<a slot="name" slot-scope="text">{{ text }}</a>
						<span slot="customTitle"><a-icon type='team'/>班级号</span>
						<span slot="assist" slot-scope="text,record">
							<a-tag 
								v-for="item in record.assistant" 
								:key="item.id" 
								:color="item.id % 3 == '0' ? 'pink' : item.id % 3 == '1' ? 'geekblue' : 'green'">{{item.name}}</a-tag>
						</span>
						<span slot="mngaction" slot-scope="text,record">
										<a-button type="link" style="margin-left:0px;" @click="goTo('/tclass/mngsl/'+record.name)"><a><a-icon type="edit" /></a></a-button>
						</span>
						<span slot="pairaction" slot-scope="text,record" >
										<a-button :type="record.is_pairing?'primary':'danger'" ghost style="margin-left:0px;" @click="() => (record.is_pairing = !record.is_pairing)">
											<a>{{record.is_pairing?'开始':'结束'}}</a>
										</a-button>
						</span>
						<span slot="groupaction" slot-scope="text,record">
										<a-button :type="record.is_grouping?'primary':'danger'" ghost style="margin-left:0px;" @click="() => (record.is_grouping = !record.is_grouping)">							
										<a>{{record.is_grouping?'开始':'结束'}}</a>
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
			dataIndex:'id',
			slots:{title:'customTitle'},
			scopedSlots: { customRender: 'id' },
		},
		{
			title:'班级名',
			dataIndex:'name',
			key:'name',
			scopedSlots:{customRender:'name'},
		},
		{
			title:'助教',
			dataIndex:'assistant',
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
			key:'pairaction',
			scopedSlots:{customRender:'pairaction'},
		},
		{
			title:'团队状态',
			key:'groupaction',
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
				axios.get('api/v1/class/list?{page=}')
				.then(response => (this.clsinfo=response.data.data.class))
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
