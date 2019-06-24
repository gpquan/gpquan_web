<template>
  <div class="project_detailsBox" v-if="ListData!=null">
    <div class="top_Box">
      <nut-navbar
        @on-click-back="back"
        :leftShow="true"
        :rightShow="true"
        style="background:rgba(255,255,255,0);color:#fff;z-index:9;"
      >{{ListData.name}}</nut-navbar>
      <div class="h_img">
        <img :src="ListData.logo" alt class="top_headImg">
      </div>
      <img src="../../assets/image/bg.png" alt class="top_BoxBg">
      <!-- <div class="header">
        <span class="backBox" @click="back">
          <img src="../../assets/image/arrow.png" alt class="left_icon">
        </span>
        <span class="sign_title">优广网</span>
        <span></span>
      </div>-->

      <!-- <nut-navbar 
   
    :leftShow="true" 
    :rightShow="true"
      >title</nut-navbar>-->
      <div class="statusShow">
        <div class="statusBox1">
          <div class="statusIMG">
            <!-- <img src="../../assets/image/h.png" alt=""> -->
          </div>
          <div class="box_text">独家签约</div>
        </div>
        <div class="statusBox2">
          <div class="statusIMG statusIMG2">{{ListData.yongjin+"%"}}</div>
          <div class="box_text">佣金比例</div>
        </div>
        <div class="statusBox3">
          <div class="statusIMG"></div>
          <div class="box_text">已投资</div>
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
        <div class="jbxxList" v-if="ListData!=null">
          <div>
            <span>项目名称</span>
            <b>{{ListData.name}}</b>
          </div>
          <div class="intro">
            <span>项目简介</span>
            <!-- <p class="xmjj">{{ListData.description}}</p> -->
            <div class="bright_history">
              <p v-if="unfoldAll1" class="hide" style="height:40px;">
                {{ListData.project_light}}
                <em
                  class="unfold_All"
                  @click="unfoldShow1()"
                  style="color:#999"
                >
                  展开
                  <b class="downIcon"></b>
                </em>
              </p>
              <p v-else class="test_size m_t5">
                {{ListData.description}}
                <em
                  class="close_All"
                  @click="unfoldNoShow1()"
                  style="color:#999"
                >
                  收起
                  <b class="upIcon"></b>
                </em>
              </p>
            </div>
          </div>
          <div>
            <span>融资阶段</span>
            <b>{{ListData.stage_name}}</b>
          </div>
          <div>
            <span>融资金额</span>
            <b>{{ListData.financing_money+'万元'}}</b>
          </div>
          <div class="lingyu">
            <span>行业关键字</span>
            <b>
              <div style="padding:10px 0">
                <!-- <em v-for="(itt,idd) in  ListData.lingyu_name" :key="idd" :class="colorClass[idd]">{{itt.lingyu_name}}</em> -->
                <em :class="colorClass[0]">{{ListData.lingyu_name}}</em>
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
            <!-- {{RZ_history}} -->
            <StepsRow v-if="this.RZ_history.length!=0" :RZList="this.RZ_history"/>
            <div v-else style="text-align:center;color:#999">暂无收录该信息</div>
          </div>
        </div>
      </div>
    </div>
    <div class="teamBox" v-if="ListData!=null">
      <!-- <div class="teamBox_title"> -->
      <div class="title_top">
        <div class="left">
          <em class="lineEm"></em>
          <b class="noW">团队</b>
        </div>
        <!-- </div> -->
      </div>
      <div class="teamCentent">
        <nut-scroller v-if="ListData.member">
          <div
            slot="list"
            class="nut-hor-list-item"
            v-for="(item, index) of ListData.member"
            :key="index"
          >
            <div>
              <div class="name">
                <span>{{item.name}}</span>
                <span class="position">{{item.job}}</span>
              </div>
              <div class="hide">{{item.description}}</div>
            </div>
          </div>
          <!-- <slot slot="more">
            <div class="nut-hor-jump-more">查看更多</div>
          </slot>-->
        </nut-scroller>
        <div v-else style="text-align:center;color:#999"> 暂无收录该信息</div>
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
          <div slot="list" class="nut-hor-list-item" v-for="(item, index) of ProList" :key="index">
            <dl class="nut-scroller-item-info">
              <dt>
                <img :src="item.logo" alt>
              </dt>
              <dd>
                <div @click="Pushme(item)">{{item.name}}</div>
                <div class="hide">{{item.description}}</div>
                <span :class="colorClass[0]" style="line-height:30px;">{{item.lingyu_name}}</span>
                <div class="lc">{{"行业轮次："+item.stage_name}}</div>
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
          {{ListData.project_light}}
          <em class="unfold_All" @click="unfoldShow()" style="color:#333">
            展开
            <span class="downIcon"></span>
          </em>
        </p>
        <p v-else class="test_size">
          {{ListData.project_light}}
          <em
            class="close_All"
            @click="unfoldNoShow()"
            style="color:#333"
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
    <!-- <div class="recommend">
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
    </div>-->
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
      lingyuName: ["111", "222", "333"],
      ListData: null,
      RZ_history: null,
      projectId: null,
      ProList: {},
      id: null,
      unfoldAll1: true
    };
  },
  beforeMount() {
    // this.$fetch("/api/getProjectDetail/" + 83291).then(res => {
    //   this.ListData = res.data;
    //   this.projectId = res.data.id;
    //   // console.log(res)
    //   this.$post("/api/getAlikeProjectList", {
    //     field: "id",
    //     fieldValue: this.projectId
    //   }).then(res => {
    //     console.log(res);
    //     this.ProList = res.data;
    //   });
    // });
    this.$post("/api/projectInvestHistory", {
      projectId: this.projectId
    }).then(res => {
      this.RZ_history = res.data;
      // console.log(res)
    });
  },
  created() {
    // organId
    console.log(this.$route.query.id);
    this.projectId = this.$route.query.id;
    // console.log(id);
    this.$fetch("/api/getProjectDetail/" + this.projectId).then(res => {
      if (res.status == "success") this.ListData = res.data;
      this.$post("/api/getAlikeProjectList", {
        field: "id",
        fieldValue: this.projectId
      }).then(res => {
        console.log(res);
        this.ProList = res.data;
      });
      console.log(this.ListData);
    });
  },
  methods: {
    getList() {
      this.$fetch("/api/getProjectDetail/" + this.projectId).then(res => {
        if (res.status == "success") this.ListData = res.data;
        this.$post("/api/getAlikeProjectList", {
          field: "id",
          fieldValue: this.projectId
        }).then(res => {
          console.log(res);
          this.ProList = res.data;
        });
        console.log(this.ListData);
      });
    },
    back() {
      this.$router.go(-1);
    },
    title() {
      alert("header头部， 点击title");
    },
    more() {
      alert("header头部， 点击更多");
    },
    unfoldShow1() {
      this.unfoldAll1 = false;
    },
    unfoldNoShow1() {
      this.unfoldAll1 = true;
    },
    unfoldShow() {
      this.unfoldAll = false;
    },
    unfoldNoShow() {
      this.unfoldAll = true;
    },
    back() {
      this.$router.go(-1);
    },
    Pushme(item) {
      this.$router.push({
        path: "/project/details",
        query: { id: item.id }
      });
      // this.$forceUpdate()
    }
  },
  watch: {
    $route(n, o) {
      if (n.query.id !== o.query.id) {
        this.projectId = n.query.id;
        this.getList();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
b {
  font-weight: 400;
}
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
  height: 240px;
  background-size: 100% 90%;
  background-repeat: no-repeat;
  position: relative;
  background: #fff;
}
.top_BoxBg {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
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
  box-shadow: 0px 0px 5px rgba(250, 115, 97, 0.15);
  border-radius: 8px;
  .statusBox1,
  .statusBox2,
  .statusBox3 {
    flex: 1;
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .box_text {
      line-height: 4vh;
      font-size: 13px;
    }
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
.statusIMG2 {
  color: #fff;
}
.statusIMG {
  width: 50%;
  height: 50%;
  margin-top: 14px;
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
  // display: inline-block;
}
.jbxxList span {
  min-width: 87px;
  display: inline-block;
  color: #999;
}
.jbxxList div {
  line-height: 32px;
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
  padding-bottom: 20px;
}
.bright .hide {
  margin-top: 0;
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
.test_size {
  font-size: 14px;
  color: #666;
  line-height: 20px;
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
  border-bottom: 5px solid #999;
}
.downIcon {
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-top: 5px solid #999;
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
  display: flex;
  align-items: center;
}
.noW {
  font-weight: 400;
  font-size: 13px;
  text-indent: 5px;
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
  border-radius: 25px;
  padding: 4px 10px;
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
  padding: 3px 10px;
  background: rgb(239, 82, 80);
  margin-left: 20px;
  color: #fff;
  border-radius: 5px;
}
/deep/.teamBox .nut-hor-list .nut-hor-list-item {
  width: 200px;
  margin: 10px;
  box-shadow: 0px 0px 9px #f1f1f1;
  border:1px solid #f3f3f3;
  padding: 20px 20px 10px 20px;
  /* min-height: 120px; */
  border-radius: 10px;
}
.ProjectList .nut-hor-list .nut-hor-list-item {
  width: 200px;
  margin: 10px;
  box-shadow: 0px 0px 9px #f1f1f1;
    border:1px solid #f3f3f3;
  padding: 20px 20px 10px 20px;
  /* min-height: 120px; */
  border-radius: 10px;
}
.ProjectList .nut-hor-list .nut-hor-list-item .nut-scroller-item-info {
  display: flex;
  dt {
    min-width: 30%;
    padding-right: 5vw;
    display: flex;
    align-items: center;
    img {
      width: 100%;
      border-radius: 50%;
      border: 1px solid #e7e7e7;
    }
  }
  dl {
    flex: 1;
  }
}
.xmjj {
  line-height: 20px;
}
.h_img {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin-bottom: 38%;
    z-index: 9;
  }
}
.top_headImg {
  min-width: 80px;
  min-height: 80px;
  max-width: 80px;
  max-height: 80px;
  border-radius: 50% 50%;
}
.m_t5 {
  margin-top: 5%;
}
.lc {
  font-size: 12px;
}
.line:last-child{
  opacity: 0;
}
</style>