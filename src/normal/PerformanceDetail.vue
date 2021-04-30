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
			<a-layout-header :style="{ background: '#fff', padding: 0 ,'text-align':'center'}">
				<div class="info">
					<a-icon type="user" />&nbsp;用户：XXX
					<a-divider type="vertical" />
					<a-icon type="team" />&nbsp;团队：XXX团队
				</div>
			</a-layout-header>
			<a-layout-content :style="{ margin: '24px 16px 0',minHeight:'360px' }">
				<div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
					<hr>
					<a-table :columns="columns" :data-source="data"  :pagination="false">
						<a slot="name" slot-scope="text">{{ text }}</a>
						<span slot="customTitle">姓名</span>
                        <span slot="score" >
							 <a-input-number id="inputScore" v-model="value" :min="1" :max="100" @change="onChange" />
						</span>
					</a-table>
				</div>
                <div>
                    <a-button type="primary">保存</a-button>
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
	    title: '学号',
	    dataIndex: 'end_num',
	    key: 'end_num',
	  },
	  {
	    title: '分数',
	    'key':'score',
		scopedSlots: { customRender: 'score' },
	  },
	];
	
	const data = [
	  {
	    key: '1',
	    name: '丁宇凡',
	    end_num: '221801217',
	  },
      {
	    key: '2',
	    name: '丁宇凡',
	    end_num: '221801217',
	  },
      {
	    key: '3',
	    name: '丁宇凡',
	    end_num: '221801217',
	  },
      {
	    key: '4',
	    name: '丁宇凡',
	    end_num: '221801217',
	  },
      {
	    key: '5',
	    name: '丁宇凡',
	    end_num: '221801217',
	  },
      {
	    key: '6',
	    name: '丁宇凡',
	    end_num: '221801217',
	  },
      {
	    key: '7',
	    name: '丁宇凡',
	    end_num: '221801217',
	  },
      {
	    key: '8',
	    name: '丁宇凡',
	    end_num: '221801217',
	  },
      {
	    key: '9',
	    name: '丁宇凡',
	    end_num: '221801217',
	  },
	];
	export default{
		name:'CreateEvaluation',
		components:{
			NormalNav,
		},
		data() {  
		    return {
				collapsed: false,
				data,
				columns,
                value: 3,
		    };
		},
		methods:{
            onChange(value) {
                console.log('changed', value);
            },
			goToHwDetail(){
				this.$router.push('/hwdetail')
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