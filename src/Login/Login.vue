<template>
<div>
<div class="background" style="background-color: #161616;"></div>
<h1 style="background-color: rgba(0,0,0,0);height:35px"></h1>
<a-row type="flex" justify="space-around" style="height:100%;width:100%;">
	<a-col :xs="{ span: 0 }" :sm="{ span: 10, offset: 2}">
		<div class="info">
			<h1 style="color:whitesmoke;font-size: 28px;font-weight: bold;">评 了 么</h1>
			<a-divider orientation="right" style="color:whitesmoke">
				<a-tooltip>
					<template slot="title">
					    评了么评分系统
					</template>
					    System Name
				</a-tooltip>
			</a-divider>
			<a-divider style="color:whitesmoke">
				<a-tooltip>
					<template slot="title">
					    提高软工实践作业评分效率
					</template>
					    Development purpose
				</a-tooltip>
			</a-divider>
			<a-divider orientation="left" style="color:whitesmoke">
				<a-tooltip>
					<template slot="title">
					    评了么团队
					</template>
					    Development Team
				</a-tooltip>
			</a-divider>
		</div>
	</a-col>
	<a-col :xs="{ span: 12,offset:6}" :sm="{ span: 8,offset:3 }">
	    <div class="loginform" style="height:300px;width:100%;padding:8px;background-color:rgba(0,0,0,0)">
	    	<div style="padding:10px;">
				<a-label style="color:white;font-size:30px;">PINGLEME</a-label>
				<br/>
				<a-label style="color:white;font-size: large;">
					<a-icon type="login"/> LOGIN
				</a-label>
	    	</div>
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
	    				style="border-radius: 15px"
						v-model="user"
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
	    				style="border-radius: 15px;"
						v-model="psd"
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
	    				<a-label style="color:white">记住我</a-label>
	    			</a-checkbox>
	    			<a-button 
	    				type="primary" 
	    				html-type="submit" 
	    				class="login-form-button" 
	    				style="border-radius: 15px;background: whitesmoke;color:#2C3E50"
	    			>
	    				LOGIN
	    			</a-button>
	    			<br/>
	    		</a-form-item>
	    	</a-form>
	    </div>
	</a-col>
	<a-col :xs="{ span: 6}" :sm="{ span: 1}"></a-col>
</a-row>
</div>
</template>

<script>
//import {setCookie} from '@/util/util'
export default {
	name:'Login',
	beforeCreate() {
	    this.form = this.$form.createForm(this, { name: 'normal_login' });
	},
	data(){
		return {
			userName:'',
			userRole:'',
			user:'',
			psd:'',

			hide:true,

		};
	},
	
	methods: {
		getUserInfo(){
			//this.$axios.post('http://192.168.50.192:3000/debug/ping')
			this.$axios.post('http://47.101.54.43/api/v1/login',
				this.$qs.stringify({
					'uid':this.user,
					'password':this.psd
				})
			)
			.then(res=>{
				//console.log(res.data)
				if(res.data.code=='40001'){
					//console.log();
					alert('错误代码：'+res.data.code+','+res.data.msg);
				}
				else{
					if(res.data.code==0)
					{
						//console.log(res.data.data);	

						this.$store.commit('handleUserid',res.data.data.uid)
						this.$store.commit('handleUserName',res.data.data.user_name)
						this.$store.commit('handleUserRole',res.data.data.role)
						this.$store.commit('handleUserTeam',res.data.data.team_id)
						this.$store.commit('handleUserclass',res.data.data.class_id)
					}
				}				

			})
			.catch(res=>{
				console.log(res.data);
			})
		},
		goTo(path){
			this.$router.replace(path);
		},
		hided(){
			this.hide=false;
		},
		handleSubmit(e) {
			e.preventDefault();
			      this.form.validateFields((err, values) => {
			        if (!err) {
						this.getUserInfo();
						console.log(values);


						let userRole=this.$store.getters.UserRole
						console.log(userRole);
						if(this.userRole=='1'){
							this.$store.commit('studentClick');
							this.goTo('/SelfInfo');
						}
						else if(userRole=='2'){
							this.$store.commit('teacherClick');
							this.goTo('/tinfo');
						}
						else if(userRole=='2'){
							this.$store.commit('teacherClick');
							this.goTo('/tinfo');
						}
						else if(userRole=='0'){
							this.$store.commit('headmanClick');
							this.goTo('/LeaderInfo');
						}
						else if(userRole=='9'){
							this.goTo('/tinfo')
						}
					}
				});
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
.login-form {
  max-width: 200px;
}
.login-form-button {
  width: 100%;
}
</style>