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
						@click="() => (collapsed = !collapsed)">
							&nbsp;PingLeMe
				</a-button>
			</div>
			<NormalNav></NormalNav>
		</a-layout-sider>
		
		<a-layout style="background: white;">
			<a-layout-header :style="{ background: '#fff', padding: 0 }">
				<div class="info">
					<a-icon type="user" />&nbsp;用户：XXX
					<a-divider type="vertical" />
					<a-icon type="team" />&nbsp;团队：XXX团队
				</div>
			</a-layout-header>
			<a-layout-content :style="{ margin: '24px 16px 0' }">
				<div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
					<a-input-search placeholder="按姓名搜索" style="width: 200px;margin-left:0px;" @search="onSearch()" />
                    <span>&emsp;<a-button type="primary" @click="showModal">添加助教</a-button>
					<a-modal v-model="visible" title="添加助教" @ok="handleOk">
     				<a-input ref="uid" placeholder="请输入助教uid" />
					<a-input ref="name" placeholder="请输入助教姓名" />
					<a-input ref="pwd" placeholder="请输入助教密码" />
    				</a-modal>
					</span>
					<hr>
					<a-table :columns="columns" :data-source="astlist"  :pagination="myPagination">
						<a slot="name" slot-scope="text">{{ text }}</a>
						<span slot="customTitle"><a-icon type="smile-o" /> 姓名</span>
						<span slot="action" slot-scope="record">
							<a-button type="link" style="margin-left:0px;" @click="astDelete(record)"><a><a-icon type="delete" /></a></a-button>
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
	    dataIndex: 'user_name',
	    key: 'user_name',
	    slots: { title: 'customTitle' },
	    scopedSlots: { customRender: 'name' },
	  },
	  {
	    title: 'uid',
	    dataIndex: 'uid',
	    key: 'uid',
	  },
	  {
	    title: '管理班级',
	    dataIndex: 'class_name',
	    key: 'class_name',
	  },
      {
	    title: '删除',
		'key':'action',
		scopedSlots: { customRender: 'action' },
	  },
	];


	export default{
		name:'AstList',
		components:{
			NormalNav,
		},
		data() {  
		    return {
				collapsed: false,
				astlist:[],
				columns,
				myPagination: {
				    defaultPageSize: 10
				},
				ModalText: 'Content of the modal',
    	 		visible: false,
		    };
		},
		 mounted() {
				this.load()
			

    	},
		methods:{
			load(){this.$axios.get('http://pingleme.top:3000/api/v1/class/assistant/list/all')
     		   .then(res => {
    	    		this.astlist=res.data.data;
				//   console.log(res.data)
     		   })},
            onChange(value) {
                console.log('changed', value);
            },
			onCollapse(collapsed, type) {
			    console.log(collapsed, type);
			 },
			onBreakpoint(broken) {
			    console.log(broken);
			},
            astDelete(value){
				// console.log(value.uid);
				let data = {"uid":value.uid,"class_id":value.class_id};
				this.$axios.post('http://pingleme.top:3000/api/v1/class/assistant/remove',data)
      				  .then(res => {
      					    alert(res.data.msg);
      		 	}) 
				   this.load();
            },
			astAdd(){
				const Qs = require('qs');
				let data =Qs.stringify ({"uid":this.$refs.uid.value,"password":this.$refs.pwd.value,"user_name":this.$refs.name.value});
				this.$axios.post('http://pingleme.top:3000/api/v1/user/assistant/add',data)
      				  .then(res => {
      					    alert(res.data.msg);
							console.log(res.data);
      		 	}) 
				   this.load();
			},
			showModal() {
   			   this.visible = true;
   			},
			handleOk() {
				this.astAdd();
    			this.visible = false;
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