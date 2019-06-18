<template>
  <div>
 
    <div class="topBox">
         <nut-navbar 
    @on-click-back="back" 
    :leftShow="true" 
    :rightShow="true"
    style="background:rgba(255,255,255,0);color:#fff;"
>{{ListData.name}}</nut-navbar>
      <img src="../../assets/image/organ_top.png" alt class="btm_BG">
      <div class="box_BTM">
        <div class="Box_1" style="display:flex;flex-direction: column;">
         <span>3</span>
          <span style="color:#666">机构联系人</span>
        </div>
        <div class="Box_1 headIMG">
          <img src="../../assets/image/right-title-portrait.png" alt>
        </div>
        <div class="Box_1" style="display:flex;flex-direction: column;">
          <span>12</span>
          <span style="color:#666">推荐项目</span>
        </div>
      </div>
    </div>
    <div class="jgjj">
      <div class="title_top">
        <div class="left">
          <em class="lineEm"></em>
          <b class="noW">机构简介</b>
        </div>
      </div>
      <div class="contentBox" v-if="ListData!=null">
        <p v-if="unfoldAll" class="hide">
          {{ListData.description}}
          <em class="unfold_All" @click="unfoldShow()">
            展开全部
            <span class="downIcon"></span>
          </em>
        </p>
        <p v-else class="test_size">
          {{ListData.description}}
          <em class="close_All" @click="unfoldNoShow()">
            收起
            <span class="upIcon"></span>
          </em>
        </p>
      </div>
    </div>
    <div class="tzhy">
      <div class="title_top">
        <div class="left">
          <em class="lineEm"></em>
          <b class="noW">投资行业</b>
        </div>
      </div>
      <div class="contentBox">
        <p v-if="unfoldAll2" class="hide">
          <span v-for="(item,ind) in ListData.lingyu_name" :key="ind" class="Listhy yd">{{item}}</span>
          <em class="unfold_All" @click="unfoldShow2()">
            展开全部
            <span class="downIcon"></span>
          </em>
        </p>
        <p v-else class="test_size hyshowList">
          <span v-for="(item,ind) in ListData.lingyu_name" :key="ind" class="Listhy yd">{{item}}</span>
          <em class="close_All" @click="unfoldNoShow2()">
            收起
            <span class="upIcon"></span>
          </em>
        </p>
      </div>
    </div>
    <div class="phlc">
      <div class="title_top">
        <div class="left">
          <em class="lineEm"></em>
          <b class="noW">偏好轮次</b>
        </div>
      </div>
      <div class="contentBox">
        <p v-if="unfoldAll3" class="hide">
          <span v-for="(item,ind) in LCdata" :key="ind" class="Listhy yd">{{item}}</span>
          <em class="unfold_All" @click="unfoldShow3()">
            展开全部
            <span class="downIcon"></span>
          </em>
        </p>
        <p v-else class="test_size">
          <span v-for="(item,ind) in LCdata" :key="ind" class="Listhy yd">{{item}}</span>
          <em class="close_All" @click="unfoldNoShow3()">
            收起
            <span class="upIcon"></span>
          </em>
        </p>
      </div>
    </div>
    <div class="addbz">
      <div class="title_top titletwo">
        <div class="left">
          <em class="lineEm"></em>
          <b class="noW">备注</b>
        </div>
        <div class="right">
          <span @click="addBz()">+</span>
        </div>
      </div>
      <div class="contentBox">
        <p v-for="(item,ind) in BZList" :key="ind">{{ind+':'+item}}</p>
      </div>
    </div>
    <div class="lxr">
      <div class="title_top titletwo">
        <div class="left">
          <em class="lineEm"></em>
          <b class="noW">联系人</b>
        </div>
        <div class="right">
          <span @click="addLxr()">+</span>
        </div>
      </div>
      <div class="contentBox">
        <p v-for="(item,ind) in LXRlist" :key="ind">{{ind+':'+item}}</p>
      </div>
    </div>
    <!-- 备注 -->
    <nut-dialog
      title="添加备注"
      :visible="dialogShowBZ"
      @close="dialogShowBZ=false"
      :onOkBtn="confirmBZ"
    >
      <nut-textinput
        v-model="bz"
        label="添加备注"
        placeholder="请输入备注"
        :clearBtn="false"
        :disabled="false"
        :hasBorder="false"
      />
    </nut-dialog>
    <!-- 联系人 -->
    <nut-dialog
      title="添加联系人"
      :visible="dialogShowLXR"
      @close="dialogShowLXR=false"
      :onOkBtn="confirmLXR"
    >
      <nut-textinput
        v-model="lxrName"
        label="姓名"
        placeholder="请输入联系人姓名"
        :clearBtn="false"
        :disabled="false"
        :hasBorder="false"
      />
      <nut-textinput
        v-model="lxrphone"
        label="联系方式"
        placeholder="请输入联系人"
        :clearBtn="false"
        :disabled="false"
        :hasBorder="false"
      />
    </nut-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      unfoldAll: true,
      unfoldAll2: true,
      unfoldAll3: true,
      ListData: {},
      BZList: ["吃饱喝足"],
      bz: "",
      dialogShowBZ: false,
      dialogShowLXR: false,
      LXRlist: [],
      lxrName: "",
      lxrphone: "",
      LCdata: ["天使轮", "A轮", "B轮", "C轮", "D轮", "E轮", "战略融资"]
    };
  },
  created() {
    // organId
		let id = this.$route.query.id;
		// console.log(id);
    this.$fetch("/api/getOrganDetail/"+id).then(res => {
      if (res.status == "success") this.ListData = res.data;
      console.log(this.ListData);
    });
  },
  methods: {
    back(){
      this.$router.go(-1);
    },
    unfoldShow() {
      this.unfoldAll = false;
    },
    unfoldNoShow() {
      this.unfoldAll = true;
    },
    unfoldShow2() {
      this.unfoldAll2 = false;
    },
    unfoldNoShow2() {
      this.unfoldAll2 = true;
    },
    unfoldShow3() {
      this.unfoldAll3 = false;
    },
    unfoldNoShow3() {
      this.unfoldAll3 = true;
    },
    addBz() {
      // 添加备注
      this.dialogShowBZ = true;
    },
    confirmBZ() {
      this.dialogShowBZ = false;
      this.BZList.push(this.bz);
      this.bz = "";
    },
    addLxr() {
      //添加联系人
      this.dialogShowLXR = true;
    },
    confirmLXR() {
      this.dialogShowLXR = false;
      this.LXRlist.push(this.lxrName + ":" + this.lxrphone);
      this.lxr = "";
    }
  }
};
</script>

<style lang="scss" scoped>
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
.topBox {
  position: relative;
  height: 30%;
  background-image: url("../../assets/image/bg.png");
  .btm_BG {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
}
.box_BTM {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 30%;
  display: flex;
  .Box_1 {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .headIMG {
    position: relative;
    img {
      position: absolute;
      bottom: 50%;
      width: 90%;
    }
  }
}
.jgjj,
.tzhy,
.phlc,
.addbz,
.lxr {
  padding: 10px 5% 0;
  background: #fff;
  margin-top: 10px;
  padding-bottom: 20px;
}
.title_top {
  display: flex;
  align-items: center;
  padding-top: 10px;
  // overflow: hidden;
  height: 30px;
}
.titletwo {
  display: flex;
  justify-content: space-between;
}
.left {
  height: 100%;
}
.noW {
  font-weight: 400;
  font-size: 16px;
  text-indent: 10px;
}
.lineEm {
  width: 3px;
  height: 50%;
  display: inline-block;
  background-image: url("../../assets/image/line1.png");
  background-size: 100%;
  margin-right: 5px;
}
.contentBox {
  position: relative;
}
.unfold_All,
.close_All {
  position: absolute;
  height: 20px;
  bottom: -20px;
  right: 0;
  display: flex;
  align-items: center;
}
.upIcon {
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-bottom: 5px solid #ccc;
}
.downIcon {
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-top: 5px solid #ccc;
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
.test_size {
  font-size: 12px;
  line-height: 16px;
}
.right span {
  border: 1px solid rgb(29, 198, 197);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  float: right;
  text-align: center;
  line-height: 20px;
  color: rgb(29, 198, 197);
}
.Listhy {
  // border:1px solid #ccc;
  display: inline-block;
  padding: 0 10px;
  margin-right: 10px;
  margin-bottom: 10px;
}
.hyshowList {
  display: flex;
  flex-wrap: wrap;
}
</style>