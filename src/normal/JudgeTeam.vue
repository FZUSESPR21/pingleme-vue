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
						@click="() => (collapsed = !collapsed)">
							&nbsp;PingLeMe
				</a-button>
			</div>
			<NormalNav></NormalNav>
		</a-layout-sider>
		
		<a-layout>
			<a-layout-header :style="{ background: '#fff', padding: 0 }">

			</a-layout-header>
			<a-layout-content :style="{ margin: '24px 16px 0' }">
			<a-collapse v-model="activeKey">
          
              <a-collapse-panel key="1" header="团队第二次作业github编程实战">
                	<a-button type="primary" style="margin-bottom: 10px;">
                    保存
                  </a-button>
          
                <a-table :columns="columns" :data-source="data" :scroll={x:1500} bordered :pagination="false">
                  <span v-for="i in columns" :key="i.dataIndex" :slot="i.dataIndex" slot-scope="text" contentEditable=true>
                    {{text}}
                  </span>
                </a-table>
                <a-input placeholder="优点" />
                <a-input placeholder="缺点" />
                <a-input placeholder="建议" />
              </a-collapse-panel>
              <a-collapse-panel key="2" header="团队第三次作业">
                	<a-button type="primary" style="margin-bottom: 10px;">
                    保存
                  </a-button>
          
                <a-table :columns="columns" :data-source="data" :scroll={x:1500} bordered :pagination="false">
                  <span v-for="i in columns" :key="i.dataIndex" :slot="i.dataIndex" slot-scope="text" contentEditable=true>
                    {{text}}
                  </span>
                </a-table>
                <a-input placeholder="优点" />
                <a-input placeholder="缺点" />
                <a-input placeholder="建议" />
              </a-collapse-panel>
            </a-collapse>
			</a-layout-content>
			<a-layout-footer style="textAlign: center">
				PingLeMe ©2021 Created by Ant UED
			</a-layout-footer>
		</a-layout>	
  </a-layout>
</template>

<script>
	import NormalNav from "../components/NormalNav.vue";
    const columns = [{
	    title: '组号',
	    dataIndex: 'no',
	
	  },
	  {
	    title: '组名',
	    dataIndex: 'name',
	
	  },
	  {
	    title: '评分项1',
	    dataIndex: 'work1',
	    scopedSlots: {
	      customRender: 'work1'
	    },
	  },
	  {
	    title: '评分项2',
	    dataIndex: 'work2',
	    scopedSlots: {
	      customRender: 'work2'
	    },
	  },
	  {
	    title: '评分项...',
	    dataIndex: 'workn',
	    scopedSlots: {
	      customRender: 'workn'
	    },
	  },
	  {
	    title: '评分项1',
	    dataIndex: 'work1',
	    scopedSlots: {
	      customRender: 'work1'
	    },
	  },
	  {
	    title: '评分项2',
	    dataIndex: 'work2',
	    scopedSlots: {
	      customRender: 'work2'
	    },
	  },
	];
	
	const data = [{
	    key: '1',
	    no: '9',
	    name: '评了么',
	    work1: '0',
	    work2: '0',
	    workn: '0',
	    teamgrade: '0',
	
	  },
	
	];
	export default{
		name:'JudgrTeam',
		components:{
			NormalNav,
		},
		data() {  
		    return {
                data,
	            columns,
	            activeKey: ['1'],
				collapsed: false,
		    };
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