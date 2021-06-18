const Mock = require('mockjs');
const Random = Mock.Random;
/* 个人信息 */
Mock.mock('http://192.168.50.192:3000/api/v1/user/:id', 'get', {
	"code": 0,
	"data": {
		"student_id": 13,
		"student_uid": "221801101",
		"student_name": "黄志军",
		"pair_uid": "221801102",
		"pair_name": "林苍凉",
		"team_id": 0
	},
	"msg": "Success"
})
/* 团队成员信息 */
Mock.mock('http://192.168.50.192:3000/api/v1/team/member', 'get', {
	"code": 0,
	"data": [{
		"key": 0,
		"name": "@cname",
		"id": "221801XXX"
	}, ],
	"msg": "Success"
})
/* 助教个人信息 */
Mock.mock('http://xx.com/api/v1/user/me', 'get', {
	"code": 0,
	"data": {
		"uid": "1801",
		"nickname": "@cname",
	},
	"msg": "Success"
})
/* 助教批改作业时的作业列表 */
Mock.mock('http://xx.com/api/v1/homework', 'get', {
	"code": 0,
	"list|8": [{
		"title": "作业XXX",
		"end_time": Random.now('yyyy-MM-dd HH:mm:ss'),
	}, ]
})
Mock.mock('http://xx.com/api/v1/homework/student', 'get', {
	"code": 0,
	"list|8": [{
		"name": "@cname",
		"id": "221801XXX",
	}, ]
})
