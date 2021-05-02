<template>

  <div>

    <a-collapse v-model="activeKey">

      <a-collapse-panel key="1" header="团队第二次作业github编程实战">
        	<a-button type="primary" style="margin-bottom: 10px;">
            提交
          </a-button>

        <a-table :columns="columns" :data-source="data" :scroll={x:1500} bordered :pagination="false">
          <span v-for="i in columns" :key="i.dataIndex" :slot="i.dataIndex" slot-scope="text" contentEditable=true>
            {{text}}
          </span>
        </a-table>
      </a-collapse-panel>
    </a-collapse>
    <!-- <a-collapse-panel key="2" header="作业预览" > -->
    <div>
      <iframe :src="url" id="mobsf" frameborder="1" width="100%" height="500px" scrolling="auto">
      </iframe>
    </div>

    <!-- </a-collapse-panel> -->
    <!-- </a-collapse> -->
  </div>


</template>

<script>
  const columns = [{
      title: '组号',
      dataIndex: 'no',

    },
    {
      title: '组名',
      dataIndex: 'name',

    },
    {
      title: '模块1',
      dataIndex: 'work1',
      scopedSlots: {
        customRender: 'work1'
      },
    },
    {
      title: '模块2',
      dataIndex: 'work2',
      scopedSlots: {
        customRender: 'work2'
      },
    },
    {
      title: '模块...',
      dataIndex: 'workn',
      scopedSlots: {
        customRender: 'workn'
      },
    },
    {
      title: '模块1',
      dataIndex: 'work1',
      scopedSlots: {
        customRender: 'work1'
      },
    },
    {
      title: '模块2',
      dataIndex: 'work2',
      scopedSlots: {
        customRender: 'work2'
      },
    },
    {
      title: '模块...',
      dataIndex: 'workn',
      scopedSlots: {
        customRender: 'workn'
      },
    }, {
      title: '模块1',
      dataIndex: 'work1',
      scopedSlots: {
        customRender: 'work'
      },
    },
    {
      title: '模块2',
      dataIndex: 'work2',
      scopedSlots: {
        customRender: 'work2'
      },
    },
    {
      title: '模块...',
      dataIndex: 'workn',
      scopedSlots: {
        customRender: 'workn'
      },
    }, {
      title: '模块1',
      dataIndex: 'work1',
      scopedSlots: {
        customRender: 'work1'
      },
    },
    {
      title: '模块2',
      dataIndex: 'work2',
      scopedSlots: {
        customRender: 'work2'
      },
    },
    {
      title: '模块...',
      dataIndex: 'workn',
      scopedSlots: {
        customRender: 'workn'
      },
    },
  ];

  const data = [{
      key: '1',
      no: '9',
      name: '评了么',
      work1: '0',
      work2: '0',
      workn: '0',
      teamgrade: '0',

    },

  ];
  export default {
    data() {
      return {
        data,
        columns,
        activeKey: ['1'],
        url: "https://edu.cnblogs.com/campus/fzu/FZUSESPR21/homework/11974"
      }
    },
    watch: {
      activeKey(key) {
        console.log(key);
      },
    },
    // mounted() {
    //   /**
    //    * iframe-宽高自适应显示
    //    */
    //   function changeMobsfIframe() {
    //     const mobsf = document.getElementById('mobsf');
    //     const deviceWidth = document.body.clientWidth;
    //     const deviceHeight = document.body.clientHeight;
    //     mobsf.style.width = (Number(deviceWidth) - 240) + 'px'; //数字是页面布局宽度差值
    //     mobsf.style.height = (Number(deviceHeight) - 64) + 'px'; //数字是页面布局高度差
    //   }

    //   changeMobsfIframe()

    //   window.onresize = function() {
    //     changeMobsfIframe()
    //   }
    // }
  }
</script>

<style>

</style>
