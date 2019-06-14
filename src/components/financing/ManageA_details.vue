<template>
	<div class="container">  <!--外层盒子-->
		<div class="head_card">
			<div>
				<span class="head_card_title">项目名片</span>
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
		<div class="body_step" id="body_step">
			<div class="opcity-bg">
				<div class="step-item-box">
					<div class="step-item-left step-circle-done">
						<div class="step-circle"><span class="step-circle-inner"></span></div>
					</div>
					<div class="step-item-right">
						<div class="step-right-title">
							<span>财务顾问协议</span>
							<span>2019.01.02</span>
						</div>
						<div class="step-right-cont">
							<p @click="showPop(1)"><span class="cont-circle"></span>我是备注备注</p>
						</div>
					</div>
				</div>
			
				<div class="step-item-box">
					<div class="step-item-left step-circle-doing">
						<div class="step-circle"><span class="step-circle-inner"></span></div>
					</div>
					<div class="step-item-right">
						<div class="step-right-title">
							<span>财务顾问协议</span>
							<span>2019.01.02</span>
						</div>
						<div class="step-right-cont">
							<p><span class="cont-circle"></span>我是备注备注</p>
						</div>
					</div>
				</div>
				<div class="step-item-box">
					<div class="step-item-left step-circle-undo">
						<div class="step-circle"><span class="step-circle-inner"></span></div>
					</div>
					<div class="step-item-right">
						<div class="step-right-title">
							<span>财务顾问协议</span>
							<span>2019.01.02</span>
						</div>
						<div class="step-right-cont">
							<!--<p><span class="cont-circle"></span>我是备注备注</p>-->
						</div>
					</div>
				</div>
				<div class="step-item-box">
					<div class="step-item-left step-circle-undo">
						<div class="step-circle"><span class="step-circle-inner"></span></div>
					</div>
					<div class="step-item-right">
						<div class="step-right-title">
							<span>财务顾问协议</span>
							<span>2019.01.02</span>
						</div>
						<div class="step-right-cont">
							<!--<p><span class="cont-circle"></span>我是备注备注</p>-->
						</div>
					</div>
				</div>
				<div class="step-item-box">
					<div class="step-item-left step-circle-undo">
						<div class="step-circle"><span class="step-circle-inner"></span></div>
					</div>
					<div class="step-item-right">
						<div class="step-right-title">
							<span>财务顾问协议</span>
							<span>2019.01.02</span>
						</div>
						<div class="step-right-cont">
							<!--<p><span class="cont-circle"></span>我是备注备注</p>-->
						</div>
					</div>
				</div>
			
				
			</div>
		</div>
		
		<div class="bot-alert-box">
			<div class="pop-mask"></div>
			<div class="pop-body">
				<div class="alert-title">
					<i class="el-icon-close close-icon" @click="showPop(2)"></i>
					<span class="alert-head">编辑</span>
				</div>
				<div class="alert-body">
					 <el-input
					    type="textarea"
						:rows="2"
						placeholder="请输入内容"
						:autosize="{ minRows: 7, maxRows:8}"
						v-model="textarea">
					</el-input>
				</div>
				<div class="alert-foot">
					<div class="alert-foot-del">
						<span>删除此节点</span>
					</div>
					<div class="alert-foot-save">
						<span>删除此节点</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
        textarea:'',
  };
  },
  methods: {
    showPop:function(type){
    	if(type == 1){
    		$(".bot-alert-box").fadeIn(10)
    		setTimeout(function(){
    			$(".pop-body").slideDown(200)
    		},10)
    	}else{
    		$(".pop-body").slideUp(200)
    		setTimeout(function(){
    			$(".bot-alert-box").fadeOut(10)
    		},200)
    	}
    }
  },
  }
</script>

<style lang="scss" scoped>
	/deep/.el-textarea{
		min-height: 25vh
	}
	/deep/.el-textarea__inner{
		min-height: 25vh;
		width: 90%;
		margin: 0 auto;
		font-size: 16px;
	}
	/deep/.close-icon{
		position: absolute;
		left: 1%;
		top:4%;
	}
	.container{
		width: 100%;
		height: 100%;
		margin: 0 auto;
		overflow: hidden;
	}
	.step-item-box {
		width: 94%;
		margin: 0 auto;
		display: flex;
		display: -webkit-flex;
		margin-bottom: 1vmin;
	}
	
	.step-item-box .step-item-left {
		width: 10%;
		position: relative;
		min-height: 18vmin;
	}
	
	.step-item-box .step-circle-undo.step-item-left:after {
		border: none;
	}
	
	.step-item-box .step-item-left:after {
		content: ' ';
		border-left: 1px solid #ddd;
		display: block;
		width: 1px;
		position: absolute;
		left: 3.6vmin;
		top: 5vmin;
		bottom: 0;
	}
	
	.step-item-box .step-item-right {
		width: 90%;
	}
	
	.step-circle {
		width: 3vmin;
		height: 3vmin;
		background-color: pink;
		position: relative;
		margin: 0 2vw;
		text-align: center;
		border-radius: 50%;
		margin-top: 1.5vmin;
	}
	
	.step-circle-undo .step-circle {
		width: 2vmin;
		height: 2vmin;
		margin-left: 2.8vmin;
		background: #ddd;
	}
	
	.step-circle-doing .step-circle {
		background: #00aca0;
	}
	
	.step-circle-done .step-circle {
		background: #ddd;
	}
	
	.step-circle-done .step-circle .step-circle-inner {
		background: #00ACA0;
	}
	
	.step-circle .step-circle-inner {
		width: 1vmin;
		height: 1vmin;
		background-color: white;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 50%;
	}
	
	.step-right-title span:first-child {
		font-size: 14px;
		color: #333;
	}
	
	.step-right-title span:nth-child(2) {
		font-size: 12px;
		color: #999;
		margin-left: 1vmin;
	}
	
	.step-right-cont p {
		font-size: 12px;
		color: #999;
	}
	
	.step-right-cont p span.cont-circle {
		display: inline-block;
		width: 1vmin;
		height: 1vmin;
		border-radius: 50%;
		background: pink;
		margin-right: 1vmin;
		vertical-align: middle;
	}
	
	
	.bot-alert-box {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: none;
		z-index: 999
	}
	.pop-mask{
		position: absolute;
		width: 100%;
		height: 100%;
		background: black;
		opacity: .5;
	}
	.pop-body{
		height: 40vh;
		background: white;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		
		display: none;
	}
	.close-icon{
		width: 5vmin;
	    height: 5vmin;
	    position:absolute;
	    left: 6vmin;
	}
	.alert-title{
		text-align: center;
		line-height: 15vmin;
		font-size: 23px;
	}
	.alert-body{
		text-align: center;
		position: absolute;
		bottom: 6vh;
		width: 100%
	}
	.alert-body-inp{
	    width: 80%;
		height: 100%;
		margin-top: 5%;
	}
	.alert-foot-del{
		width: 50%;
		background: #666;
		height: 5vh;
		display: inline-block;
		position: absolute;
	    bottom: 0;
	}
	.alert-foot-save{
		width: 50%;
		background: #999;
		height: 5vh;
		display: inline-block;
		position: absolute;
	    bottom: 0;
	    right: 0;
	}
	.alert-foot-del,.alert-foot-save{
		text-align: center;
		vertical-align: middle;
		line-height: 5vh;
	}
	.alert-foot{
		display: flex;
		display: -webkit-flex;
	}
	#btn{
		background: rgba(0,0,0,0) !important;
		position: relative;
		left: 54vw;
		height: 25px;
		top: 3vh;
	}
	.body_step{
		position: absolute;
		height: 100vh;
		width: 100vw;
		overflow: scroll;
	}
	.block{
		margin-left: 9vw;
		margin-top: 7vh;
	}
	.head_card_icon{
		background-image:url(../../assets/image/ManageA_details_cardicon.png) ;
		background-size: 100% 100%;
		height: 10vh;
		width: 10vh;
		position: relative;
		left: 5vw;
		top: 5vh;
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