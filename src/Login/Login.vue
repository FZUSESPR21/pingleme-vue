<template>
	<div style="background-color:#2C3E50;">
		<a-row type="flex" justify="space-around" align="middle">
			<a-col :span="14" style="background-color: rgba(0,0,0,0);">
				<a-card title="评了么" :bordered="false" headStyle="width: 300px;fontSize: 36px;color: rgba(0, 0, 0, 0.85);">
					这块好丑，要改
				</a-card>
			</a-col>				
			<a-col :span="10">
					<div style="height:300px;width:270px;margin:24px;padding:16px;background-color:whitesmoke;border-radius: 30px;">
						<a-button type="link" icon="login" >LOGIN</a-button>
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
								<a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
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
										记住我
									</a-checkbox><br>
									<a-button type="primary" ghost html-type="submit" class="login-form-button">
										LOGIN
									</a-button>
									<a-button type="primary" ghost @click="goTo('/tinfo')">
										现在先点这个
									</a-button>
							</a-form-item>
						</a-form>
					</div>
			</a-col>
		</a-row>
	</div>
</template>

<script>
export default {
	name:'Login',
	
	beforeCreate() {
	    this.form = this.$form.createForm(this, { name: 'normal_login' });
	},
	
	methods: {
		goTo(path){
			this.$router.replace(path);
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
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-button {
  width: 50%;
}
</style>