import Mock from 'mockjs'

Mock.mock('/api/v1/user/login', 'post', function(option) {
  // 请求传过来的参数在body中,传回的是json字符串,需要转义一下
	console.log(option);
	let bodystr=option.body;
	let jsonarr=eval('('+bodystr+')');
	let id = jsonarr.id;
	let psw=jsonarr.psw;
	if(id=='221801101'&&psw=='221801101'){
		return Mock.mock(
		  {
		    "code": 0,
		    "data": {
		      "uid": "2218012xx",
		      "name": "I'm学生",
		      "role": '1',
		    }
		  }
		)
	}
	else if(id=='1801'&&psw=='1801'){
		return Mock.mock(
		  {
		    "code": 0,
		    "data": {
		      "uid": "2218012xx",
		      "name": "I'm老师",
		      "role": '2',
		    }
		  }
		)
	}
	else if(id=='221800001'&&psw=='221800001'){
		return Mock.mock(
		  {
		    "code": 0,
		    "data": {
		      "uid": "2218012xx",
		      "name": "I'm组长",
		      "role": '3' ,
		    }
		  }
		)
	}
	else if(id=='001800001'&&psw=='001800001'){
		return Mock.mock(
		  {
		    "code": 0,
		    "data": {
		      "uid": "2218012xx",
		      "name": "I'm助教",
		      "role": '4',
		    }
		  }
		)
	}

});
Mock.mock('/api/v1/user/student/add','post',{
	    "code": 0,
	    "data": {
	    },
	    "msg": "Success"
});

Mock.mock('api/v1/class/list?{page=}','get',{
	    "code": 0,
	    "data": {
	      "total_page":1,
	      "current_page":1,
	      "class":[
	          {
	            "id":"1",
	            "name":"12313",
	            "assistant":[
					{
						"id":1,
						"name":"123",
					},
					{
						"id":2,
						"name":"124",
					}
				],
	            "is_pairing":true,
	            "is_grouping":false,
	        },
			{
			    "id":"2",
			    "name":"12313",
	            "assistant":[
					{
						"id":1,
						"name":"123",
					},
					{
						"id":2,
						"name":"124",
					}
				],
			    "is_pairing":true,
			    "is_grouping":false,
			},
			{
			    "id":"3",
			    "name":"12313",
	            "assistant":[
					{
						"id":1,
						"name":"123",
					},
					{
						"id":2,
						"name":"124",
					}
				],
			    "is_pairing":true,
			    "is_grouping":false,
			},
			{
			    "id":"4",
			    "name":"12313",
	            "assistant":[
					{
						"id":1,
						"name":"123",
					},
					{
						"id":2,
						"name":"124",
					}
				],
			    "is_pairing":true,
			    "is_grouping":false,
			},
			{
			    "id":"5",
			    "name":"12313",
	            "assistant":[
					{
						"id":1,
						"name":"123",
					},
					{
						"id":2,
						"name":"124",
					}
				],
			    "is_pairing":true,
			    "is_grouping":false,
			},
			{
			    "id":"6",
			    "name":"12313",
	            "assistant":[
					{
						"id":1,
						"name":"123",
					},
					{
						"id":2,
						"name":"2",
					},
					{
						"id":3,
						"name":"3",
					},
					{
						"id":4,
						"name":"4",
					},
					{
						"id":5,
						"name":"5",
					},
					{
						"id":6,
						"name":"6",
					}
				],
			    "is_pairing":true,
			    "is_grouping":false,
			},
			{
			    "id":"7",
			    "name":"12313",
	            "assistant":[
					{
						"id":1,
						"name":"123",
					},
					{
						"id":2,
						"name":"124",
					}
				],
			    "is_pairing":true,
			    "is_grouping":false,
			},
			{
			    "id":"8",
			    "name":"12313",
	            "assistant":[
					{
						"id":1,
						"name":"123",
					},
					{
						"id":2,
						"name":"124",
					}
				],
			    "is_pairing":true,
			    "is_grouping":false,
			},
			{
			    "id":"9",
			    "name":"12313",
	            "assistant":[
					{
						"id":1,
						"name":"123",
					},
					{
						"id":2,
						"name":"124",
					}
				],
			    "is_pairing":true,
			    "is_grouping":false,
			},
			{
			    "id":"10",
			    "name":"12313",
	            "assistant":[
					{
						"id":1,
						"name":"123",
					},
					{
						"id":2,
						"name":"124",
					}
				],
			    "is_pairing":true,
			    "is_grouping":false,
			},
			{
			    "id":"11",
			    "name":"12313",
	            "assistant":[
					{
						"id":1,
						"name":"123",
					},
					{
						"id":2,
						"name":"124",
					}
				],
			    "is_pairing":true,
			    "is_grouping":false,
			}
	      ]
	    }
});
Mock.mock('api/class/student/list/:class_id','get',{
	"code": 0,
	    "data": {
	        "stu_list":[
	                {
	                      "stu_name":"学生姓名1",
	                      "stu_id":"221801101"
	                },
					{
					      "stu_name":"学生姓名2",
					      "stu_id":"221801102"
					},
					{
					      "stu_name":"学生姓名3",
					      "stu_id":"221801103"
					},
					{
					      "stu_name":"学生姓名4",
					      "stu_id":"221801104"
					},
	        ]
	    },
	"msg": "Success"
});
Mock.mock('/api/v1/class/homework/list/:class_id','get',{
	"code": 0,
	    "data": {
	        "homework_list":[
	                {
	                      "type":1,
	                      "title":"作业标题1",
	              },
				  {
				          "type":2,
				          "title":"作业标题2",
				  },
				  {
				          "type":3,
				          "title":"作业标题3",
				  },
				  {
				          "type":1,
				          "title":"作业标题4",
				  },
				  {
				          "type":1,
				          "title":"作业标题5",
				  },
	        ]
	    },
	"msg": "Success"
});