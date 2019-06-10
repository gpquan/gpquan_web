<template>
  <div>
    <nut-navbar
      @on-click-back="back"
      @on-click-title="title"
      @on-click-more="more"
      :rightShow="false"
    >添加项目</nut-navbar>
    <div class="addcontent">
      <div class="topaddIMG">
        <div class="topImgtitle">
          <em>|</em>
          <b>添加FA头像</b>
        </div>
          <div class="addImg">
        <div class="top_line"></div>
        <nut-uploader
          name="uploader-demo"
          :url="url"
          :isPreview="true"
          @start="onStart"
          @success="onSuccess"
          @fail="onFail"
          @progress="onProgress"
          @preview="onPreview"
          @showMsg="showMsgFn"
          :acceptType="['image/jpeg', 'image/png', 'image/gif', 'image/bmp']"
          typeError="对不起，不支持上传该类型文件！"
          limitError="对不起，文件大小超过限制！"
        >上传</nut-uploader>
        <div class="previewImg">
          <img :src="previewImg" alt>
        </div>

        <!-- <div class="top_line"></div> -->
        <!-- 
        <nut-uploader
          name="uploader-demo"
          :url="url"
          @success="onSuccess"
          @fail="onFail"
          @showMsg="showMsgFn"
        >上传</nut-uploader>-->
      </div>
      </div>

    

      <div class="BasicStatus">
        <div class="Basictitle">
          <em>|</em>
          <b>基本信息</b>
        </div>
        <div class="top_line"></div>
        <div class="basicBox">
          <nut-textinput
            placeholder="请输入项目名称"
            maxlength="5"
            :hasBorder="false"
            label="累计融资"
            class="ipt_textR"
          />
          <div class="top_line"></div>
          <nut-textinput
            placeholder="请输入签约项目数量"
            maxlength="5"
            :hasBorder="false"
            label="签约项目"
            class="ipt_textR"
          />
          <div class="top_line"></div>
          <nut-textinput
            placeholder="输入已合作机构名称"
            maxlength="5"
            :hasBorder="false"
            label="已合作机构"
            class="ipt_textR"
          />
          <div class="top_line"></div>
          <nut-textinput
            placeholder="输入合作机构名称"
            maxlength="5"
            :hasBorder="false"
            label="合作机构"
            class="ipt_textR"
          />
          <div class="top_line"></div>
          <nut-textinput
            placeholder="输入多个标签请用空格隔开"
            maxlength="5"
            :hasBorder="false"
            label="出借规则"
            class="ipt_textR"
          />
          <!-- <div class="top_line"></div> -->
          <div @click="pshow()">
            <nut-cell title="偏好轮次" :desc="year" :showIcon="true"></nut-cell>
          </div>
        </div>
      </div>
      <div class="personage">
        <div class="personagetitle">
          <em>|</em>
          <b>项目介绍</b>
        </div>
        
        <div class="personageBox">
          <div class="top_line"></div>
          <div @click="gopersonage()">
            <nut-cell title="项目介绍" desc="请输入项目介绍" :showIcon="true"></nut-cell>
          </div>
         
        </div>
      </div>
      <nut-picker
        :is-visible="isVisible1"
        :default-value-data="defaultValueData1"
        :list-data="listData1"
        @close="switchPicker('isVisible1')"
        @confirm="setYearValue"
      ></nut-picker>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "https://my-json-server.typicode.com/linrufeng/demo/posts",
      defaultValueData: "2010",
      year: null,
      isVisible1: false,
      listData1: [
        ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"]
      ],
      defaultValueData1: null,
      previewImg: ""
    };
  },
  methods: {
    pshow() {
      this.isVisible1 = true;
    },
    switchPicker(param) {
      this[`${param}`] = !this[`${param}`];
    },
    setYearValue(chooseData) {
      this.year = `${chooseData[0]}年`;
    },

    back() {
      alert("header头部， 点击返回");
    },
    title() {
      alert("header头部， 点击title");
    },
    more() {
      alert("header头部， 点击更多");
    },
    onStart() {
      console.log("上传开始");
    },
    onSuccess(file, res) {
      this.$toast.success("上传成功");
    },
    onFail(file, res) {
      this.$toast.fail("上传失败！");
    },
    showMsgFn(msg) {
      this.$toast.text(msg);
    },
    onProgress(file, loaded, total) {
      console.log("上传进度:" + parseInt((100 * loaded) / total) + "%");
    },
    onPreview(file) {
      this.previewImg = file;
      console.log(this.previewImg);
    },
    gopersonage(){
      this.$router.push("/project/personage")
    }
    

  }
};
</script>

<style lang="scss" scoped>
.topaddIMG,
.BasicStatus,
.personage {
  padding: 30px 5% 0;
  background: #fff;
  margin-top: 13px;
}
.addImg {
  padding: 0 5%;
  line-height: 55px;
  height: 55px;
  position: relative;
  .previewImg {
    height: 100%;
    position: absolute;
    right: 5%;
    top: 0;
    display: flex;
    align-items: center;
    img {
      height: 45px;
      line-height: 55px;
    }
  }
}
.topImgtitle,
.Basictitle,
.personagetitle {
  padding: 10px 0;
}
.top_line {
  padding: 0 5%;
  width: 90%;
  height: 1px;
  background: rgba(102, 102, 102, 1);
  opacity: 0.15;
}
// .basicBox{
//     border-top: 1px solid #666666;
// }
/deep/.nut-textinput input {
  text-align: right;
  padding-right: 0;
}
.nut-cell,
.nut-cell-link {
  padding: 0;
}
.nut-textinput {
  height: 55px;
}
</style>