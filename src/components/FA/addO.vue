<template>
  <div>
    <nut-navbar @on-click-back="back" :rightShow="false">快速创建</nut-navbar>
    <nut-textinput
      label
      placeholder="请输入内容"
      :clearBtn="true"
      :disabled="false"
      v-model="Jgname"
      @input="changeName"
      class="query"
    />
    <ul v-if="dataList.length>0" class="List">
      <li v-for="(item,ind) in dataList" :key="ind" @click="checkItem(item)">{{item.name}}</li>
    </ul>
    <ul v-else class="List">
      <li @click="addProject">创建机构</li>
    </ul>
    <nut-dialog
      :title="jgName"
      :visible="dialogShow"
      @ok-btn-click="check"
      @cancel-btn-click="dialogShow=false"
      @close="dialogShow=false"
    >
      <nut-textinput
        v-model="fzr"
        label="负责人"
        placeholder="请输入负责人姓名"
        :clearBtn="false"
        :disabled="false"
        :hasBorder="false"
      />
      <nut-textinput
        v-model="xmName"
        label="项目名称"
        placeholder="请输入项目名称"
        :clearBtn="false"
        :disabled="false"
        :hasBorder="false"
      />
      <!-- <a href="javascript:;" @click="dialogShow=false" :noCancelBtn="true">点我可以直接关闭对话框</a> -->
    </nut-dialog>
  </div>
</template>

<script>
import { once } from "events";
export default {
  data() {
    return {
      jgName: null, //机构名称
      fzr: null, //负责人
      xmName: null, //项目名称
      dialogShow: false,
      dataList: [],
      Jgname: null,
      Pid: null,
      UserId: null,
      Rtype: null,
      UserInfo: {},
      Oid: null
    };
  },
  beforeMount() {
    this.Pid = this.$route.query.id;
    this.Rtype = this.$route.query.type;
    this.userId = JSON.parse(sessionStorage.getItem("userInfo")).id;
    if (this.Rtype == "Fa") {
      this.$post("/api/getUserDetail", {
        //用户基本信息
        id: this.userId
      }).then(res => {
        this.UserInfo = res.data.info;
      });
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    changeName() {
      this.$post("/api/searchOrgan", { organName: this.Jgname }).then(res => {
        this.dataList = res.data;
        console.log(res);
      });
    },
    checkItem(item) {
      this.Oid = item.id;

      this.jgName = item.name;
      this.dialogShow = true;
    },
    check(item) {
      this.dialogShow = false;
      this.$router.push({
        name: "fa_register",
        params: {
          Oid: this.Oid,
          fzr: this.fzr,
          xmName: this.xmName,
          jgName: this.jgName
        }
      });
    },
    onCancelBtn(event) {
      //取消按钮点击事件，默认行为关闭对话框
      // alert("cancelBtn");
      //return false;  //阻止默认“关闭对话框”的行为
    },
    onCloseBtn(event) {
      //右上角关闭按钮点击事件
      // alert("closeBtn");
      //return false;  //阻止默认“关闭对话框”的行为
    },
    addProject() {
      this.$router.push({
        path: "/faRegister"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.query {
  margin-top: 10px;
}
.List {
  background: #ccc;
  margin-top: 10px;
  li {
    border-bottom: 1px solid #fff;
    line-height: 30px;
  }
}
</style>