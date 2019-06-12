<template>
  <div class="ppppp">
    <div class="list">
      <ul>
        <li class="list_Item">
          <b class="icon_Box" @click="ListShow()" v-if="!isShow">
            <nut-icon type="more"></nut-icon>
          </b>
          <div class="title">
            <div>
              <em>|</em>
              <b>优广网</b>
            </div>
            <div style="padding:10px 0">
              <span class="yd">移动互联网</span>
              <span class="SAAS">SAAS</span>
              <span class="xmt">新媒体</span>
            </div>
          </div>
          <div class="div_ListBox">
            <div class="List_top">
              <div class="box_1">
                <span class="box1">
                  <circle-progress
                    :id="1"
                    :width="80"
                    :radius="5"
                    :progress="70"
                    :delay="200"
                    :duration="1000"
                    barColor="#F2AE57"
                    backgroundColor="#FFE8CC"
                    :isAnimation="true"
                  ></circle-progress>
                  <span>444</span>
                </span>
                <b>优广网</b>
              </div>
              <div class="box_2">
                <span class="box2">
                  <circle-progress
                    :id="2"
                    :width="80"
                    :radius="5"
                    :progress="70"
                    :delay="200"
                    :duration="1000"
                    barColor="#fa7e7e"
                    backgroundColor="#FFE8CC"
                    :isAnimation="true"
                  ></circle-progress>
                  <span>555</span>
                </span>
                <b>优广网</b>
              </div>
              <div class="box_3">
                <span class="box3">
                  <circle-progress
                    :id="3"
                    :width="80"
                    :radius="5"
                    :progress="70"
                    :delay="200"
                    :duration="1000"
                    barColor="#fa7e7e"
                    backgroundColor="#FFE8CC"
                    :isAnimation="true"
                  ></circle-progress>
                  <span>666</span>
                </span>
                <b>优广网</b>
              </div>
            </div>
            <div class="List_gather" v-if="isShow">
              <b class="List_gather_Icon" @click="closeListGather()">
                <nut-icon type="minus"></nut-icon>
              </b>
              <div class="box_1">
                <span class="box1">
                  <circle-progress
                    :id="1"
                    :width="80"
                    :radius="5"
                    :progress="70"
                    :delay="200"
                    :duration="1000"
                    barColor="#F2AE57"
                    backgroundColor="#FFE8CC"
                    :isAnimation="true"
                  ></circle-progress>
                  <span>111</span>
                </span>
                <b>优广网</b>
              </div>
              <div class="box_2">
                <span class="box2">
                  <circle-progress
                    :id="2"
                    :width="80"
                    :radius="5"
                    :progress="70"
                    :delay="200"
                    :duration="1000"
                    barColor="#fa7e7e"
                    backgroundColor="#FFE8CC"
                    :isAnimation="true"
                  ></circle-progress>
                  <span>222</span>
                </span>
                <b>优广网</b>
              </div>
              <div class="box_3">
                <span class="box3">
                  <circle-progress
                    :id="3"
                    :width="80"
                    :radius="5"
                    :progress="70"
                    :delay="200"
                    :duration="1000"
                    barColor="#fa7e7e"
                    backgroundColor="#FFE8CC"
                    :isAnimation="true"
                  ></circle-progress>
                  <span>333</span>
                </span>
                <b>优广网</b>
              </div>
              <div class="box_1">
                <span class="box1">
                  <circle-progress
                    :id="1"
                    :width="80"
                    :radius="5"
                    :progress="70"
                    :delay="200"
                    :duration="1000"
                    barColor="#F2AE57"
                    backgroundColor="#FFE8CC"
                    :isAnimation="true"
                  ></circle-progress>
                  <span>111</span>
                </span>
                <b>优广网</b>
              </div>
              <div class="box_2">
                <span class="box2">
                  <circle-progress
                    :id="2"
                    :width="80"
                    :radius="5"
                    :progress="70"
                    :delay="200"
                    :duration="1000"
                    barColor="#fa7e7e"
                    backgroundColor="#FFE8CC"
                    :isAnimation="true"
                  ></circle-progress>
                  <span>222</span>
                </span>
                <b>优广网</b>
              </div>
              <div class="box_3">
                <span class="box3">
                  <circle-progress
                    :id="3"
                    :width="80"
                    :radius="5"
                    :progress="70"
                    :delay="200"
                    :duration="1000"
                    barColor="#fa7e7e"
                    backgroundColor="#FFE8CC"
                    :isAnimation="true"
                  ></circle-progress>
                  <span>333</span>
                </span>
                <b>优广网</b>
              </div>
            </div>
          </div>
        </li>
      </ul>
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