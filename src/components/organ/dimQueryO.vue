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
      <li v-for="(item,ind) in dataList" :key="ind" @click="check(item)">{{item.name}}</li>
    </ul>
    <ul v-else class="List">
      <li @click="addProject">创建机构</li>
    </ul>
  </div>
</template>

<script>
import { once } from "events";
export default {
  data() {
    return {
      dataList: [],
      Jgname: null,
      Pid: null,
      UserId: null,
      Rtype: null,
      UserInfo:{},
    };
  },
  beforeMount() {
    this.Pid = this.$route.query.id;
    this.Rtype = this.$route.query.type;
    this.userId = JSON.parse(sessionStorage.getItem("userInfo")).id;
    if(this.Rtype=='Fa'){
      this.$post('/api/getUserDetail',{  //用户基本信息
        id:this.userId
      }).then((res)=>{
        this.UserInfo=res.data.info
      })
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
    check(item) {
      let _this = this;
      this.$dialog({
        title: "是否添加<b style='color:#f45551'>" + item.name + "</b>机构",
        closeBtn: true, //显式右上角关闭按钮
        onOkBtn(event) {
          //确定按钮点击事件
          if (_this.Rtype == "Fa") {
            if (_this.Pid) {
              _this
                .$post("/api/addUserOrgan", {
                  userId: _this.Pid,
                  organId: item.id
                  // projectId: _this.Pid
                })
                .then(res => {
                  _this
                    .$post("/api/addUserOrganProject", {
                      userId:  _this.Pid,
                      organId: item.id,
                      projectId: _this.UserInfo.id
                    })
                    .then(res => {
                      console.log(res);
                      if (res.status == 'error') {
                          this.$toast.text(res.error.message);
                          return;
                      }
                      _this.$router.go(-1);
                    });
                  // _this.$router.go(-1);
                });
            }
          } else {
            if (_this.Pid) {
              _this
                .$post("/api/addUserOrganProject", {
                  userId: _this.userId,
                  organId: item.id,
                  projectId: _this.Pid
                })
                .then(res => {
                  console.log(res);
                  if (res.status == 'error') {
                      this.$toast.text(res.error.message);
                      return;
                  }
                  _this.$router.go(-1);
                });
            } else {
              _this
                .$post("/api/addUserOrgan", {
                  userId: _this.userId,
                  organId: item.id
                })
                .then(res => {
                  console.log(res);
                  if (res.status == 'error') {
                      this.$toast.text(res.error.message);
                      return;
                  }
                  _this.$router.go(-1);
                });
            }
          }

          this.close(); //关闭对话框
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
        }
      });
    },
    addProject() {
      this.$router.push({
        path: "/accelerate/Manage/o/add",
        query: {
          name: this.Jgname,
          typeID: this.Pid
        }
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
