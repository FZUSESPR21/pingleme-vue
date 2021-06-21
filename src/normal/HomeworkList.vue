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
					<hr>
					<a-table :columns="columns" :data-source="data"  :pagination="myPagination">
						<a slot="name" slot-scope="text">{{ text }}</a>
						<span slot="customTitle"><a-icon type="smile-o" /> 作业</span>
						<span slot="action" >
							<a-button type="link" style="margin-left:0px;" @click="See(url)"><a><a-icon type="edit" /></a></a-button>
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
	    dataIndex: 'title',
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
	    title: '操作',
		'key':'action',
		scopedSlots: { customRender: 'action' },
	  },
	];
	

	export default{
		name:'HomeworkList',
		components:{
			NormalNav,
		},
		data() {  
		    return {
				collapsed: false,
				data:[],
				columns,
				myPagination: {
				    defaultPageSize: 5
				},
				url:"https://edu.cnblogs.com/campus/fzu/FZUSESPR21/homework/11974",
		    };
		},
		mounted(){
			this.$axios
				.get('http://47.101.54.43/api/v1/class/homework/list?class_id='+this.$store.getters.Userclass
				//.get('http://pingleme.top:3000/api/v1/class/homework/list?class_id='+this.$store.getters.Userclass
					)
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
		methods:{
			goTo(path){
				this.$router.replace(path);
			},
			onCollapse(collapsed, type) {
			    console.log(collapsed, type);
			 },
			onBreakpoint(broken) {
			    console.log(broken);
			},
			 See (e) {
      			window.location.href = e
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