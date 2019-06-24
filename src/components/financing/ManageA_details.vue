<template>
	<div class="container">
		<!--外层盒子-->
		<div class="head_card">
			<div>
				<span class="head_card_title">项目名片</span>
				<nut-button type="light" shape="circle" small id="btn">
					删除项目
				</nut-button>
			</div>
			<div class="head_crad_text">
				<div class="head_card_icon" :style="'background-image:url('+progressObj[imgArr[this.$route.query.type]]+')'"></div>
				<div class="head_card_left">
					<p v-text="progressObj.name" style="font-size: 16px;color: #fff;" @click="Jump_organ(progressObj.organ_id,progressObj.project_id)"></p>
					<p v-text="progressObj.description" class="pro_msg"></p>
					<p style="margin-top:1vmin;color: #fff;margin-bottom:1vmin;">行业轮次：{{progressObj.name}}</p>
					<nut-button type="actived" shape="circle" small v-for="(item,ind) in  (typeof(progressObj.lingyu_name) == 'string' ? [{name:progressObj.lingyu_name}] : progressObj.lingyu_name)  "
					 :key="ind" v-if="ind < 3" :color="colorList[ind]" :style="'height: 20px;padding: 0 1vw;margin-left: 1vw;border: 0px;background-color:'+BGcolorList[ind]">{{item.name}}</nut-button>
					<p v-if="pageType == 0" style="margin-top: 1vmin;color: #fff;">佣金比例：{{progressObj.yongjin}}%</p>
				</div>

			</div>
		</div>
		<div class="body_step" id="body_step">
			<div class="opcity-bg">
				<div class="step-item-box" v-for="(item,ind) in progressObj.progress" :key="ind">
					<!-- -->
					<div class="step-item-left" :class="item.id >progressObj.progress_id ? 'step-circle-undo' : (item.id == progressObj.progress_id ? 'step-circle-doing' : 'step-circle-done') ">
						<div class="step-circle"><span class="step-circle-inner"></span></div>
					</div>
					<div class="step-item-right">
						<div class="step-right-title">
							<span v-text="item.name" @click="icon_details(ind)"></span>
							<span>2019.01.02</span>
							<!-- 缺少时间 -->
						</div>
						<div class="step-right-cont">
							<p><span class="cont-circle"></span></p>
						</div>
					</div>
					<div class="icon_box">
						<div :class="currentActCircle == ind?'animation_icon':''" :style="currentActCircle == ind?'display:block':'display:none'">
							<img src="../../assets/image/add_msg_btn1.png" alt="" class="add_msg_btn1" @click="stage_state(item.id)">
							<img src="../../assets/image/add_msg_btn2.png" alt="" class="add_msg_btn2" @click="showPop(1,item.id)">
						</div>
						<img :style="currentActCircle == ind?'display:none':'display:block'" src="../../assets/image/add_msg_btn3.png" alt="" class="add_msg_btn3" @click="icon_details(ind)">
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
					<el-input type="textarea" :rows="2" placeholder="请输入内容" :autosize="{ minRows: 7, maxRows:8}" v-model="textarea">
					</el-input>
				</div>
				<div class="alert-foot">
					<div class="alert-foot-del">
						<span>删除此节点</span>
					</div>
					<div class="alert-foot-save">
						<span @click="save_text">保存备注</span>
					</div>
				</div>
			</div>
		</div>

		<div class="btn" @click="back">
			<nut-button block shape="circle">
				返回
			</nut-button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				textarea: '',
				project_id: '',
				progressObj: '', //整个返回信息
				current_tip_id: '', //当前点击备注id
				sta: false,
				BGcolorList: ["#fef8e5", "#fee5e5", "#e5eefe"],
				colorList: ["#ffa800", "#f23353", "#009cff"],
				pro_evolve_id: '',
				pageType: '',
				imgArr: ['logo', 'it_img'],
				icon_block: false,
				activeClass: -1,
				show:false,
				currentActCircle:-1,
				progressId:'',
			};
		},
		mounted() {
			// console.log(this.$route)
			this.userId = JSON.parse(sessionStorage.getItem("userInfo")).id;
			// console.log()
			this.getPageType();
			this.getDetails();

			console.log(this.progressObj);
		},
		methods: {
			icon_details(ind) {
				if(ind == this.currentActCircle){
					this.currentActCircle = '';
				}else{
					this.currentActCircle = ind;
				}
			},
			stage_state(val){
				//传递用户当前选择的阶段
				console.log(val);
				this.progressId = val;
				this.$post("/api/saveProjectProgress", {
					userId: this.progressObj.user_id,                    //用户id
					organId: this.progressObj.organ_id,             //机构id
					projectId:this.progressObj.project_id,                      //项目id,
					progressId:val,               //进展id
				}).then(
					res => {
						if (res.status == 'success') {
							// alert("成功");
							// this.showPop(2);
							// this.getDetails();
							this.getDetails();
							this.$message({
								message: '提交成功',
								type: 'success'
							});

						} else {
							// this.sta = true;
							// this.textarea = '';
							// alert(res.error.message);
							this.$message.error('操作失败');


							// this.showPop(2);
						};
					}
				)
			},
			back() {
				this.$router.go(-1);
			},
			Jump_organ(Oid, Pid) {

				var type = this.$route.query.type;
				console.log(Oid,Pid,type)
		      if ((type == 0)) {
		        this.$router.push({
		          path: "/project/details",
		          // project
		          query: {
		            id: Pid
		          }
		        });
		      } else {
		        this.$router.push({
		          path: "/organ/details",
		          // project
		          query: {
		            id: Oid
		          }
		        });
		      }
		    },
			getPageType: function() {
				this.pageType = this.$route.query.type;
				console.log(this.pageType)
			},
			save_text: function() {
				this.$post("/api/getProjectInvestProgress", {
					save_text: this.textarea,
					current_tip_id: this.current_tip_id,
				}).then(
					res => {
						if (res.status == 'success') {
							alert("成功");
							this.showPop(2);
							this.getDetails();

						} else {
							this.sta = true;
							this.textarea = '';
							alert(res.error.message);
							this.showPop(2);
						};
					}
				)
			},
			//获取详情
			getDetails: function() {
				this.project_id = this.$route.query.id;
				var type = this.$route.query.type;
				var obj = {};
				if (type == 1) {
					obj = {
						organId: this.project_id
					}
					console.log(this.$route.query)
					if (this.$route.query.userId) {
						obj = {
							organId: this.project_id,
							userId: this.$route.query.userId
						}
					}
				} else {
					obj = {
						projectId: this.project_id
					}
				}
				// console.log(this.project_id)

				this.$post("/api/" + ['getProjectInvestProgress', 'getOrganInvestProgress'][type], obj).then(
					res => {
						this.progressObj = res.data;
						// console.log(this.progressObj);
					}
				);
			},
			showPop: function(type, id) {
				if (type == 1) {
					$(".bot-alert-box").fadeIn(10)
					setTimeout(function() {
						$(".pop-body").slideDown(200);
					}, 10)
					this.current_tip_id = id;
					console.log(this.current_tip_id)
				} else {
					$(".pop-body").slideUp(200)
					setTimeout(function() {
						$(".bot-alert-box").fadeOut(10);
					}, 200)
				}
			},
		},
	}
</script>

<style lang="scss" scoped>
	/deep/.el-textarea {
		min-height: 25vh
	}

	.double_icon {
		position: absolute;
		right: 2vmin;
	}

	/deep/.el-textarea__inner {
		min-height: 25vh;
		width: 90%;
		margin: 0 auto;
		font-size: 16px;
	}

	.icon_box {
		position: absolute;
		right: 2vmin;
		// display: none;
	}

	.animation_icon {
		animation: fadeInRight 0.5s linear;

	}

	/deep/.nut-button.light {
		color: #fff;
	}

	.add_msg_btn1,
	.add_msg_btn2,
	.add_msg_btn3{
		position: relative;
		top: 1vmin;
		right: 2vmin;
		/* left: 2vmin; */
		width: 5vmin;
		height: 5vmin;
		display: inline-block;
		// margin-left: 2vmin;
	}

	.add_msg_btn2 {
		margin-left: 10vmin;
	}

	/deep/.close-icon {
		position: absolute;
		left: 1%;
		top: 4%;
	}

	.pro_msg {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-top: 1vmin;
		font-size: 15px;
		color: #fff;
	}

	.head_crad_text {
		width: 98vw;
		margin: 0 auto;
		height: 36vmin;
		margin-top: 8vmin;
	}

	.head_card_left {
		width: 50vmin;
		width: 59vmin;
		height: 20vh;
		position: absolute;
		right: 5vh;
		// background: pink;
		top: 8vh;
	}

	.container {
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

	.step-item-box:last-child .step-item-left:after {
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

	.pop-mask {
		position: absolute;
		width: 100%;
		height: 100%;
		background: black;
		opacity: .5;
	}

	.pop-body {
		height: 40vh;
		background: white;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;

		display: none;
	}

	.close-icon {
		width: 5vmin;
		height: 5vmin;
		position: absolute;
		left: 6vmin;
	}

	.alert-title {
		text-align: center;
		line-height: 15vmin;
		font-size: 23px;
	}

	.alert-body {
		text-align: center;
		position: absolute;
		bottom: 6vh;
		width: 100%
	}

	.alert-body-inp {
		width: 80%;
		height: 100%;
		margin-top: 5%;
	}

	.alert-foot-del {
		width: 50%;
		background: #666;
		height: 5vh;
		display: inline-block;
		position: absolute;
		bottom: 0;
	}

	.alert-foot-save {
		width: 50%;
		background: #999;
		height: 5vh;
		display: inline-block;
		position: absolute;
		bottom: 0;
		right: 0;
	}

	.alert-foot-del,
	.alert-foot-save {
		text-align: center;
		vertical-align: middle;
		line-height: 5vh;
	}

	.alert-foot {
		display: flex;
		display: -webkit-flex;
	}

	#btn {
		background: rgba(0, 0, 0, 0) !important;
		position: relative;
		left: 48vw;
		height: 25px;
		top: 3vh;
	}

	.btn {
		text-align: center;
		padding-top: 2vh;
		margin-top: 2vh;
		position: absolute;
		bottom: 55px;
		/* margin: 0 auto; */
		width: 100%;
		margin: 0 auto;
	}

	.btn>.nut-button {
		width: 80%;
		margin: 0 auto;
	}

	.body_step {
		position: absolute;
		height: 55vh;
		width: 100vw;
		overflow: scroll;
		-webkit-overflow-scrolling: touch;
	}

	.block {
		margin-left: 9vw;
		margin-top: 7vh;
	}

	.head_card_icon {
		background-image: url(../../assets/image/ManageA_details_cardicon.png);
		background-size: 100% 100%;
		height: 10vh;
		width: 10vh;
		position: relative;
		left: 5vw;
		top: 2vh;
		display: inline-block;

	}

	.head_card {
		background-image: url(../../assets/image/ManageA_details_cardbg.png);
		background-size: 100% 100%;
		width: 98vw;
		margin: 0 auto;
		min-height: 28vh;
	}

	.head_card_title {
		position: relative;
		left: 5vw;
		top: 3vh;
		font-size: 16px;
		color: #fff;
	}

	.step_cicle1 {
		width: 2vh;
		height: 2vh;
		background-color: pink;
		position: relative;
		margin: 0 2vw;
		text-align: center;
		border-radius: 50%;
	}

	.step_cicle2 {
		width: 0.6vh;
		height: 0.6vh;
		background-color: black;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 50%;
	}


	@keyframes fadeInRight {
		from {
			opacity: 0;
			-webkit-transform: translate(100px, 0);
			transform: stranslate(1000px, 0);
		}

		to {
			opacity: 1;
			-webkit-transform: translate(0px, 0);
			transform: stranslate(0px, 0);
		}
	}

	@-webkit-keyframes fadeInRight {
		from {
			opacity: 0;
			-webkit-transform: translate(100px, 0);
			transform: stranslate(100px, 0);
		}

		to {
			opacity: 1;
			-webkit-transform: translate(0px, 0);
			transform: stranslate(0px, 0);
		}
	}
</style>
