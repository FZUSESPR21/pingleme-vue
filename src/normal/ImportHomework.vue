<template>
	<a-layout id="components-layout-demo-responsive">
		<a-layout-sider breakpoint="lg" collapsed-width="0" @collapse="onCollapse" @breakpoint="onBreakpoint"
			id="sider1">
			<div class="logo">
				<a-button type="link" style="margin-bottom: 16px; margin-top: 10px;"
					@click="() => (collapsed = !collapsed)">
					&nbsp;PingLeMe
				</a-button>
			</div>
			<NormalNav></NormalNav>
		</a-layout-sider>
	
		<a-layout style="background: white;">
			<a-layout-header :style="{ background: '#fff', padding: 0 ,'text-align':'center'}">
				<div class="info">
					
					<a-icon type="user" />&nbsp;用户：XXX
					<a-divider type="vertical" />
					<a-icon type="team" />&nbsp;团队：XXX团队
				</div>
			</a-layout-header>
			<a-layout-content :style="{ margin: '24px 16px 0' }">
				<div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
					<a-form id="components-form-demo-validate-other" :form="form" v-bind="formItemLayout" @submit="handleSubmit">
					  <a-form-item label="Upload">
					    <a-upload v-decorator="[
					          'upload',
					          {
					            valuePropName: 'fileList',
					            getValueFromEvent: normFile,
					          },
					        ]" name="logo" action="/upload.do" list-type="picture">
					      <a-button>
					        <a-icon type="upload" /> Click to upload
					      </a-button>
					    </a-upload>
					  </a-form-item>
					
					  <a-form-item label="Dragger">
					    <div class="dropbox">
					      <a-upload-dragger v-decorator="[
					            'dragger',
					            {
					              valuePropName: 'fileList',
					              getValueFromEvent: normFile,
					            },
					          ]" name="files" action="/upload.do">
					        <p class="ant-upload-drag-icon">
					          <a-icon type="inbox" />
					        </p>
					        <p class="ant-upload-text">
					          Click or drag file to this area to upload
					        </p>
					        <p class="ant-upload-hint">
					          Support for a single or bulk upload.
					        </p>
					      </a-upload-dragger>
					    </div>
					  </a-form-item>
					
					  <a-form-item :wrapper-col="{ span: 12, offset: 6 }">
					    <a-button type="primary" html-type="submit">
					      提交
					    </a-button>
					  </a-form-item>
					</a-form>
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
	export default {
		name:'ImpHomework',
		components:{
			NormalNav,
		},
	  data: () => ({
	    formItemLayout: {
	      labelCol: {
	        span: 6
	      },
	      wrapperCol: {
	        span: 14
	      },
	    },
	  }),
	  beforeCreate() {
	    this.form = this.$form.createForm(this, {
	      name: 'validate_other'
	    });
	  },
	  methods: {
	    handleSubmit(e) {
	      e.preventDefault();
	      this.form.validateFields((err, values) => {
	        if (!err) {
	          console.log('Received values of form: ', values);
	        }
	      });
	    },
	    normFile(e) {
	      console.log('Upload event:', e);
	      if (Array.isArray(e)) {
	        return e;
	      }
	      return e && e.fileList;
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
	#components-layout-demo-responsive .logo {
		height: 32px;
		background: rgba(255, 255, 255, 0);
		margin: 16px;
	}
	
	#sider1 {
		background-color: white;
	}
	#components-form-demo-validate-other .dropbox {
	  height: 180px;
	  line-height: 1.5;
	}
</style>
