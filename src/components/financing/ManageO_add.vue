<template>
	<div>
		<nut-navbar 
			@on-click-back="back" 
			@on-click-title="title" 
			@on-click-more="more" 
			:leftShow="true" 
			:rightShow="false"
		>添加机构</nut-navbar>
		<div class="body">
			<dvi class="tabel-title">
				
				<div class="text_style"></div>
			</dvi>
		</div>
		
	</div>
</template>
<script>
	export default {
		methods: {
			back(){
				alert('header头部， 点击返回')
			},
			title(){
				alert('header头部， 点击title')
			},
			more(){
				alert('header头部， 点击更多')
			}
		}
	};
</script>

<style lang="scss" scoped>
	/deep/.nut-navbar{
		height: 7vh;
	}
	/deep/.nav-title{
		font-size: 18px;
	}
	/deep/.nut-cell-title{
		margin-left: 3vmin;
	}
	.body{
		height: 97vh;
	}
	.tabel-title{
		height: 2vmin;
		width: 100%;
		background:#fff;
	}
	.text_style{
		height: 80%;
		background-image: url("../../assets/image/line1.png");
		background-size: 1%;
		background-repeat: no-repeat;
		display: inline-block;
		vertical-align: middle;
		width: 100%;
		height: 15vmin;
		position: absolute;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
	}
</style>
