<template>
  <div>
    <div class="list">
      <ManageList :ListData="ListData"/>
    </div>
  </div>
</template>

<script>
import CircleProgress from "@/components/reusable/circle-progress";
import ManageList from "@/components/reusable/Manage_List"
export default {
  components: {
    CircleProgress,
    ManageList
  },
  data() {
    return {
      ListData:[
        {
          num:33
        },{
          num:55
        },{
          num:23
        },{
          num:52
        },{
          num:64
        },{
          num:23
        },
      ],
      isShow: true,
      width: 200,
      radius: 20,
      progress: 70,
      duration: 1000,
      delay: 20,
      isShow: false,
      barColor: "#F2AE57",
      backgroundColor: "#FFE8CC",
      timeFunction: "cubic-bezier(0.99, 0.01, 0.22, 0.94)"
    };
  },
  methods: {
    reset() {
      this.isShow = false;
      this.$nextTick(() => {
        this.isShow = true;
      });
    },
    ListShow() {
      this.isShow = true;
    },
    closeListGather(){
        this.isShow=false
    }
  }
};
</script>

<style lang="scss" scoped>
.List_gather {
  display: flex;
  flex-direction: row;
  padding: 10px 0;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  position: relative;
  padding-bottom: 30px;

}
.List_gather_Icon{
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