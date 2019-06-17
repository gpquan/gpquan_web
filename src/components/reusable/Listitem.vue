<template>
  <div class="List_box">
    <!-- <nut-scroller
      :is-un-more="isUnMore1"
      :is-loading="isLoading1"
      :type="'vertical'"
      @loadMore="loadMoreVert"
      @pulldown="pulldown"
    > 
    <div slot="list" class="nut-vert-list-panel">-->
    <!-- <div class="" >  -->
    <div class="item" v-for="(item, index) in this.Listdata" :key="index" @click="item_details">
      <!-- <span class="item_status">
        <em>已上架</em>
      </span> -->
      <dl class="List_item">
        <dt class="img" @click="item_details">
          <img src="../../assets/image/user_photo.png" alt>
          <div></div>
        </dt>
        <dd>
          <div>
            <span class="name">{{nameArr[index]}}</span>
            <span class="yd">移动互联网</span>
            <span class="SAAS">SAAS</span>
            <span class="xmt">新媒体</span>
          </div>
          <div class="introBox">
            <div class="intro" :title="textjj">{{textjj}}</div>
          </div>
          <div class="List_downsize">
            投资机构：
            <span>IDG资本|深创投|经纬中国</span>
          </div>
          <div class="List_downsize">
            <span>电子商务</span>|
            <span>Pre-A</span>|
            <span>北京市</span>
          </div>
          <div class="List_downsize">
            佣金占比：
            <span>88.99%</span>
          </div>
        </dd>
      </dl>
    </div>
    <!-- </div>  -->
    <!--  </div>
    </nut-scroller>-->
  </div>
</template>

<script>
export default {
  props: ["Listdata"],
  data() {
    return {
      textjj: "",
      nameArr: [
        "优广网",
        "淘宝网",
        "凤凰网",
        "赶集网",
        "飞猪",
        "携程",
        "优广网",
        "淘宝网",
        "凤凰网",
        "赶集网",
        "飞猪",
        "携程",
        "优广网",
        "淘宝网",
        "凤凰网",
        "赶集网",
        "飞猪",
        "携程",
        "优广网",
        "淘宝网",
        "凤凰网",
        "赶集网",
        "飞猪",
        "携程"
      ]
      //   listData: new Array(5),
      //   listData1: new Array(5),
      //   listData2: [1, 2],
      //   listData3: [1],
      //   maxPages: 4,
      //   isUnMore1: false,
      //   isLoading1: false,
      //   page1: 2,
      //   maxPages2: 1,
      //   isUnMore2: false,
      //   isLoading2: false,
      //   page2: 2,
      //   timers: null
    };
  },
  created() {
    // console.log(this.Listdata)
  },
  methods: {
    item_details() {
      this.$router.push({ path: "/project/details" });
    }
    // loadMoreVert() {
    //   //加载列表
    //   console.log(this.page1);
    //   this.isLoading1 = true;
    //   if (this.page1 > this.maxPages) {
    //     //判断当前页 是否大于总页数
    //     this.isUnMore1 = true;
    //     this.isLoading1 = false;
    //   } else {
    //     clearTimeout(this.timers);
    //     this.timer = setTimeout(() => {
    //       this.isLoading1 = false;
    //       this.isUnMore1 = false;
    //       this.listData1 = new Array(5 * this.page1);
    //       this.page1 = ++this.page1;
    //     }, 300);
    //   }
    // },

    // pulldown() {
    //   //下拉刷新列表
    //   this.isLoading1 = true;
    //   clearTimeout(this.timers);
    //   this.timer = setTimeout(() => {
    //     //刷新列表重新给数组赋值
    //     this.isLoading1 = false;
    //     this.isUnMore1 = false;
    //     this.listData1 = new Array(5);
    //     this.page1 = 2;
    //   }, 300);
    // }
  },
  watch: {
    Listdata(o, n) {
      console.log(n);
    }
  },
  destroyed() {
    clearTimeout(this.timer);
  }
};
</script>

<style lang="scss" scoped>
.List_box {
  background: #f5f6fa;
  dl {
    display: flex;
    padding: 23px 15px;
    dt {
      min-width: 99px;
      height: 99px;
      padding-right: 15px;
      img {
        max-width: 100%;
        height: 100%;
        border-radius: 50% 50%;
      }
    }
    dd {
      .name {
        font-size: 14px;
        font-weight: 500;
        color: #333;
      }
    }
  }
}
.List_box .List_item:nth-child(1) {
  margin-top: 0;
}
.List_item {
  margin-top: 11px;
  background: #fff;
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
    width: 0;
    height: 0;
    border-top: 1.81rem solid #81d8d0;
    border-left: 1.81rem solid transparent;

    em {
      position: absolute;
      top: -1.8rem;
      left: 0rem;
      height: 1.27rem;
      width: 1.27rem;
      line-height: 1.2rem;
      text-align: center;
      font-size: 0.29rem;
      color: #000;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    }
  }
}
</style>