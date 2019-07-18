<template>
  <!-- 已审核列表 -->
  <div>
    <ul class="list">
      <li v-for="(item,index) in dataList" :key="index" class="item">
        <div class="Itemtitle">
          <img src="../../assets/image/line1.png" alt class="line" />
          &nbsp;
          <span class="FAname">{{item.name}}</span>

          <span class="xmfzr">项目联系人：{{item.lxr}}</span>
        </div>
        <div class="center"  v-if="!item.showall">
          <div
            v-for="(items,ind) in item.xmList.length>3?3:item.xmList.length"
            :key="ind"
            class="items"
          >
            <div class="left">
              <img src="../../assets/image/right-title-portrait.png" alt class="xmLogo" />
              <span>{{item.xmList[ind].xmName}}</span>
            </div>
            <div class="right">
              <span v-if="item.xmList[ind].status==1" class="sh">已审核</span>
              <span v-else class="wsh">未审核</span>
            </div>
          </div>
          <div class="btm" v-if="item.xmList.length>3">
            <span @click="ShowAll(item,index)">{{textTips1}}</span>
            <span :class="textTips2"></span>
          </div>
        </div>
         <div class="center" v-else>
          <div
            v-for="(items,ind) in item.xmList.length"
            :key="ind"
            class="items"
          >
            <div class="left">
              <img src="../../assets/image/right-title-portrait.png" alt class="xmLogo" />
              <span>{{item.xmList[ind].xmName}}</span>
            </div>
            <div class="right">
              <span v-if="item.xmList[ind].status==1" class="sh">已审核</span>
              <span v-else class="wsh">未审核</span>
            </div>
          </div>
          <div class="btm" v-if="item.xmList.length>3">
            <span @click="ShowAll(item,index)">{{textTips1}}</span>
            <span :class="textTips2"></span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "audit",
  data() {
    return {
      textTips1:"展开查看",
      textTips2:"downIcon",
      dataList: [
        {
          name: "杰克",
          lxr: "jf",
          showall: false,
          xmList: [
            {
              logoImg: "../../assets/image/right-title-portrait.png",
              xmName: "通罗马",
              status: 1
            },
            {
              logoImg: "../../assets/logo.png",
              xmName: "项目",
              status: 1
            },
            {
              logoImg: "../../assets/image/right-title-portrait.png",
              xmName: "通罗马",
              status: 1
            },
            {
              logoImg: "../../assets/logo.png",
              xmName: "项目",
              status: 1
            }
          ]
        },
        {
          name: "卢卡斯",
          lxr: "jf",
          showall: false,
          xmList: [
            {
              logoImg: "../../assets/logo.png",
              xmName: "小天气",
              status: 1
            }
          ]
        }
      ]
    };
  },
  methods: {
    ShowAll(item, index) {
      this.dataList[index].showall = !this.dataList[index].showall;
      if(this.dataList[index].showall){
         this.textTips1="收起更多"
          this.textTips2="upIcon"
      }else{
         this.textTips1="展开查看"
          this.textTips2="downIcon"
      }

      console.log(item);
    }
  }
};
</script>

<style lang="scss" scoped>
.line {
  vertical-align: middle;
  line-height: 6vh;
  height: 2vh;
}
.list {
  margin: 0 3vw;

  .item {
    margin-top: 2vh;
    background: #fff;
        box-shadow: 0px 0px 5px rgba(1, 1, 1, 0.15);
    padding: 2vw;
    border-radius: 2vw;
  }
}
.Itemtitle {
  position: relative;
  border-bottom: 1px solid #ccc;
  padding: 0 2vw;
  line-height: 5vh;
  .xmfzr {
    position: absolute;
    right: 2vw;
    color:#666;
  }
}
.center {
  padding: 2vw 2vw;
}
.xmLogo {
  height: 80%;
}
.items {
  height: 10vh;
  display: flex;
  justify-content: space-between;
  .left,
  .right {
    display: flex;
    align-items: center;
  }
  .left span {
    margin-left: 1vw;
  }
  .right {
    padding-top: 0;
  }
}
.sh {
  color: #ffa800;
  border: 1px solid #ffa800;
}
.wsh {
  color: #f23353;
  border: 1px solid #f23353;
}
.sh,.wsh{
  padding: 2px 5px;
}
.btm{
    height: 5vh;
   display: flex;
   align-items: center;
   justify-content: space-between;
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
.FAname{
  font-size:18px;
}
</style>
