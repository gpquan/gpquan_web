<template>
  <!-- 项目管理 列表项 -->
  <ul class="Max_list" v-if="ListData!=[]">
    <li class="list_Item" v-for="(i,idx) in ListData" :key="idx">
      {{i.organs[0].lenght}}
      <b class="icon_Box" @click="ListShow(idx)" v-show="i.status==2&&i.maxLength>3">
        <nut-icon type="more"></nut-icon>
      </b>
      <div class="title_">
        <div class="title_top">
          <div class="left">
            <em>|</em>
            <b class="noW">{{i.name}}</b>
          </div>
          <div class="right">
            <b class="expedite" @click="expedite()">加速</b>
          </div>
        </div>
        <div class="title_Bottm">
          <div style="padding:10px 0">
            <span  v-for="(itt,idd) in  i.lingyu_name.length>3?3:i.lingyu_name.length" :key="idd" :class="colorClass[idd]">{{i.lingyu_name[idd]}}</span>
          </div>
        </div>
      </div>
      <div class="div_ListBox">
        <div class="List_top" v-show="i.status==2">
          <!-- {{typeOf(i.maxLength)}} -->
          <div v-for="(item,ind) in i.maxLength" :key="ind" class="box_1">
            <span class="box1">
              <circle-progress
                :id="i.organs[ind].progress.uniqid"
                :width="85"
                :radius="5"
                :progress="i.organs[ind].progress.rate"
                :delay="200"
                :duration="1000"
                barColor="#F2AE57"
                backgroundColor="#FFE8CC"
                :isAnimation="true"
              ></circle-progress>
               <span class="dhwb"><em>{{i.organs[ind].progress_name}}</em></span>
            </span>
               <b class="nameTIT">
              <em></em>{{i.organs[ind].name}}</b>
          </div>
        </div>
        <div class="List_gather" v-show="i.status==1">
          <b class="List_gather_Icon" @click="closeListGather(idx)">
            <nut-icon type="minus"></nut-icon>
          </b>
          <div class="box_1" v-for="(items,ind) in i.organs" :key="ind">
            <span class="box1">
              <circle-progress
                :id="i.organs[ind].progress.uniqid"
                :width="85"
                :radius="5"
                :progress="i.organs[ind].progress.rate"
                :delay="200"
                :duration="1000"
                barColor="#F2AE57"
                backgroundColor="#FFE8CC"
                :isAnimation="true"
              ></circle-progress>
              <span class="dhwb"><em>{{i.organs[ind].progress_name}}</em></span>
            </span>
               <b class="nameTIT">
              <em></em>{{i.organs[ind].name}}</b>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import CircleProgress from "@/components/reusable/circle-progress";
export default {
  components: {
    CircleProgress
  },
  props: ["ListData"],
  data() {
    return {
      isShow: true,
      width: 200,
      radius: 20,
      progress: 70,
      duration: 1000,
      delay: 20,
      isShow: false,
      barColor: "#F2AE57",
      backgroundColor: "#FFE8CC",
      timeFunction: "cubic-bezier(0.99, 0.01, 0.22, 0.94)",
       colorClass:["yd" ,"SAAS","xmt"],
      //  statusList:[]
    };
  },
  beforeMount() {
    for(let i=0;i<this.ListData.length;i++){
          //  this.statusList[i]=false
    }
    // console.log("=-=============")
  
  },
  methods: {
    reset() {
      this.isShow = false;
      this.$nextTick(() => {
        this.isShow = true;
      });
    },
    ListShow(i) {
      this.isShow = true;
      // this.statusList[i]=true
      this.ListData[i].status=1
    },
    closeListGather(i) {
        //  this.statusList[i]=false
        this.ListData[i].status=2
    },
    expedite() {
      //点击加速
      // this.$post("/api/login", {
      //   phone: 18611174866,
      //   password: 123456
      // }).then(res => {
      //   console.log(res);
      // });
      this.$router.push("/accelerate/Manage/a")
    }
  }
};
</script>

<style lang="scss" scoped>
.Max_list {
  margin-top: 10px;
}
.List_gather {
  display: flex;
  flex-direction: row;
  padding: 10px 0;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  position: relative;
  padding-bottom: 30px;
}
.List_gather_Icon {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.List_top {
  display: flex;
  flex-direction: row;
  padding: 10px 0;
}
.box_1,
.box_2,
.box_3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;
}
.list {
  //   height: 100%;
}
.list_Item {
  width: 90%;
  //   height: 108px;
  margin-left: 5%;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 20px 0px rgba(250, 115, 97, 0.15);
  border-radius: 8px;
  position: relative;
  margin-top: 10px;
  //   padding: 10px;
}
.icon_Box {
  position: absolute;
  top: 60%;
  right: 1%;
}
.title_ {
  //   padding: 10px 5% 0;
  background: #fff;
  border-radius: 8px 8px 0 0;
  width: 90%;
  margin-left: 5%;
  padding: 2% 0;
  border-bottom: 1px solid #ccc;
}
.title_top {
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  //   .nut-button,
  //   .primary {
  //     background-image: url("../../assets/image/btn.png");
  //     background-repeat: no-repeat;
  //     background-size: 100% 100%;
  //   }
}
.titile_top {
  text-align: left;
}
.yd,
.SAAS,
.xmt {
  font-size: 11px;
  height: 18px;
  border-radius: 9px;
  padding: 5px 10px;
}
.yd {
  background: #fef8e5;
  color: #ffa800;
  margin-left: 5px;
  margin-right: 5px;
}
.SAAS {
  background: #fee5e5;
  color: #f23353;
  margin-right: 5px;
}
.xmt {
  background: #e5eefe;
  color: #009cff;
}
.box1,
.box2,
.box3 {
  position: relative;
  height: 100%;
  display: inline-block;
  padding: 10px;
  span {
    position: absolute;
    top: 7%;
    width: 80%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.right .expedite {
  padding: 5px 15px;
  color: #fff;
  background-image: url("../../assets/image/btn.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.nameTIT {
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 12px;
  em {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #1cc6bb;
    margin-right: 5px;
  }
}
.dhwb {
  width: 80%;
  height: 80%;
  font-size: 12px;
  //   overflow: hidden;
  //   text-overflow: ellipsis;
  //   white-space: nowrap;
  //   display: inline-block;
  //   line-height: 100px;
  em {
    width: 80%;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    // -webkit-line-clamp: 1;
    overflow: hidden;
    // overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    text-align: center;
  }
}
.noW {
  font-weight: 400;
}
</style>