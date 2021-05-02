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
			<a-layout-content :style="{ margin: '24px 16px 0',minHeight:'360px','text-align':'center' }">
				<a-form :form="form">
					<a-form-item
						:label-col="formItemLayout.labelCol"
						:wrapper-col="formItemLayout.wrapperCol"
						label="Class Name"
					>
						<a-input
						    v-decorator="[
						        'username',
						        { rules: [{ required: true, message: 'Please input class name' }] },
						    ]"
						    placeholder="Please input class name"
						 />
					</a-form-item>
					<a-form-item :label-col="formTailLayout.labelCol" :wrapper-col="formTailLayout.wrapperCol">
						<a-button type="primary" @click="check">
						        Create
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
				formItemLayout,
				formTailLayout,
				form: this.$form.createForm(this, { name: 'dynamic_rule' }),
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
			check() {
			    this.form.validateFields(err => {
			        if (!err) {
						console.info('success');
			        }
			    });
			},
			handleChange(e) {
			    this.checkNick = e.target.checked;
			    this.$nextTick(() => {
			        this.form.validateFields(['nickname'], { force: true });
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
