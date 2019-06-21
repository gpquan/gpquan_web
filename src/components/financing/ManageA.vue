<template>
  <div>
    <div class="header">
      <div class="header-box">
        <div class="return-icon" @click="back()"></div>
        <div class="title">融资加速</div>
        <div class="title-navBar"></div>
        <!-- <div class="header-box-item">潜在投资机构</div>
      <div class="header-box-item header-item-haveicon">已投竞品</div>
        <div class="header-box-item header-item-haveicon">合作FA</div>-->
      </div>
    </div>
    <div class="body-box">
      <div class="left">
        <div class="left-list-box">
          <div
            class="list-item"
            v-for="(item,ind) in leftList"
            :class="ind == listActId ? 'list-item-act' : ''"
            :key="ind"
            @click="changeLeftChoose(item,ind)"
          >
            <img src="../../assets/image/tj.png" alt class="isC" v-if="item.tjcode">
            <span class="act-left-bar"></span>
            <em>{{item.name}}</em>
            <span class="act-right-bar"></span>
          </div>
        </div>
      </div>
      <div class="right">
        <!-- 右边头部 -->
        <div class="right-box-title">
          <div class="right-title">
            <router-link :to="{path:'/organ',query:{id:this.Rtop.id}}"  class="title-name">{{this.Rtop.name}}</router-link>
            <div style="margin-left:7vw; margin-top: 2vh;">
              <span class="hide  aaaaaaa" style="font-size: 15px;color: #666;">简介：{{Rtop.description}}</span>
            </div>
            <div
              class="right-title-portrait"
              :style="'background-image:url('+Rtop.it_img+'/'+Rtop.img+')'"
            >
              <div class="isAuthentication" v-if="Authentication" @click="tjStatus()"></div>
            </div>
            <div style="margin-left: 4vw;">
              <nut-button
                type="actived"
                shape="circle"
                small
                v-for="(item,idx) in right_User_btn"
                :color="colorList[idx]"
                :key="idx"
                :style="'height: 20px;padding: 0 1vw;margin-left: 1vw;border: 0px;background-color:'+BGcolorList[idx]"
              >{{item}}</nut-button>
            </div>
          <!-- <div style="margin-left:7vw; margin-top: 2vh;">
              <span style="font-size: 18px;color: #666;">投资阶段：A轮</span>
            </div> -->
          </div>
        </div>
        <!-- 右边内容 -->
        <div class="right-body">
          <div class="right-body-icon">
            <span class="right-body-Licon"></span>
            <span style="text-align: center;font-size: 1rem;">已投竞品</span>
            <span class="right-body-Ricon"></span>
          </div>
          <div class="right-item" @click="Jump_rout(items)" v-for="(items,idx) in R_btmList" :key="idx">
            <span class="item-name" @click="Jump_pro(items)">{{items.name}}</span>
            <div class="right-item-portrait"></div>
            <div style="margin-left: 7vw;">
              <nut-button
                type="actived"
                shape="circle"
                small
                :color="colorList[0]"
                :style="'height: 20px;padding: 0 1vw;margin-left: 1vw;border: 0px;background-color:'+BGcolorList[0]"
              >{{items.lingyu_name}}</nut-button>
            </div>
						<div style="margin-left:7vw; margin-top: 2vh;">
						    <span style="font-size: 18px;color: #666;">投资阶段：A轮</span>
						</div>
          </div>
        </div>


        <div class="right-body">
          <div class="right-body-icon">
            <span class="right-body-Licon"></span>
            <span style="text-align: center;font-size: 1rem;">合作FA</span>
            <span class="right-body-Ricon"></span>
          </div>
          <div class="right-item" @click="Jump_rout" v-for="(items,idx) in R_btmList2" :key="idx">
            <span class="item-name">{{items.name}}</span>
            <div class="right-item-portrait"></div>
            <div style="margin-left: 7vw;">
              <nut-button
                type="actived"
                shape="circle"
                small
                v-for="(item,ind) in items.ly" :key="ind"
                :color="colorList[ind]"
                :style="'height: 20px;padding: 0 1vw;margin-left: 1vw;border: 0px;background-color:'+BGcolorList[ind]"
              >{{item}}</nut-button>
            </div>
            <div style="margin-left:7vw; margin-top: 2vh;">
              <span style="font-size: 15px;color: #666;">投资总额：{{items.num}}万元</span>
              
            </div>
            <div style="margin-left:7vw; margin-top: 2vh;">
            <span style="font-size: 15px;color: #666;">所属地区：{{items.area}}</span>
            </div>
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
      listActId: 0,
      leftList: [
        { name: "红杉资本", index: "1" },
        { name: "IDG", index: "2" },
        { name: "大鸽子", index: "3" },
        { name: "大撒大撒", index: "4" },
        { name: "大苏打撒旦", index: "5" },
        { name: "大苏打", index: "6" },
        { name: "大苏打", index: "7" },
        { name: "实打实的", index: "8" },
        { name: "红杉资本", index: "9" }
      ],
      right_User_btn: ["移动互联网", "SAAS", "天使轮"],
      Rtop: {}, //右侧头部
      Authentication: true,
      lyid: null,
      BGcolorList: ["#fef8e5", "#fee5e5", "#e5eefe"],
      colorList: ["#ffa800", "#f23353", "#009cff"],
      R_btmList: [], //右侧下方列表
      tjCode: false,
      indNum: null,
      R_btmList2:[
        {
          name:"阳明",
          ly:[],
          num:12312,
          area:'北京'
        },
          {
          name:"王俐",
          ly:[],
          num:12312,
          area:'上海'

        },
          {
          name:"杨辉",
          ly:[],
          num:12312,
          area:'深圳'

        },
          {
          name:"李超",
          ly:[],
          num:12312,
          area:'东北'

        }
      ],
      lyList:["教育", "企业服务", "教育综合服务", "投融资", "二手车", "房产电商", "医疗器械及硬件", "景点门票", "商户服务及信息化", "游戏发行及渠道", "芯片半导体", "艺术"],
    };
  },
  created() {
		if(!this.$route.query.lyid){
			this.$router.go(-1);
		}else{
			this.lyid = this.$route.query.lyid;	
			console.log("lyid")
		}
    console.log(this.lyid);
  },
  beforeMount() {},
  mounted() {
    this.getLeftList();
         for(let i=0;i<this.R_btmList2.length;i++){
         this.R_btmList2[i].ly=[]
        let arr=[]
        let num=null
          for(let j=0;j<3;j++){
            num=parseInt(Math.random()*(9-0)+0)
            if(arr.indexOf(num)!=-1){
              j--
            }else{
             arr.push(num) 
             this.R_btmList2[i].ly.push(this.lyList[num])
            }
            
            console.log()
            console.log(arr,num) 
          }
            arr=[]
      }
  },
  methods: {
    back(){
      this.$router.go(-1)
    },
    tjStatus() {
      // this.leftList[this.listActId].tjcode = true;
			this.leftList[this.listActId].tjcode = !this.leftList[this.listActId].tjcode;
      this.$forceUpdate()
    },
    getLeftList() {
      //左侧机构列表集合
      this.$post("/api/getMatchProjectOrgan", {
        lingyuId: this.lyid
      }).then(res => {
        console.log(res);
        for (let i = 0; i < res.data.length; i++) {
          res.data[i].tjcode = false;
        }
        this.leftList = res.data;
        this.getRightList(this.leftList[0].id)
      });
    },
    getRightList(Pid) {
      //右侧机构详情
      this.right_User_btn = [];
      this.$fetch("/api/getOrganDetail/" + Pid).then(res => {
        console.log(res);
        this.Rtop = res.data;
        let num =
          res.data.lingyu_name.length > 3 ? 3 : res.data.lingyu_name.length;
        console.log(num);
        for (let i = 0; i < num; i++) {
          this.right_User_btn.push(res.data.lingyu_name[i]);
          console.log(this.right_User_btn);
        }

      });
      console.log(Pid);
      this.$post("/api/getOrganInvestAlikeProject", {
        lingyuId: this.lyid,
        organId: Pid
      }).then(res => {
        console.log(res);
        this.R_btmList = res.data;
      });
    },
    changeLeftChoose: function(item, ind) {
      console.log(ind);
      this.listActId = ind;
      this.getRightList(item.id);
      for(let i=0;i<this.R_btmList2.length;i++){
         this.R_btmList2[i].ly=[]
        let arr=[]
        let num=null
          for(let j=0;j<3;j++){
            num=parseInt(Math.random()*(9-0)+0)
            if(arr.indexOf(num)!=-1){
              j--
            }else{
             arr.push(num) 
             this.R_btmList2[i].ly.push(this.lyList[num])
            } 
          }
            arr=[]
      }
 
    },
    Jump_rout: function(item) {
      // this.$router.push("/accelerate/Manage/a/details?id="+item.project_id);
    },
    Jump_pro:function(item){
      this.$router.push({path:'/project/details',query:{id:item.id}});
// "/project/details?id="+item.project_id
      // console.log(item.id)
    }
  }
};
</script>

<style lang="scss" scoped>
.body-box {
  display: flex;
  display: -webkit-flex;
}
.body-box .left {
  flex: 1;
  -webkit-flex: 1;
  background: #efefef;
  color: #666;
  margin-top: -5vh;
  border-radius: 0 5px 0 0;
  overflow: hidden;
}
.aaaaaaa{
	
  font-size: 14px;
  line-height: 20px;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-top: 5%;
  color: #666;
}
.hide {
}
.list-item {
  height: 50px;
  line-height: 50px;
  text-align: center;
  position: relative;
  em{
   padding-left:10%;
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

.list-item.list-item-act {
  background: white !important;
  color: red !important;
}
.body-box .right {
  flex: 3;
  -webkit-flex: 3;
  margin-top: -5vh;
}
.header-box {
  width: 100%;
  height: 20vh;
}
.header {
  width: 100%;
  background-image: url(../../assets/image/accelerate-bg.jpg);
  background-size: 100% 100%;
}
.act-left-bar {
  position: absolute;
  width: 5%;
  height: 80%;
  opacity: 1;
  background-color: #fa7e7e;
  display: none;
  z-index: 99999;
  left: 4%;
  top: 10%;
}

.act-right-bar {
  font-size: 10px;
  color: red;
  background: pink;
  position: absolute;
  transform: rotate(45deg);
  top: -50%;
  right: -50%;
  line-height: 1.2;
  width: 100%;
  text-align: center;
  display: none;
}
.list-item.list-item-act .act-left-bar,
.list-item.list-item-act .act-right-bar {
  display: block !important;
}
/deep/.right-title {
  width: 100%;
  height: 22vh !important;  
}
.right-title-portrait {
  /* background-image: url(/img/right-title-portrait.a8b5e2b2.png); */
  background-image: url("../../assets/image/right-title-portrait.png");
  background-size: 100% 100%;
  border-radius: 50%;
  width: 9vh;
  height: 9vh;
  display: inline-block;
  // margin-top: -7vh;
  // margin-left: 46vw;
	position: relative;
	bottom: 9vh;
	left: 3vw;
}
.right-box-title {
  width: 90%;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 5px;
}
.title-name {
  line-height: 6vh;
  font-size: 14px;
  margin-left: 5vw;
}
.isAuthentication {
  background-image: url(../../assets/image/isAuthentication.png);
  background-size: 100% 100%;
  position: relative;
  top: 60%;
  left: 65%;
  width: 35%;
  height: 35%;
}
.isAuthentication2 {
  background-image: url(../../assets/image/user.png);
  background-size: 100% 100%;
  position: relative;
  top: 60%;
  left: 65%;
  width: 35%;
  height: 35%;
}
.return-icon {
  background-image: url(../../assets/image/return-icon.png);
  background-size: 100% 100%;
  height: 3.5vh;
  width: 2vh;
  position: relative;
  left: 5vw;
  top: 3vh;
}
.title {
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
  color: #fff;
}
.title-navBar {
  background-image: url(../../assets/image/title-NavBar.png);
  background-size: 100% 100%;
  width: 80vw;
  height: 3vh;
  margin-top: 4vw;
}
.right-body-Licon {
  background-image: url(../../assets/image/right-body-Licon.png);
  background-size: 100% 100%;
}
.right-body-Ricon {
  background-image: url(../../assets/image/right-body-Ricon.png);
  background-size: 100% 100%;
}
.right-body-Licon,
.right-body-Ricon {
  width: 5vw;
  height: 1.5vh;
  display: inline-block;
}
.right-body-icon {
  text-align: center;
  padding-top: 3vh;
}
.right-body-icon span {
  margin: 0vh 2vw;
}
.right-item {
  width: 90%;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 5px;
  margin-top: 10px;
}
.item-name {
  line-height: 6vh;
  font-size: 16px;
  margin-left: 7vw;
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
.isC {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  transform: rotate(90deg)
}
</style>