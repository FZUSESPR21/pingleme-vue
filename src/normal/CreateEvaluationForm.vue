<template>
	<a-layout id="components-layout-demo-evaluationform-trigger">
		<a-layout-sider v-model="collapsed" :trigger="null" collapsible id="formside1">
		    <div class="formlogo">
				<a-button type="link"
						style="margin-bottom: 16px; margin-top: 10px;"
						@click="() => (collapsed = !collapsed)">
				  <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
							&nbsp;PingLeMe
				</a-button>
			</div>
		    <NormalNav></NormalNav>
		</a-layout-sider>
		
		<a-layout>
			<a-layout-header style="background: #fff;font-size: medium;">
				<div class="evainfo">
					<a-icon type="user" />&nbsp;用户：XXX
					<a-divider type="vertical" />
					<a-icon type="team" />&nbsp;团队：XXX团队
					<a-divider type="vertical" />
					<a-icon type="team" />&nbsp;作业：作业XXX
				</div>
			</a-layout-header>
			<hr>
			<a-layout-content :style="{ margin: '0px 0px', padding: '16px', background: '#fff', minHeight: '280px' }">
				<EvaCrForm></EvaCrForm>
			</a-layout-content>	
		</a-layout>
	</a-layout>
</template>

<script>
	import NormalNav from "../components/NormalNav.vue";
	import EvaCrForm from "../components/EvaCrForm.vue";
	export default{
		name:'CrEvaform',
		components:{
			EvaCrForm,
			NormalNav,
		},
		data(){
			return{
				collapsed:false,
			}
		}
	}
</script>

<style>
#components-layout-demo-evaluationform-trigger .formlogo {
  height: 32px;
  background: rgba(255, 255, 255, 0);
  margin: 16px;
}
#formside1{
	background-color: white;
}
</style>