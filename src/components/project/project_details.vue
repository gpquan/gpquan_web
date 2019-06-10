<template>
  <div class="project_detailsBox">
    <div class="top_Box">
      <img src="../../assets/image/bg.png" alt class="top_BoxBg">
      <div class="header">
        <span class="backBox" @click="back">
          <img src="../../assets/image/arrow.png" alt class="left_icon">
        </span>
        <span class="sign_title">优广网</span>
        <span></span>
      </div>
      <div class="statusShow">
        <div class="statusBox1">
          <div class="statusIMG">
            <!-- <img src="../../assets/image/h.png" alt=""> -->
          </div>
        </div>
        <div class="statusBox2">
          <div class="statusIMG">11</div>
        </div>
        <div class="statusBox3">
          <div class="statusIMG"></div>
        </div>
      </div>
    </div>
    <div class="center">
      <div class="top_status">
        <div class="top_title">
          <em>|</em>
          <b>基本信息</b>
        </div>
        <div class="jbxxList">
          <div>
            <span>项目名称</span>
            <b>优广网</b>
          </div>
          <div class="intro">
            <span>项目简介</span>
            <p>优广网</p>
          </div>
          <div>
            <span>本轮融资</span>
            <b>优广网</b>
          </div>
          <div>
            <span>融资金额</span>
            <b>优广网</b>
          </div>
          <div>
            <span>行业关键字</span>
            <b>优广网</b>
          </div>
        </div>
      </div>
      <div class="status_history">
        <div class="status_title">
          <em>|</em>
          <b>融资历史</b>
        </div>
        <div class="status_box">
          <div class="steps_">
            <StepsRow/>
          </div>
          <!-- <nut-steps :current="current">
            <nut-step title="已完成" content="这里是该步骤的描述信息"></nut-step>
            <nut-step title="已完成" content="这里是该步骤的描述信息"></nut-step>
            <nut-step title="进行中" content="这里是该步骤的描述信息"></nut-step>
            <nut-step title="待进行" content="这里是该步骤的描述信息"></nut-step>
            <nut-step title="待进行" content="这里是该步骤的描述信息"></nut-step>
          </nut-steps>-->
        </div>
      </div>
    </div>
    <div class="bright">
      <div class="bright_title">
        <em>|</em>
        <b>项目亮点</b>
      </div>
      <div class="bright_history">
        <p v-if="unfoldAll" class="hide">
          2017年8月7号日，腾讯股盘再创历史新高加320.6港元马化腾身家361亿美元成为中国首富。[3]2018年4月，获《时代周刊》2018年全球最具影响力人物荣誉。
          <em
            class="unfold_All"
            @click="unfoldShow()"
          >
            展开全部
            <span class="downIcon"></span>
          </em>
        </p>
        <p v-else class="test_size">
          2017年8月7号日，腾讯股盘再创历史新高加320.6港元马化腾身家361亿美元成为中国首富。[3]2018年4月，获《时代周刊》2018年全球最具影响力人物荣誉。
          <em
            class="close_All"
            @click="unfoldNoShow()"
          >
            收起
            <span class="upIcon"></span>
          </em>
        </p>
      </div>
      <div class="Bp_title">
        <em>|</em>
        <b>项目BP</b>
      </div>
      <div class="Bp_">
        <img src="../../assets/image/btn.png" alt class="Bp_img">
      </div>
    </div>
    <div class="recommend">
      <div class="recommend_title">
        <em>|</em>
        <b>项目保荐人</b>
      </div>
      <div class="recommend_box">
        <UserItem :userList="listData1"/>
      </div>
    </div>
    <div class="recommend_Btn">
      <nut-button block shape="circle">获取联系方式</nut-button>
    </div>
  </div>
</template>

<script>
import UserItem from "@/components/reusable/recommend_user";
import StepsRow from "@/components/reusable/stepsRow";
export default {
  name: "deta",
  components: {
    UserItem,
    StepsRow
  },
  data() {
    return {
      unfoldAll: true,
      listData1: new Array(2)
    };
  },
  beforeMount() {},
  methods: {
    unfoldShow() {
      this.unfoldAll = false;
    },
    unfoldNoShow() {
      this.unfoldAll = true;
    },
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.project_detailsBox {
  background: #f5f6fa;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 66;
  width: 100%;
  height: 40px;
  background: rgba(255, 255, 255, 0) none repeat scroll 0 0 !important;
  filter: Alpha(opacity=0);
  .sign_title {
    flex: 1;
    text-align: center;
    text-indent: -20px;
  }
}
.left_icon {
  width: 9px;
  height: 17px;
  transform: rotate(180deg);
  -ms-transform: rotate(180deg); /* IE 9 */
  -moz-transform: rotate(180deg); /* Firefox */
  -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
  -o-transform: rotate(180deg); /* Opera */
}
.top_Box {
  // background-image: url("../../assets/image/bg.png");
  width: 100%;
  height: 274px;
  background-size: 100% 90%;
  background-repeat: no-repeat;
  position: relative;
  background: #fff;
}
.top_BoxBg {
  width: 100%;
  float: left;
  max-width: 100%;
  max-height: 100%;
}
.statusShow {
  display: flex;
  width: 90%;
  height: 108px;
  align-items: center;
  margin-left: 5%;
  position: absolute;
  bottom: -20px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 20px 0px rgba(250, 115, 97, 0.15);
  border-radius: 8px;
  .statusBox1,
  .statusBox2,
  .statusBox3 {
    flex: 1;
    text-align: center;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .statusBox1 .statusIMG {
    background-image: url("../../assets/image/h.png");
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .statusBox2 .statusIMG {
    background-image: url("../../assets/image/bili.png");
    background-repeat: no-repeat;
    background-size: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .statusBox3 .statusIMG {
    background-image: url("../../assets/image/first.png");
    background-repeat: no-repeat;
    background-size: 100%;
  }
}
.statusIMG {
  width: 50%;
  height: 50%;
}
.center {
  .top_status {
    padding: 30px 5% 0;
    background: #fff;
  }
  .top_title {
    h2 {
      font-weight: 500;
      color: #333333;
    }
  }
}
.intro p {
  display: inline-block;
}
.jbxxList span {
  width: 87px;
  display: inline-block;
}
.jbxxList div {
  height: 44px;
}
.jbxxList b {
  color: #333333;
}
.status_title {
  padding: 0 0 20px 0;
}
.status_box {
  margin-left: -10px;
  margin-right: -10px;
}
.status_history {
  padding: 30px 5% 0;
  background: #fff;
  margin-top: 10px;
  // height: 150px;
}
.bright {
  padding: 30px 5% 0;
  background: #fff;
}
.Bp_img {
  width: 100%;
}
.recommend {
  margin-top: 10px;
  padding: 30px 5% 0;
  background: #fff;
}
.nut-button {
  background: rgb(29, 198, 197);
}
.recommend_Btn {
  margin-top: 20px;
  text-align: center;
}
.recommend_Btn button {
  width: 90%;
}
// .steps_{
//   display: flex;
//    div{
//      width: 200px;
//      background: skyblue;
//    }
// }
.hide {
  font-size: 12px;
  line-height: 16px;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.test_size {
  font-size: 12px;
  line-height: 16px;
}
.bright_history {
  position: relative;
}
.unfold_All,
.close_All {
  position: absolute;
  height: 20px;
  bottom: -20px;
  right: 0;
  display: flex;
  align-items: center;
}
.upIcon {
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-bottom: 5px solid #ccc;
}
.downIcon {
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-top: 5px solid #ccc;
}
.bright_title,
.Bp_title,
.top_title {
  padding: 10px 0;
}
</style>