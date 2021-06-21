<template>
	<p>
		{{msg}}{{cookie}}
		<br/>
		你好，uid:{{$store.getters.Userid}} 用户：{{$store.getters.UserName}}
		<br/>
		队伍：{{$store.getters.Userteam}}  班级:{{$store.getters.Userclass}}
	</p>

</template>

<script>
	
	export default{
		name:'test',
		data(){
			return {
				msg:'1',
				cookie:'',
			};
		},
		mounted(){
			this.$axios.post('http://pingleme.top:3000/debug/auth/ping')
			.then(res=>{
				console.log('then:'+res.data);
				this.msg=res.data;
			    //this.userRole=res.data.data.role;this.userName=res.data.data.name;
			})
			.catch(res=>{
				console.log(res.data);
			})
		},
	}
</script>

<style>
</style>
