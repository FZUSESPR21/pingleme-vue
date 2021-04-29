<template>

<div>
    <a-collapse v-model="activeKey">

      <a-collapse-panel key="1" header="团队第二次作业github编程实战" >
          <a-table :columns="columns" :data-source="data" :scroll={x:1500} bordered :pagination="false">

           </a-table>
      </a-collapse-panel>
      <a-collapse-panel key="2" header="结对一" >

      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>

const columns = [
  {
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
  },
  {
    title: '模块2',
    dataIndex: 'work2',
  },
  {
    title: '模块...',
    dataIndex: 'workn',
  },
  {
    title: '模块1',
    dataIndex: 'work1',
  },
  {
    title: '模块2',
    dataIndex: 'work2',
  },
  {
    title: '模块...',
    dataIndex: 'workn',
  }, {
    title: '模块1',
    dataIndex: 'work1',
  },
  {
    title: '模块2',
    dataIndex: 'work2',
  },
  {
    title: '模块...',
    dataIndex: 'workn',
  },
  {
    title: '小组分数',
    dataIndex: 'teamgrade',
  },
  {
    title: '个人贡献',
    dataIndex: 'self',
  },
  {
    title: '个人分数',
    dataIndex: 'grade',
  },
  {
    title: '本次作业占比',
    dataIndex: 'percent',
  },
];

const data = [
  {
    key: '1',
    no:'9',
    name:'评了么',
    work1:'XX',
    work2:'XX',
    workn:'XX',
    teamgrade:'XX',
    self:'XX',
    grade:'XX',
    percent:'XX'

  },

];
export default {
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
