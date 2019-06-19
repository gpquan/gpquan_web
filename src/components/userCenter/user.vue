<template>
  <div class="view-user">
    <div class="user_logo">
      <div class="big_logo">
        <img src="../../assets/image/big.png" alt class="user_big">
      </div>
      <div class="user_logo1">
        <dl>
          <dt>
            <img src="../../assets/image/user_photo.png" alt class="userLogo">
          </dt>
          <dd>
            <h3>MMli</h3>
            <h5>实名认证</h5>
          </dd>
        </dl>
        <div class="mark1"></div>
        <div class="mark2"></div>
        <div class="tab_">
          <div class="rz">
            <i class="rzxx">
              <em class="rzzt">未认证</em>
            </i>
            <p>认证信息</p>
          </div>
          <div class="lx">
            <i class="lxr"></i>
            <p>联系人资料</p>
          </div>
          <div class="message" @click="message_show">
            <i class="xx_icon">
              <em class="xxnum">999</em>
            </i>
            <br>
            <p>消息</p>
          </div>
        </div>
      </div>
    </div>
    <div class="center_List">
      <ul>
        <li>
          <router-link to="home">
            <span>
              <i class="scxm"></i>
            </span>
            <p>
              收藏项目
              <i class="right_icon"></i>
            </p>
          </router-link>
        </li>
        <li>
          <router-link to="home">
            <span>
              <i class="xmk"></i>
            </span>
            <p>
              我的项目库
              <i class="right_icon"></i>
            </p>
          </router-link>
        </li>
        <li>
          <router-link to="home">
            <span>
              <i class="sdxm"></i>
            </span>
            <p>
              收到的项目
              <i class="right_icon"></i>
            </p>
          </router-link>
        </li>
      </ul>
    </div>
    <p class="P_set">
      <router-link to="/userCenter/set">
        <span>
          <i class="set_icon"></i>
        </span>
        <p>
          设置
          <i class="right_icon"></i>
        </p>
      </router-link>
    </p>
  </div>
</template>
<script>
export default {
  name: "user",
  data() {
    return {
      show: false,
      isURL: true,
      headerUrl: "../../assets/image/big.png",
      userPhoto: "../../assets/image/user_photo.png"
    };
  },
  beforeMount() {
    this.isURL = true;
    console.log(this.isURL);
  },
	methods: {
		message_show() {
			this.$router.push({ name: "User_message"});
		}
	},
};
</script>

<style lang="scss" scoped>
.view-user {
  width: 100%;
  height: 100%;
  background: rgb (248, 248, 248);
}
.user_logo {
  background: #fff;
  position: relative;
}
.big_logo {
  width: 100%;
  height: 100%;
}
.user_big {
  width: 100%;
  min-height: 100%;
}
.userLogo {
  border-radius: 50%;
}
.user_logo1 {
  position: absolute;
  bottom: -15px;
  width: 90%;
  padding-top: 30px;
  margin-left: 5%;
  background: #fff;
  box-shadow: 0px 3px 3px #c8c8c8;
  border-radius: 5px;
  dl {
    height: 100%;
    display: flex;
    flex-direction: row;
    dd {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    dt {
      width: 30%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 55%;
      }
    }
  }
}
.tab_ {
  display: flex;
  padding-top: 20px;
  .rz {
    border-right: 1px solid #ccc;
  }
  .lx {
    border-right: 1px solid #ccc;
  }

  div {
    flex: 1;
    align-items: center;
    text-align: center;
    margin-bottom: 10px;
    font-size: 10px;
    .rzxx {
      width: 25px;
      height: 25px;
      display: inline-block;
      position: relative;
      background-image: url("../../assets/image/lv_rzxx.png");
      background-size: cover;
      .rzzt {
        width: 55px;
        line-height: 20px;
        display: inline-block;
        position: absolute;
        left: 23px;
        top: -10px;
        font-size: 8px;
        background: linear-gradient(to left, #f49e51, #f45551);
        border-radius: 10px 10px 10px 0px;
        color: #fff;
      }
    }
    .xx_icon {
      width: 25px;
      height: 25px;
      display: inline-block;
      position: relative;
      background-image: url("../../assets/image/xxzt.png");
      background-size: cover;
      .xxnum {
        width: 30px;
        line-height: 20px;
        display: inline-block;
        position: absolute;
        left: 23px;
        top: -10px;
        font-size: 8px;
        background: linear-gradient(to left, #f49e51, #f45551);
        border-radius: 10px 10px 10px 0px;
        color: #fff;
      }
    }
    .lxr {
      width: 25px;
      height: 25px;
      display: inline-block;
      position: relative;
      background-image: url("../../assets/image/xx.png");
      background-size: cover;
    }
  }
}
.mark1 {
  width: 89%;
  height: 10px;
  position: absolute;
  top: -10px;
  left: 5%;
  background: rgba(255, 255, 255, 0.45);
}
.mark2 {
  width: 84%;
  height: 18px;
  position: absolute;
  top: -18px;
  left: 8%;
  background: rgba(255, 255, 255, 0.3);
}
.center_List {
  padding-top: 20px;
  background: #fff;
  ul {
    li {
      padding-left: 5%;
      line-height: 50px;
      a {
        display: flex;
        flex-direction: row;
        align-items: center;
        span {
          width: 30px;
          display: flex;
          align-items: center;
        }
        p {
          flex: 1;
          text-indent: 20px;
          border-bottom: 1px solid #ccc;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 0 10px 0;
        }
      }
    }
    li:last-child {
      p {
        border-bottom: 0;
      }
    }
  }
}
.P_set {
  padding-left: 5%;
  line-height: 50px;
  margin-top: 10px;
  background: #fff;
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    span {
      width: 30px;
      display: flex;
      align-items: center;
    }
    p {
      flex: 1;
      text-indent: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 10px 0;
    }
  }
}
.scxm {
  display: inline-block;
  width: 25px;
  height: 25px;
  background-image: url("../../assets/image/sc.png");
  background-size: 100%;
  background-repeat: no-repeat;
}
.right_icon {
  width: 10px;
  height: 20px;
  background-image: url("../../assets/image/arrow.png");
  background-repeat: no-repeat;
  background-size: contain;
  float: right;
}
.xmk {
  display: inline-block;
  width: 25px;
  height: 25px;
  background-image: url("../../assets/image/project_list.png");
  background-size: 100%;
  background-repeat: no-repeat;
}
.sdxm {
  display: inline-block;
  width: 25px;
  height: 25px;
  background-image: url("../../assets/image/money.png");
  background-size: 100%;
  background-repeat: no-repeat;
}
.set_icon {
  display: inline-block;
  width: 25px;
  height: 25px;
  background-image: url("../../assets/image/setting.png");
  background-size: 100%;
  background-repeat: no-repeat;
}
</style>


