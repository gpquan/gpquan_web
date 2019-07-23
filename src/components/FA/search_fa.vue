<template>
  <div>
    <!-- <nut-navbar @on-click-back="back" :leftShow="false" :rightShow="false">中国创投行业财务顾问信息查询</nut-navbar> -->
    <ul class="title_box">
        <li class="title_center">中国创投行业财务顾问</li>

        <li class="title_center">(FA)信息查询平台</li>
    </ul>
    <nut-textinput
      label
      placeholder="请输入FA姓名"
      :clearBtn="true"
      :disabled="false"
      v-model="Jgname"
      @input="changeName"
      class="query"
    />

    <div v-if="dataList == null">
        <div class="hot_search" >热门搜索</div>

        <ul  class="ListBox">
            <li class="fa_style" v-for="(item, index) in faUsers" :key="index">{{item}}</li>
        </ul>
    </div>

    <ul  class="List" v-else-if="dataList.length > 0">
        <li v-for="(item,ind) in dataList" :key="ind" @click="check(item)">
            <div>姓名：{{item.name}}</div>
            <div class="rzBox">
              <div class="rz_title">认证机构:</div>
              <div class="O_list">
                  <span v-for="(organ, oIndex) in item['organ']" class="organ_tag">{{organ.name}}</span>
              </div>
            </div>
        </li>
    </ul>

    <ul v-else>
      <li class="no_data">暂无数据</li>
    </ul>


  </div>
</template>

<script>
import { once } from "events";
export default {
  data() {
    return {
      dataList: null,
      Jgname: null,
      Pid: null,
      UserId: null,
      Rtype: null,
      UserInfo:{},
      faUsers : [
          '徐升',
          '杨明',
          '李超',
          '姜峰',
          '刘强',
          '李永乐',
          '陈中平',
          '刘鑫银',
          '李超'
      ],
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
      if (this.Jgname == "") {
         this.dataList = [];

         return;
      }

      this.$post("/api/searchAuthFa", { faName: this.Jgname }).then(res => {
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
.showBox{
  background:#ffffff;
}
.query {

    padding: 10px;
    /deep/input{
        background:#f5f6fa;
        height: 50px;
        font-size:18px;
    }
}
.List {
  li {
    width: 90%;
    margin:0 auto;
    border-bottom: 1px solid #fff;
    line-height: 30px;
    padding:10px;
    background: #f5f9fc;
    margin-top:10px
  }
  .organ_tag{
      width:  16vw;
      text-align:center;
      background:#f5f9fc;
      margin:5px 5px;
      color:#999;
      padding:3px 5px;
  }
}
.title_box{
    margin-top:20px;
    margin-bottom: 10px;

    .title_center{
        color:#999;
        text-align: center;
        font-size:20px;
    }
}
.hot_search{
    font-size: 20px;
    padding: 10px;

}
.ListBox{
    display: flex;
    flex-direction:row;
    padding:0 5vw;
    flex-wrap: wrap;
    justify-content: space-between;
}
.fa_style{
  width:  16vw;
  text-align:center;
  background:#f5f9fc;
  margin:5px 5px;
  color:#999;
  padding:3px 5px;
}
.no_data{
    text-align: center;
    font-size: 20px;
    margin-top: 50px;
    color: #999999;
}
.rzBox{
  display:flex;
  flex-direction:row;
}
.rz_title{
  min-width: 80px;
  padding-top:8px;
}
.O_list{
  display:flex;
  flex-wrap:wrap;
}
</style>
