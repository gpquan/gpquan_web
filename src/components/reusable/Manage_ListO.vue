<template>
  <!-- 项目管理 列表项 -->

  <div style="height:100%;">
    <nut-scroller
      :is-un-more="isUnMore1"
      :is-loading="isLoading1"
      :stretch="600"
      :type="'vertical'"
      @loadMore="loadMoreVert"
      @pulldown="pulldown"
    >
      <ul class="Max_list nut-vert-list-panel" v-if="ListData.length>0" slot="list">
        <li
          class="list_Item view-project nut-vert-list-item"
          v-for="(i,idx) in ListData"
          :key="idx"
        >
          <!-- {{i}} -->
          <b class="icon_Box" @click="ListShow(idx)" v-show="i.status==2&&i.maxLength>2">
            <span></span>
            <span></span>
            <span></span>
          </b>

          <div class="title_">
            <div class="title_top">
              <div class="left">
                <em class="lineEm"></em>
                <span class="noW" @click="pro_details(i.organ_id)">{{i.name}}</span>
              </div>
              <div class="right">
                <!-- <b class="expedite" @click="expedite(i.lingyu_id)">加速</b> -->
              </div>
            </div>
            <div class="title_Bottm">
              <div style="padding:14px 0">
                <span
                  v-for="(itt,idd) in  i.lingyu_name.length>3?3:i.lingyu_name.length"
                  :key="idd"
                  :class="colorClass[idd]"
                >{{i.lingyu_name[idd]}}</span>
                <!-- <span class="SAAS">SAAS</span>
                <span class="xmt">新媒体</span>-->
              </div>
            </div>
          </div>
          <div class="div_ListBox">
            <div class="List_top" v-show="i.status==2">
              <!-- {{i.maxLength}} -->
              <div v-for="(item,ind) in i.maxLength" :key="ind" class="box_1">
                <span class="box1">
                  <circle-progress
                    :id="i.projects[ind].progress.uniqid+1"
                    :width="66"
                    :radius="4"
                    :progress="i.projects[ind].progress.rate"
                    :delay="200"
                    :duration="1000"
                    barColor="#f05e62"
                    backgroundColor="#FFE8CC"
                    :isAnimation="true"
                  ></circle-progress>
                  <span class="dhwb">
                    <em @click="pro_evolve(i.projects[ind]['id'])">{{i.projects[ind].progress_name}}</em>
                  </span>
                </span>
                <b class="nameTIT hide1">
                  <em></em>
                  {{i.projects[ind].name}}
                </b>
              </div>
              <div class="box_1">
                <div class="addBtn" v-if="i.maxLength<3">
                  <span @click="push_route(i.organ_id)">
                    <img src="../../assets/image/pink_add.png" alt />
                  </span>
                </div>
              </div>
              <!-- <div class="addBtn" v-if="i.maxLength<3">
            <span  @click="push_route(i.organ_id)">
              <img src="../../assets/image/pink_add.png" alt>
            </span>
              </div>-->
            </div>
            <div class="List_gather" v-show="i.status==1">
              <b class="List_gather_Icon" @click="closeListGather(idx)">
                <nut-icon type="minus"></nut-icon>
              </b>
              <div class="box_1" v-for="(items,ind) in i.projects" :key="ind">
                <span class="box1">
                  <circle-progress
                    :id="i.projects[ind].progress.uniqid+2"
                    :width="66"
                    :radius="3"
                    :progress="i.projects[ind].progress.rate"
                    :delay="200"
                    :duration="1000"
                    barColor="#F2AE57"
                    backgroundColor="#FFE8CC"
                    :isAnimation="true"
                  ></circle-progress>
                  <span class="dhwb">
                    <em @click="pro_evolve(i.projects[ind]['id'])">{{i.projects[ind].progress_name}}</em>
                  </span>
                </span>

                <b class="nameTIT hide1">
                  <em></em>
                  {{i.projects[ind].name}}
                </b>
              </div>
              <div class="box_1">
                <div class="addBtn">
                  <span @click="push_route(i.organ_id)">
                    <img src="../../assets/image/pink_add.png" alt />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <ul v-else class="Max_list">
        <li class="list_Item" style="margin-top:30px;justify-content:center;">
          <div class="errorBox">
            <img src="../../assets/image/error.png" alt class="errorImg" />
          </div>
        </li>
      </ul>
    </nut-scroller>
  </div>
</template>

<script>
import CircleProgress from "@/components/reusable/circle-progress";
export default {
  components: {
    CircleProgress
  },
  // props: ["ListData"],
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
      maxLength: null,
      colorClass: ["yd", "SAAS", "xmt"],
      isUnMore1: false,
      isLoading1: false,
      page: 1,
      maxPages2: 1,
      statusList: [],
      ListData: [],
      Ndata: [],
      timer: null
    };
  },
  beforeMount() {
    // console.log(this.ListData);
    this.getList();
  },
  methods: {
    getList() {
      let userId = JSON.parse(sessionStorage.getItem("userInfo")).id;

      // console.log()
      this.$post("/api/getUserOrganList", {
        userId: userId,
        page: this.page
      }).then(res => {
        for (let i = 0; i < res.data.length; i++) {
          res.data[i].status = 2;
          if (res.data[i].projects.length < 3) {
            res.data[i].maxLength = res.data[i].projects.length;
          } else {
            res.data[i].maxLength = 3;
          }
        }
        for (let i = 0; i < res.data.length; i++) {
          this.statusList.push(0);
        }
        this.page = this.page + 1;
        this.ListData = res.data;
      });
    },
    pro_evolve(id) {
      //项目进展
      this.$router.push("/accelerate/Manage/a/details?id=" + id + "&type=0");
    },
    pro_details(id) {
      // 项目跳详情
      // var o_details = "/Organ/details/"+id;

      // this.$router.push{ name:o_details, query:{ o_id: id }};
      this.$router.push({
        path: "/Organ/details",
        query: {
          id: id
        }
      });
      console.log(id);
    },
    reset() {
      this.isShow = false;
      this.$nextTick(() => {
        this.isShow = true;
      });
    },
    ListShow(i) {
      this.ListData[i].status = 1;
    },
    closeListGather(i) {
      this.ListData[i].status = 2;
    },
    expedite() {
      //点击加速
    },
    push_route(id) {
      this.$router.push({ path: "/project/dimP", query: { id: id } });
    },
    loadMoreVert() {
      this.isLoading1 = true;
      let userId = JSON.parse(sessionStorage.getItem("userInfo")).id;

      // console.log()
      this.$post("/api/getUserOrganList", {
        userId: userId,
        page: this.page
      }).then(res => {
        for (let i = 0; i < res.data.length; i++) {
          res.data[i].status = 2;
          if (res.data[i].projects.length < 3) {
            res.data[i].maxLength = res.data[i].projects.length;
          } else {
            res.data[i].maxLength = 3;
          }
        }
        for (let i = 0; i < res.data.length; i++) {
          this.statusList.push(0);
        }
        this.Ndata = res.data;
        console.log(res.data);

        console.log(this.Ndata);
        if (this.Ndata.length == 0) {
          this.isUnMore1 = true;
          this.isLoading1 = false;
        } else {
          clearTimeout(this.timers);
          this.timer = setTimeout(() => {
              this.isUnMore1 = false;
            this.isLoading1 = false;
            this.ListData = this.ListData.concat(this.Ndata);
            console.log(this.ListData);
            this.Ndata = [];
            this.page = this.page + 1;
          }, 300);
        }
      });
    },
    pulldown() {
      this.isLoading1 = true;
      clearTimeout(this.timers);
      this.timer = setTimeout(() => {
        this.isLoading1 = false;
        this.isUnMore1 = false;
        // this.listData1 = new Array(20);
        this.page = 1;
        this.getList();
      }, 300);
    }
  },
  destroyed() {
    clearTimeout(this.timer);
  }
};
</script>

<style lang="scss" scoped>
.Max_list {
  margin-bottom: 60px;
  margin-top: -5px;
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
  flex-wrap: wrap;
}
.box_1,
.box_2,
.box_3 {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  padding: 0px 10px 10px 10px;
  flex-direction: column;
  //   border-radius: 10px;
  //   padding: 10px;
}
.icon_Box {
  position: absolute;
  top: 60%;
  right: 1%;
  span {
    display: inline-block;
    width: 3px;
    height: 3px;
    background: #f37f6d;
    margin-right: 2px;
  }
}
.title_ {
  //   padding: 10px 5% 0;
  background: #fff;
  border-radius: 8px 8px 0 0;
  width: 90%;
  margin-left: 5%;
  // padding: 2% 0;
  border-bottom: 1px solid #eeeeee;
}
.title_top {
  display: flex;
  justify-content: space-between;
  padding-top: 13px;
  .left {
    display: flex;
    align-items: center;
  }
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
  border-radius: 25px;
  padding: 4px 10px;
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
  padding: 13px 10px 8px 10px;
  span {
    position: absolute;
    top: 11px;    //父容器paddng13px
    width: 66px;
    //height: 66px;
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
.dhwb {
  width: 57px;
  height: 80%;
  font-size: 12px;
  //   overflow: hidden;
  //   text-overflow: ellipsis;
  //   white-space: nowrap;
  //   display: inline-block;
  //   line-height: 100px;
  em {
    //width: 80%;
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
    color: #f37f6d;
  }
}
.nameTIT {
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 12px;
  color: #333;
  em {
    display: inline-block;
    min-width: 8px;
    min-height: 8px;
    border-radius: 50%;
    background: #1cc6bb;
    margin-right: 5px;
  }
}
.noW {
  font-weight: 400;
}
.lineEm {
  width: 3px;
  height: 80%;
  display: inline-block;
  background-image: url("../../assets/image/line1.png");
  background-size: 100%;
  margin-right: 5px;
}
.addBtn {
  width: 66px;
  height: 71px;
  margin-top: 3px;
  padding: 10px;
  img {
    width: 100%;
    // height: 57px;
  }
}
.hide1 {
  font-size: 12px;
  line-height: 16px;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  width: 80%;
  height: 100%;
}
</style>
