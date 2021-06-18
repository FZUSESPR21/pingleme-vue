<template>
	<a-layout id="components-layout-demo-responsive">
		<a-layout-sider breakpoint="lg" collapsed-width="0" @collapse="onCollapse" @breakpoint="onBreakpoint"
			id="sider1">
			<div class="logo">
				<a-button type="link" style="margin-bottom: 16px; margin-top: 10px;">
					&nbsp;PingLeMe
				</a-button>
			</div>
			<NormalNav></NormalNav>
		</a-layout-sider>

		<a-layout style="background: white;">
			<a-layout-header :style="{ background: '#fff', padding: 0 ,textAlign:'center'}">

			</a-layout-header>
			<a-layout-content :style="{ margin: '24px 16px 0' }">
				<div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">

					<div class="div">
						<div class="info">
							<a-card>
								<a-descriptions title="个人信息">
								  <a-descriptions-item label="id" span="3">
								    {{User.uid}}
								  </a-descriptions-item>
								  <a-descriptions-item label="姓名" span="3">
								    {{User.user_name}}
								  </a-descriptions-item>
								</a-descriptions>
								<a-collapse accordion :bordered="false">
									<a-collapse-panel key="1" header="修改密码" :style="customStyle">
										<a-form-model ref="ruleForm" :model="ruleForm" :rules="rules" v-bind="layout">
											<a-form-model-item label="输入旧密码">
												<a-input v-model="old_password" type="password" autocomplete="off" />
											</a-form-model-item>
											<a-form-model-item has-feedback label="输入新密码" prop="pass">
												<a-input v-model="ruleForm.pass" type="password" autocomplete="off" />
											</a-form-model-item>
											<a-form-model-item has-feedback label="确认新密码" prop="checkPass">
												<a-input v-model="ruleForm.checkPass" type="password"
													autocomplete="off" />
											</a-form-model-item>
											<a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
												<a-button type="primary" @click="submitForm('ruleForm')">
													确认
												</a-button>
												<a-button style="margin-left: 10px" @click="resetForm('ruleForm')">
													重置
												</a-button>
											</a-form-model-item>
										</a-form-model>
									</a-collapse-panel>
								</a-collapse>
							</a-card>
						</div>
					</div>

				</div>
			</a-layout-content>
			<a-layout-footer style="textAlign: center;background:white">
				PingLeMe ©2021 Created by Ant UED
			</a-layout-footer>
		</a-layout>
	</a-layout>
</template>

<script>
	import NormalNav from "../components/NormalNav.vue"
	export default {
		name: 'TInfo',

		components: {
			NormalNav,
		},
		data() {
			
			let validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入新密码'));
				} else {
					if (this.ruleForm.checkPass !== '') {
						this.$refs.ruleForm.validateField('checkPass');
					}
					callback();
				}
			};
			let validatePass2 = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请再次输入新密码'));
				} else if (value !== this.ruleForm.pass) {
					callback(new Error("两次输入密码不一致"));
				} else {
					callback();
				}
			};
			return {
				userName:'',
				User:[],
				customStyle: 'background: white;',
				ruleForm: {
					pass: '',
					checkPass: '',
				},
				rules: {
					pass: [{
						validator: validatePass,
						trigger: 'change'
					}],
					checkPass: [{
						validator: validatePass2,
						trigger: 'change'
					}],
				},
				layout: {
					labelCol: {
						span: 4
					},
					wrapperCol: {
						span: 14
					},
				},
			};
		},
		mounted() {
			this.getUname();
			this.$axios.get('http://pingleme.top:3000/api/v1/user/me')
				.then(res => {
					if(res.data.code=='401'){
						alert("未登录，请登录");
						this.$router.replace('/');
					}
					else{
						this.User = res.data.data;
					}
				})

		},
		methods: {
			getUname(){
				var routerPname=this.$route.params.uname
				this.userName=routerPname
			},
			onCollapse(collapsed, type) {
				console.log(collapsed, type);
			},
			onBreakpoint(broken) {
				console.log(broken);
			},
			submitForm(formName) {
				this.$refs[formName].validate(valid => {
					if (valid) {
						this.$axios.post(this.$store.getters.getUrl + '/api/v1/user/password/change', {
								"uid": this.User.uid,
								"old_password": this.old_password,
								"new_password": this.ruleForm.pass,
								"new_password_confirm": this.ruleForm.checkPass
							})
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
		},
	};
</script>

<style>
	#components-layout-demo-responsive .logo {
		height: 32px;
		background: rgba(255, 255, 255, 0);
		margin: 16px;
	}

	#sider1 {
		background-color: white;
	}
</style>
