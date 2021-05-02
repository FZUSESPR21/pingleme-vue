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
			<a-layout-header :style="{ background: '#fff', padding: 0,margin:'12px' }">
			<ClassHeader></ClassHeader>
			</a-layout-header>
			<a-layout-content style="background: white;text-align:center">
				<a-upload
				  name="file"
				  :multiple="true"
				  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
				  :headers="headers"
				  @change="handleChange"
				>
				  <a-button> <a-icon type="upload" /> 上传excel文件 </a-button>
				</a-upload>

				<!-- 下载模板a标签 -->

			</a-layout-content>
		</a-layout>
	</a-layout>
</template>

<script>
	//老师-班级信息-班级管理-导入学生
	import NormalNav from "../components/NormalNav.vue"
	import ClassHeader from "../components/ClassHeader.vue"
	
	export default{
		name:'mngAddstu',
		data(){
			return {
			    headers: {
			       authorization: 'authorization-text',
			    },
			}
		},
		components:{
			NormalNav,
			ClassHeader,
		},
		methods:{
			handleChange(info) {
			    if (info.file.status !== 'uploading') {
			        console.log(info.file, info.fileList);
			    }
			    if (info.file.status === 'done') {
			        this.$message.success(`${info.file.name} file uploaded successfully`);
			    } else if (info.file.status === 'error') {
			        this.$message.error(`${info.file.name} file upload failed.`);
			    }
			},
			onCollapse(collapsed, type) {
			    console.log(collapsed, type);
			 },
			onBreakpoint(broken) {
			    console.log(broken);
			},
		},
	}
</script>

<style>
</style>
