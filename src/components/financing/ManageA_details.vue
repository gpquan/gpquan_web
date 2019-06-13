<template>
	<div>  <!--外层盒子-->
		<div class="head_card">
			<div>
				<p class="head_card_title">项目名片</p>
				<nut-button 
				  type="light" 
				  shape="circle" 
				  small
				  id="btn"
				>
				  皓月灰
				</nut-button>
			</div>
			<div class="head_card_icon">
				
			</div>
		</div>
		<div class="body_step">
			<div class="step_cicle1">
				<div class="step_cicle2">
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      
      
    };
  },
  mounted() {
    
  },
  methods: {
    
  }
};
</script>

<style>
	#btn{
		background: rgba(0,0,0,0) !important;
		position: relative;
		left: 75vw;
		height: 25px;
	}
	.head_card_icon{
		background-image:url(../../assets/image/ManageA_details_cardicon.png) ;
		background-size: 100% 100%;
		height: 10vh;
		width: 10vh;
		position: relative;
		left: 5vw;
		top: 3vh;
		display: inline-block;
		
	}
	.head_card{
		background-image: url(../../assets/image/ManageA_details_cardbg.png);
		background-size: 100% 100%;
		width: 98vw;
		margin: 0 auto;
		height: 30vh;
	}
	.head_card_title{
		position: relative;
		left: 5vw;
		top: 3vh;
		font-size: 16px;
		color: #fff;
	}
	.step_cicle1{
		width:2vh;
		height: 2vh;
		background-color: pink;
		position: relative;
		margin: 0 2vw;
		text-align: center;
		border-radius: 50%;
	}
	.step_cicle2{
		width:0.6vh;
		height: 0.6vh;
		background-color: black;
		position: absolute;
		top:50%;
		left: 50%;
		transform: translate(-50%,-50%);
		border-radius: 50%;
	}
</style>