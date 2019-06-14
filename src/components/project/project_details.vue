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
      <!-- <nut-navbar 
   
    :leftShow="true" 
    :rightShow="true"
      >title</nut-navbar>-->
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
        <div class="title_top">
          <div class="left">
            <em class="lineEm"></em>
            <b class="noW">基本信息</b>
          </div>
        </div>
        <div class="right">
          <b class="expedite" @click="expedite(i.lingyu_id)"></b>
        </div>
        <div class="jbxxList">
          <div>
            <span>项目名称</span>
            <b>优广网</b>
          </div>
          <div class="intro">
            <span>项目简介</span>
            <p>项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介项目简介</p>
          </div>
          <div>
            <span>本轮融资</span>
            <b>天使轮</b>
          </div>
          <div>
            <span>融资金额</span>
            <b>1000万</b>
          </div>
          <div class="lingyu">
            <span>行业关键字</span>
            <b>
              <div style="padding:10px 0">
                <em v-for="(itt,idd) in  3" :key="idd" :class="colorClass[idd]">{{lingyuName[idd]}}</em>
              </div>
            </b>
          </div>
        </div>
      </div>
      <div class="status_history">
        <div class="status_title">
          <div class="title_top">
            <div class="left">
              <em class="lineEm"></em>
              <b class="noW">融资历史</b>
            </div>
          </div>
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
    <div class="teamBox">
      <!-- <div class="teamBox_title"> -->
      <div class="title_top">
        <div class="left">
          <em class="lineEm"></em>
          <b class="noW">团队</b>
        </div>
        <!-- </div> -->
      </div>
      <div class="teamCentent">
        <nut-scroller>
          <div slot="list" class="nut-hor-list-item" v-for="(item, index) of 3" :key="index">
            <div>
              <div class="name">
                麻花花
                <span class="position">投资总监</span>
              </div>
              <div class="hide">我是麻花花我是投资总监我是麻花花我是投资总监我是麻花花我是投资总监我是麻花花我是投资总监我是麻花花我是投资总监</div>
            </div>
          </div>
          <slot slot="more">
            <div class="nut-hor-jump-more">查看更多</div>
          </slot>
        </nut-scroller>
      </div>
    </div>
    <div class="ProjectList">
      <!-- <div class="teamBox_title"> -->
      <div class="title_top">
        <div class="left">
          <em class="lineEm"></em>
          <b class="noW">竞品项目</b>
        </div>
        <!-- </div> -->
      </div>
      <div class="teamCentent">
        <nut-scroller>
          <div slot="list" class="nut-hor-list-item" v-for="(item, index) of 3" :key="index">
            <dl class="nut-scroller-item-info">
              <dt><img src="../../assets/image/right-title-portrait.png" alt=""></dt>
              <dd>
                <div>2018-02-25</div>
                <div>2018-02-25</div>
                <div>2018-02-25</div>
                <div>2018-02-25</div>
                </dd>
            </dl>
          </div>
          <slot slot="more">
            <div class="nut-hor-jump-more">查看更多</div>
          </slot>
        </nut-scroller>
      </div>
    </div>
    <div class="bright">
      <div class="bright_title">
        <div class="title_top">
          <div class="left">
            <em class="lineEm"></em>
            <b class="noW">项目亮点</b>
          </div>
        </div>
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
        <div class="title_top">
          <div class="left">
            <em class="lineEm"></em>
            <b class="noW">项目BP</b>
          </div>
        </div>
      </div>
      <div class="Bp_">
        <img src="../../assets/image/ProBp.png" alt class="Bp_img">
      </div>
    </div>
    <div class="recommend">
      <div class="recommend_title">
        <div class="title_top">
          <div class="left">
            <em class="lineEm"></em>
            <b class="noW">项目保荐人</b>
          </div>
        </div>
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
      listData1: new Array(2),
      colorClass: ["yd", "SAAS", "xmt"],
      lingyuName: ["111", "222", "333"]
    };
  },
  beforeMount() {},
  methods: {
    back() {
      this.$router.go(-1);
    },
    title() {
      alert("header头部， 点击title");
    },
    more() {
      alert("header头部， 点击更多");
    },
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
    background-image: url("../../assets/image/icon3.png");
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .statusBox2 .statusIMG {
    background-image: url("../../assets/image/icon2.png");
    background-repeat: no-repeat;
    background-size: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .statusBox3 .statusIMG {
    background-image: url("../../assets/image/icon.png");
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
.intro {
  display: flex;
}
.intro p {
  display: inline-block;
}
.jbxxList span {
  min-width: 87px;
  display: inline-block;
  color: #b5b5b5;
}
.jbxxList div {
  line-height: 44px;
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
  padding: 10px 5%;
  background: #fff;
  margin-top: 10px;
  // height: 150px;
}

.bright,
.recommend,
.teamBox,
.ProjectList {
  padding: 10px 5% 0;
  background: #fff;
  margin-top: 10px;
  padding-bottom: 10px;
}
.Bp_img {
  width: 100%;
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
.title_top {
  padding: 10px 0;
}
.title_top {
  display: flex;
  align-items: center;
  padding-top: 10px;
  // overflow: hidden;
  height: 30px;
}
.left {
  height: 100%;
}
.noW {
  font-weight: 400;
  font-size: 16px;
  text-indent: 10px;
}
.lineEm {
  width: 3px;
  height: 50%;
  display: inline-block;
  background-image: url("../../assets/image/line1.png");
  background-size: 100%;
  margin-right: 5px;
}
.yd,
.SAAS,
.xmt {
  font-size: 11px;
  height: 18px;
  border-radius: 9px;
  padding: 5px 10px;
}
.yd {
  background: #fef8e5;
  color: #ffa800;
  margin-left: 5px;
  margin-right: 5px;
}
.SAAS {
  background: #fee5e5;
  color: #f23353;
  margin-right: 5px;
}
.xmt {
  background: #e5eefe;
  color: #009cff;
}
.lingyu {
  display: flex;
  align-items: center;
}
.position {
  padding: 0 10px;
  background: skyblue;
}
/deep/.teamBox .nut-hor-list .nut-hor-list-item{
  width:200px;
  margin-left: 10px;
}
.ProjectList .nut-hor-list .nut-hor-list-item{
  width:220px;
  margin-left: 10px;
}
.ProjectList .nut-hor-list .nut-hor-list-item .nut-scroller-item-info{
  display:flex;
  dt{
    width:30%;
    img{
      width:100%;
    }
  }
  dl{
    flex:1;
  }
}
</style>