<template>
	<div class="container">
		<div class="topBox">
			<nut-navbar @on-click-back="back" :leftShow="true" :rightShow="true" style="background:rgba(255,255,255,0);color:#fff;" v-text="">{{this.ListData.info.username}}</nut-navbar>
			<img src="../../assets/image/organ_top.png" alt class="btm_BG">
			<div class="box_BTM">
				<div class="Box_1" style="display:flex;flex-direction: column;">
					<span v-text="this.ListData.info.financing_money">21</span>
					<span style="color:#666">累计融资（万）</span>
				</div>
				<!-- {{}} -->
				<div class="Box_1 headIMG">
					<img :src="web_www+this.ListData.info.header_img" alt class="header_img">
				</div>
				<div class="Box_1" style="display:flex;flex-direction: column;">
					<span v-text="this.ListData.info.project_num">21</span>
					<span style="color:#666">签约项目（万）</span>
				</div>
			</div>
		</div>
		<div class="user_msg">
			<div class="title1-box">
				<img src="../../assets/image/line1.png" alt="" class="line">
				<span class="title-text">基本信息</span>
			</div>
			<!-- <div class="text_1">
				<span class="text_left">机构名称</span>
				<span class="text_right">【暂无记录】</span>
			</div> -->
			<div class="text_1">
				<span class="text_left">已合作机构</span>
				<div class="text_right">
					<span>
						<nut-button type="actived" shape="circle" small>IDG资本管理有限公司</nut-button>
						<!-- :style="'height: 20px;padding: 0 1vw;margin-left: 1vw;border: 0px;background-color:'+BGcolorList[ind]" :color="colorList[ind]" :key="ind" v-if="ind < 3" v-for="(item,ind) in  (typeof(progressObj.lingyu_name) == 'string' ? [{name:progressObj.lingyu_name}] : progressObj.lingyu_name)" -->
					</span>
				</div>
			</div>
			<div class="text_1">
				<span class="text_left">合作机构</span>
				<div class="text_right">
					<span>
						<nut-button type="actived" shape="circle" small>红杉资本</nut-button>
						<!-- :style="'height: 20px;padding: 0 1vw;margin-left: 1vw;border: 0px;background-color:'+BGcolorList[ind]" :color="colorList[ind]" :key="ind" v-if="ind < 3" v-for="(item,ind) in  (typeof(progressObj.lingyu_name) == 'string' ? [{name:progressObj.lingyu_name}] : progressObj.lingyu_name)" -->
					</span>
				</div>
			</div>
			<!-- <div class="text_1">
				<span class="text_left">出借规则</span>
				<span class="text_right">电子商务 大数据 医疗行业 新媒体</span>
			</div> -->
			<div class="text_1">
				<span class="text_left">偏好伦次</span>
				<div class="text_right">
					<span
						v-for="(item_stage,index) in ListData.info.stage_name"
					>{{item_stage.name}}</span>
					
				</div>
				<!-- v-text="this.ListData.info.stage_name[0].name -->
			</div>
			<div class="text_1">
				<span class="text_left">投资领域</span>
				<div class="text_right">
					<span class=""
						v-for="itemL in ListData.info.lingyu_name"
					>{{itemL.name}}      </span>
					
				</div>
			</div>
		</div>
		<div class="user_msg">
			<div class="title1-box">
				<img src="../../assets/image/line1.png" alt="" class="line">
				<span class="title-text">个人介绍</span>
			</div>
			<div class="person_int" v-if="this.isShow">
				<p class="text_contain"  v-text="this.ListData.info.description"></p>
				<p style="text-align: right;padding:1vh 1vh;" @click="Show_text()">展开 <i class="el-icon-caret-bottom"></i></p>
			</div>
			<div class="person_int" v-if="this.unshow">
				<p class="text_show" v-text="this.ListData.info.description"></p>
				<p style="text-align: right;" @click="UnShow_text()">收起 <i class="el-icon-caret-top"></i></p>
			</div>
		</div>
		
		<div class="Project_Lib" v-for="(itemP,key,index) in project_list">
			<div class="title1-box">
				<img src="../../assets/image/line1.png" alt="" class="line">
				<span class="title-text">项目库{{key+1}}</span>
			</div>
			<div class="head_crad_text">
				<div class="head_card_icon" >
					<img :src="itemP.logo" alt="" style="width: 100%;">
				</div>
				<!-- :style="'background-image:url('+progressObj[imgArr[this.$route.query.type]]+')'" -->
				<div class="head_card_left">
					<p v-text="itemP.name" style=""></p>
					<p v-text="itemP.description" class="pro_msg hide">打死打死撒是啊打死按时撒撒旦</p>
					
					<p style=""
						v-for="(items,index) in itemP.stage_name" :key="index"
					>{{items}}</p>
					<p style="">佣金比例:{{itemP.yongjin}}%</p>
					<nut-button
					  type="actived"
					  shape="circle"
					  small
					  v-for="(items,ind) in itemP.lingyu_name" :key="ind" v-if="ind < 3"
					  :color="colorList[ind]"
					  :style="'height: 20px;padding: 0 1vw;margin-left: 1vw;border: 0px;background-color:'+BGcolorList[ind]"
					>{{items}}</nut-button>
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
				web_www:'http://114.115.216.31:8080/',
				taglist: [],

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
				project_list:{},       //项目库
				project:[],     //项目数组
				lingyu_name:[],     //领域name数组
			};
		},
		created() {
			let id = this.$route.query.userId;
			console.log(id);
			this.$post("/api/getUserDetail", { userId:id }).then(res => {
			  // res.data.Maxnum=this.Maxnum
			  console.log(res.data);
			  this.ListData = res.data;
			  // this.listData.header_img = this.web_www + this.listData.info.header_img;
			  // console.log(res);
			  // let Project = JSON.parse(sessionStorage.setItem("userInfo")).id;
			});
			this.$post("/api/getUserProjectList",{userId:id}).then(res =>{
				console.log(res.data);
				this.project_list = res.data;
				// this.taglist = res.data[0].lingyu_name;
				console.log(this.project_list);
				var _this = this;
				// for(var i = 0;i<_this.project_list.length;i++){
				// 	_this.project = _this.project_list[i];
				// 	console.log(_this.project);
				// }
			})
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
	.hide{
		font-size: 14px;
		line-height: 20px;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		margin-top: 5%;
		color: #666;
	}
	.header_img{
		position: absolute;
    bottom: 50%;
    min-width: 100px;
    min-height: 100px;
    max-width: 100px;
    max-height: 100px;
    border-radius: 50% 50%;
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
		height: 40vmin;
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
