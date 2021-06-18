<template>
 <a-layout id="components-layout-demo-responsive-form" style="background:white">
    <a-layout-sider
      breakpoint="sm"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
      id="formsider1"
    >
      <div class="formlogo">
        <a-button
          type="link"
          style="margin-bottom: 16px; margin-top: 10px"
          @click="() => (collapsed = !collapsed)"
        >
          &nbsp;PingLeMe
        </a-button>
      </div>
      <NormalNav></NormalNav>
    </a-layout-sider>

      <a-layout-content :style="{ margin: '70px 16px 0' ,background:'#fff'}">
			<a-form-model
			  ref="dynamicValidateForm"
			  :model="dynamicValidateForm"
			  :rules="rules"
			  v-bind="formItemLayoutWithOutLabel"
			>
			<a-form-model-item
				label="评审表名"
				prop="evfname"
			>
				<a-input
					ref="evfname"
					v-model="dynamicValidateForm.evfname"
					placeholder="输入评审表名"
					style="width: 90%; margin-right: 12px"
				/>
			</a-form-model-item>
			
			<a-form-model-item
				label="作业id"
				prop="hwid"
			>
				<a-input
					ref="hwid"
					v-model="dynamicValidateForm.hwid"
					placeholder="输入作业id"
					style="width: 90%; margin-right: 12px"
				/>
			</a-form-model-item>
			
			<a-form-model-item
				label="团队id"
				prop="teamid"
			>
				<a-input
					ref="teamid"
					v-model="dynamicValidateForm.teamid"
					placeholder="输入团队id"
					style="width: 90%; margin-right: 12px"
				/>
			</a-form-model-item>

			  <a-form-model-item
			    v-for="(domain, index) in dynamicValidateForm.domains"
			    :key="domain.key"
			    v-bind="index === 0 ? formItemLayout : {}"
			    :label="index === 0 ? '评审表项' : ''"
			    :prop="'domains.' + index + '.value'"
			    :rules="{
			      required: true,
			      message: '评审表项不能为空',
			      trigger: 'blur',
			    }"
			  >
			    <a-input
			      v-model="domain.value"
			      placeholder="内容"
			      style="width: 40%; margin-right: 12px"
			    />
				  <a-input
				    v-model="domain.value"
				    placeholder="分值"
				    style="width: 40%;"
				  />
			    <a-icon
			      v-if="dynamicValidateForm.domains.length > 1"
			      class="dynamic-delete-button"
			      type="minus-circle-o"
					style="color:#f17575"
			      :disabled="dynamicValidateForm.domains.length === 1"
			      @click="removeDomain(domain)"
			    />
			  </a-form-model-item>
			  <a-form-model-item  v-bind="formItemLayoutWithOutLabel">
			    <a-button type="dashed" style="width: 60%" @click="addDomain">
			      <a-icon type="plus" /> 添加评审表项
			    </a-button>
			  </a-form-model-item>
			  <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
			    <a-button type="primary" html-type="submit" @click="submitForm('dynamicValidateForm')">
			      提交
			    </a-button>
			  </a-form-model-item>
			</a-form-model>
      </a-layout-content>
  </a-layout>
</template>

<script>
import NormalNav from "../components/NormalNav.vue";
export default {
  name: "CrEvaform",
  components: {
    NormalNav,
  },
  data() {
    return {
		collapsed: false,
		formItemLayout: {
			labelCol: {
				xs: { span: 24 },
				sm: { span: 4 },
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 20 ,offset:4},
			},
		},
		formItemLayoutWithOutLabel: {
			labelCol: {
				xs: { span: 24 },
				sm: { span: 4 },
			},
			wrapperCol: {
				xs: { span: 24, offset: 0 },
				sm: { span: 20,offset:4},
			},
		},
		dynamicValidateForm: {
			evfname:'',
			hwid:'',
			teamid:'',
			domains: [{
				value: '',
				key: Date.now(),
			}],
		},
		rules:{
			evfname:[
				{required:true,message:'请输入评审表名'}
			],
			hwid:[
				{required:true,message:'请输入作业id'}
			],
			teamid:[
				{required:true,message:'请输入团队id'}
			],
		},
    };
  },
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
	
	submitForm(formName) {
	  this.$refs[formName].validate(valid => {
	    if (valid) {
	      console.log(this.$refs.evfname.value+this.$refs.hwid.value+this.$refs.teamid.value);
	    } else {
	      console.log('error submit!!');
	      return false;
	    }
	  });
	},
	removeDomain(item) {
	  let index = this.dynamicValidateForm.domains.indexOf(item);
	  if (index !== -1) {
	    this.dynamicValidateForm.domains.splice(index, 1);
	  }
	},
	addDomain() {
	  this.dynamicValidateForm.domains.push({
	    value: '',
	    key: Date.now(),
	  });
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

#formsider1 {
  background-color: white;
}
</style>
