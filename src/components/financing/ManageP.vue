<template>
  <div>
    <div class="list">
      <ManageListP :ListData="MaxList"/>
      <!-- <ManageList :ListData="ListData"/>
      <ManageList :ListData="ListData"/>
      <ManageList :ListData="ListData"/>
      <ManageList :ListData="ListData"/>
      <ManageList :ListData="ListData"/>-->
			<div class="add_btn" @click="push_route">
				<!-- <img src="../../assets/image/add_bth.png" alt=""> -->
			</div>
    </div>
    <nut-backtop></nut-backtop>
  </div>
</template>

<script>
import CircleProgress from "@/components/reusable/circle-progress";
import ManageListP from "@/components/reusable/Manage_ListP";
export default {
  components: {
    CircleProgress,
    ManageListP
  },
  data() {
    return {
      ListData: [],
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
      MaxList: [],
      Maxnum:0
    };
  },
  mounted() {
    let userId = JSON.parse(sessionStorage.getItem("userInfo")).id;
    // console.log()
    this.$post("/api/getUserProjectList", { userId: 3, page: "1" }).then(
      res => {
        for (let i = 0; i < res.data.length; i++) {
          res.data[i].status=2
          // this.Maxnum+=res.data[i].organs.length;
          if (res.data[i].organs.length < 3) {
            res.data[i].maxLength = res.data[i].organs.length;
          } else {
            res.data[i].maxLength = 3;
          }
        }
        // res.data.Maxnum=this.Maxnum
        console.log(res.data);
        this.MaxList = res.data;
        console.log(res);
				// let Project = JSON.parse(sessionStorage.setItem("userInfo")).id;
      }
    );
  },
  methods: {
		push_route(){
			this.$router.push({path:"/project/addProject"})
		},
    reset() {
      this.isShow = false;
      this.$nextTick(() => {
        this.isShow = true;
      });
    },
    ListShow() {
      this.isShow = true;
    },
    closeListGather() {
      this.isShow = false;
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
}
.list {
  height: 100%;
  margin-bottom: 60px;
}
.list_Item {
  width: 90%;
  //   height: 108px;
  margin-left: 5%;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 20px 0px rgba(250, 115, 97, 0.15);
  border-radius: 8px;
  position: relative;
  //   padding: 10px;
}
.icon_Box {
  position: absolute;
  top: 60%;
  right: 5%;
}
.title {
  //   padding: 10px 5% 0;
  background: #fff;
  border-radius: 8px 8px 0 0;
  width: 90%;
  margin-left: 5%;
  padding: 2% 0;
  border-bottom: 1px solid #ccc;
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
.box1,
.box2,
.box3 {
  position: relative;
  height: 100%;
  display: inline-block;
  padding: 10px;
  span {
    position: absolute;
    top: 35%;
    left: 35%;
  }
}
</style>