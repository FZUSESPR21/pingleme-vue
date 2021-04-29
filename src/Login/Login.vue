<template>
  <a-layout id="components-layout-demo">
	  <a-layout-header style='background:white'>
		  <a-row>
			  <a-col :span="3">
				  <a-icon type="file-ppt" />&nbsp;PingLeMe
			  </a-col>
		  </a-row>
	  </a-layout-header>
		<a-layout-content :style="{ margin: '24px 16px 0' }">
			<div :style="{ padding: '0px', background: '#fff', minHeight: '360px' }">
				<a-row type="flex" justify="center" align="top">
					<a-col :span="14">
						<a-card title="评了么" :bordered="false" headStyle="width: 300px;fontSize: 36px;color: rgba(0, 0, 0, 0.85);">
							这块好丑，要改
					</a-card>
					</a-col>
					
					<a-col :span="10">
						<a-row type="flex" justify="space-around" align="middle">
							<a-col>
							<a-button type="link">LOGIN</a-button>
								<a-form
									id="components-form-demo-normal-login"
									:form="form"
									class="login-form"
									@submit="handleSubmit"
								>
								<a-form-item>
									<a-input
										v-decorator="[
										'userName',
										{ rules: [{ required: true, message: 'Please input your username!' }] },
										]"
										placeholder="Username"
									>
										<a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" theme="outlined"/>
									</a-input>
								</a-form-item>
								<a-form-item>
									<a-input
										v-decorator="[
										'password',
										{ rules: [{ required: true, message: 'Please input your Password!' }] },
										]"
										type="password"
										placeholder="Password"
									>
										<a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
									</a-input>
								</a-form-item>
								<a-form-item>
									<a-checkbox
										v-decorator="[
										'remember',
										{
											valuePropName: 'checked',
											initialValue: true,
										},
										]"
									>
										Remember me
									</a-checkbox><br>
									<a-button type="primary" html-type="submit" class="login-form-button">
										LOGIN
									</a-button><br>
									<a-button type="primary" @click="goTocrEva()">
										先点这个
									</a-button>
								</a-form-item>
								</a-form>
								</a-col>
							</a-row>
					</a-col>
				</a-row>
			</div>
		</a-layout-content>
  </a-layout>
</template>
<script>
export default {
	name:'Login',
	
	beforeCreate() {
	    this.form = this.$form.createForm(this, { name: 'normal_login' });
	},
	
	methods: {
		goTocrEva(){
			this.$router.push('/creva')
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
};
</script>

<style>
#components-layout-demo{
	background: white;
}
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-button {
  width: 50%;
}
</style>