<template>
<a-layout style="background-color: rgba(0,0,0,0);">
	<div class="background" style="background-color: #161616; width:100%; height=100%"></div>
	<a-layout-header style="background-color: rgba(0,0,0,0);"></a-layout-header>
	<a-layout style="background-color: rgba(0,0,0,0);">
	<a-layout-sider style="background-color: rgba(0,0,0,0);width:20px"/>
		<a-layout style="background-color: rgba(0,0,0,0);">
			<a-layout style="background: rgba(0,0,0,0);">
				<a-layout-header style="background: rgba(0,0,0,0);color:white;font-size: 40px;font-weight:bold">评 了 么</a-layout-header>
				<a-layout-content 
					  style="width:300x;height:100%;padding:10px;background: rgba(0,0,0,0);color:white;font-size:10px"
					>
					<br>
					<div style="text-align:center;font-weight:bold">
					<a-divider orientation="right" style="color:white">
						  <a-tooltip>
						    <template slot="title">
						      评了么评分系统
						    </template>
						    System Name
						  </a-tooltip>
					</a-divider>
					<a-divider style="color:white">
						  <a-tooltip>
						    <template slot="title">
						      提高软工实践作业评分效率
						    </template>
						    Development purpose
						  </a-tooltip>
					</a-divider>
					<a-divider orientation="left" style="color:white">								  <a-tooltip>
						    <template slot="title">
						      评了么团队
						    </template>
						    Development Team
						  </a-tooltip>
					</a-divider>
					</div>
				</a-layout-content>
			</a-layout>
				<a-layout-sider 
					width='250px' 
					style="margin-right:0px;background-color: rgba(0,0,0,0);text-align:center"
					>
					<div class="loginform" style="height:100%;width:200px;padding:10px;background-color:rgba(0,0,0,0);">
						<div style="padding:10px"><a-label style="color:white;font-size: large;"><a-icon type="login"/>LOGIN</a-label></div>
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
									style="border-radius: 30px"
								>
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
									style="border-radius: 30px;"
								>
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
									<a-label style="color:white">Remember Me</a-label>
									</a-checkbox>
									<a-button 
										type="primary" 
										html-type="submit" 
										class="login-form-button" 
										style="border-radius: 30px;background: whitesmoke;color:#2C3E50"
									>
										LOGIN
									</a-button>
									<br/>
									<a-button 
										type="primary" 
										@click="goTo('/tinfo')" 
										style="border-radius: 30px;background: whitesmoke;color:#2C3E50">
										现在先点这个
									</a-button>
								</a-form-item>
							</a-form>
						</div>
				</a-layout-sider>
		</a-layout>
	<a-layout-sider style="background-color: rgba(0,0,0,0);width:20px"/>
</a-layout>
</a-layout>
</template>

<script>
export default {
	name:'Login',
	
	beforeCreate() {
	    this.form = this.$form.createForm(this, { name: 'normal_login' });
	},
	data(){
		return {

		};
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
.background{
	width:100%;  
	height:100%;
	z-index:-1;
	position: absolute;
}	 
.front{
	z-index:1;
	position: absolute;
}
#components-form-demo-normal-login .login-form {
  max-width: 200px;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>