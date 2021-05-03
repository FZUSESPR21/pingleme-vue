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
				<div class="analysis-content-body">
				<div class="upload-tool">
				<a-upload
				  name="file"
				  :multiple="true"
				  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
				  :headers="headers"
				  @change="exportChange"
				>
				  <a-button @click="btnClick()"> <a-icon type="upload" /> 上传excel文件 </a-button>
				</a-upload>
				</div>
				<!-- 下载模板a标签 -->
				<div class="table-area">
				
				</div>
					
				</div>
				
				<div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
					<a-input-search placeholder="按学号搜索" style="width: 200px;margin-left:0px;" @search="onSearch" />
					<hr>
					<a-table :columns="columns" :data-source="data"  :pagination="myPagination">
						<span slot="customTitle"><a-icon type="team" /> 学号</span>
						<span slot="action" slot-scope="text, record">
							<a-popconfirm
							    v-if="dataSource.length"
							    title="Sure to delete?"
							    @confirm="() => onDelete(record.key)"
							>
							    <a href="javascript:;">Delete</a>
							</a-popconfirm>
						</span>
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
	import XLSX from "xlsx"
	const columns = [
	  {
	    dataIndex: 'stuid',
	    key: 'stuid',
	    slots: { title: 'customTitle' },
	    scopedSlots: { customRender: 'stuid' },
	  },
	  {
	    title: '姓名',
	    dataIndex: 'name',
	    key: 'name',
	  },
	  { title: '操作',
		dataIndex: 'action',
		scopedSlots: { customRender: 'action'},
	  },
	];
	
	const data = [
	  {
	    key: '1',
	    stuid:'221801101',
		name:'1111'
	  },
	  {
	    key: '2',
	    stuid:'221801102',
		name:'1112'
	  },
	  {
	    key: '3',
	    stuid:'221801103',
		name:'1113'
	  },
	  {
	    key: '4',
	    stuid:'221801104',
		name:'1114'
	  },
	  {
	    key: '5',
	    stuid:'221801105',
		name:'1115'
	  },
	  {
	    key: '6',
	    stuid:'221801106',
	  		name:'1116'
	  },
	  {
	    key: '7',
	    stuid:'221801107',
	  		name:'1117'
	  },
	  {
	    key: '8',
	    stuid:'221801108',
	  		name:'1118'
	  },
	  {
	    key: '9',
	    stuid:'221801109',
	  		name:'1119'
	  },
	  {
	    key: '10',
	    stuid:'221801110',
	  		name:'1120'
	  },
	  {
	    key: '11',
	    stuid:'221801108',
	  		name:'1118'
	  },
	  {
	    key: '12',
	    stuid:'221801108',
	  		name:'1118'
	  },
	  {
	    key: '13',
	    stuid:'221801108',
	  		name:'1118'
	  },
	  {
	    key: '14',
	    stuid:'221801108',
	  		name:'1118'
	  },
	];
	export default{
		name:'mngAddstu',
		data(){
			return {
			    headers: {
			       authorization: 'authorization-text',
			    },
				data,
				columns,
				myPagination: {
				    defaultPageSize: 10
				}
			}
		},
		components:{
			NormalNav,
			ClassHeader,
		},
		methods:{
			onDelete(key) {
			      const dataSource = [...this.data];
			      this.data = dataSource.filter(item => item.key !== key);
			},
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
			btnClick() {
			    document.querySelector(".input-file").click();
			},
			exportData(event) {
			    if(!event.currentTarget.files.length) {
			        return;
			    }
			    const that = this;
			        // 拿取文件对象
			    let f = event.currentTarget.files[0];
			        //这里已经拿到了excel的file文件，若是项目需求，可直接$emit丢出文件
			        // that.$emit('getMyExcelData',f);
			        // 用FileReader来读取
			    let reader = new FileReader();
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
			        var outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
			            // 导出格式为json，{表数据：[]}
			        console.log(outdata);
			        that.excelData=outdata;
			        that.tableData=outdata.slice(0,10);
			        that.total=outdata.length;
			            // 获取数据的key
			        var importDataThead = Array.from(Object.keys(outdata[0])).map(
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
			},
			       // 分页切换
			CurrentChange(val){
			    this.currentPage=val;
			        
			    this.tableData=this.excelData.slice((val-1)*this.pageSize,(val*this.pageSize)-1);
			},
		},
	}
</script>

<style>
</style>
