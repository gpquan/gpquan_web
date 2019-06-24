<template>
  <div>
    <nut-navbar
    @on-click-back="back"
    :leftShow="true"
    :rightShow="false"
    >登录</nut-navbar>
    <img src="../../assets/image/R_round.png" alt="" class="R_round_IMG">
    <div class="center">
      <div class="title">
        <h1>
          你好,
          <br>欢迎来到创融易
        </h1>
      </div>
      <div class="logBox">
        <div class="userBox">
          <input
            type="text"
            v-model="phone"
            style="boder:none"
            class="user"
            placeholder="请输入手机号/邮箱"
            required
          >
          <span class="editable-clear-x" @click="userclear">
            <!-- <nut-icon type="circle-cross" color="#f0250f"></nut-icon> -->
          </span>
        </div>
        <!-- <nut-textinput
          v-model="Userval"
          placeholder="请输入手机号/邮箱"
          :clearBtn="true"
          :disabled="false"
          :hasBorder="false"
        /> -->
        <div class="line"></div>
        <div class="pwdBox">
          <input type="password" class="pwd" v-model="password" required>
          <span class="editable-clear-x" @click="pwdclear"></span>
          <img src="../../assets/image/line.png" alt class="line_IMG">
          <em class="look">
            <img src="../../assets/image/look.png" alt class="look_IMG">
          </em>
        </div>
        <div class="line"></div>
        <!-- <nut-textinput
          placeholder="请输入密码"
          v-model="Pwdval"
          :hasBorder="false"
          @input="pwdchange"
          type="password"
        />-->
      </div>
      <nut-button block shape="circle" class="login_Btn" @click="LoginUser()">登录</nut-button>
      <div class="wj">
        <span>忘记密码？</span>
        <span @click="signIn">
          还没有账户？去注册</span>
      </div>
      <!-- <div class="btm_log">
        <div class="btm_title">
          <div class="btm_line"></div>
          <div class="btm_text">更多登录方式</div>
          <div class="btm_line"></div>
        </div>
        <div class="gpq">
          <span></span>
        </div>
        <div class="btm_name">
           <span>GP圈</span>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: "",
      password: ""
    };
  },
  mounted() {
    this.phone = "";
    this.password = "";
  },
  methods: {
    LoginUser(){
      this.$post("/api/login",{
        phone: this.phone,
        password:this.password
      }).then((res)=>{
        if(res.status=='success'){
          sessionStorage.setItem(
                "userInfo",
                JSON.stringify(res.data)
              );
             this.$router.push('/')
          if(res.data.role==1){
            this.$router.push('/project')
          }else if(res.data.role==2){
            this.$router.push('/Manage2')
          }
        }

      })
    },
    pwdchange() {
      console.log(this.Pwdval);
    },
    userclear(){
      this.Userval=""
    },
    pwdclear(){
      this.Pwdval=""
    },
    signIn(){
      console.log(this.$route.path)
      this.$router.push({path:'/Sign'});
    },
      back(){
            alert('header头部， 点击返回')
        }
  }
};
</script>

<style lang="scss" scoped>
.heade {
  line-height: 45px;
  display: flex;
  text-align: center;
}
.title {
  font-size: 25px;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(77, 77, 77, 1);
  line-height: 37px;
}
.center {
  padding: 26px 26px 0 32px;
}
.logBox {
  padding: 70px 0 26px 0;
}
.login_Btn {
  height: 54px;
  line-height: 54px;
  background-image: url("../../assets/image/btn.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.line {
  width: 100%;
  height: 2px;
  background: rgba(243, 243, 243, 1);
}
.wj {
  display: flex;
  justify-content: space-between;
  span {
    width: 125px;
    height: 26px;
    font-size: 10px;
    font-family: PingFang-SC-Regular;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
  }
}
.btm_title {
  display: flex;
  justify-content: center;
  align-items: center;
}
.btm_line {
  width: 30%;
  height: 2px;
  background: rgba(243, 243, 243, 1);
}
.btm_text {
  padding: 0 10px;
  color:#A3A3A3
}
.gpq {
  display: flex;
  justify-content: center;
  align-items: center;
  padding:10px;
  span {
    height: 54px;
    width: 54px;
    background-image: url("../../assets/image/gpq.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
}
.btm_name{
  display: flex;
  align-items: center;
  justify-content: center;
  color:#666666;
}
.user,
.pwd {
  width: 100%;
  height: 40px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: 14px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #dddfe6;
  border-width: 0;
  background-color: "#FFFFFF";
  padding: 0 30px 0 10px;
}
input:-webkit-autofill,
textarea:-webkit-autofill,
select:-webkit-autofill {
  background-color: rgb(0, 0, 0) !important;
  background-image: none !important;
  color: rgb(0, 0, 0) !important;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
  -webkit-box-shadow: 0 0 0px 1000px white inset !important;
}
.logBox {
  .userBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
}
.editable-clear-x {
  width: 11px;
  height: 11px;
  background-image: url("../../assets/image/esc.png");
  background-size: 100%;
}
.userBox .editable-clear-x {
  position: absolute;
  right: 10px;
  // float: right;
  display: none;
  // line-height: 40px;
}
.pwdBox {
  display: flex;
  // justify-content: space-between;
  align-items: center;
  position: relative;
  input {
    width: 85%;
  }
  .editable-clear-x {
    position: absolute;
    left: 80%;
    // float: right;
    display: none;
  }
  .look {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    .look_IMG {
      width: 17px;
      height: 9px;
    }
    // width: 17px;
    // height: 9px;
    // background-image: url("../../assets/image/look.png");
    // background-size:contain;
    // background-repeat: no-repeat;
    //  position: absolute;
    // right: 10px;
    // float: right;
  }
}

.user:valid + .editable-clear-x {
  display: inline;
}
.pwd:valid + .editable-clear-x {
  display: inline;
}
.pwdBox {
  background: #fff;
  .look {
    float: right;
  }
}
.line_IMG {
  padding-left: 5px;
  width: 1px;
}
.R_round_IMG{
  width: 400px;
  height: 400px;
  position: fixed;
  right: -200px;
  top:-200px;
}
.nut-navbar{
  background-color:transparent;
}
</style>
