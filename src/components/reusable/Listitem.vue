<template>
  <div class="List_box" v-if="Listdata[0].name">
    <div class="item" v-for="(item, index) in Listdata" :key="index" @click="item_details">
      <span class="item_status" v-if="item.name">
        <img src="../../assets/image/listItem_status.png" alt>
        <em class="item_status_text">{{item.name}}</em>
      </span>
      <dl class="List_item">
        <dt class="img" @click="item_details">
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
            <span class="hide">    简介:{{item.description}}</span>
          </div>
          <div class="List_downsize">
            <span>{{item.lingyu_name}}</span>|
            <!-- <span>Pre-A</span>|
            <span>北京市</span> -->
          </div>
          <div class="List_downsize">
            佣金占比：
            <span>{{item.yongjin}}%</span>
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
      jgList: [
      ],
      nameArr: [
      ]
    };
  },
  created() {
    // console.log(this.Listdata)
  },
  methods: {
    item_details() {
      this.$router.push({ path: "/project/details" });
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
</style>