<template>
    <div class="container">
		<div class="title_box">
			<nut-navbar 
				@on-click-back="back" 
				@on-click-title="title" 
				@on-click-more="more"
			>设置
			</nut-navbar>
		</div>
		<div class="clear set_body" @click="alert_bloack">
			<nut-cell title="清除缓存" :showIcon="true" class="projectJS"></nut-cell>
		</div>
		<div class="edition set_body">
			<!-- <nut-cell title="版本检测" :showIcon="false" class="projectJS"></nut-cell> -->
			<span class="test">版本检测 <span class="left_test">v 1.4</span></span>
		</div>
		<div class="contact_as set_body" @click="tel_alert">
			<nut-cell title="联系客服" :showIcon="true" class="projectJS"></nut-cell>
		</div>
		<div class="about_as set_body" @click="rou_change">
			<nut-cell title="关于我们" :showIcon="true" class="projectJS"></nut-cell>
		</div>
		
		<div class="recommend_Btn">
		  <nut-button block shape="circle" @click="clear_msg">安全退出</nut-button>
		</div>
    </div>
</template>

<script>
    export default {
        data(){
			return{
				phoneNumber:'1231345645645',
			}
		},
		  mounted() {
			
		  },
		methods: {
			//清空缓存
			clear_msg(){
				sessionStorage.removeItem('userInfo');
				this.$router.go(-1)
				console.log("clear");
			},
			rou_change(){
				this.$router.push({ name: "UserSet_about_as"});
			},
			alert_bloack(){
				this.$dialog({
					title: "清空缓存",
					content: "是否要清空缓存",
					closeBtn:true,  //显式右上角关闭按钮
					onOkBtn(event) {  //确定按钮点击事件
					  // alert("okBtn");
					  this.close(); //关闭对话框
					},
					onCancelBtn(event) {  //取消按钮点击事件，默认行为关闭对话框
					  // alert("cancelBtn");
					  //return false;  //阻止默认“关闭对话框”的行为
					},
					onCloseBtn(event) { //右上角关闭按钮点击事件
					  // alert("closeBtn");
					  //return false;  //阻止默认“关闭对话框”的行为
					},
					closeCallback(target) {
					  // alert("will close");  //对话框关闭回调函数，无论通过何种方式关闭都会触发
					},
					onOkBtn(){
							sessionStorage.removeItem('userInfo');
							  this.close();
							  this.$router.go(-1)
						// sessionStorage.removeItem('userInfo');
						// this.close(); //关闭对话框

					}
			});
			},
			tel_alert(){
				this.$dialog({
					title: "下方是我们的电话",
					content: this.phoneNumber,
					closeBtn:true,  //显式右上角关闭按钮
					noCancelBtn:true,
					okBtnTxt:"拨打电话",
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
			back(){
				this.$router.go(-1);
			},
			title(){
				alert('header头部， 点击title')
			},
			more(){
				alert('header头部， 点击更多')
			}
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
	/deep/.nut-cell-left>.nut-cell-title{
		font-size: 16px;
		line-height: 8vh;
	}
	.test{
		padding-left: 3vmin;
	}
	.clear{
		margin-top: 3vmin;
	}
	.set_body{
		height: 8vh;
		background: #fff;
		// border-bottom: 1px solid #efefef;
		line-height: 8vh;
		padding-left: 3vmin;
		font-size: 16px
	}
	.container{
		background: #efefef;
	}
	.recommend_Btn {
	  margin-top: 20px;
	  text-align: center;
	  padding-bottom: 30px;
	}
	.left_test{
		padding-left: 61vw;
		color: red;
	}
	.recommend_Btn button {
	  width: 90%;
	  background: rgb(29, 198, 197);
	}
	.projectJS {
		height: 8vh;
	}
</style>