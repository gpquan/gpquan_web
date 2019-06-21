<template>
  <div class="view-footer">
    <div class="view-footer" v-if="footerShow==1">
      <router-link to="/project">
        <strong :class=" !flag1?'view-li-jztj':'jztjActive'" @click="tagToggle(1)">
          <span class="view-font-default">精准推荐</span>
        </strong>
      </router-link>
      <router-link to="/accelerate">
        <strong :class=" !flag2?'view-li-accelerate':'accelerateActive'" @click="tagToggle(2)">
          <span class="view-font-default">融资助手</span>
        </strong>
      </router-link>
      <router-link to="/userCenter">
        <strong :class=" !flag3?'view-li-userCenter':'userActive'" @click="tagToggle(3)">
          <span class="view-font-default">个人中心</span>
        </strong>
      </router-link>
    </div>

    <div class="view-footer" v-if="footerShow==2">
      <router-link to="/Manage2">
        <strong :class=" !flag1?'view-li-accelerate':'accelerateActive'" @click="tagToggle(1)">
          <span class="view-font-default">融资助手</span>
        </strong>
      </router-link>
      <router-link to="/speed">
        <strong :class=" !flag2?'view-li-xmjs':'xmjsActive'" @click="tagToggle(2)">
          <span class="view-font-default">项目加速</span>
        </strong>
      </router-link>

      <router-link to="/userCenter">
        <strong :class=" !flag3?'view-li-userCenter':'userActive'" @click="tagToggle(3)">
          <span class="view-font-default">个人中心</span>
        </strong>
      </router-link>
    </div>
    <!-- <router-link to="/userCenter">
      <strong class="view-li-user" @click="tagToggle(4)">
        <span class="view-font-default">个人中心</span>
      </strong>
    </router-link>-->
  </div>
</template>
<script>
export default {
  name: "foote",
  data() {
    return {
      Ind: 1,
      flag1: true,
      flag2: false,
      flag3: false,
      footerShow: null,
      //  2 1 3 2
      LiksList: ["/Manage2", "/speed", "/userCenter"],
      LiksList2: ["/project", "/accelerate", "/userCenter"]
    };
  },
  beforeMount() {
    this.footerShow = JSON.parse(sessionStorage.getItem("userInfo")).role;
    let to = this.$route;
    for (let i = 0; i < this.LiksList.length; i++) {
      if (to.path.indexOf(this.LiksList[i]) != -1) {
        this.Ind = i + 1;
        // alert(this.Ind)
      } else if (to.path.indexOf(this.LiksList2[i]) != -1) {
        this.Ind = i + 1;
        // alert(this.Ind)
      }
    }
    this.tagToggle(this.Ind)
    // console.log(this.Ind)
  },
  methods: {
    tagToggle(num) {
      this.Ind = num;

      if (this.Ind == 1) {
        // this.tab($(".view-li-project"));
        this.flag1 = true;
        this.flag2 = false;
        this.flag3 = false;
      }
      if (this.Ind == 2) {
        // this.tab($(".view-li-accelerate"));
        this.flag2 = true;
        this.flag1 = false;
        this.flag3 = false;
      }
      if (this.Ind == 3) {
        // this.tab($(".view-li-userCenter"));
        this.flag3 = true;
        this.flag2 = false;
        this.flag1 = false;
      }
      if (this.Ind == 4) {
        this.tab($(".view-li-user"));
      }
    },
    tab(el) {}
  },
  created() {
    this.Ind = sessionStorage.getItem("routeInd");
  },
  watch: {
    $route(to, from) {
      for (let i = 0; i < this.LiksList.length; i++) {
      if (to.path.indexOf(this.LiksList[i]) != -1) {
        this.Ind == i + 1;
      } else if (to.path.indexOf(this.LiksList2[i]) != -1) {
        this.Ind == i + 1;
      }
    }
    }
  }
};
</script>

<style lang="less">
.view-footer {
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 100%;
  bottom: 0;
  border-top: 1px solid #ececec;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #fff;
  // position: absolute;
  strong {
    flex: 1;
    padding-top: 35px;
    font-size: 12px;
    display: inherit;
    span.view-font-default {
      color: #777;
    }
    span.view-font-default.on {
      color: orangered;
    }
  }
  strong.view-li-accelerate {
    background: url("../../assets/image/rzzs.png") no-repeat center 5px;
    background-size: 20px;
  }
  strong.view-li-jztj {
    background: url("../../assets/image/jztj.png") no-repeat center 6px;
    background-size: 22px;
  }
  // strong.view-li-project.on {
  //   background: url("../../assets/image/file.png") no-repeat center 3px;
  //   background-size: 32px;
  // }
  strong.view-li-FA {
    background: url("../../assets/image/FA_default.png") no-repeat center 5px;
    background-size: 22px;
  }
  // strong.view-li-FA.on {
  //   background: url("../../assets/image/FA.png") no-repeat center 5px;
  //   background-size: 34px;
  // }
  strong.view-li-userCenter {
    background: url("../../assets/image/user_default.png") no-repeat center 5px;
    background-size: 24px;
  }
  // strong.view-li-userCenter.on {
  //   background: url("../../assets/image/user.png") no-repeat center 5px;
  //   background-size: 33px;
  // }
  strong.userActive {
    background: url("../../assets/image/user.png") no-repeat center 5px;
    background-size: 33px;
  }
  strong.jztjActive {
    background: url("../../assets/image/jztj_ACT.png") no-repeat center 5px;
    background-size: 33px;
  }
  strong.accelerateActive {
    background: url("../../assets/image/rzzs_ACT.png") no-repeat center 5px;
    background-size: 33px;
  }
  strong.view-li-tj {
    background: url("../../assets/image/jztj.png") no-repeat center 5px;
    background-size: 24px;
  }
  strong.tjActive {
    background: url("../../assets/image/jztj_ACT.png") no-repeat center 5px;
    background-size: 33px;
  }
  .view-li-xmjs {
    background: url("../../assets/image/js1.png") no-repeat center 5px;
    background-size: 24px;
  }
  strong.xmjsActive {
    background: url("../../assets/image/js.png") no-repeat center 5px;
    background-size: 33px;
  }
}
.ff {
  width: 100%;
  height: 100%;
}
</style>

