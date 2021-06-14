<template>
	<a-layout id="components-layout-demo-responsive">
		<a-layout-sider breakpoint="lg" collapsed-width="0" @collapse="onCollapse" @breakpoint="onBreakpoint"
			id="sider">
			<div class="logo">
				<a-button type="link" style="margin-bottom: 16px; margin-top: 10px;"
					@click="() => (collapsed = !collapsed)">
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
								  <a-descriptions-item label="姓名" span="3">
								    {{User.nickname}}
								  </a-descriptions-item>
								  <a-descriptions-item label="学号" span="3">
								    {{User.uid}}
								  </a-descriptions-item>
								  <a-descriptions-item label="结对状态" span="3">
								    {{User.pair}}
								  </a-descriptions-item>
								  <a-descriptions-item label="团队状态" span="3">
								    {{User.team}}
								  </a-descriptions-item>
								</a-descriptions>
							</a-card>
						</div>
						<div class="option">
							<a-card>
								<a-collapse accordion :bordered="false">
									<a-collapse-panel key="1" header="选择结对队友" :style="customStyle">
										<a-form layout="inline" :form="form" @submit="handleSubmit">
											<a-form-item :validate-status="userNameError() ? 'error' : ''"
												:help="userNameError() || ''">
												<a-input v-decorator="[
			                    'userName',
			                    { rules: [{ required: true, message: '请输入有效的学号' }] },
			                  ]" placeholder="请输入结对队友学号">
													<a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" />
												</a-input>
											</a-form-item>

											<a-form-item>
												<a-button type="primary" html-type="submit"
													:disabled="hasErrors(form.getFieldsError())">
													确认
												</a-button>
											</a-form-item>
										</a-form>
									</a-collapse-panel>
									<a-collapse-panel key="2" header="团队成员" :style="customStyle">
										<div>
											<span >
											  <label>姓名：</label>
											  <input placeholder="请输入姓名" v-model="input_name"/>
											  <label>&nbsp;&nbsp;学号：</label>
											  <input placeholder="请输入学号" v-model="input_id"/>
											  <a-button class="editable-add-btn" @click="handleAdd">
											    添加
											  </a-button>
											</span>
											<a-table bordered :data-source="dataSource" :columns="columns"
												:pagination="false">

												<template slot="operation" slot-scope="text, record">
													<a-popconfirm v-if="dataSource.length" title="确认删除?"
														@confirm="() => onDelete(record.key)">
														<a href="javascript:;">删除</a>
													</a-popconfirm>
												</template>
											</a-table>
										</div>
									</a-collapse-panel>
									<a-collapse-panel key="3" header="修改密码" :style="customStyle">
										<a-form-model ref="ruleForm" :model="ruleForm" :rules="rules" v-bind="layout">
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
	import NormalNav from "../components/NormalNav.vue";

	function hasErrors(fieldsError) {
		return Object.keys(fieldsError).some(field => fieldsError[field]);
	}


	export default {
		name: 'LeaderInfo',
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
				dataSource: [],
				count: 1,
				columns: [{
				    title: '姓名',
				    dataIndex: 'name',
				  },
				  {
				    title: '学号',
				    dataIndex: 'id',
				  },
				  {
				    title: '操作',
				    dataIndex: 'operation',
				    scopedSlots: {
				      customRender: 'operation'
				    },
				  },
				],

				User:[],
				customStyle: 'background: white;',
				hasErrors,
				form: this.$form.createForm(this, {
					name: 'horizontal_login'
				}),
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
			this.$axios.get('http://xx.com/api/v1/user/{id}')
			  .then(res => {
			    this.User = res.data.data;
			  }),
			  this.$axios.get('http://xx.com/api/v1/team/member')
			    .then(res => {
			      this.dataSource = res.data.data;
			    }),
			this.$nextTick(() => {
				// To disabled submit button at the beginning.
				this.form.validateFields();
			});
		},
		methods: {
			onCollapse(collapsed, type) {
				console.log(collapsed, type);
			},
			onBreakpoint(broken) {
				console.log(broken);
			},

			onDelete(key) {
				const dataSource = [...this.dataSource];
				this.dataSource = dataSource.filter(item => item.key !== key);
			},
			handleAdd() {
				const {
					count,
					dataSource
				} = this;
				const newData = {
					key: count,
					name: this.input_name,
					id: this.input_id,
				};
				this.dataSource = [...dataSource, newData];
				this.count = count + 1;
			},

			// Only show error after a field is touched.
			userNameError() {
				const {
					getFieldError,
					isFieldTouched
				} = this.form;
				return isFieldTouched('userName') && getFieldError('userName');
			},
			// Only show error after a field is touched.
			handleSubmit(e) {
				e.preventDefault();
				this.form.validateFields((err, values) => {
					if (!err) {
						console.log('Received values of form: ', values);
					}
				});
			},
			submitForm(formName) {
				this.$refs[formName].validate(valid => {
					if (valid) {
						alert('submit!');
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
		background: rgba(255, 255, 255, 0.2);
		margin: 16px;
	}

	#sider {
		background: white;
	}
</style>
