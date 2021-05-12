const Mock = require('mockjs');
const Random = Mock.Random;
/* 个人信息 */
Mock.mock('http://xx.com/api/v1/user/{id}', 'get', {
	"code": 0,
	"data": {
		"uid": "221801XXX",
		"nickname": "@cname",
		"pair": "1231",
		"team": "team"
	},
	"msg": "Success"
})
/* 团队成员信息 */
Mock.mock('http://xx.com/api/v1/team/member', 'get', {
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
		"uid": "221801XXX",
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

