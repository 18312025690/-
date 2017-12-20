<template>
	<div id="app">
	    {{hello}}
	    <router-link to="/">Go to home</router-link>
  		<router-link to="/foo">Go to Foo</router-link>
  		<router-link to="/bar">Go to bar</router-link>
  		<div>
  			随机跳转；编程式导航
  			<button @click="goTo">随机跳转</button>
  			<button @click="storeTest">测试store</button>
  			<span>
  				{{storeText}}
  			</span>
  		</div>
	    <router-view></router-view>
	</div>
</template>

<script>
	export default {
	  data:function(){
	  	return {
	  		hello:'欢迎欢迎',
	  		index:0,
	  		arr:['/','bar','foo'],
	  		//storeText:0
	  	}
	  },
	  methods:{
	  	goTo:function(){
	  		var index = this.index%3;
	  		this.index++;
	  		this.$router.push(this.arr[index]);
	  	},
	  	storeTest:function(){
	  		console.log(this.$store);
	  		this.$store.commit('increment');
	  	}
	  },
	  computed:{
	  	storeText:function(){
	  		return this.$store.state.count
	  	}
	  }
	}
</script>

<style>
</style>