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
			<a-layout-header style="background: #fff;"></a-layout-header>
			<a-layout-content :style="{ margin: '24px 16px 0',minHeight:'360px',padding:'10px', }">
				<a-form :form="form" @submit="handleSubmit">
					<a-form-item
						:label-col="formItemLayout.labelCol"
						:wrapper-col="formItemLayout.wrapperCol"
						label="班级名"
					>
					  	<a-input
					  	    v-decorator="[
					  	        'classname',
					  	        { rules: [{ required: true, message: '请输入新班级的名字' }] },
					  	    ]"
					  	    placeholder="请输入新班级的名字"
					  	 />
					</a-form-item>
					<a-form-item
						:label-col="formItemLayout.labelCol"
						:wrapper-col="formItemLayout.wrapperCol"
						label="助教"
					>
						<a-select 
						    v-decorator="[
						          'assistant',
						          { rules: [{ required: true, message: '至少选择一个助教' }] },
						    ]"
							mode="multiple" 
							style="width: 100%" 
							placeholder="添加助教" 
							@change="handleChangeSelect"
						>
							<a-select-option v-for="(item,index) in assistantList" :key="index" :value="item.asname">
								{{ item.asname }}
							</a-select-option>
						</a-select>
					</a-form-item>
					<a-form-item :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol">
					      <a-button type="primary" html-type="submit">
					        创建班级
					      </a-button>
					</a-form-item>
				</a-form>
			</a-layout-content>
			<a-layout-footer style="textAlign: center;background:white">
				PingLeMe ©2021 Created by Ant UED
			</a-layout-footer>
		</a-layout>		
	</a-layout>
</template>

<script>
	//创建班级
	import NormalNav from "../components/NormalNav.vue"
const assistantList=[
	{
		key:'1',
		asname:'助教1'
	},
	{
		key:'2',
		asname:'助教2'
	},
	{
		key:'3',
		asname:'助教3'
	},
	{
		key:'4',
		asname:'助教4'
	},
	{
		key:'5',
		asname:'助教5'
	},
	{
		key:'6',
		asname:'助教6'
	},
	{
		key:'7',
		asname:'助教7'
	},
	{
		key:'8',
		asname:'助教8'
	},
	{
		key:'9',
		asname:'助教9'
	},
	{
		key:'10',
		asname:'助教10'
	},
	{
		key:'11',
		asname:'助教11'
	},
];
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};
	export default{
		name:'CrClass',
		data(){
			return {
				assistantList,
				formItemLayout,
				formTailLayout,
			}
		},
		components:{
			NormalNav,
		},
		methods:{
			onCollapse(collapsed, type) {
			    console.log(collapsed, type);
			 },
			onBreakpoint(broken) {
			    console.log(broken);
			},
			handleChangeSelect(value) {
				console.log(`selected ${value}`);
			},
			handleSubmit(e) {
			    e.preventDefault();
			    this.form.validateFields((err, values) => {
					if (!err) {
			          console.log('Received values of form: ', values);
					}
			    });
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
