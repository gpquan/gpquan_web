<template>
  <div v-if="pageStep == 1" style="position:relative;">
    <nut-navbar
      @on-click-back="back"
      @on-click-title="title"
      @on-click-more="more"
      :leftShow="false"
      :rightShow="false"
    >中国创投行业财务顾问登记</nut-navbar>
    <div class="list-body">
      <div class="list2">
        <div class="title2-box">
          <img src="../../assets/image/line1.png" alt class="line" />
          <span class="title-text">基本信息</span>
        </div>
        <div class="mechanism title3-box">
          <nut-textinput placeholder="请输入姓名" label="姓名" suffix="aaa" v-model="username" />
        </div>
        <div class="mechanism title3-box">
          <nut-textinput
            placeholder="请输入身份证号码"
            label="身份证号码"
            suffix="aaa"
            @blur="onBlur1"
            v-model="sfzNum"
          />
        </div>

        <div class="mechanism phoneNum title3-box" style="display:flex;align-items:center;position:relative;">
          <nut-textinput
            width="80%"
            placeholder="请输入手机号"
            label="手机号码"
            suffix="aaa"
            @blur="onBlur2"
            v-model="phoneNum"
          />
          <!-- <nut-button shape="circle" @click="clickHandler" small style="position:absolute;right:5px;">获取验证码</nut-button> -->
        </div>
        <!-- <div class="mechanism title3-box">
          <nut-textinput placeholder="请输入验证码" label="验证码" suffix="aaa" v-model="yzm" />
        </div> -->
        <!-- <div class="mechanism title3-box radioBox" style="min-height:6vh;line-height:6vh;">
          <span>工作性质</span>
          <nut-radiogroup
            v-model="radioGroupVal1"
            style="display: flex;justify-content: space-around;margin-left: 4rem;"
          >
            <nut-radio label="a" size="large">全职</nut-radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <nut-radio label="b" size="large">兼职</nut-radio>
          </nut-radiogroup>
        </div> -->
        <div class="mechanism title3-box">
          <nut-textinput placeholder="请输入单位名称" label="所在单位名称" suffix="aaa" v-model="comName" />
        </div>
        <div class="title3-box  titleH-box" @click="add_tag(1)">
          <span class="title-text">关注行业</span>
          <span class="add-icon" @click="()=>{isVisible=!isVisible}">&nbsp;+&nbsp;</span>
          <br />
          <template v-if="true">
            <el-tag
              v-for="tag in tags0"
              :key="tag.name"
              closable
              size="mini"
              :disable-transitions="false"
              @close="handleClose0(tag)"
            >{{tag}}</el-tag>
          </template>
        </div>
        <div class="title3-box1" @click="addO">
          <nut-cell :isLink="true" title="合作机构" desc="添加机构"></nut-cell>
        </div>
        <div class="OList title3-box" v-for=" (ii,indd) in OList" :key="indd">
          <nut-cell title="机构名称" :desc="ii.organ"></nut-cell>
          <nut-cell title="项目对接人" :desc="ii.organ_linkname"></nut-cell>
          <nut-cell title="已服务项目" :desc="ii.project"></nut-cell>
        </div>
        <!-- <div class="title3-box1" @click="addO1">
          <nut-cell :isLink="true" title="合作机构" desc="添加机构"></nut-cell>
        </div> -->
        <!-- <div class="OList title3-box" v-for="(itt,idd) in CList" :key="idd">
          <nut-cell title="机构名称" :desc="itt.organ"></nut-cell>
          <nut-cell title="联系人" :desc="itt.organ_linkname"></nut-cell>
        </div> -->
        <div class="mechanism title3-box" @click="checkTime()">
          <nut-cell title="从业时间" :desc="time" :showIcon="true"></nut-cell>

        </div>
      </div>
    </div>
    <div class="btn" @click="addOrgan_fun()">
      <nut-button block shape="circle">提交审核</nut-button>
    </div>

    <nut-datepicker
        :is-visible="timeShow"
        title="请选择日期"
        type="date"
        startDate="1990-01-01"
        defaultValue="2018-06-15"
        @close="switchPicker('timeShow')"
        @choose="setChooseValue2"
    >
    </nut-datepicker>

    <nut-picker
      :is-visible="isVisible"
      title="请选择关注行业"
      :list-data="listData"
      :default-value-data="defaultValueData"
      @close="switchPicker('isVisible')"
      @confirm="setChooseValue"
      @choose="updateChooseValue"
      @close-update="closeUpdateChooseValue"
    ></nut-picker>
    <!-- <nut-calendar
      :is-visible="timeShow"
      :default-value="time"
      type="one"
      :start-date="null"
      @close="switchPicker('timeShow')"
      @choose="setChooseValue2"
    ></nut-calendar> -->
    <div class="chuangjian" v-if="addOShow">
      <nut-navbar   @on-click-back="addONoshow" :rightShow="false">添加机构</nut-navbar>
      <nut-textinput
        label
        placeholder="请输入内容"
        :clearBtn="true"
        :disabled="false"
        v-model="Jgname"
        @input="changeName"
        class="query"
      />
      <ul v-if="dataList1.length>0" class="List">
        <li v-for="(item,ind) in dataList1" :key="ind" @click="checkItem(item)">{{item.name}}</li>
      </ul>
      <ul v-else class="List">
        <!-- <li @click="addProject">创建机构</li> -->
      </ul>
      <nut-dialog
        v-if="!hasCooperate"
        :title="jgName"
        :visible="dialogShow"
        @ok-btn-click="check"
        @cancel-btn-click="dialogShow=false"
        @close="dialogShow=false"
      >
        <nut-textinput
          v-model="fzr"
          label="项目对接人"
          placeholder="请输入项目对接人姓名"
          :clearBtn="false"
          :disabled="false"
          :hasBorder="false"
        />
        <nut-textinput
          v-model="xmName"
          label="已对接项目"
          placeholder="请输入项目名称"
          :clearBtn="false"
          :disabled="false"
          :hasBorder="false"
        />
      </nut-dialog>
      <nut-dialog
        v-else
        :title="jgName"
        :visible="dialogShow1"
        @ok-btn-click="check"
        @cancel-btn-click="dialogShow1=false"
        @close="dialogShow1=false"
      >
        <nut-textinput
          v-model="lxr"
          label="联系人"
          placeholder="请输入联系人姓名"
          :clearBtn="false"
          :disabled="false"
          :hasBorder="false"
        />
      </nut-dialog>
    </div>
       <div class="mark" v-if="SuccessShow">
      <div class="markBox">
        <div class="top">
          <img src="../../assets/image/success.png" alt />
        </div>
        <div class="btm">
          <div class="btmTitle" >登记完成</div>
          <br />
          <div class="btnBox">
            <nut-button type="default" shape="circle" small class="BtmBtn" @click="close">关闭</nut-button>
          </div>
        </div>
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
      inputValue: "",
      pageStep: 1,
      editDescription: "",
      User_ChossStage: "", //用户选择轮次id
      comName: "", //公司名称
      sfzNum: "", //身份证号码
      phoneNum: "", //电话号码
      username: "", //用户
      yzm: "", //验证码
      radioGroupVal1: null, //全职or兼职
      is_show: false,
      name: "", //机构名称
      description: "请输入个人简介", //机构简介
      address: "", //机构所在地
      imageUrl: "",
      date: null,
      isVisible0: false,
      city: null,
      isVisible: false,
      isVisible1: false,
      isVisible2: false,
      tags: [], //第二个
      tags0: [], //第一个
      data: {
        //二级
      },
      curData:'',
      listData: [],
      defaultValueData: null,
      isVisible1: false,
      defaultValueData1: null,
      list2: {},
      value: null,
      value1: null,
      MaxList: "",
      listData1: [],
      lyIdList0: [],
      lyIdList1: [],
      st_2_list: "",
      selectJobId: "", //领域id
      rou_name: "ManageP_add",
      userId: null,
      infoStatus: false,
      time: null,
      timeShow: false, //日历开关,
      nameShow: null,
      OList: [],
      jgName: null, //机构名称
      fzr: null, //负责人
      xmName: null, //项目名称
      dialogShow: false,
      dialogShow1: false,
      dataList1: [],
      Jgname: null,
      Pid: null,
      UserId: null,
      Rtype: null,
      UserInfo: {},
      Oid: null, //已合作机构id
      addOShow: false, //添加机构 显示隐藏
      hasCooperate: null,
      CId: null, //合作机构id
      lxr: null, //联系人
      CList: [], //合作列表
      SuccessShow:false,
    };
  },
  computed: {},
  created() {},
  beforeMount() {
    this.$post("/api/getLingyu").then(res => {
      this.listData[0] = [];
      for (let i = 0; i < res.data.length; i++) {
        this.listData[0].push(res.data[i].name);
        this.lyIdList0.push(res.data[i].id);
      }
      this.$post("/api/getLingyu", {
        parent_id: 1
      }).then(res2 => {
        let arr = res2.data;
        let arrlist = [];
        for (let j = 0; j < arr.length; j++) {
          arrlist.push(res2.data[j].name);
        }
        this.data[this.listData[0][0]] = arrlist;
        this.listData = [...[this.listData[0]], this.data[this.listData[0][0]]];

        arrlist = [];
      });
    });

    this.$post("/api/getStage", {}).then(res => {
      this.listData1[0] = [];
      for (let i = 0; i < res.data.length; i++) {
        this.listData1[0].push(res.data[i].name);
        this.lyIdList1.push(res.data[i].id);
      }
    });
  },
  mounted: function() {
    this.description = this.$route.params.description;
  },

  methods: {
    close() {
      this.SuccessShow = false;
      // this.$router.push("/");
    },
    addProject() {},
    changeName() {
      //模糊查询 机构列表
      this.$post("/api/searchOrgan", { organName: this.Jgname }).then(res => {
        this.dataList1 = res.data;
      });
    },
    checkItem(item) {
      console.log(item);
      if (!this.hasCooperate) {
        this.Oid = item.id;
        this.jgName = item.name;
        this.dialogShow = true;
      } else {
        this.Cid = item.id;
        this.jgName = item.name;
        this.dialogShow1 = true;
      }
    },
    check(item) {
      if (!this.hasCooperate) {
        this.OList.push({
          organ: this.jgName,
          organ_id: this.Oid,
          organ_linkname: this.fzr,
          project_id: 0,
          project: this.xmName
        });
        this.dialogShow = false;
        this.addOShow = false;
        this.jgName = "";
        this.Oid = "";
        this.fzr = "";
        this.xmName = "";
        this.Jgname = "";
        this.dataList1 = [];
      } else {
        this.CList.push({
          organ: this.jgName,
          organ_id: this.Cid,
          organ_linkname: this.lxr,
          project_id: 0,
          project: ""
        });
        this.Jgname = "";
        this.dialogShow1 = false;
        this.addOShow = false;
        this.jgName = "";
        this.lxr = "";
        this.Cid = "";
        this.dataList1 = [];
      }
    },
    addONoshow(){
         this.addOShow = false;
    },
    addO1() {
      // 添加合作机构
      this.addOShow = true;
      this.hasCooperate = true;
    },
    addO() {
      // 添加已合作
      this.addOShow = true;
      this.hasCooperate = false;
    },
    clickHandler() {
      //获取手机验证码
    },
    setChooseValue2(param) {
      this.time = param[3];
      console.log(this.time);
    },
    checkTime() {
      this.timeShow = true;
      //选择日期
    },

    handleClose0(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    onBlur1() {
      var val = this.sfzNum;
      var _this = this;
      var regPos = /^\d+(\.\d+)?$/; //非负浮点数
      var regNeg =/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; //负浮点数
      if (regPos.test(val) || regNeg.test(val)) {
        return true;
      } else {
        _this.sfzNum = "";
        this.$message.error("请填写数字");
        // console.log(2222);
      }
    },
    onBlur2() {
      var val = this.phoneNum;
      var _this = this;
      var regPos = /^\d+(\.\d+)?$/; //非负浮点数
      var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
      if (regPos.test(val) || regNeg.test(val)) {
        return true;
      } else {
        _this.phoneNum = "";
        this.$message.error("请填写数字");
        // console.log(2222);
      }
    },

    //后台传递数据
    addOrgan_fun() {
      console.log(this.OList);
      // if()
      // this.phoneNum;//手机号
      // this.username;//用户名
      // this.comName;//公司名称
      // this.selectJobId;//领域id
      // this.time;//从业时间
      // this.sfzNum;//身份证号码
      // this.CList;//合作机构 []
      // this.OList;//已合作机构 []
      if (this.username == "") {
        this.$toast.warn("请填写用户名");
      } else if (this.sfzNum == "") {
        this.$toast.warn("请填写身份证号码");
      } else if (this.phoneNum == "") {
        this.$toast.warn("请输入手机号码");
      } else if (this.radioGroupVal1 == "a" && this.comName == "") {
        this.$toast.warn("公司名称");
      } else if (this.selectJobId == "") {
        this.$toast.warn("请选择行业");
      } else if (this.OList == []&&this.CList == []) {
        this.$toast.warn("请添加合作机构");
      }  else {
        this.$post("/api/recordFaInformation", {
          phone: this.phoneNum,
          organ1: JSON.stringify(this.OList.concat(this.CList)),
          name: this.username,
          id_card: this.sfzNum,
          hangye: this.selectJobId,
          work_time: this.time,
          company: this.comName
        }).then(res => {
            console.log(res);
            this.$toast.text('操作成功');
            this.SuccessShow=true
        });
      }
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
        console.log("fail");
      }
    },
    getlist() {
      this.$post("/api/getProjectInvestProgress", {
        save_text: this.textarea,
        current_tip_id: this.current_tip_id
      }).then(res => {
        if (res.status == "success") {
          alert("成功");
          this.showPop(2);
          this.getDetails();
        } else {
          this.sta = true;
          this.textarea = "";
          alert(res.error.message);
          this.showPop(2);
        }
      });
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
      alert("header头部， 点击title");
    },
    more() {
      alert("header头部， 点击更多");
    },
    // switchPicker(param) {
    //   this.is_show = false;
    // },
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
      $(".titleH-box").css("min-height", "12vh");
      this.tags0.push(this.city);
      // console.log(this.tags0);

      var step_2_val = chooseData[1];
      var step_2_list = JSON.parse(JSON.stringify(this.st_2_list.data));
      var indexId = "";
      for (var i in step_2_list) {
        if (step_2_list[i]["name"] == step_2_val) {
          indexId = step_2_list[i]["id"];
          // console.log(step_2_list[i]['id'])
          break;
        }
      }
      this.selectJobId += indexId + ","; //选的行业id

      // this.selectJobId.push(indexId);
      console.log(this.selectJobId);
      console.log(this.city);
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
        this.$forceUpdate();
        arrlist = [];
        index < 1 && this.updateLinkage(self, value, index + 1, null, a, b);
      });
      //  setTimeout(()=>{

      //  },300)
    },
    closeUpdateChooseValue(self, chooseData) {
      this.updateLinkage(self, chooseData[0], 1, chooseData[1], chooseData);
    }
  },
  watch: {
    radioGroupVal1(n, o) {
      console.log(n, o);
      if (n == "a") {
        this.nameShow = true;
      } else {
        this.nameShow = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/.nut-radio input:checked {
  background-color: #ccc;
  border-color: #ccc;
}
/deep/.nut-button.block {
  width: 80%;
}
.line {
  height: 5vmin;
}
/deep/.nut-cell-right > .nut-cell-desc {
  overflow: hidden;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  width: 60vw;
  text-align: right;
}

/deep/.nut-button {
  background: skyblue;
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

/deep/.nut-textinput > input {
  text-align: right;
  font-size: 13px;
}

/deep/.nut-cell-left > span {
  font-size: 16px !important;
}

/deep/.nut-cell-right > span {
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
  border: 1px solid skyblue;
  height: 2vh;
  line-height: 8vh;
  margin-left: 65vw;
  color: skyblue;
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
  font-size: 16px;
}

.title-box,
.title2-box,
.title3-box,
.title4-box,
.title5-box,
.titleH-box{
  margin-top: 3%;
  padding-left: 3%;
  border-bottom: 1px solid #efefef;
  min-height: 8vh;
  background: #fff;
}
// .titleH-box{
//   min-height: 12vh;
// }
/deep/.title3-box1 .nut-cell-box {
  min-height: 8vh;
  background: #fff;
  margin-top: 3%;
  padding-left: 3%;
}
.mechanism {
  background: #fff;
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
  border-color: #409eff;
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

.el-tag + .el-tag {
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
.lightspotBox,
.Project {
  height: 100%;
}
/deep/.phoneNum {
  input {
    width: 80%;
  }
}
.query {
  margin-top: 10px;
}
.List {
  // background: #ccc;
  margin-top: 10px;
  li {
    border-bottom: 1px solid #ccc;
    line-height: 6vh;
    text-align: center;
  }
}
.chuangjian {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
}
.radioBox{
    display: flex;
    flex-direction: row;
    padding-left: 20px;
}
.nut-navbar {
    line-height: 58px;
    background-color: #fff;
    position: relative;
}

[data-v-aba8e23a] .nav-title{
  font-size:15px !important;
}
.mark {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.markBox {
  width: 70%;
  // height: 60%;
  padding: 5% 3%;
  position: relative;
  background: #fff;
  border-radius: 10px;
  img {
    width: 100%;
  }
}
.btmTitle {
  font-size: 20px;
  font-weight: 600;
  text-align: center;
}
.btnBox {
  // position: absolute;
  // bottom: 5%;
  // width: 94%;
  display: flex;
  justify-content: center;
  margin-top: 35px;
  button {
    width: 60%;
    margin-bottom: 20px;
    background: linear-gradient(to right, #4690ff, #2c72f8); /* 标准的语法 */
    border: 0;
    color: #fff;
    padding: 5px 0;
  }
}
</style>
