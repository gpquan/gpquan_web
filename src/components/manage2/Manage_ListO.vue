<template>
  <div>
    <ul class="Max_list">
      <li class="list_Item" v-for="(item,ind) in dataList" :key="ind">
        <dl class="list_DL">
          <dt>
            <div class="box_1" :key="ind">
              <span class="box1">
                <circle-progress
                  :id="item.progress.uniqid"
                  :width="85"
                  :radius="5"
                  :progress="item.progress.rate"
                  :delay="200"
                  :duration="500"
                  barColor="#F2AE57"
                  backgroundColor="#FFE8CC"
                  :isAnimation="true"
                ></circle-progress>
                <span class="dhwb">
                  <img :src="item.it_img" alt @click="Jump_card(item)">
                </span>
              </span>
              <b class="nameTIT">
                <em></em>
                {{item.progress_name}}
              </b>
            </div>
          </dt>
          <dd>
            <div>
              <span class="name" @click="Jump_Odetails(item)">{{item.name}}</span>
            </div>
            <div>
              <span class="hide">简介:{{item.description}}</span>
            </div>
            <div class="ly">
              <span class="yd" v-for=" (itmes,ind) in 3" :key="ind">{{item.lingyu_name[ind].name}}</span>
            </div>
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
  data() {
    return {
      dataList: []
    };
  },
  mounted() {
    let userId = JSON.parse(sessionStorage.getItem("userInfo")).id;

    // console.log()
    this.$post("/api/getUserOrganList", {
      userId: userId,
      page: "1"
    }).then(res => {
      this.dataList = res.data;
    });
  },
  methods: {
		push_route(){
			this.$router.push({path:"/accelerate/Manage/o/add"})
		},
    getList() {},
    Jump_Odetails(item){
      console.log(item.organ_id)
      this.$router.push({path:'/organ/details',query:{id:item.organ_id}})
    },
    Jump_card(item){
        // let userId = JSON.parse(sessionStorage.getItem("userInfo")).id;
      this.$router.push({path:'/accelerate/Manage/a/details',query:{id:item.organ_id,type:1,userId:item.user_id}})
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
  //   border-radius: 10px;
  //   padding: 10px;
}
.Max_list {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.list_DL {
  display: flex;
  flex-direction: row;
  width: 100%;
  dl {
    flex: 1;
  }
  dt {
    min-width: 75px;
    height: 100%;
    padding-right: 15px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
}

.box_1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  // padding:15px;
  // margin-left: 10px;
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
.dhwb {
  width: 80%;
  height: 80%;
  font-size: 12px;
  img {
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
    border-radius: 50%;
  }
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
.name {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  line-height: 5vh;
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
.ly {
  margin-top: 10px;
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
</style>