<template>
	<div class="container">
		<img src="../../assets/image/311816f1fb25373c312de9e28e72112.png" alt="" class="bg">
		<div class="return_back" @click="return_back">
			
		</div>
	</div>
</template>

<script>
	export default {
	  data(){
	    return{
	      isfooter:true
	    }
	  },
	  methods: {
	  	return_back() {
	  		this.$router.go(-1);
	  	}
	  },
	};
</script>

<style>
	.container{
		width: 100%;
		height: 100%;
	}
	.bg{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.return_back{
		position: absolute;
		top:2vmin;
		left: 2vmin;
		width: 20vmin;
		height: 20vmin;
	}
</style>
