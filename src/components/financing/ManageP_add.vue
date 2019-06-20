<template>
	<div v-if="pageStep == 1">
		<nut-navbar @on-click-back="back" @on-click-title="title" @on-click-more="more" :leftShow="true" :rightShow="false">添加项目</nut-navbar>
		<div class="list-body">
			<div class="list1">
				<div class="title-box">
					<img src="../../assets/image/line1.png" alt="" class="line">
					<span class="title-text">添加FA头像</span>
				</div>
				<div class="up-image">
					<span style="" class="list-left">添加头像</span>
					<el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
					 :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload" :on-error="miss" style="text-align: right;">
						<!-- <img v-else src="../../assets/image/up-image.jpg" alt="" class="up-img-icon"> -->
						<div class="up-img-icon" style="height: 5vh;" :style="getImgUrl"></div>
					</el-upload>
				</div>
				<!-- 				<div class="mechanism">
					<nut-textinput placeholder="请输入内容" label="机构名称" suffix="aaa" v-model="name" />
				</div>
				<div class="mechanism">
					<nut-textinput placeholder="请输入内容" label="机构所在地" v-model="address" />
				</div> -->
			</div>

			<div class="list2">
				<div class="title2-box">
					<img src="../../assets/image/line1.png" alt="" class="line">
					<span class="title-text">基本信息</span>
				</div>
				<div class="mechanism">
					<nut-textinput placeholder="请输入用户名称" label="用户名" suffix="aaa" v-model="username" />
				</div>
				<div class="mechanism">
					<nut-textinput placeholder="请输入累计融资金额" label="累计融资" suffix="aaa" @blur="onBlur1" v-model="Acc_financing" />
				</div>
				<div class="mechanism">
					<nut-textinput placeholder="请输入签约项目数量" label="签约项目" suffix="aaa" @blur="onBlur2" v-model="Con_Projects" />
				</div>
				<div class="mechanism">
					<nut-textinput placeholder="请输入已合作机构名称" label="已合作机构" suffix="aaa" v-model="Cooper_Inst_done" />
				</div>
				<div class="mechanism">
					<nut-textinput placeholder="请输入合作机构名称" label="合作机构" suffix="aaa" v-model="Cooper_Inst" />
				</div>
				<!-- <div class="mechanism Lending_Rules">
					<span class="title-text ">出借规则</span>
					<br>
					<el-tag :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose0(tag)">
						{{tag}}
					</el-tag>
					<el-input class="input-new-tag" v-if="inputVisible" v-model="inputValue" ref="saveTagInput" size="small"
					 @keyup.enter.native="handleInputConfirm0" @blur="handleInputConfirm0">
					</el-input>
					<el-button v-else class="button-new-tag" size="small" @click="showInput0">+点击添加标签</el-button>
				</div> -->

				<div class="title3-box" @click="add_tag(1)">
					<!-- <img src="../../assets/image/line1.png" alt="" class="line"> -->
					<span class="title-text">投资行业</span>
					<span class="add-icon" @click="()=>{isVisible=!isVisible}">&nbsp;+&nbsp;</span>
					<br>
					<el-tag v-if="true" v-for="tag in tags0" :key="tag.name" closable size="mini" :disable-transitions="false" @close="handleClose0(tag)">
						{{tag}}
					</el-tag>
				</div>

				<div class="mechanism title4-box" @click="add_tag(2)">
					<span class="title-text">偏好轮次</span>
					<span class="add-icon" @click="()=>{isVisible1=!isVisible1}">&nbsp;+&nbsp;</span>
					<br>
					<el-tag v-if="true" v-for="tag in tags" :key="tag.name" closable size="mini" :disable-transitions="false" @close="handleClose(tag)">
						{{tag}}
					</el-tag>
				</div>
			</div>
			<div class="title5-box">
				<img src="../../assets/image/line1.png" alt="" class="line">
				<span class="title-text">个人介绍</span>
			</div>
			<div @click="gopersonage()">
				<nut-cell title="个人介绍" :desc="description ? description : '请输入个人介绍'" :showIcon="true" class="projectJS"></nut-cell>
			</div>
		</div>
		<div class="btn" @click="addOrgan_fun()">
			<nut-button block shape="circle">
				提交审核
			</nut-button>
		</div>

		<nut-picker :is-visible="isVisible" title="请选择投资行业" :list-data="listData" :default-value-data="defaultValueData"
		 @close="switchPicker('isVisible')" @confirm="setChooseValue" @choose="updateChooseValue" @close-update="closeUpdateChooseValue"></nut-picker>
		<nut-picker :is-visible="isVisible1" title="请选择偏好伦次" :list-data="listData1" :default-value-data="defaultValueData1"
		 @close="switchPicker('isVisible1')" @confirm="setChooseValue1" @close-update="closeUpdateChooseValue"></nut-picker>

	</div>

	<div class="personage" v-else>
		<div class="Project">
			<nut-navbar @on-click-back="back" @on-click-more="more" title="个人简介">
				<a slot="more-icon" @click="saveText()">保存</a>
			</nut-navbar>
			<div class="personageBox">
				<textarea class="xmjs" placeholder="请输入个人简介" v-model="editDescription"></textarea>
			</div>
		</div>
	</div>

</template>
<script>
	export default {
		data() {
			return {
				dynamicTags: [], //循环出借轮次
				inputVisible: false,
				inputValue: '',
				pageStep: 1,
				editDescription: '',
				username: '', //用户名称



				headerIconImgBase64Data: '', //base64图片logo数据   头像
				Acc_financing: '', //累计融资
				Con_Projects: '', //签约项目
				User_ChossStage: '', //用户选择轮次id
				Cooper_Inst_done: '', //已合作机构
				Cooper_Inst: '', //合作机构
				Lending_Rules: '', //出借规则
				is_show: false,
				name: '', //机构名称
				description: '请输入个人简介', //机构简介
				address: '', //机构所在地
				imageUrl: '',
				date: null,
				isVisible0: false,
				city: null,
				isVisible: false,
				isVisible1: false,
				tags: [], //第二个
				tags0: [], //第一个
				data: {
					//二级
				},
				listData: [],
				defaultValueData: null,
				isVisible1: false,
				defaultValueData1: null,
				list2: {},
				value: null,
				value1: null,
				MaxList: '',
				listData1: [],
				lyIdList0: [],
				lyIdList1: [],
				st_2_list: '',
				selectJobId: '', //领域id
				rou_name: 'ManageP_add',
			};
		},
		computed: {
			getImgUrl: function() {
				return this.imageUrl ? 'background-image: url(' + this.imageUrl + ');' : '';
			}
		},
		created() {

		},
		beforeMount() {
			this.$post("/api/getLingyu").then(res => {
				this.listData[0] = [];
				for (let i = 0; i < res.data.length; i++) {
					this.listData[0].push(res.data[i].name);
					this.lyIdList0.push(res.data[i].id);
					// console.log(this.lyIdList0);
					//  console.log(res)
				}
				this.$post("/api/getLingyu", {
					parent_id: 1
				}).then(res2 => {
					// console.log("二级");
					let arr = res2.data;
					let arrlist = [];
					for (let j = 0; j < arr.length; j++) {
						arrlist.push(res2.data[j].name)
						// this.lyIdList0.push(res.data[i].id);;
						// console.log(this.data)
					}
					this.data[this.listData[0][0]] = arrlist;
					// console.log(this.data)
					this.listData = [...[this.listData[0]], this.data[this.listData[0][0]]];

					arrlist = [];
					// console.log(this.data)
				});
			});

			this.$post("/api/getStage", {}).then(
				res => {
					// console.log(res.data);
					this.listData1[0] = [];
					for (let i = 0; i < res.data.length; i++) {
						this.listData1[0].push(res.data[i].name);
						this.lyIdList1.push(res.data[i].id);
						// console.log(this.lyIdList1);
						// this.lyIdList.push(res.data[i].id);
						// console.log(this.lyIdList1)
					}
				}
			)


		},
		mounted: function() {
			this.description = this.$route.params.description;
		},

		methods: {
			handleClose0(tag) {
				this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
			},

			showInput0() {
				this.inputVisible = true;
				this.$nextTick(_ => {
					this.$refs.saveTagInput.$refs.input.focus();
				});
			},
			handleInputConfirm0() {
				let inputValue = this.inputValue;
				if (inputValue) {
					this.dynamicTags.push(inputValue);
				}
				this.inputVisible = false;
				this.inputValue = '';
				console.log(this.dynamicTags);
			},
			onBlur1() {
				var val = this.Acc_financing;
				var _this = this;
				var regPos = /^\d+(\.\d+)?$/; //非负浮点数
				var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
				if (regPos.test(val) || regNeg.test(val)) {
					return true;
				} else {
					_this.Acc_financing = '';
					this.$message.error('请填写数字');
					// console.log(2222);
				}
			},
			onBlur2() {
				var val = this.Con_Projects;
				var _this = this;
				var regPos = /^\d+(\.\d+)?$/; //非负浮点数
				var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
				if (regPos.test(val) || regNeg.test(val)) {
					return true;
				} else {
					_this.Con_Projects = '';
					this.$message.error('请填写数字');
					// console.log(2222);
				}
			},
			//图片转base65
			imgToBase64(url) {
				var baseData = "";
				var _this = this;
				this.convertImgToBase64(url, function(base64Img) {
					//转化后的base64
					_this.headerIconImgBase64Data = base64Img;
					// console.log(_this.headerIconImgBase64Data)
					console.log(_this.headerIconImgBase64Data)
				}, 'base64');
				// 发起异步读取文件请求，读取结果为data:url的字符串形式，
				// return baseData
			},
			//实现将项目的图片转化成base64
			convertImgToBase64(url, callback, outputFormat) {
				var canvas = document.createElement('CANVAS'),
					ctx = canvas.getContext('2d'),
					img = new Image;
				img.crossOrigin = 'Anonymous';
				img.onload = function() {
					canvas.height = img.height;
					canvas.width = img.width;
					ctx.drawImage(img, 0, 0);
					var dataURL = canvas.toDataURL('image/jpeg' || 'image/png');
					callback.call(this, dataURL);
					canvas = null;
				};
				img.src = url;
			},
			//后台传递数据
			addOrgan_fun() {
				if (this.headerIconImgBase64Data == '') {
					this.$message.error('图片不能为空');
					return false;
				}
				if (this.Con_Projects == "") {
					this.$message.error('签约项目不能为空');
					return false;
				}
				if (this.Acc_financing == "") {
					this.$message.error('累计不能为空');
					return false;
				}
				if (this.editDescription == "") {
					this.$message.error('描述不能为空');
					return false;
				}
				if (this.description == "") {
					this.$message.error('描述不能为空');
					return false;
				}
				if (this.selectJobId == "") {
					this.$message.error('投资行业不能为空');
					return false;
				}
				if (this.User_ChossStage == "") {
					this.$message.error('偏好轮次不能为空');
					return false;
				}
				var basic = this.User_ChossStage
				basic = basic.substring(0, basic.lastIndexOf(','));
				var basic1 = this.selectJobId
				basic1 = basic1.substring(0, basic1.lastIndexOf(','));
				var Acc_financing = this.Acc_financing;
				Acc_financing = parseInt(Acc_financing);
				var Con_Projects = this.Con_Projects;
				Con_Projects = parseInt(Con_Projects);

				this.$post("/api/saveUserDetail", {
					username: this.username,
					financing_money: Acc_financing,
					project_num: Con_Projects,
					description: this.description,
					lingyu_id: basic1, //领域id
					stage_id: basic, //阶段
					header_img: this.headerIconImgBase64Data,
				}).then(res => {
					// console.log(res);
					// for (let i = 0; i < res.data.length; i++) {
					//   res.data[i].tjcode = false;
					// }
					// this.leftList = res.data;
					// this.getRightList(3)
					console.log(basic1);
					console.log(basic);
					if(res.status == 'success'){
						// console.log("成功")
						this.$message({
							message: '提交成功',
							type: 'success'
						});
					}

				});
				console.log('--------------')
				console.log(this.username);
				console.log(this.headerIconImgBase64Data);
				console.log(this.Acc_financing)
				console.log(this.Con_Projects)
				console.log(this.description)
				console.log(this.selectJobId)
				console.log(this.User_ChossStage)
				console.log('--------------')

			},
			handleClose(tag) {
				this.tags.splice(this.tags.indexOf(tag), 1);
			},
			add_tag(val) {
				if (val == 1) {
					// console.log(111);
					this.is_show = true;
				} else if (val == 2) {
					this.is_show = true;
				} else {
					console.log('fail');
				}
			},
			getlist() {
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
			saveText() {
				this.description = this.editDescription;
				this.pageStep = 1;
			},
			gopersonage() {
				this.pageStep = 2;
			},
			back() {
				// alert('header头部， 点击返回')
				if (this.pageStep == 2) {
					this.description = this.editDescription;
					this.pageStep = 1;
				} else {
					this.$router.go(-1);
				}
			},
			title() {
				alert('header头部， 点击title')
			},
			more() {
				alert('header头部， 点击更多')
			},
			handleAvatarSuccess(res, file) {
				this.imageUrl = URL.createObjectURL(file.raw);

				this.imgToBase64(this.imageUrl);
				this.$message({
					message: '上传成功',
					type: 'success'
				});
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === /^image\/(jpeg|png|jpg)$/;
				const isLt2M = file.size / 1024 / 1024 < 2;

				// if (!isJPG) {
				// 	this.$message.error('上传格式不正确');
				// }
				if (!isLt2M) {
					this.$message.error('上传图片大小不能超过 2MB!');
				}
				return isLt2M;
				// isJPG &&
			},
			miss() {
				this.$message.error('上传失败');
			},
			switchPicker(param) {
				this.is_show = false;
			},
			setYearValue(chooseData) {
				this.is_show = false;
			},
			getLY2(a, b) {},
			switchPicker(param) {
				this[`${param}`] = !this[`${param}`];
			},
			setChooseValue(chooseData) {
				// console.log(chooseData)
				this.value = chooseData[0];
				this.city = `${chooseData[0]}-${chooseData[1]}${
			    chooseData[2] ? "-" + chooseData[2] : ""
			  }`;
				$(".title3-box").css('height', '12vh');
				this.tags0.push(this.city);
				// console.log(this.tags0);

				var step_2_val = chooseData[1];
				var step_2_list = JSON.parse(JSON.stringify(this.st_2_list.data));
				var indexId = '';
				for (var i in step_2_list) {
					if (step_2_list[i]['name'] == step_2_val) {
						indexId = step_2_list[i]['id']
						// console.log(step_2_list[i]['id'])
						break;
					}
				}
				this.selectJobId += indexId + ','; //选的行业id

				// this.selectJobId.push(indexId);
				console.log(this.selectJobId);
			},
			setChooseValue1(chooseData) {
				this.value1 = chooseData[0];
				// this.tag = true;
				// alert(this.value);
				$(".title4-box").css('height', '12vh');
				// var aaa = this.value1.id
				this.tags.push(this.value1);
				// console.log(this.tags);
				// console.log(this.tags);
				// var aaa = this.value.indexOf(tags);
				// console.log(aaa);
				this.User_ChossStage += this.listData1[0].indexOf(this.value1) + ',';
				console.log(this.User_ChossStage);
			},
			updateLinkage(self, value, index, chooseValue, cacheValueData, a, b) {
				// console.log(a),console.log(b)

				let num = this.listData[0].indexOf(value);
				let val = this.listData[0][num];
				// console.log(this.data[val]);
				if (!value) {
					return false;
				}
				switch (index) {
					case 1:
						let i = this.listData[0].indexOf(value);
						if (this.data[this.listData[0][i]]) {
							this.listData.splice(index, 1, [...this.data[this.listData[0][i]]]);
						}
						chooseValue = chooseValue ? chooseValue : this.listData[index][0];
						self && self.updateChooseValue(self, index, chooseValue);
						break;
				}
				this.$forceUpdate();
			},

			updateChooseValue(self, index, value, cacheValueData) {
				// console.log(this.listData[0]);
				let a = this.listData[0].indexOf(value);
				// console.log( this.lyIdList)
				let b = this.lyIdList0[a];
				// console.log(cacheValueData)
				this.$post("/api/getLingyu", {
					parent_id: b
				}).then(res2 => {
					// console.log(res2)
					let arr = res2.data;
					let list2 = {};
					let arrlist = [];
					for (let j = 0; j < arr.length; j++) {
						arrlist.push(res2.data[j].name);
						list2 = [];
					}
					if (index == 0) {
						this.st_2_list = JSON.parse(JSON.stringify(res2));
					}
					this.data[this.listData[0][a]] = arrlist;
					//  this.updateChooseValue(self, index, chooseValue)
					this.$forceUpdate()
					arrlist = [];
					index < 1 && this.updateLinkage(self, value, index + 1, null, a, b);
				});
				//  setTimeout(()=>{

				//  },300)
			},
			closeUpdateChooseValue(self, chooseData) {
				this.updateLinkage(self, chooseData[0], 1, chooseData[1], chooseData);
			},



		}
	};
</script>

<style lang="scss" scoped>
	/deep/.nut-button.block {
		width: 80%;
	}
	.line{
		height: 5vmin;
	}
	/deep/.nut-cell-right>.nut-cell-desc {
		overflow: hidden;
		text-overflow: ellipsis;
		-o-text-overflow: ellipsis;
		white-space: nowrap;
		display: inline-block;
		width: 60vw;
		text-align: right;
	}

	/deep/.nut-button {
		background: #1CC6BB;
	}

	/deep/.nut-navbar {
		height: 7vh;
	}

	/deep/.nav-title {
		font-size: 16px;
	}

	/deep/.nut-cell-title {
		margin-left: 3vmin;
	}

	/deep/.nut-cell-box {
		margin-left: -2vh;
	}

	/deep/.nut-uploader {
		font-size: 16px;
		margin-left: 3vw;
	}

	/deep/.nut-textinput input {
		border: 0px;
		font-size: 13px;
	}

	/deep/.nut-textinput span {
		line-height: 8vh;
		font-size: 14px;
		margin-left: 2vw;
	}

	/deep/.nut-textinput>input {
		text-align: right;
		font-size: 13px;
	}

	/deep/.nut-cell-left>span {
		font-size: 16px !important;
	}

	/deep/.nut-cell-right>span {
		font-size: 16px;
	}

	/deep/.el-tag--mini {
		margin: 0 0 5px 0;
	}

	.btn {
		text-align: center;
		padding-top: 2vh;
		margin-top: 2vh;
	}

	.add-icon {
		border-radius: 50%;
		border: 1px solid #00aca0;
		height: 2vh;
		line-height: 8vh;
		margin-left: 65vw;
		color: #00aca0;
	}

	.projectJS {
		height: 8vh;
	}

	.personage {
		height: 100%;
	}

	.personageBox {
		// padding: 30px 5% 0;
		height: 100%;
		background: #fff;
		margin-top: 13px;
	}

	.list-left {
		line-height: 8vh;
		font-size: 14px;
		margin-left: 2vw;
	}

	.mechanism {
		// height: 8vh;
		min-height: 8vh;
		border-bottom: 1px solid #efefef;
	}

	.up-img-icon {
		position: relative;
		bottom: 6.5vh;
		width: 5vh;
		right: 5vh;
		background-image: url("../../assets/image/up-image.jpg");
		height: 5vh;
		background-size: 100% auto;
		border-radius: 50%;
		background-repeat: no-repeat;
		background-position: left center;
		background-color: #efefef;
	}

	.title-text,
	.line {
		vertical-align: middle;
		line-height: 8vh;
	}

	.title-text {
		margin-left: 2%;
		font-size: 16px
	}

	.title-box,
	.title2-box,
	.title3-box,
	.title4-box,
	.title5-box {
		margin-top: 3%;
		padding-left: 3%;
		border-bottom: 1px solid #efefef;
		min-height: 8vh;
		background: #fff;
	}


	.mechanism {
		background: #fff;
	}

	.list1 {
		background: #fff;
		width: 100%;
		height: 20%;
	}

	.up-image {
		width: 100%;
		height: 8vh;
		border-bottom: 1px solid #efefef;
	}

	.list-body {
		width: 100%;
		height: 80vh;
		overflow: scroll;
	}

	.avatar-uploader {
		text-align: left;
	}

	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}

	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}

	.avatar {
		width: 20%;
		display: block;
	}

	/deep/.nut-textinput .nut-textinput-clear {
		top: inherit;
		transform: translateY(-70%);
	}

	.el-tag+.el-tag {
		margin-left: 10px;
	}

	.button-new-tag {
		margin-left: 10px;
		height: 32px;
		line-height: 30px;
		padding-top: 0;
		padding-bottom: 0;
	}

	.input-new-tag {
		width: 90px;
		margin-left: 10px;
		vertical-align: bottom;
	}

	.xmjs {
		height: 45%;
		width: 90%;
		border: none;
		border-bottom: 1px solid #ccc;
		padding-left: 0;
		resize: none;
		margin-left: 5%;
		padding-top: 5%;
	}

	.Lending_Rules {
		height: 15vh;
	}

	.lightspotBox,
	.Project {
		height: 100%;
	}
</style>
