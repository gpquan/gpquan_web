<template>
  <div>
    <nut-navbar @on-click-back="back" :rightShow="false">快速创建</nut-navbar>
    <nut-textinput
      label
      placeholder="请输入内容"
      :clearBtn="true"
      :disabled="false"
      v-model="Qyname"
      @input="changeName"
      class="query"
    />
    <ul v-if="dataList.length>0" class="List">
      <li v-for="(item,ind) in dataList" :key="ind" @click="check(item)">{{item.name}}</li>
    </ul>
    <ul v-else class="List">
      <li @click="addProject">创建项目</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [],
      Qyname: null,
      Oid: null,
      UserId: null
    };
  },
  beforeMount() {
    this.Oid = this.$route.query.id;
    this.userId = JSON.parse(sessionStorage.getItem("userInfo")).id;
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    changeName() {
      this.$post("/api/searchProject", { projectName: this.Qyname }).then(
        res => {
          this.dataList = res.data;
          console.log(res);
        }
      );
    },
    check(item) {
        let _this=this
      this.$dialog({
        title: "是否添加<b style='color:#f45551'>"+item.name+'</b>项目',
        closeBtn: true, //显式右上角关闭按钮
        onOkBtn(event) {
          //确定按钮点击事件
          if (_this.Oid) {
            _this.$post("/api/addUserOrganProject", {
              userId: _this.userId,
              organId: _this.Oid,
              projectId: item.id
            }).then(res => {
              console.log(res);
              if (res.status == 'error') {
                  this.$toast.text(res.error.message);
                  return;
              }
              _this.$router.go(-1);
            });
          } else {
            _this.$post("/api/addUserProject", {
              userId: _this.userId,
              projectId: item.id
            }).then(res => {
              console.log(res);
              if (res.status == 'error') {
                  this.$toast.text(res.error.message);
                  return;
              }
              _this.$router.go(-1);
            });
          }
          this.close(); //关闭对话框
        },
        onCancelBtn(event) {
          //取消按钮点击事件，默认行为关闭对话框
          //   alert("cancelBtn");
          //return false;  //阻止默认“关闭对话框”的行为
        },
        onCloseBtn(event) {
          //右上角关闭按钮点击事件
          //   alert("closeBtn");
          //return false;  //阻止默认“关闭对话框”的行为
        },
        closeCallback(target) {
          //   alert("will close"); //对话框关闭回调函数，无论通过何种方式关闭都会触发
        }
      });
      //   console.log(item);
      //   console.log(this.Oid);
      //   console.log(this.userId);
    },
    setP() {
      if (this.Oid) {
        this.$post("/api/addUserOrganProject", {
          userId: this.userId,
          organId: this.Oid,
          projectId: item.id
        }).then(res => {
          console.log(res);
          if (res.status == 'error') {
              this.$toast.text(res.error.message);
              return;
          }
          this.$router.go(-1);
        });
      } else {
        this.$post("/api/addUserProject", {
          userId: this.userId,
          projectId: item.id
        }).then(res => {
          console.log(res);
          if (res.status == 'error') {
              this.$toast.text(res.error.message);
              return;
          }
          this.$router.go(-1);
        });
      }
    },
    addProject() {
      this.$router.push({
        path: "/project/addProject",
        query: {
          name: this.Qyname,
          typeID: this.Oid //快速创建 跳转创建
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
