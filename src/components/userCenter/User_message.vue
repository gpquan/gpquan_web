<template>
	<div class="container">
		<div class="title_box">
			<!-- <nut-navbar 
				@on-click-back="back" 
				@on-click-title="title" 
				@on-click-more="more"
			>消息
			</nut-navbar> -->
			<nut-navbar>NavBar1
				<a slot="left" @click="return_back()"></a>
				<a slot="more-icon">全部已读</a>
			</nut-navbar>
		</div>
		<div class="mes_body">
			<div class="body_left">
				<img src="../../assets/image/icon3.png" alt="" class="mes_btn">			
			</div>
			<div class="body_right">
				<p>平台通知</p>
				<p>【618】</p>
			</div>
			<div class="btn_msg">
				<i class="el-icon-arrow-right"></i>
			</div>
		</div>
		<div class="mes_body">
			<div class="body_left">
				<img src="../../assets/image/icon3.png" alt="" class="mes_btn">			
			</div>
			<div class="body_right">
				<p>平台通知</p>
				<p>【618】</p>
			</div>
			<div class="btn_msg">
				<i class="el-icon-arrow-right"></i>
			</div>
		</div>
		<div class="mes_body">
			<div class="body_left">
				<img src="../../assets/image/icon3.png" alt="" class="mes_btn">			
			</div>
			<div class="body_right">
				<p>平台通知</p>
				<p>【618】</p>
			</div>
			<div class="btn_msg">
				<i class="el-icon-arrow-right"></i>
			</div>
		</div>
		<div class="mes_body">
			<div class="body_left">
				<img src="../../assets/image/icon3.png" alt="" class="mes_btn">			
			</div>
			<div class="body_right">
				<p>平台通知</p>
				<p>【618】</p>
			</div>
			<div class="btn_msg">
				<i class="el-icon-arrow-right"></i>
			</div>
		</div>
		<div class="mes_body">
			<div class="body_left">
				<img src="../../assets/image/icon3.png" alt="" class="mes_btn">			
			</div>
			<div class="body_right">
				<p>平台通知</p>
				<p>【618】</p>
			</div>
			<div class="btn_msg" @click="tel_alert">
				<i class="el-icon-arrow-right"></i>
			</div>
		</div>
	</div>
</template>

<script>
	    export default {
	    data(){
			return{
				description:'阿萨是'
			}
		},
		  mounted() {
			
		  },
		methods: {
			return_back() {
				this.$router.go(-1);
				console.log(111)
			},
			back(){
				alert('header头部， 点击返回')
			},
			title(){
				alert('header头部， 点击title')
			},
			more(){
				alert('header头部， 点击更多')
			},
			tel_alert(){
				this.$dialog({
					title: "消息title",
					closeBtn:true,  //显式右上角关闭按钮
					noCancelBtn:true,
					noOkBtn:true,
					lockBgScroll:true,
					customClass:'red',
					content:"弹窗下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话弹出后，页面下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话下方是我们的电话滚动锁止。在窗体和遮罩层上滑动时，页面不再跟随滚动。",
					lockBgScroll:true,
					onOkBtn(event) {  //确定按钮点击事件
					  // alert("okBtn");
					  // this.close(); //关闭对话框
					  window.location.href = 'tel://' + this.phoneNumber
					},
					onCancelBtn(event) {  //取消按钮点击事件，默认行为关闭对话框
					  alert("cancelBtn");
					  //return false;  //阻止默认“关闭对话框”的行为
					},
					onCloseBtn(event) { //右上角关闭按钮点击事件
					  // alert("closeBtn");
						this.close(); //关闭对话框
					  return false;  //阻止默认“关闭对话框”的行为
					},
					// closeCallback(target) {
					//   alert("will close");  //对话框关闭回调函数，无论通过何种方式关闭都会触发
					// }
				});
			},
		},
	
	}
</script>

<style lang="scss" scoped>
	.title_box{
		height: 13vmin;
	}
	/deep/.nut-navbar{
		line-height: 13vmin;
		height: 100%;
	}
	/deep/.nav-title{
		font-size: 16px;
	}
	/deep/.nav-right{
		font-size: 16px;
	}
	/deep/.el-icon-arrow-right{
		line-height: 10vh;
	}
	/deep/.nut-dialog-body{
		padding: 25px 12px 0px;
		color:#000;
	}
	/deep/.nut-dialog-content{
		color:red;
	}
	/deep/.nut-dialog>.nut-dialog-body>.nut-dialog-content{
		color:#000;
	}
	.mes_body{
		width: 100%;
		background: #fff;
		margin-top: 2vmin;
	}
	.mes_body,.body_left,.body_right,.projectJS{
		height: 10vh;
	}
	.nut-cell-title{
		height: 10vh;
	}
	.body_left{
		width: 15vw;
		display: inline-block;
	}
	.body_right{
		width: 70vw;
		display: inline-block;
		position: absolute;
		right: 15vw;
	}
	.body_right p{
		padding: 1vmin;
		font-size: 16px;
	}
	.btn_msg{
		display: inline-block;
		position: absolute;
		right: 3vw;
		font-size: 25px;
	}
	.mes_btn{
		width: 4vh;
		height: 4vh;
		position: relative;
		top: 50%;
		transform: translateY(-50%);
		margin-left: 2vmin;
	}
	/deep/.nut-dialog{
		color: red;
	}
	/deep/.nut-dialog-box{
		color: red;
	}
	.red{
		color:red;
	}
</style>
