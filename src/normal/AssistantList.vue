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

			</a-layout-header>
			<a-layout-content :style="{ margin: '24px 16px 0' }">
				<div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
					<a-input-search placeholder="按姓名搜索" style="width: 200px;margin-left:0px;" @search="onSearch()" />
                    <span>&emsp;<a-button type="primary">添加助教</a-button></span>
					<hr>
					<a-table :columns="columns" :data-source="data"  :pagination="myPagination">
						<a slot="name" slot-scope="text">{{ text }}</a>
						<span slot="customTitle"><a-icon type="smile-o" /> 姓名</span>
						<span slot="action" >
							<a-button type="link" style="margin-left:0px;" @click="astDelete()"><a><a-icon type="delete" /></a></a-button>
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
	    key: 'name',
	    slots: { title: 'customTitle' },
	    scopedSlots: { customRender: 'name' },
	  },
	  {
	    title: '学号',
	    dataIndex: 'uid',
	    key: 'end_num',
	  },
	  {
	    title: '管理班级',
	    dataIndex: 'class_name',
	    key: 'end_class',
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
				data:[],
				columns,
				myPagination: {
				    defaultPageSize: 10
				}
		    };
		},
		mounted(){
			this.$axios
				.get('http://pingleme.top:3000/api/v1/class/assistant/list/all')
				.then(res=>{
					if(res.data.code==0){
						console.log(res.data.data)
						this.data=res.data.data
					}
					else{
						console('code:'+res.data.code+' msg:'+res.data.msg)
					}
				})
		},
		methods:{
            onChange(value) {
                console.log('changed', value);
            },
			onCollapse(collapsed, type) {
			    console.log(collapsed, type);
			 },
			onBreakpoint(broken) {
			    console.log(broken);
			},
            astDelete(){

            }
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