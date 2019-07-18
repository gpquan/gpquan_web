<template>
  <div class="manageBox">
  <div style="height:100%;">
       <ul class="tab">
      <li v-for="(item,ind) in tabLink" :key="ind" @click="tabClick(ind)"  :class="IND==ind?'active':''">
        <span>
          {{item.name}}
          <b>
          <em></em>
        </b>
        </span>
      </li>
    </ul>
    <!-- <keep-alive> -->
    <!-- </keep-alive> -->
      <div class="FaAudBox">
    <nut-scroller
      :is-un-more="isUnMore1"
      :is-loading="isLoading1"
      :type="'vertical'"
      @loadMore="loadMoreVert"
      @pulldown="pulldown"
    >
      <ul class="list nut-vert-list-panel" slot="list">
        <li v-for="(item,index) in dataList" :key="index" class="item nut-vert-list-item">
          <div class="Itemtitle nut-scroller-item-info">
            <img src="../../assets/image/line1.png" alt class="line" />
            &nbsp;
            <span class="FAname" @click="changeStatus(item,index,0,1)">{{item.name}}</span>
              &nbsp;
            <!-- <span>+</span> -->
            <span class="xmfzr">项目联系人：{{item.fa_name}}</span>
          </div>
          <div class="center" v-if="!item.showall">
            <div
              v-for="(items,ind) in item.projects.length>3?3:item.projects.length"
              :key="ind"
              class="items"
            >
              <div class="left">
                <!-- <img src="../../assets/image/right-title-portrait.png" alt class="xmLogo" /> -->
                <span>{{item.projects[ind].project}}</span>
              </div>
              <div class="right">
                <span v-if="item.projects[ind].auth==0" class="wsh" @click="changeStatus(item.projects[ind],index,ind,2)">未审核</span>
                <span v-if="item.projects[ind].auth==1" class="sh" @click="changeStatus(item.projects[ind],index,ind,2)">已通过</span>
                <span v-if="item.projects[ind].auth==2" class="sh" @click="changeStatus(item.projects[ind],index,ind,2)">未通过</span>
              </div>
            </div>
            <div class="btm" v-if="item.projects.length>3">
              <span @click="ShowAll(item,index)">{{textTips1}}</span>
              <span :class="textTips2"></span>
            </div>
          </div>
          <div class="center" v-else>
            <div v-for="(items,ind) in item.projects.length" :key="ind" class="items">
              <div class="left">
                <img src="../../assets/image/right-title-portrait.png" alt class="xmLogo" />
                <span>{{item.projects[ind].project}}</span>
              </div>
              <div class="right">
               <span v-if="item.projects[ind].auth==0" class="wsh" @click="changeStatus(item.projects[ind],index,ind,2)">未审核</span>
                <span v-if="item.projects[ind].auth==1" class="sh" @click="changeStatus(item.projects[ind],index,ind,2)">已通过</span>
                <span v-if="item.projects[ind].auth==2" class="sh" @click="changeStatus(item.projects[ind],index,ind,2)">未通过</span>
              </div>
            </div>
            <div class="btm" v-if="item.projects.length>3">
              <span @click="ShowAll(item,index)">{{textTips1}}</span>
              <span :class="textTips2"></span>
            </div>
          </div>
        </li>
      </ul>
    </nut-scroller>
    <nut-actionsheet
      :is-visible="isVisible1"
      @close="switchActionSheet('isVisible1')"
      cancelTxt="取消"
      :menu-items="menuItems2"
      @choose="chooseItemAgeSpec"
    ></nut-actionsheet>

    <nut-actionsheet
      :is-visible="isVisible"
      @close="switchActionSheet1('isVisible')"
      cancelTxt="取消"
      :menu-items="menuItems"
      @choose="chooseItemAgeSpec1"
    ></nut-actionsheet>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show:2,
      IND:0,
      tabLink:[
        {
          name:"未审核",
          links:'/FAManage/FARauditList'
        },
         {
          name:"已通过",
          links:'/FAManage/FAReviewed'
        },
        {
          name:"未通过",
          links:'/FAManage/FAReviewed'
        },
      ],
      textTips1: "展开查看",
      textTips2: "downIcon",
      page: 1,
      num: 30,
      isHasMore: true,
      isLoading: false,
      isUnMore1: false,
      isLoading1: false,
      isErr: false,
      timer: null,
      dataList: [],
      isVisible1: false,
      isVisible: false,
      menuItems2: [
        {
          name: "通过",
          value: 1
        },
        {
          name: "不通过",
          value: 2
        }
      ],
      menuItems: [
        {
          name: "通过",
          value: 1
        },
        {
          name: "不通过",
          value: 2
        }
      ],
      agespec:null,
      Pid:null,
      faRecordId:null,
      dataList1:[],
      ListIndex:null,
      ListInd:null,
      type:0,//审核状态
    }
  },
   beforeMount() {
    this.getList();
    this.page = this.page + 1;
  },
  mounted(){
    for (let i = 0; i < this.tabLink.length; i++) {
        if (this.$route.path == this.tabLink[i].links) {
            this.IND = i;
          //  console.log(this.tabInd);
        }
  }
  },
  methods: {
   tabClick(i){
      // this.$router.push(this.tabLink[i].links)
      this.IND=i
      this.type=i;
      this.page=1;
      this.getList()
   },
    changeStatus(item,index,ind,type) {
      if (type == 2){
          this.ListIndex=index
          this.ListInd=ind
          //审核项目状态
          this.Pid=item.id;
          this.isVisible1 = !this.isVisible1;
      }else if (type == 1){
          this.ListIndex=index;
          console.log(item);
          this.faRecordId = item.id;
          this.isVisible = !this.isVisible;
      }

    },
    switchActionSheet(param) {
      //动作面板显隐
      this[`${param}`] = !this[`${param}`];
    },
    switchActionSheet1(param) {
      //动作面板显隐
      this[`${param}`] = !this[`${param}`];
    },
    chooseItemAgeSpec(itemParams) {
      //动作面板选择
      let Pstatus = itemParams.value;

      this.$post("/api/examineFaProject",{
        auth:Pstatus,
        faRecordOrganId:this.Pid
      }).then((res)=>{
        if(res.status=="success")
          this.dataList[this.ListIndex].projects[this.ListInd].auth=Pstatus
        this.$toast.text('操作成功');
      })
    },
    chooseItemAgeSpec1(itemParams) {
      //动作面板选择
      let Pstatus = itemParams.value;

      this.$post("/api/examineFa",{
        auth:Pstatus,
        faInformationId:this.faRecordId
      }).then((res)=>{
        if(res.status=="success")
          this.dataList.splice(this.ListIndex, 1);
          this.$toast.text('操作成功');
      })
    },
    getList() {
      console.log('page:',this.page)
      this.$post("/api/getOrganRecordFa", {
        organUserId: 31,
        page: this.page,
        auth:this.type
      }).then(res => {
        if (this.page == 1){
                this.dataList = res.data;
            }
        if (res.data.length == 0) {
            this.isLoading1 = false;
            this.isUnMore1 = true;
            this.page = this.page - 1;
        } else {
            if (this.page == 1){
                this.dataList = res.data;
            } else {
                this.dataList = this.dataList.concat(res.data);
            }
        }
      });
    },
    ShowAll(item, index) {
      this.dataList[index].showall = !this.dataList[index].showall;
      if (this.dataList[index].showall) {
        this.textTips1 = "收起更多";
        this.textTips2 = "upIcon";
      } else {
        this.textTips1 = "展开查看";
        this.textTips2 = "downIcon";
      }

      console.log(item);
    },
    loadMoreVert() {
      this.getList();
      this.isLoading1 = true;
      if (this.isUnMore1) {
        this.isUnMore1 = true;
        this.isLoading1 = false;
      } else {
        clearTimeout(this.timers);
        this.timer = setTimeout(() => {
          this.isLoading1 = false;
          this.isUnMore1 = false;
          this.page = ++this.page;
        }, 300);
      }
    },

    pulldown() {
      this.isLoading1 = true;
      clearTimeout(this.timers);
      this.timer = setTimeout(() => {
        this.isLoading1 = false;
        this.isUnMore1 = false;
        this.page = 1;
        this.dataList = [];
        this.getList();
      }, 300);
    }
  },
  watch:{
    $route(n, o) {
      // this.routeCchange(n);
      // console.log(this.$route.path)
      for (let i = 0; i < this.tabLink.length; i++) {
        if (this.$route.path == this.tabLink[i].links) {
            this.IND = i;
          //  console.log(this.tabInd);
        }

  }
    }
    },destroyed() {
    clearTimeout(this.timer);
  }
}
</script>

<style lang="scss" scoped>
.manageBox{
  height: 100%;
}
.tab{
  display: flex;
  justify-content: space-evenly;
  line-height: 10vh;
  li{
    // color:#fff;
    span{
      position: relative;
      height: 100%;
    display: inline-block;
    }
    b{
      position: absolute;
      bottom: 10px;
      width: 50%;
      height: 5px;
      left: 25%;
      opacity: 0;
      border-radius: 10px;
      text-align: center;
    }
  }
  .active{
    b{

        opacity: 1;
          display: inline-block;
           background: #000;

    }
  }
}
.FaAudBox {
  height: 90vh;
}
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
    color: #666;
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
.sh,
.wsh {
  padding: 2px 5px;
}
.btm {
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
.FAname {
  font-size: 18px;
}
</style>
