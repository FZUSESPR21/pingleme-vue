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
		
		<a-layout>
			<a-layout-header :style="{ background: '#fff', padding: 0 }">
				<div class="info">
					<a-icon type="user" />&nbsp;用户：XXX
					<a-divider type="vertical" />
					<a-icon type="team" />&nbsp;团队：XXX团队
				</div>
			</a-layout-header>
			<a-layout-content :style="{ margin: '24px 16px 0' }">
				XXXXXXXXXXXXXXXXXXXXX
			</a-layout-content>
			<a-layout-footer style="textAlign: center">
				PingLeMe ©2021 Created by Ant UED
			</a-layout-footer>
		</a-layout>	
  </a-layout>
</template>

<script>
	import NormalNav from "../components/NormalNav.vue";
	export default{
		name:'HwkDetail',
		components:{
			NormalNav,
		},
		data() {  
		    return {
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