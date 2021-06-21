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
			<a-layout-header :style="{ background: '#fff', padding: 0,margin:'12px' }">
			<ClassHeader></ClassHeader>
			</a-layout-header>
			<a-layout style="background: white;">
				<a-layout-content >
					<div style="padding:24px;background: #fff;">
						<a-label style="font-size: 20px;"><a-icon type="team"/>班级：{{$store.getters.Userclass}}</a-label>
					</div>
					<div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
					<a-form-model
						ref="ruleForm"
						:model="form"
						:rules="rules"
						:label-col="modellabelCol"
						:wrapper-col="modelwrapperCol"
					>
						<a-form-model-item
							label="作业标题"
							prop="title"
						>
						  	<a-input
							ref="title"
							v-model="form.title"
								placeholder="输入作业标题"
								/>
						</a-form-model-item>
						<a-form-model-item
							label="作业内容"
							prop="content"
						>
						  	<a-textarea
							ref="content"
							v-model="form.content"
								placeholder="输入作业内容"
								/>
						</a-form-model-item>
						<a-form-model-item
							label="作业类型"
							prop="type"
						>
							<a-select 
							v-model="form.type"
								placeholder="选择作业类型" 
							>
								<a-select-option value="1">
								       个人作业
								</a-select-option>
								<a-select-option value="2">
								        结对作业
								</a-select-option>
								<a-select-option value="3">
								        团队作业
								</a-select-option>
							</a-select>
						</a-form-model-item>
						<a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
						      <a-button type="primary" @click="onSubmit">
						        创建作业
						      </a-button>
						</a-form-model-item>
					</a-form-model>

					</div>
				</a-layout-content>
				<a-layout-footer style="textAlign: center;background:white">
					PingLeMe ©2021 Created by Ant UED
				</a-layout-footer>
			</a-layout>
		</a-layout>
	</a-layout>
</template>

<script>
	//班级信息-班级管理
	import NormalNav from "../components/NormalNav.vue"
	import ClassHeader from "../components/ClassHeader.vue"
	//import axios from "axios"

	
	export default{
		name:'mngAddhw',
		data(){
			return {
				modellabelCol: { span: 4 },
				modelwrapperCol: { span: 8 },
				form:{
					title:'',
					content:'',
					type:undefined,
				},
				rules:{
					title:[
						{required:true,message:'请输入作业标题'}
					],
					content:[
						{required:true,message:'请输入作业内容'}
					],
					type:[
						{required:true,message:'选择作业类型'}
					],
				},
			}
		},

		mounted(){
			this.getScorelist();
		},
		components:{
			NormalNav,
			ClassHeader,
		},
		methods:{
			//响应式布局的函数
			onCollapse(collapsed, type) {
			    console.log(collapsed, type);
			 },
			onBreakpoint(broken) {
			    console.log(broken);
			},
			
			onSubmit() {
				this.$refs.ruleForm.validate(valid => {
				    if (valid) {
						console.log("submit")
				    } else {
				        console.log('error submit!!');
				        return false;
				    }
				});
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
