<!-- ant库+elementui库 cnpm install element-ui --save -->
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
			<a-layout-header :style="{ background: '#fff', padding: 0,margin:'12px' }">
				<ClassHeader></ClassHeader>
			</a-layout-header>
			<a-layout-content style="background: white;">
				<!-- 当前班级学生的列表，支持删除 -->
				<div style="padding:24px;background: #fff;">
					<a-label style="font-size: 20px;"><a-icon type="team"/>班级：{{$store.getters.Userclass}}</a-label>
				</div>
				<div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
					<!-- 导入学生 -->
					<a-button type="primary" @click="showDrawer" style="margin-right:100px"> <a-icon type="plus" /> 导入学生 </a-button>
					<a-input-search placeholder="按学号搜索" style="width: 200px;margin-left:0px;" @search="onSearch" />
					<a-drawer
						title="导入学生"
						:width="360"
						:visible="visible"
						:body-style="{ paddingBottom: '80px' }"
						@close="onClose"
					>
						<!-- 上传excel进行导入并支持预览 -->
						<div class="analysis-content-body" style="background:#fff">				
							<div class="upload-tool" style="background:#fff">
								<span>
								    <input class="input-file" type="file" @change="exportData"
								           accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
									/>
								    <br/>
									<a @click="downloadExecl">点击此处下载模版</a>
								</span>
								<br/>
								<a-button type="primary" @click="addstu()">确认导入</a-button>
							</div>
							<!--导入结果-->
							<div>
							<a-table bordered :data-source="addstudata" :columns="addstucolumns">
								<a slot="rowcnt" slot-scope="text">{{ text }}</a>
							</a-table>
							</div>
						</div>
					</a-drawer>
					<hr>
					<a-table bordered :data-source="dataSource" :columns="columns">
						<a slot="name" slot-scope="text">{{ text }}</a>
						<template slot="operation" slot-scope="text, record">
							<a-popconfirm
								v-if="dataSource.length"
								title="Sure to delete?"
								@confirm="() => onDelete(record.key)"
							>
								<a href="javascript:;">Delete</a>
							</a-popconfirm>
						</template>
					</a-table>
				</div>
			</a-layout-content>
		</a-layout>
	</a-layout>
</template>

<script>
	//老师-班级信息-班级管理-学生管理
	import NormalNav from "../components/NormalNav.vue"
	import ClassHeader from "../components/ClassHeader.vue"
	//import XLSX from "xlsx" //需要下载 cnpm install xlsx
	import axios from "axios"
	
	export default{
		name:'mngAddstu',
		data(){
			return {
			    headers: {
			       authorization: 'authorization-text',
			    },
				//上传excel
				columnHeader:[],//所有键的值
				excelData:[],// 导入的excel的数据
				checkboxTableColumn:[],// 表格显示列
				tableData:[],//表格数据
				currentPage:1,// 当前分页
				pageSize:10,// 每页显示数量
				total:0,// 数据总数
				visible:false,//Drawer
				outdata:[],
				addData:[],
				file:undefined,
				//当前班级学生
				dataSource: [],
				addstudata:[],
				columns: [
				    {
				      title: '学号',
				      dataIndex: 'uid',
				      width: '30%',
					  key:'uid',
				      scopedSlots: { customRender: 'stuid' },
				    },
				    {
				      title: '姓名',
				      dataIndex: 'user_name',
					  key:'username'
				    },
				    {
				      title: '操作',
				      dataIndex: 'operation',
				      scopedSlots: { customRender: 'operation' },
				    },
				  ],
				  addstucolumns: [
				      {
				        title: '错误行',
				        dataIndex: 'row_cnt',
				        scopedSlots: { customRender: 'rowcnt' },
				      },
				      {
				        title: '学号',
				        dataIndex: 'err_row_uid',
				  	  key:'uid'
				      },
					  {
					    title: '姓名',
					    dataIndex: 'err_row_name',
					  key:'username'
					  },
					  {
					    title: '班级',
					    dataIndex: 'err_row_class',
					  key:'userclass'
					  },
					  {
					    title: '密码',
					    dataIndex: 'err_row_passwd',
					  key:'userpsw'
					  },
				    ],
			}
		},
		mounted(){
			this.getStuList();
		},
		components:{
			NormalNav,
			ClassHeader,
		},
		methods:{
			getStuList(){
				axios
					//.get('http://pingleme.top:3000/api/v1/class/student/list/'+this.$store.getters.Userclass)
					.get('http://47.101.54.43/api/v1/class/student/list/'+this.$store.getters.Userclass)
					.then(res => {
						if(res.data.code=='401'){
							alert("未登录，请登录");
							this.$router.replace('/');
						}
						else{
							if(res.data.code=='0'){
								this.dataSource=res.data.data.data
								console.log(res.data.data)
							}
							else{
								alert('code:'+res.data.code+' msg:'+res.data.msg)
							}
						}
					})
			},
			//响应式布局的两个函数
			onCollapse(collapsed, type) {
			    console.log(collapsed, type);
			 },
			onBreakpoint(broken) {
			    console.log(broken);
			},
			//学生表格删除行的函数
			onDelete(key) {
				const dataSource = [...this.dataSource];
				this.dataSource = dataSource.filter(item => item.key !== key);
			},
			//Drawer打开和关闭的函数
			showDrawer() {
			    this.visible = true;
			},
			onClose() {
			    this.visible = false;
			},
			//上传excel的函数
			btnClick() {
			    document.querySelector(".input-file").click();
			},
			exportData(event) {
			    if(!event.currentTarget.files.length) {
			        return;
			    }
			   // const that = this;
			        // 拿取文件对象
					//this.formData=event.currentTarget.files[0];
			    let f = event.currentTarget.files[0];
				this.file=f;
			        //这里已经拿到了excel的file文件，若是项目需求，可直接$emit丢出文件
			        // that.$emit('getMyExcelData',f);
			        // 用FileReader来读取
/*			    let reader = new FileReader();
			        // 重写FileReader上的readAsBinaryString方法
			        // FileReader.prototype.readAsBinaryString = function(f) {
			        //   let binary = "";
			        //   let wb; // 读取完成的数据
			        //   let outdata; // 你需要的数据
			        //   let reader = new FileReader();
			    reader.onload = function(e) {
			            // 读取成Uint8Array，再转换为Unicode编码（Unicode占两个字节）
			            // let bytes = new Uint8Array(reader.result);
			            // let length = bytes.byteLength;
			            // for (let i = 0; i < length; i++) {
			            //   binary += String.fromCharCode(bytes[i]);
			            // }
			        var data = e.target.result;
			            // 接下来就是xlsx
			        var wb = XLSX.read(data, {
			              type: "buffer"
			        });
			        that.outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
			            // 导出格式为json，{表数据：[]}
			        console.log(that.outdata);
			        that.excelData=that.outdata;
			        that.tableData=that.outdata.slice(0,10);
			        that.total=that.outdata.length;
			            // 获取数据的key
			        var importDataThead = Array.from(Object.keys(that.outdata[0])).map(
			            item => {
			                return item;
			            }
			        );
			 
			        that.columnHeader=importDataThead;
			        that.checkboxTableColumn=importDataThead.slice(0,9);
			            console.log(importDataThead);
			        };
			        reader.readAsArrayBuffer(f);
			        // };
			        // reader.readAsBinaryString(f);
			*/},

			//下载模板
			downloadExecl() {
			    window.open(
					//"http://pingleme.top:3000/api/v1/student/import/template",
			        "http://47.101.54.43/api/v1/student/import/template",
			        "_blank"
			    );
			},
			//批量添加学生
			addstu(){
				//const that = this;
				    // 拿取文件对象
			
				let formData=new FormData();
				formData.append('file',this.file)
				console.log(formData)
				let configs = { 
				    headers:{'Content-Type':'multipart/form-data'}
				};
				this.$axios.post("http:///47.101.54.43/api/v1/user/student/import",formData,configs)
				//this.$axios.post("http://pingleme.top:3000/api/v1/user/student/import",formData,configs)
					.then(res=>{
						if(res.data.code=='0')
						{	
							this.addstudata=res.data.data.error_record
							console.log(this.addstudata)
							alert('已导入')

						}
	
						else
							alert(res.data.msg)
					})
			},
		}
	}
</script>

<style>
</style>
