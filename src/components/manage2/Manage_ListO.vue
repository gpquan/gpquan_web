<template>
  <div>
    <ul class="Max_list">
      <li class="list_Item" v-for="(item,ind) in 3" :key="ind">
        <dl class="list_DL">
          <dt>
            <div class="box_1" :key="ind">
              <span class="box1">
                <circle-progress
                  :id="11"
                  :width="85"
                  :radius="5"
                  :progress="70"
                  :delay="200"
                  :duration="500"
                  barColor="#F2AE57"
                  backgroundColor="#FFE8CC"
                  :isAnimation="true"
                ></circle-progress>
                <span class="dhwb">
                  <img src="../../assets/image/ManageA_details_cardicon.png" alt>
                </span>
              </span>
              <b class="nameTIT">
                <em></em>
                {{111}}
              </b>
            </div>
          </dt>
          <dd>
            <div>
              <span class="name">{{"红杉资本"}}</span>
            </div>
            <div>
              <span class="hide">简介:大数据库里发生金龙大厦就打开了撒旦教卡加了咖啡阿萨德阿萨德啊</span>
            </div>
            <div class="ly">
                <span class="yd">电子商务</span>
            </div>
          </dd>
        </dl>
      </li>
    </ul>
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
      dataList: [
        {
          name: "红杉资本",
          jj:
            "红杉资本成立于1999年红杉资本成立于1999年红杉资本成立于1999年红杉资本成立于1999年",
          ly_name: "移动互联网"
        }
      ]
    };
  },
  methods: {
    getList() {}
  }
};
</script>

<style lang="scss" scoped>
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
  font-size: 14px;
  font-weight: 500;
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
.ly{
    margin-top:10px;
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