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
			<a-layout-header style="background: #fff;"></a-layout-header>
			<a-layout-content :style="{ margin: '24px 16px 0',minHeight:'360px',padding:'10px', }">
				<a-form-model
					ref="ruleForm"
					:model="form"
					:rules="rules"
					:label-col="modellabelCol"
					:wrapper-col="modelwrapperCol"
				>
					<a-form-model-item
						label="班级名"
						prop="clsname"
					>
					  	<a-input
						ref="cname"
						v-model="form.clsname"
							placeholder="输入班级名"
							/>
					</a-form-model-item>
					<a-form-model-item
						label="老师"
						prop="teacher"
					>
						<a-select 
						v-model="form.teacher"
							placeholder="选择老师" 
							@change="teachhandleChangeSelect"
						>
							<a-select-option v-for="(item,index) in teacherList" :key="index" :value="item.id">
								{{ item.user_name }}
							</a-select-option>
						</a-select>
					</a-form-model-item>
					<a-form-model-item
						label="助教"
						prop="assist"
					>
						<a-select 
						ref="cas"
						v-model="form.assist"
							mode="multiple" 
							placeholder="添加助教" 
							@change="handleChangeSelect"
						>
							<a-select-option v-for="(item,index) in assistantList" :key="index" :value="item.id">
								{{ item.user_name }}
							</a-select-option>
						</a-select>
					</a-form-model-item>
					<a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
					      <a-button type="primary" @click="onSubmit">
					        创建班级
					      </a-button>
					</a-form-model-item>
				</a-form-model>
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

const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};
	export default{
		name:'CrClass',
		data(){
			return {
				assistantList:[],
				teacherList:[],
				modellabelCol: { span: 4 },
				modelwrapperCol: { span: 8 },
				form:{
					clsname:'',
					teacher:undefined,
					assist:[],
				},
				rules:{
					clsname:[
						{required:true,message:'请输入班级名'}
					],
					teacher:[
						{required:true,message:'请选择老师',trigger: 'change'}
					],
					assist:[
						{required:true,message:'至少选择一个助教'}
					],
				},
				formTailLayout,
			}
		},
		components:{
			NormalNav,
		},
		mounted(){
		/*	this.$axios.post('http://pingleme.top:3000/debug/user/add',
				this.$qs.stringify({
					'uid':"ass18010",
					'name':'assis10',
					'password':'789qwerty',
					'role':2
				})
			);*/
			this.getAssList();
			this.getTeachList();
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
			teachhandleChangeSelect(value) {
				console.log(`selected ${value}`);
			},
			getAssList(){
				this.$axios
					.get('http://47.101.54.43/api/v1/class/assistant/list/all')
					.then(res=>{
						if(res.data.code==0){
							console.log(res.data.data)
							let arr=res.data.data
							for(let item in arr)
							{
								if (arr[item].class_id==0 && arr[item].class_name==''){
									let i={"id":arr[item].id,"user_name":arr[item].user_name}
									this.assistantList.push(i)
								}
							}
						}
						else{
							if(res.data.code=='401'){
								alert("未登录，请登录");
								this.$router.replace('/');
							}
							else{
								alert('code:'+res.data.code+' msg:'+res.data.msg)
							}
						}
					})
			},
			getTeachList(){
				this.$axios
					.get('http://47.101.54.43/api/v1/class/teacher/list/all')
					.then(res=>{
						if(res.data.code==0){
							console.log('tecah:'+res.data.data)
							let arr=res.data.data
							for(let item in arr)
							{
									let i={"id":arr[item].id,"user_name":arr[item].user_name}
									this.teacherList.push(i)
							}
						}
						else{
							console('code:'+res.data.code+' msg:'+res.data.msg)
						}
					})
			},
			onSubmit() {
				this.$refs.ruleForm.validate(valid => {
				    if (valid) {
						let cn=this.$refs.cname.value
						//console.log(cn)
						
						console.log(this.form.teacher)//不能注释
						let teaid=this.form.teacher
						
						console.log(this.form.assist)//不能注释
						let str=this.form.assist
						//console.log(cn+' '+teaid+' '+str)
						this.createca(cn,teaid,str)
				    } else {
				        console.log('error submit!!');
				        return false;
				    }
				});
			},
			createca(cn,teaid,sal){
				let json=[];
				for(let i=0;i<sal.length;i++){
					let j={}
					j.assistant_id=sal[i]
					json.push(j)
				}
				/*
				console.log(0)
				console.log(json)
				let ass=JSON.stringify(json)
				let asslist=ass.replace(new RegExp('\\"',"gm"), '"' );
				console.log(1)
				console.log(json)
				console.log(2)
				console.log(ass)
				console.log(3)
				console.log(asslist)
				console.log(4)
			*/
				let data=[];
				let dataj={};
				dataj.assistant_list=json
				dataj.teacher_id=teaid;
				dataj.class_name=cn;
				data.push(dataj)
				console.log(data)
				console.log(dataj)
				console.log(0)

				this.$axios
					.post('http://47.101.54.43/api/v1/class/create',dataj
					/*	this.$qs.stringify({
							'class_name':cn,
							'teacher_id':teaid,
							'assistant_list':ass.replace(new RegExp('\\"',"gm"), '"' ),
						})*/
					)
					.then(res=>{
						if(res.data.code==0){
							alert("创建成功");
						}
						else{
							alert("创建失败");
						}
					})
				
			}
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
