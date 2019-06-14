<template>
	<div>
		<nut-navbar @on-click-back="back" @on-click-title="title" @on-click-more="more" :leftShow="true" :rightShow="false">添加机构</nut-navbar>
		<div class="list-body">
			<div class="list1">
				<div class="title-box">
					<img src="../../assets/image/line1.png" alt="" class="line">
					<span class="title-text">机构名称与LOGO</span>
				</div>
				<div class="up-image">
					<span style="" class="list-left">上传图片</span>
					<el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
					 :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload" style="text-align: right;">
						<img v-if="imageUrl" :src="imageUrl" class="avatar">
						<!-- <img v-else src="../../assets/image/up-image.jpg" alt="" class="up-img-icon"> -->
						<div class="up-img-icon" style="height: 5vh;"></div>
					</el-upload>
				</div>
				<div class="mechanism">
					<nut-textinput placeholder="请输入内容" label="机构名称" suffix="aaa" v-model="val" />
				</div>
				<div class="mechanism">
					<nut-textinput placeholder="请输入内容" label="机构所在地" v-model="val" />
				</div>
			</div>

			<div class="list2">
				<div class="title2-box">
					<img src="../../assets/image/line1.png" alt="" class="line">
					<span class="title-text">机构简介</span>
				</div>
			</div>
			<div @click="gopersonage()">
				<nut-cell title="项目简介" desc="请输入项目简介" :showIcon="true" class="projectJS"></nut-cell>
			</div>
			<div class="title3-box">

				<img src="../../assets/image/line1.png" alt="" class="line">
				<span class="title-text">投资行业</span>

				<span class="add-icon" @click="add_tag(1)">&nbsp;+&nbsp;</span>
			</div>
			<div class="title4-box">
				<img src="../../assets/image/line1.png" alt="" class="line">
				<span class="title-text">投资行业</span>
				<span class="add-icon" @click="add_tag(2)">&nbsp;+&nbsp;</span>
			</div>
		</div>
		<div class="btn">
			<nut-button block shape="circle">
				登录
			</nut-button>
		</div>
		<nut-picker :is-visible="is_show" :default-value-data="defaultValueData1" :list-data="listData0" @close="switchPicker('isVisible1')"
		 @confirm="setYearValue">
		</nut-picker>

	</div>
</template>
<script>
	export default {
		data() {
			return {
				is_show: false,
				val: '',
				imageUrl: '',
				listData0: [
					['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
					['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
				],
				defaultValueData1: ['2012', '2'],
			};
		},
		methods: {
			back() {
				alert('header头部， 点击返回')
			},
			title() {
				alert('header头部， 点击title')
			},
			more() {
				alert('header头部， 点击更多')
			},
			handleAvatarSuccess(res, file) {
				this.imageUrl = URL.createObjectURL(file.raw);
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg';
				const isLt2M = file.size / 1024 / 1024 < 2;

				if (!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if (!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isJPG && isLt2M;
			},
			gopersonage() {
				console.log(11111);
			},
			add_tag(val) {
				if (val == 1) {
					console.log(111);
					this.is_show = true;
				} else if (val == 2) {
					this.is_show = true;
				} else {
					console.log('fail');
				}
			},
			switchPicker(param) {
				this.is_show = false;
			},
			setYearValue(chooseData) {
				this.is_show = false;
			},


		}
	};
</script>

<style lang="scss" scoped>
	/deep/.nut-button.block {
		width: 80%;
	}

	/deep/.nut-button {
		background: pink;
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
		font-size: 16px;
		margin-left: 2vw;
	}

	/deep/.nut-textinput>input {
		text-align: right;
		font-size: 16px;
	}

	/deep/.nut-cell-left>span {
		font-size: 16px !important;
	}

	/deep/.nut-cell-right>span {
		font-size: 16px;
	}

	.btn {
		text-align: center;
	}

	.add-icon {
		border-radius: 50%;
		border: 1px solid blue;
		height: 2vh;
		line-height: 8vh;
		margin-left: 65vw;
	}

	.projectJS {
		height: 8vh;
	}

	.list-left {
		line-height: 8vh;
		font-size: 16px;
		margin-left: 2vw;
	}

	.mechanism {
		height: 8vh;
		border-bottom: 1px solid #666;
	}

	.up-img-icon {
		position: absolute;
		top: 18vh;
		width: 5vh;
		right: 5vh;
		background-image: url("../../assets/image/up-image.jpg");
		height: 5vh;
		background-size: 100% 100%;
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
	.title4-box {
		margin-top: 3%;
		padding-left: 3%;
		border-bottom: 1px solid #efefef;
		height: 8vh;
		background: #fff;
	}

	.list1 {
		background: #fff;
		width: 100%;
		height: 45%;
	}

	.up-image {
		width: 100%;
		height: 8vh;
		border-bottom: 1px solid;
	}

	.list-body {
		width: 100%;
		height: 80vh;
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
		width: 178px;
		height: 178px;
		display: block;
	}
</style>
