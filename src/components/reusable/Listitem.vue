<template>
  <div class="List_box" v-if="Listdata[0]">
    <div class="item" v-for="(item, index) in Listdata" :key="index" @click="item_details(item)">
      <span class="item_status" v-if="Listdata.length%index==1">
        <!-- <img src="../../assets/image/l_bg.png" alt> -->
        <em class="item_status_text hide1">红杉资本</em>
      </span>
      <dl class="List_item">
        <dt class="img">
          <img :src="item.logo" alt>
          <div></div>
        </dt>
        <dd>
          <div>
            <span class="name">{{item.name}}</span>
            <span class="yd">{{item.lingyu_name}}</span>
            <span class="SAAS">SAAS</span>
            <span class="xmt">新媒体</span>
          </div>
          <div class="introBox">
            <div class="intro" :title="textjj">{{textjj}}</div>
          </div>
          <div class="List_downsize">
            <span class="hide">简介:{{item.description}}</span>
          </div>
          <div class="List_downsize">
            <span>融资金额：2000万</span>&nbsp; | &nbsp;
            <span> {{item.stage_name}}</span>&nbsp; | &nbsp;
             <span>  佣金比例：{{item.yongjin}}%</span>
          </div>
        
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  props: ["Listdata"],
  data() {
    return {
      // Listdata:{},
      textjj: "",
      jgList: [],
      nameArr: []
    };
  },
  created() {
    // console.log(this.Listdata)
  },
  methods: {
    item_details(item) {
      this.$router.push({
        path: "/project/details",
        query: {
          id: item.id
        }
      });
    }
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
      min-width: 20%;
      height: 20%;
      img {
        // max-width: 100%;
        // height: 100%;
        width: 60px;
        height:60px;
        margin-top: 15%;
        border-radius: 50% 50%;
        border:1px solid #e4e4e4;
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

.List_item {
  margin-bottom: 11px;
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

.List_downsize {
  color: #999999;
  font-size: 11px;
  padding-top: 5px;
}
.item {
  position: relative;
  .item_status {
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("../../assets/image/l_bg.png"); // width: 0;
    background-size: 100%;
    background-repeat: no-repeat;
    width: 15%;
    height: 70%;

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
  -webkit-line-clamp:1;
  -webkit-box-orient: vertical;
}
</style>