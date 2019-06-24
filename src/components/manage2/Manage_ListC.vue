<template>
	<div>

  <!-- 项目管理 列表项 -->
  <ul class="Max_list" v-if="ListData!=[]">
    <li class="list_Item" v-for="(item,idx) in ListData" :key="idx">
      <dl class="List_item">
        <dt class="img">
          <img :src="item.logo" alt>
          <!-- <img src="../../assets/image/right-title-portrait.png" alt=""> -->
          <div></div>
        </dt>
        <dd>
          <div>
            <span class="name" @click="Jump_details(item)">{{item.name}}</span>
          </div>
          <div class="List_downsize" style="padding-bottom: 10px;">
            <span class="hide1">简介:{{item.description}}</span>
          </div>
          <div>
            <span class="yd">{{item.lingyu_name}}</span>
            <span class="SAAS">SAAS</span>
            <span class="xmt">新媒体</span>
          </div>
          <!-- <div class="introBox">
            <div class="intro" :title="textjj">{{}}</div>
          </div> -->
          <!-- <div class="List_downsize">
            投资机构：
            <span>{{}}</span>
          </div> -->
          <!-- <div class="List_downsize">
            <span>{{item.lingyu_name}}</span>|电子商务
            <span>Pre-A</span>|
            <span>北京市</span>
          </div> -->
        </dd>
      </dl>
    </li>
  </ul>
	<div class="add_btn" @click="push_route">
		<!-- <img src="../../assets/image/add_bth.png" alt=""> -->
	</div>
			
	</div>
</template>

<script>
import CircleProgress from "@/components/reusable/circle-progress";
export default {
  components: {
    CircleProgress
  },
  //   props: ["ListData"],
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
      colorClass: ["yd", "SAAS", "xmt"],
      ListData: []
      //  statusList:[]
    };
  },
  beforeMount() {
    for (let i = 0; i < this.ListData.length; i++) {
      //  this.statusList[i]=false
    }
    // console.log("=-=============")
    this.getList();
  },
  methods: {
    push_route(){
			this.$router.push({path:"/project/addProject"})
		},
    Jump_details(item){
      console.log(item)
      this.$router.push({
        path:'/project/details',
        query:{
           id:item.id
        }
      })
    },
    getList() {
      this.$post("/api/getAlikeProjectList", {
        field: "id",
        fieldValue: 82696
      }).then(res => {
        // console.log(res);
        this.ListData = res.data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
	.add_btn{
		background-image: url("../../assets/image/add_bth.png");
		width: 30px;
		height: 30px;
		background-size: 100%;
		position: fixed;
		right: 5%;
		bottom: 10%;
	}	
.Max_list {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  // padding:15px;
  // margin-left: 10px;
}
.list {
  //   height: 100%;
}
.list_Item {
  width: 80%;
  //   height: 108px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 20px 0px rgba(250, 115, 97, 0.15);
  border-radius: 8px;
  position: relative;
  margin-top: 15px;
  display: flex;
  padding: 10px;
  padding-top:0;
  //   border-radius: 10px;
  //   padding: 10px;
}
// .List_item{
//       min-width: 99px;
//     height: 99px;
//     padding-right: 15px;
//     img{
//       width: 100%;;
//     }
// }
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
  border-bottom: 1px solid #eeeeee;
  position: relative;
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
.right {
  position: absolute;
  top: 10%;
  right: 0%;
}

.expedite {
  position: relative;
  padding: 5px 30px;
  width: 5px;
  height: 20px;
  display: inline-block;
  color: #fff;
  background-image: url("../../assets/image/up.png");
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
  text-indent: 10px;
}
.lineEm {
  width: 3px;
  height: 80%;
  display: inline-block;
  background-image: url("../../assets/image/line1.png");
  background-size: 100%;
  margin-right: 5px;
}
.List_item {
  margin-top: 11px;
  background: #fff;
  display: flex;
}

.List_item {
  display: flex;
  // padding: 23px 15px;
  dt {
    min-width: 75px;
    height: 100%;
    padding-right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      // max-width: 100%;
      min-width: 80px;
      min-height: 80px;
      max-width: 80px;
      max-height: 80px;
      // height: 100%;
      border-radius: 50% 50%;
      border:1px solid #ccc;
    }
  }
  dd {
    .name {
      font-size: 18px;
      font-weight: 600;
      color: #333;
      line-height: 5vh;
    }
  }
}
.List_box .List_item:nth-child(1) {
  margin-top: 0;
}
.yd,
.SAAS,
.xmt {
  font-size: 11px;
  height: 18px;
  border-radius: 9px;
  padding: 5px 5px;
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
.intro {
  // text-indent:2em;
  padding: 5px 0 0 0;
  color: #333333;
  width: 85%;
  font-size: 12px;
  line-height: 16px;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
// .introBox{
//   overflow: hidden;
// text-overflow: ellipsis;
// display: -webkit-box;
// -webkit-line-clamp: 2;
// display: -webkit-box;
// -webkit-box-orient: vertical;
// }
.List_downsize {
  color: #999999;
  font-size: 11px;
  padding-top: 5px;
}
.item {
  position: relative;
  // right: 0;
  // top: 0;
  // height: 1.81rem;
  // width: 1.81rem;
  // display: flex;
  // align-items: center;
  .item_status {
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("../../assets/image/listItem_status.png"); // width: 0;
    background-size: 100%;
    background-repeat: no-repeat;
    width: 20%;
    height: 100%;

    img {
      width: 20%;
      height: 50%;
    }
  }
}
.item_status_text {
  position: absolute;
  top: 12%;
  left: -12%;
  transform: rotate(-45deg);
  color: #fff;
  font-size: 1vh;
  width: 100%;
  text-align: center;
}
.hide {
  font-size: 12px;
  line-height: 16px;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.hide1 {
  font-size: 12px;
  line-height: 16px;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
