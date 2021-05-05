<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider breakpoint="sm" collapsed-width="0" @collapse="onCollapse" @breakpoint="onBreakpoint" id="sider">
      <div class="logo" >
      <a-button type="link" style="margin-bottom: 16px; margin-top: 10px;"
      	@click="() => (collapsed = !collapsed)">
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
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <div>
            
                <a-affix :offset-top="top">
            <a-collapse v-model="activeKey">
          
              <a-collapse-panel key="1" header="团队第二次作业github编程实战">
                	<a-button type="primary" style="margin-bottom: 10px;">
                    提交
                  </a-button>
          
                <a-table :columns="columns" :data-source="data" :scroll={x:1500} bordered :pagination="false">
                  <span v-for="i in columns" :key="i.dataIndex" :slot="i.dataIndex" slot-scope="text" contentEditable=true>
                    {{text}}
                  </span>
                </a-table>
              </a-collapse-panel>
            </a-collapse>
            
                </a-affix >
            <!-- <a-collapse-panel key="2" header="作业预览" > -->
            <div>
              <iframe :src="url" id="mobsf" frameborder="1" width="100%" height="1000px" scrolling="auto">
              </iframe>
            </div>
          
            <!-- </a-collapse-panel> -->
            <!-- </a-collapse> -->
          </div>
          
        </div>
      </a-layout-content>
      <a-layout-footer style="textAlign: center;background:white">
        Ant Design ©2018 Created by Ant UED
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
	    title: '模块1',
	    dataIndex: 'work1',
	    scopedSlots: {
	      customRender: 'work1'
	    },
	  },
	  {
	    title: '模块2',
	    dataIndex: 'work2',
	    scopedSlots: {
	      customRender: 'work2'
	    },
	  },
	  {
	    title: '模块...',
	    dataIndex: 'workn',
	    scopedSlots: {
	      customRender: 'workn'
	    },
	  },
	  {
	    title: '模块1',
	    dataIndex: 'work1',
	    scopedSlots: {
	      customRender: 'work1'
	    },
	  },
	  {
	    title: '模块2',
	    dataIndex: 'work2',
	    scopedSlots: {
	      customRender: 'work2'
	    },
	  },
	  {
	    title: '模块...',
	    dataIndex: 'workn',
	    scopedSlots: {
	      customRender: 'workn'
	    },
	  }, {
	    title: '模块1',
	    dataIndex: 'work1',
	    scopedSlots: {
	      customRender: 'work'
	    },
	  },
	  {
	    title: '模块2',
	    dataIndex: 'work2',
	    scopedSlots: {
	      customRender: 'work2'
	    },
	  },
	  {
	    title: '模块...',
	    dataIndex: 'workn',
	    scopedSlots: {
	      customRender: 'workn'
	    },
	  }, {
	    title: '模块1',
	    dataIndex: 'work1',
	    scopedSlots: {
	      customRender: 'work1'
	    },
	  },
	  {
	    title: '模块2',
	    dataIndex: 'work2',
	    scopedSlots: {
	      customRender: 'work2'
	    },
	  },
	  {
	    title: '模块...',
	    dataIndex: 'workn',
	    scopedSlots: {
	      customRender: 'workn'
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
  export default {
	  name:'HwCorrecting',
	  components:{
	  	NormalNav,
	  },
	    data() {
	      return {
	        data,
	        columns,
	        activeKey: ['1'],
	        url: "https://edu.cnblogs.com/campus/fzu/FZUSESPR21/homework/11974"
	      }
	    },
	    watch: {
	      activeKey(key) {
	        console.log(key);
	      },
	    },
    methods: {
      onCollapse(collapsed, type) {
        console.log(collapsed, type);
      },
      onBreakpoint(broken) {
        console.log(broken);
      },
     
    },
  };
</script>

<style>
  #components-layout-demo-responsive .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
  #sider{
    background: white;
  }
</style>