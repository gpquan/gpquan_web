<template>
  <div class="signBox">
    <img src="../../assets/image/R_round.png" alt="" class="R_round_IMG">
    <div class="heade">
      <span class="backBox" @click="back">
        <img src="../../assets/image/arrow.png" alt class="left_icon">
      </span>
      <span class="sign_title">注册</span>
      <span></span>
    </div>
    <div class="sign_center">
      <div class="userBox">
        <input
          type="text"
          v-model="Userval"
          style="boder:none"
          class="user"
          placeholder="请输入手机号/邮箱"
          required
        >
        <span class="editable-clear-x" @click="userclear">
          <!-- <nut-icon type="circle-cross" color="#f0250f"></nut-icon> -->
        </span>
      </div>
      <div class="line"></div>
      <div class="pwdBox">
        <input :type="Pwdisshow?'password':'text'" class="pwd" v-model="Pwdval" required>
        <span class="editable-clear-x" @click="pwdclear"></span>
        <img src="../../assets/image/line.png" alt class="line_IMG">
        <em class="look">
          <img src="../../assets/image/look.png" alt class="look_IMG" @click="isLookPwd">
        </em>
      </div>
      <div class="line"></div>
      <div class="againPwd">
        <input
          :type="Pwdisshow?'password':'password'"
          class="pwd2"
          v-model="Pwdval2"
          required
          :placeholder="pwd2placehold?'请再次输入密码':''"
        >
      </div>
      <div class="line"></div>
      <div class="getyYZM">
        <input type="number" class="yzm" v-model="yzCode" required placeholder="验证码">
        <div class="getyzCode">获取验证码</div>
      </div>
      <div class="line"></div>
      <div class="sf" @click="getSF">
        <span>请选择身份</span>
        <span class="get_sf">
          <span>{{sf}}</span>
          <img src="../../assets/image/arrow.png" alt class="getSF_IMG">
        </span>
      </div>
      <nut-picker
        :is-visible="isVisible"
        :list-data="listData1"
        @close="switchPicker('isVisible')"
        @confirm="setYearValue"
      ></nut-picker>
      <div class="line"></div>
      <div class="sign_BtnBox">
        <nut-button block shape="circle" class="sign_Btn">注册</nut-button>
      </div>
      <div class="xggd">
        <nut-checkbox v-model="ifLook" @changeEvt="checkboxChange">&nbsp;我已阅读平台相关规定</nut-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sign",
  data() {
    return {
      ifLook: false,
      Userval: "",
      Pwdval: "",
      Pwdval2: "",
      yzCode: "",
      sf: null,
      isVisible: false,
      Pwdisshow: true,
      pwd2placehold: true,
      listData1: [
        ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"]
      ]
    };
  },
  created() {},
  methods: {
    isLookPwd() {
      this.Pwdisshow = !this.Pwdisshow;
      this.pwd2placehold = !this.pwd2placehold;
    },
    back() {
      this.$router.go(-1);
    },
    pwdclear() {
      this.Pwdval = "";
    },
    userclear() {
      this.Userval = "";
    },
    switchPicker(param) {
      this[`${param}`] = !this[`${param}`];
    },
    setYearValue(chooseData) {
      this.sf = `${chooseData[0]}年`;
      console.log(chooseData);
    },
    modifyYear() {
      this.defaultValueData = ["2018"];
    },
    getSF() {
      this.isVisible = true;
    },
    checkboxChange() {}
  }
};
</script>

<style lang="scss" scoped>
.left_icon {
  width: 9px;
  height: 17px;
  transform: rotate(180deg);
  -ms-transform: rotate(180deg); /* IE 9 */
  -moz-transform: rotate(180deg); /* Firefox */
  -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
  -o-transform: rotate(180deg); /* Opera */
}
.heade {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  .backBox {
    width: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sign_title {
    flex: 1;
    text-align: center;
    text-indent: -20px;
  }
}
.sign_center {
  padding: 30px 31px 0 32px;
}
input {
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
  background-color: transparent;
  padding: 0 30px 0 10px;
  color: #ccc;
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
.editable-clear-x {
  width: 11px;
  height: 11px;
  background-image: url("../../assets/image/esc.png");
  background-size: 100%;
}
.userBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
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
  }
}
.user:valid + .editable-clear-x {
  display: inline;
}
.pwd:valid + .editable-clear-x {
  display: inline;
}
.line_IMG {
  padding-left: 5px;
  width: 1px;
}
.line {
  width: 100%;
  height: 2px;
  background: rgba(243, 243, 243, 1);
}
.getyYZM {
  display: flex;
  align-items: center;
  .yzm {
    width: 70%;
  }
  .getyzCode{
      color:#ccc;
  }
}
.sf {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-indent: 10px;
  color: #ccc;
  .get_sf {
    display: flex;
    align-items: center;
  }
  .getSF_IMG {
    width: 9px;
    height: 16px;
  }
}
.sign_BtnBox {
  padding: 32px 0 34px 0;
}
.sign_Btn {
  height: 54px;
  line-height: 54px;
  background-image: url("../../assets/image/btn.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
/deep/.nut-checkbox.nut-checkbox-size-base input {
  border-radius: 50%;
}
/deep/.nut-checkbox input:checked {
  background-color: #f45551;
  border-color: #f45551;
}
.xggd {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666666;
}
input[type="password"] {
  font-size: 20px;
}
.pwd2::-webkit-input-placeholder{
    font-size: 14px;
}
input[type="text"] {
  font-size: 14px;
}
input::-webkit-input-placeholder {
  font-size: 14;
  color: #ccc;
}
.R_round_IMG{
  width: 400px;
  height: 400px;
  position: fixed;
  right: -200px;
  top:-200px;
}
</style>