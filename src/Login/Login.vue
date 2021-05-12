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
	    			<a-button 
	    				type="primary" 
	    				@click="goTo('/tinfo')" 
	    				style="border-radius: 15px;background: whitesmoke;color:#2C3E50"
	    			>
	    				现在先点这个
	    			</a-button>
					<div v-if="hide"><span>&emsp;<a-button type="primary" v-bind:disabled="$store.getters.getStudentButton"
								@click="$store.commit('studentClick');goTo('/SelfInfo')">学生</a-button>
							&emsp;<a-button type="primary" v-bind:disabled="$store.getters.getHeadmanButton"
								@click="$store.commit('headmanClick');goTo('/LeaderInfo')">组长</a-button>
							<br />
							<a-button type="primary" v-bind:disabled="$store.getters.getAssistantButton"
								@click="$store.commit('assistantClick');goTo('/tinfo')">助教</a-button>&emsp;
							<a-button type="primary" v-bind:disabled="$store.getters.getTeacherButton"
								@click="$store.commit('teacherClick');goTo('/tinfo')">老师</a-button>
						</span>
						<br />
						<a-button type="primary" v-bind:disabled="$store.getters.getSuperButton"
							@click="$store.commit('superClick');goTo('/tinfo')">管理员</a-button>&emsp;
							<a-button type="primary" v-bind:disabled="$store.getters.getSuperButton"
							@click="hided()">隐藏</a-button>
					</div>
	    		</a-form-item>
	    	</a-form>
	    </div>
	</a-col>
	<a-col :xs="{ span: 6}" :sm="{ span: 1}"></a-col>
</a-row>
</div>
</template>

<script>
export default {
	name:'Login',
	beforeCreate() {
	    this.form = this.$form.createForm(this, { name: 'normal_login' });
	},
	data(){
		return {
			hide:true,
		};
	},
	
	methods: {
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
		          console.log('Received values of form: ', values);
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