<template>
	<div id="main" style="width: 600px;height: 400px;"></div>
</template>

<script>
	export default{
		name:'PersonSL',
		data(){
		    return{
		    }
		},
		methods: {
		    drawLine(){
				let myChart1 = this.$echarts.init(document.getElementById('main'));
			
			myChart1.setOption({
		           color:['#4ED8DA'],
		           title : {
		                text: '每月检修统计',
		                x:15,
		                y:15,
		                textStyle:{
		                  fontSize: 16,
		                  fontWeight: 'bolder',
		                  color: '#333'
		                }
		            },
		            tooltip : {
		                trigger: 'axis'
		            },
		           grid:{
		              borderWidth:0,
		              x:'10%',
		              y:'20%',
		              x2:'5%',
		              y2:'15%',
		            },
		            calculable : true,
		            xAxis : [
		                {
		                 type : 'category',
		                 axisLine:{
		                      show:false,
		                  },
		                  splitLine:{
		                      show:false,  //不显示分割线
		                  },
		                  data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
		                }
		            ],
		            yAxis : [
		                {
		                  type : 'value',
		              axisLine:{
		                      show:false,
		                  }
		                }
		            ],
		            series : [
		                {
		                    name:'数量',
		                    type:'bar',
		                    data:[2, 4, 7, 23, 25, 76, 135, 162, 32, 20, 6, 3],
		                }
		            ]
		        });
			}
		},
		mounted(){
		    this.drawLine();
		}
	}
</script>