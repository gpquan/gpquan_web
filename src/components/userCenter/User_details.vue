<template>
	<div class="container">
		<div class="topBox">
			<nut-navbar @on-click-back="back" :leftShow="true" :rightShow="true" style="background:rgba(255,255,255,0);color:#fff;">用户名：麻花花</nut-navbar>
			<img src="../../assets/image/organ_top.png" alt class="btm_BG">
			<div class="box_BTM">
				<div class="Box_1" style="display:flex;flex-direction: column;">
					<span>21</span>
					<span style="color:#666">累计融资（万）</span>
				</div>
				<div class="Box_1 headIMG">
					<img src="../../assets/image/right-title-portrait.png" alt>
				</div>
				<div class="Box_1" style="display:flex;flex-direction: column;">
					<span>21</span>
					<span style="color:#666">签约项目（万）</span>
				</div>
			</div>
		</div>
		<div class="user_msg">
			<div class="title1-box">
				<img src="../../assets/image/line1.png" alt="" class="line">
				<span class="title-text">基本信息</span>
			</div>
			<div class="text_1">
				<span class="text_left">机构名称</span>
				<span class="text_right">北京数据未来科技有限公司</span>
			</div>
			<div class="text_1">
				<span class="text_left">已合作机构</span>
				<span class="text_right">
					<nut-button type="actived" shape="circle" small>IDG资本管理有限公司</nut-button>
					<!-- :style="'height: 20px;padding: 0 1vw;margin-left: 1vw;border: 0px;background-color:'+BGcolorList[ind]" :color="colorList[ind]" :key="ind" v-if="ind < 3" v-for="(item,ind) in  (typeof(progressObj.lingyu_name) == 'string' ? [{name:progressObj.lingyu_name}] : progressObj.lingyu_name)" -->
				</span>
			</div>
			<div class="text_1">
				<span class="text_left">合作机构</span>
				<span class="text_right">
					<nut-button type="actived" shape="circle" small>嘎嘎哈哈有限公司</nut-button>
					<!-- :style="'height: 20px;padding: 0 1vw;margin-left: 1vw;border: 0px;background-color:'+BGcolorList[ind]" :color="colorList[ind]" :key="ind" v-if="ind < 3" v-for="(item,ind) in  (typeof(progressObj.lingyu_name) == 'string' ? [{name:progressObj.lingyu_name}] : progressObj.lingyu_name)" -->
				</span>
			</div>
			<div class="text_1">
				<span class="text_left">出借规则</span>
				<span class="text_right">电子商务 大数据 医疗行业 新媒体</span>
			</div>
			<div class="text_1">
				<span class="text_left">偏好伦次</span>
				<span class="text_right">天使轮 A轮</span>
			</div>
		</div>
		<div class="user_msg">
			<div class="title1-box">
				<img src="../../assets/image/line1.png" alt="" class="line">
				<span class="title-text">个人介绍</span>
			</div>
			<div class="person_int" v-if="this.isShow">
				<p class="text_contain">我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸</p>
				<p style="text-align: right;padding:1vh 1vh;" @click="Show_text()">展开 <i class="el-icon-caret-bottom"></i></p>
			</div>
			<div class="person_int" v-if="this.unshow">
				<p class="text_show">我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸我是你爸爸</p>
				<p style="text-align: right;" @click="UnShow_text()">收起 <i class="el-icon-caret-top"></i></p>
			</div>
		</div>
		<div class="Project_Lib">
			<div class="title1-box">
				<img src="../../assets/image/line1.png" alt="" class="line">
				<span class="title-text">项目库1</span>
			</div>
			<div class="head_crad_text">
				<div class="head_card_icon" ></div>
				<!-- :style="'background-image:url('+progressObj[imgArr[this.$route.query.type]]+')'" -->
				<div class="head_card_left">
					<p v-text="" style="">优秀</p>
					<p v-text="" class="pro_msg">打死打死撒是啊打死按时撒撒旦</p>
					<p style="">电子商务：</p>
					<p style="">佣金比例:%</p>
					<nut-button
					  type="actived"
					  shape="circle"
					  small
					  v-for="(item,ind) in taglist" :key="ind" v-if="ind < 3"
					  :color="colorList[ind]"
					  :style="'height: 20px;padding: 0 1vw;margin-left: 1vw;border: 0px;background-color:'+BGcolorList[ind]"
					>{{item}}</nut-button>
					<!-- 					  v-for="(item,ind) in  (typeof(progressObj.lingyu_name) == 'string' ? [{name:progressObj.lingyu_name}] : progressObj.lingyu_name)  " :key="ind" v-if="ind < 3" -->
				</div>
				
			</div>
			
		</div>
			<div class="btn">
				<nut-button block shape="circle">
					发送项目(约谈)
				</nut-button>
			</div>


	</div>
</template>

<script>
	export default {
		data() {
			return {
				BGcolorList: ["#fef8e5", "#fee5e5", "#e5eefe"],
				colorList: ["#ffa800", "#f23353", "#009cff"],
				isShow:true,  //是否显示全部
				unshow:false,  //不显示

				taglist: ["SASS", "互联网", ],

				unfoldAll: true,
				unfoldAll2: true,
				unfoldAll3: true,
				ListData: {},
				BZList: [],
				bz: "",
				dialogShowBZ: false,
				dialogShowLXR: false,
				LXRlist: [],
				lxrName: "",
				lxrphone: "",
				LCdata: ["天使轮", "A轮", "B轮", "C轮", "D轮", "E轮", "战略融资"],
			};
		},
		created() {
			// organId
			// let id = this.$route.query.id;
			// // console.log(id);
			// this.$fetch("/api/getOrganDetail/" + id).then(res => {
			// 	if (res.status == "success") this.ListData = res.data;
			// 	console.log(this.ListData);
			// });
			console.log(11111);
		},
		methods: {
			back() {
				this.$router.go(-1);
			},
			unfoldShow() {
				this.unfoldAll = false;
			},
			unfoldNoShow() {
				this.unfoldAll = true;
			},
			//是否显示
			Show_text(){
				this.unshow = true;
				this.isShow = false;
				console.log(this.unshow);
			},
			UnShow_text(){
				this.isShow = true;
				this.unshow = false;
				console.log(this.isShow)
			},
		}
	};
</script>

<style lang="scss" scoped>
	/deep/.nut-button.small {
		height: 2.5vh;
		padding: 0 6px;
	}
	.text_contain{
		width:100%;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		text-align: center;
		overflow: hidden;
		height: 8vh;
	}
	.btn {
		text-align: center;
		padding-top: 2vh;
		margin-bottom: 2vh;
	}
	/deep/.nut-button.block{
		width: 80%;
	}
	/deep/.nut-button{
		background: #1CC6BB;
	}
	.Project_Lib{
		margin-top: 2vh;
		background: #fff;
		padding-left: 2vw;
	}
	.person_int{
		margin-right: 2vw;
	}
	.head_card_left p{
		margin-bottom: 1.5vmin;
	}
	.title-box,
	.title2-box,
	.title3-box,
	.title4-box {
		margin-top: 3%;
		padding-left: 3%;
		border-bottom: 1px solid #efefef;
		height: 8vh;
		background: #fff;
	}

	.user_msg {
		margin-top: 2vh;
		background: #fff;
		padding-left: 2vw;
	}

	.text_left {
		width: 20vw;
		display: inline-block;
	}

	.text_right {
		width: 78vw;
		display: inline-block;

	}
	.head_crad_text{
		width: 98vw;
		margin: 0 auto;
		height: 36vmin;
		margin-top: 0vmin;
	}
	.text_1 {
		height: 5vh;
	}

	// .left_box{
	// 	display: inline-block;
	// 	width: 20vw;
	// }
	// .right_box{
	// 	display: inline-block;
	// 	width: 78vw;
	// }
	.title-text,
	.line {
		vertical-align: middle;
		line-height: 8vh;
	}
	.head_card_left{
		width:50vmin;
		width: 59vmin;
		height: 20vh;
		position: absolute;
		right: 5vh;
		// background: pink;
		top: 8vh;
	}
	.Project_Lib{
		position: relative;
		margin-bottom: 2vh;
	}
	.head_card_icon {
		background-image: url(../../assets/image/ManageA_details_cardicon.png);
		background-size: 100% 100%;
		height: 10vh;
		width: 10vh;
		position: relative;
		left: 3vh;
		top: 3vh;
		display: inline-block;
	
	}
	.title-text {
		margin-left: 2%;
		font-size: 16px
	}

	.topBox {
		position: relative;
		height: 30%;
		background-image: url("../../assets/image/bg.png");

		.btm_BG {
			position: absolute;
			bottom: 0;
			width: 100%;
		}
	}

	.box_BTM {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 30%;
		display: flex;

		.Box_1 {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.headIMG {
			position: relative;

			img {
				position: absolute;
				bottom: 50%;
				width: 90%;
			}
		}
	}
</style>
