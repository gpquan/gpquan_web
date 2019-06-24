<template>
  <div>
    <div class="project_" v-if="!bzshow">
      <nut-navbar
        @on-click-back="back"
        @on-click-title="title"
        @on-click-more="more"
        :rightShow="false"
      >添加项目</nut-navbar>
      <div class="addcontent">
        <div class="topaddIMG">
          <div class="title-box">
            <img src="../../assets/image/line1.png" alt class="line">
            <span class="title-text">添加头像</span>
          </div>
          <div class="addImg">
            <div class="addImgBox">
              <div>添加项目logo</div>
              <nut-uploader
                name="uploader-demo"
                :url="url"
                :isPreview="true"
                class="logoADD"
                @start="onStart"
                @success="onSuccess"
                @fail="onFail"
                @progress="onProgress"
                @preview="onPreview"
                @showMsg="showMsgFn"
                :acceptType="['image/jpeg', 'image/png', 'image/gif', 'image/bmp']"
                typeError="对不起，不支持上传该类型文件！"
                limitError="对不起，文件大小超过限制！"
              >
                <img v-if="addImgBtn" src="../../assets/image/up-image.jpg" alt>
                <img v-else :src="imgUrl" alt>
              </nut-uploader>
            </div>
            <!-- <div class="previewImg">
            <img :src="previewImg" alt>
            </div>-->
          </div>
        </div>

        <div class="BasicStatus">
          <div class="title2-box">
            <img src="../../assets/image/line1.png" alt class="line">
            <span class="title-text">基本信息</span>
          </div>
          <div class="top_line"></div>
          <div class="basicBox">
            <nut-textinput
              v-model="name"
              placeholder="请输入项目名称"
              maxlength="5"
              :hasBorder="false"
              label="项目名称"
              class="ipt_textR"
            />
            <!-- <div class="top_line"></div> -->
            <div @click="gopersonage()">
              <nut-cell title="项目介绍" :desc="description" :showIcon="true" class="projectJS hide"></nut-cell>
            </div>
            <div @click="industryShow()">
              <nut-cell title="所属行业" :desc="industry" :showIcon="true"></nut-cell>
            </div>
            <div @click="pshow()">
              <nut-cell title="当前轮次" :desc="rounds" :showIcon="true"></nut-cell>
            </div>
            <!-- <div class="top_line"></div> -->
            <nut-textinput
              placeholder="输入多个标签请用空格隔开"
              v-model="lyList"
              :hasBorder="false"
              label="添加标签"
              class="ipt_textR"
            />
            <div class="top_line"></div>
            <nut-textinput
              placeholder="输入项目所需融资金额"
              v-model="money"
              :hasBorder="false"
              label="融资需求"
              class="ipt_textR"
            />
            <div class="top_line"></div>
            <div class="money_ratio">
              <em class="percent">%</em>
              <nut-textinput
                maxlength="5"
                v-model="moneyRatio"
                :hasBorder="false"
                label="佣金比例"
                class="ipt_textR"
                :clearBtn="false"
              />
            </div>
            <div @click="FlagChange()">
              <nut-cell title="是否独家" :desc="isFlag" :showIcon="true"></nut-cell>
            </div>
            <nut-actionsheet
              :is-visible="isVisibledj"
              @close="switchActionSheet('isVisibledj')"
              :menu-items="menuItems"
              @choose="chooseItem"
            ></nut-actionsheet>
            <!-- <div class="top_line"></div> -->
            <!-- <div class="top_line"></div> -->
            <nut-textinput
              placeholder="请输入项目联系人姓名"
              maxlength="5"
              :hasBorder="false"
              label="项目联系人"
              class="ipt_textR"
              v-model="contract_name"
            />
            <div class="top_line"></div>
            <nut-textinput
              placeholder="请输入手机号码、邮箱"
              maxlength="5"
              :hasBorder="false"
              label="项目联系方式"
              class="ipt_textR"
              v-model="contract_phone"
            />
          </div>
        </div>
        <div class="financing">
          <div class="financingtitle">
            <div class="title-box twotitle">
             
              <div class="left" style="flex:1;">
                 <img src="../../assets/image/line1.png" alt class="line">
              <span class="title-text">融资历史</span>
              </div>
              <div class="right">
                <span @click="addHistory()">+</span>
              </div>
            </div>
          </div>
          <div class="financingBox" v-if="rzhistoryObj.length!=0">
            <div v-for="(item,index) in rzhistoryObj" :key="index" class="item_">
              <div>融资机构：{{item.financing_username}}</div>
              <div>融资阶段：{{item.financing_stage_name}}</div>
              <div>融资金额：{{item.financing_money}}</div>
              <div>融资时间：{{item.financing_time}}</div>
            </div>
          </div>
        </div>
        <div class="team">
          <div class="teamtitle">
          <div class="title-box twotitle">
              <div class="left" style="flex:1;">
                 <img src="../../assets/image/line1.png" alt class="line">
              <span class="title-text">团队</span>
            </div>
            <div class="right">
              <span @click="addTeam()">+</span>
            </div>
            </div>
          </div>
          <div class="teamBox" v-if="teamObj.length!=0">
            <div v-for="(items,ind) in teamObj" :key="ind">
              <div>姓名：{{items.name}}</div>
              <div>职位：{{items.job}}</div>
              <div>人物简介：{{items.description}}</div>
              <!-- <nut-cell title="姓名" :desc="items.name"></nut-cell>
              <nut-cell title="职位" :desc="items.position"></nut-cell>
              <nut-cell title="姓名" :desc="items.intro"></nut-cell>-->
            </div>
          </div>
        </div>
        <div class="product">
          <div class="productTitle">
          <div class="title-box twotitle">
              <div class="left" style="flex:1;">
                 <img src="../../assets/image/line1.png" alt class="line">
                 <span class="title-text">竞品</span>
            </div>
            <div class="right">
              <span @click="addproduct()">+</span>
            </div>
          </div>
          </div>
          <div class="productBox" v-if="ProductObj.length!=0">
            <div v-for="(item,ind) in ProductObj" :key="ind">
              <nut-cell title="竞品名称" :desc="item.ProductName"></nut-cell>
            </div>
          </div>
        </div>
        <div class="lightspot">
             <div class="title-box twotitle">
            <img src="../../assets/image/line1.png" alt class="line">
            <span class="title-text">项目亮点</span>
          </div>
          <div class="Box">
            <div @click="lightspot()">
              <nut-cell title="项目亮点" :desc="project_light" :showIcon="true" class="projectLD"></nut-cell>
            </div>
          </div>
        </div>

        <div class="recommend_Btn">
          <nut-button block shape="circle" @click="sbumitList">提交审核</nut-button>
        </div>

        <!-- 投资轮次 -->
        <nut-picker
          :is-visible="isVisible1"
          :default-value-data="defaultValueData1"
          :list-data="listData1"
          @close="switchPicker('isVisible1')"
          @confirm="setYearValue"
          @choose="updateChooseValue"
        ></nut-picker>

        <!-- 融资历史 -->
        <nut-dialog
          title="融资历史"
          :visible="dialogShow"
          @close="dialogShow=false"
          :onOkBtn="confirmLS"
        >
          <nut-textinput
            label="融资机构"
            placeholder="请输入融资机构"
            :clearBtn="false"
            :disabled="false"
            :hasBorder="false"
            v-model="rzhistoryNewObj.financing_username"
          />
          <div @click="rzJDSelect()" class="rzjd_text">
            <nut-cell title="融资阶段" :desc="rzhistoryNewObj.financing_stage_name" :showIcon="true"></nut-cell>
          </div>
          <nut-textinput
            label="融资金额"
            placeholder="请输入融资金额"
            :clearBtn="false"
            :disabled="false"
            :hasBorder="false"
            v-model="rzhistoryNewObj.financing_money"
          />
          <nut-textinput
            label="融资时间"
            placeholder="请输入融资时间"
            :clearBtn="false"
            :disabled="false"
            :hasBorder="false"
            v-model="rzhistoryNewObj.financing_time"
          />
          <!-- <a href="javascript:;" @click="dialogShow=false" :noCancelBtn="true">点我可以直接关闭对话框</a> -->
        </nut-dialog>
        <!-- 团队 -->
        <nut-dialog
          title="团队"
          :visible="dialogShowTeam"
          @close="dialogShowTeam=false"
          :onOkBtn="confirmTeam"
        >
          <nut-textinput
            v-model="teamNewObj.name"
            label="姓名"
            placeholder="请输入姓名"
            :clearBtn="false"
            :disabled="false"
            :hasBorder="false"
          />
          <nut-textinput
            v-model="teamNewObj.job"
            label="职位"
            placeholder="请输入职位"
            :clearBtn="false"
            :disabled="false"
            :hasBorder="false"
          />
          <nut-textinput
            description
            v-model="teamNewObj.description"
            label="简介"
            placeholder="请输入简介"
            :clearBtn="false"
            :disabled="false"
            :hasBorder="false"
          />
        </nut-dialog>
        <!-- 竞品 -->
        <nut-dialog
          title="竞品"
          :visible="dialogProduct"
          @close="dialogProduct=false"
          :onOkBtn="confirmProduct"
        >
          <nut-textinput
            label="竞品名称"
            placeholder="请输入竞品名称"
            :clearBtn="false"
            :disabled="false"
            :hasBorder="false"
            v-model="newJp"
          />
        </nut-dialog>
        <nut-picker
          :is-visible="rzhistory"
          :default-value-data="defaultRZhistory"
          :list-data="listData1"
          @close="switchPicker('rzhistory')"
          @confirm="setRZhistory"
        ></nut-picker>
        <nut-picker
          :is-visible="isVisible"
          title="所属行业"
          :list-data="listData"
          :default-value-data="defaultValueData"
          @close="switchPicker('isVisible')"
          @confirm="setChooseValue"
          @choose="updateChooseValue"
          @close-update="closeUpdateChooseValue"
        ></nut-picker>
      </div>
    </div>
    <div class="bz" v-else>
      <div class="personage">
        <div v-if="bzType==1" class="Project">
          <nut-navbar @on-click-back="backs" @on-click-more="more" title="项目介绍">
            <a slot="more-icon" @click="saveText()">保存</a>
          </nut-navbar>
          <div class="personageBox">
            <textarea class="xmjs" placeholder="请输入项目介绍" v-model="description"></textarea>
          </div>
        </div>
        <div v-else-if="bzType==2" class="lightspotBox">
          <nut-navbar @on-click-back="backs" @on-click-more="more" title="项目亮点">
            <a slot="more-icon" @click="saveText()">保存</a>
          </nut-navbar>
          <div class="personageBox">
            <textarea class="xmjs" placeholder="请输入项目亮点" v-model="project_light"></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addImgBtn: true,
      imgUrl: "../../assets/image/up-image.jpg",
      url: "https://my-json-server.typicode.com/linrufeng/demo/posts",
      name: null, //项目名称
      dialogShow: false, //遮罩
      defaultValueData: "2010",
      rzjd: false, //融资阶段显隐
      showMark: true,
      rounds: null,
      isVisible1: false, //选择轮次
      industry1: false, //选择行业
      moneyRatio: null, //佣金比例
      lingyuList: [], //领域集合  对象
      defaultindustry: null,

      listData1: [[]],
      defaultValueData1: null,
      previewImg: "",
      isVisibledj: false, //是否独家
      menuItems: [
        {
          name: "非独家",
          value: 0
        },
        {
          name: "独家",
          value: 1
        }
      ],
      isDj: null,
      isFlag: null,
      list1: [1, 2, 3, 4, 5],
      rzhistory: false, //融资历史
      defaultRZhistory: null, //融资
      Rzhistory: "", //融资展示
      rzhistoryList: [[111, 222, 333, 444]],
      rzhistoryObj: [
        {
          financing_stage_id: 2, //融资阶段
          financing_stage_name: "种子轮",
          financing_time: "2017-8-9", // 融资时间
          financing_money: 500, //融资金额
          financing_username: "hongshan,IDG" //机构
        }
      ],
      rzhistoryNewObj: {
        //融资历史新增加
      },
      dialogShowTeam: false, //团队
      teamObj: [
        {
          name: "张三", //姓名
          job: "创始人", //职位
          description: "公司创始人，眼光独特，思维敏捷" //人物简介
        }
      ],
      dialogProduct: false, //竞品
      ProductObj: [],
      roundsList: [], //轮次集合
      stage_id: null, //轮次ID
      lingyu_id: null, //领域ID
      industry: null,
      isVisible: false,
      data: {
        //二级
      },
      listData: [
        //一级
        // [ '上海', '黑龙江', '北京', '重庆', '江西','内蒙古' ]
      ],
      defaultValueData: null,
      list2: {},
      value: null,
      lyIdList: [],
      money: null, //融资金额
      lyList: "",
      description: "请输入项目介绍", //项目介绍
      project_light: "请输入项目亮点",
      bzshow: false, //简介是否显示
      bzType: null, //简介页面类别
      contract_name: null, //联系人姓名
      contract_phone: null, //联系人电话
      teamNewObj: {
        //添加团队成员
      },
      Rzhistory_id: null, //融资历史轮次选择ID
      Rzhistory_List: [], //融资历史选择列表
      newJp: null //新增竞品
    };
  },
  created() {
    this.name = this.$route.query.name;
    this.getroundsList();
    //领域赋值
    this.listData = [...[this.listData[0]], this.data[this.listData[0][0]]];
  },
  beforeMount() {
    let to = this.$route;
    if (to.params.type && to.params.type == 1) {
      this.description = to.params.introduce;
      console.log(this.description);
    } else if (to.params.type && to.params.type == 2) {
      this.project_light = to.params.lightspot;
    }
    console.log(this.project_light);
    console.log(console.log(this.description));
    //领域第一次获取
    this.$post("/api/getLingyu").then(res => {
      this.listData[0] = [];
      for (let i = 0; i < res.data.length; i++) {
        this.listData[0].push(res.data[i].name);
        this.lyIdList.push(res.data[i].id);
      }
      this.$post("/api/getLingyu", {
        parent_id: 1
      }).then(res2 => {
        let arr = res2.data;
        let arrlist = [];
        for (let j = 0; j < arr.length; j++) {
          arrlist.push(res2.data[j].name);
        }
        this.data[this.listData[0][0]] = arrlist;
        arrlist = [];
      });
    });
  },
  mounted: function() {},
  methods: {
    sbumitList() {
      //提交审核
      //money 融资金额 stage_id: null, //轮次ID
      //lingyu_id: null, //领域ID moneyRatio: null, //佣金比例
      // description:'请输入项目介绍' 项目介绍
      // project_light:'请输入项目亮点', imgUrl LOGO
      //name 名称  isDj//是否独家 - 0非独家 1独家
      this.lyList = this.lyList.replace(/\s+/g, ",");
      console.log(this.lyList);
      if (
        this.money &&
        this.stage_id &&
        this.lingyu_id &&
        this.moneyRatio &&
        this.description != "请输入项目介绍" &&
        this.project_light != "请输入项目亮点" &&
        !this.addImgBtn &&
        this.name &&
        this.isDj < 2
      ) {
        alert("资料齐全");
        this.$post("/api/addProject", {
          name: this.name,
          description: this.description,
          lingyu_id: this.lingyu_id,
          stage_id: this.stage_id,
          logo: this.imgUrl,
          financing_money: this.money,
          yongjin: this.moneyRatio,
          vip: this.isDj,
          contract_name: this.contract_name,
          contract_phone: this.contract_phone,
          project_light: this.project_light,
          financingData: this.rzhistoryObj + "",
          member: this.teamObj + "",
          tag: this.lyList,
          member: this.teamObj + "",
          project_BP: this.imgUrl
        }).then(res => {
          console.log(res);
        });
      } else {
        alert("缺点东西");
      }
    },
    saveText() {
      console.log("保存");
      this.bzshow = false;
    },
    backs() {
      this.bzshow = false;
    },
    getroundsList() {
      //获取轮次集合
      this.$post("/api/getStage").then(res => {
        this.roundsList = res.data;
        this.Rzhistory_List = res.data;
        for (let i = 0; i < res.data.length; i++) {
          this.listData1[0].push(res.data[i].name);
        }
      });
    },
    switchActionSheet(param) {
      this[`${param}`] = !this[`${param}`];
    },

    chooseItem(itemParams) {
      this.isFlag = itemParams.name;
      this.isDj = itemParams.value; //是否独家 - 0非独家 1独家
    },
    FlagChange() {
      this.isVisibledj = true;
    },
    pshow() {
      this.isVisible1 = true;
    },
    industryShow() {
      this.isVisible = true;
    },
    switchPicker(param) {
      this[`${param}`] = !this[`${param}`];
    },
    setYearValue(chooseData) {
      //选中轮次  设置选中id
      console.log(this.roundsList);
      for (let i = 0; i < this.roundsList.length; i++) {
        if (this.roundsList[i].name == chooseData[0]) {
          this.stage_id = this.roundsList[i].id;
        }
      }
      this.rounds = `${chooseData[0]}`;
    },
    back() {
      // alert("header头部， 点击返回");
      this.$router.go(-1);
    },
    title() {
      // alert("header头部， 点击title");
    },
    more() {
      // alert("header头部， 点击更多");
    },
    onStart() {
      console.log("上传开始");
    },
    onSuccess(file, res) {
      this.$toast.success("上传成功");
    },
    onFail(file, res) {
      this.$toast.fail("上传失败！");
    },
    showMsgFn(msg) {
      this.$toast.text(msg);
    },
    onProgress(file, loaded, total) {
      console.log("上传进度:" + parseInt((100 * loaded) / total) + "%");
    },
    onPreview(file) {
      this.previewImg = file;
      this.imgUrl = file;
      this.addImgBtn = false;
      console.log(this.previewImg);
    },
    gopersonage() {
      //项目介绍
      // this.$router.push({ name: "personage", params: { kind: 1 } });
      this.bzshow = true;
      this.bzType = 1;
    },
    lightspot() {
      //项目亮点
      // this.$router.push({ name: "personage", params: { kind: 2 } });
      this.bzshow = true;
      this.bzType = 2;
    },
    addHistory() {
      //添加融资历史
      console.log("融资历史");
      this.dialogShow = true;
    },
    rzJDSelect() {
      //融资历史选择器展示
      this.rzhistory = true;
    },
    setRZhistory(chooseData) {
      //融资历史选择器选中
      for (let i = 0; i < this.Rzhistory_List.length; i++) {
        if (this.Rzhistory_List[i].name == chooseData[0]) {
          this.Rzhistory_id = this.Rzhistory_List[i].id;
        }
      }
      this.rzhistoryNewObj.financing_stage_name = `${chooseData[0]}`;
      this.rzhistoryNewObj.financing_stage_id = this.Rzhistory_id;
    },
    confirmLS() {
      //融资历史增加确定回调
      if (this.rzhistoryNewObj != {}) {
        this.rzhistoryObj.push(this.rzhistoryNewObj);
        this.rzhistoryNewObj = {};
      }
      this.dialogShow = false;
    },
    addTeam() {
      //融资团队
      this.dialogShowTeam = true;
    },
    confirmTeam() {
      //确认
      if (this.teamNewObj.name) {
        this.teamObj.push(this.teamNewObj);
        this.teamNewObj = {};
      }
      this.dialogShowTeam = false;
    },
    addproduct() {
      //竞品
      // this.ProductName
      this.dialogProduct = true;
    },
    confirmProduct() {
      //竞品确认
      if (this.newJp) {
        this.ProductObj.push({
          ProductName: this.newJp
        });
        this.newJp = null;
      }

      this.dialogProduct = false;
    },
    updateLinkage(self, value, index, chooseValue, cacheValueData, a, b) {
      let num = this.listData[0].indexOf(value);
      let val = this.listData[0][num];
      if (!value) {
        return false;
      }
      switch (index) {
        case 1:
          let i = this.listData[0].indexOf(value);
          if (this.data[this.listData[0][i]]) {
            this.listData.splice(index, 1, [...this.data[this.listData[0][i]]]);
          }
          chooseValue = chooseValue ? chooseValue : this.listData[index][0];
          self && self.updateChooseValue(self, index, chooseValue);
          break;
      }
      this.$forceUpdate();
    },

    updateChooseValue(self, index, value, cacheValueData) {
      let a = this.listData[0].indexOf(value);
      let b = this.lyIdList[a];
      this.$post("/api/getLingyu", {
        parent_id: b
      }).then(res2 => {
        let arr = res2.data;
        let list2 = {};
        let arrlist = [];
        for (let j = 0; j < arr.length; j++) {
          arrlist.push(res2.data[j].name);
          list2 = [];
        }
        this.data[this.listData[0][a]] = arrlist;
        this.$forceUpdate();
        arrlist = [];
        index < 1 && this.updateLinkage(self, value, index + 1, null, a, b);
      });
    },
    closeUpdateChooseValue(self, chooseData) {
      this.updateLinkage(self, chooseData[0], 1, chooseData[1], chooseData);
    },
    setChooseValue(chooseData) {
      this.value = chooseData[0];
      this.industry = `${chooseData[0]}-${chooseData[1]}${
        chooseData[2] ? "-" + chooseData[2] : ""
      }`;

      let idnum = this.listData[0].indexOf(chooseData[0]);
      this.lingyu_id = this.lyIdList[idnum];
    }
  },
  watch: {
    money(n, o) {
      this.money = n.replace(/[^\d^\.]+/g, "");
    },
    moneyRatio(n, o) {
      this.moneyRatio = n.replace(/[^\d^\.]+/g, "");
    },
    $route(to, from) {}
    // lyList(n,o){
    //   if(n.indexOf(" ")!==-1){
    //     // let num=n.indexOf(" ")
    //   if(  this.lyList[this.lyList.length]==","){
    //     console.log("shi"+  this.lyList[this.lyList.length]==",")
    //   }
    //     this.lyList=n.replace(/(^\s+)|(\s+$)/g,",")
    //   }
    // }
  }
};
</script>

<style lang="scss" scoped>
.topaddIMG,
.BasicStatus,
.financing,
.team,
.product,
.lightspot {
  padding: 0 5%;
  background: #fff;
  margin-top: 13px;
}
.addImg {
  // padding: 0 5%;
  line-height: 55px;
  height: 55px;
  position: relative;
  display: flex;
  flex-direction: column;
  .previewImg {
    height: 100%;
    position: absolute;
    right: 5%;
    top: 0;
    display: flex;
    align-items: center;
    img {
      height: 45px;
      line-height: 55px;
    }
  }
}
.topImgtitle,
.Basictitle,
.financingtitle,
.teamtitle,
.productTitle,
.lightspottitle {
  padding: 10px 0;
}
.topaddIMG {
  display: flex;
  flex-direction: column;
}
.topImgtitle {
  border-bottom: 1px solid #ccc;
  height: 52px;
  img {
    height: 80%;
  }
}
.addImgBox {
  display: flex;
  justify-content: space-between;
}
.logoADD {
  height: 100%;
  display: flex;
  align-items: center;
  img {
    height: 80%;
  }
}
.top_line {
  padding: 0 5%;
  width: 90%;
  height: 2px;
  background: rgba(102, 102, 102, 1);
  opacity: 0.15;
}
// .basicBox{
//     border-top: 1px solid #666666;
// }
.money_ratio .nut-textinput input {
  padding-right: 22px;
}

/deep/.nut-textinput input {
  text-align: right;
  // padding-right: 0;
}
.nut-cell,
.nut-cell-link {
  padding: 0;
}
.nut-textinput {
  height: 55px;
}
.recommend_Btn {
  margin-top: 20px;
  text-align: center;
  padding-bottom: 30px;
}
.recommend_Btn button {
  width: 90%;
  background: rgb(29, 198, 197);
}
.money_ratio {
  position: relative;
  .percent {
    float: right;
    line-height: 55px;
  }
}
.projectJS,
.projectLD {
  /deep/.nut-cell-desc {
    padding-right: 15px;
    align-items: center;
    font-size: 14px;
    color: #ccc;
    font-weight: 500;
  }
}
/deep/.nut-textinput-label {
  color: #ccc;
}
/deep/.nut-cell-left > .nut-cell-title {
  color: #ccc;
}

/deep/.projectJS .nut-cell-box .nut-cell-right,
/deep/.projectLD .nut-cell-box .nut-cell-right {
  max-width: 70%;
  .nut-cell-desc {
    font-size: 14px;
    line-height: 16px;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
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
.financingtitle,
.teamtitle,
.productTitle {
  display: flex;
  justify-content: space-between;
}
/deep/.rzjd_text .nut-cell-left .nut-cell-title {
  text-align: left;
}
.hide,
.nut-cell-desc {
  font-size: 12px;
  line-height: 16px;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
//简介样式
.bz {
  height: 100%;
}
.personage {
  height: 100%;
}
.personageBox {
  // padding: 30px 5% 0;
  height: 100%;
  background: #fff;
  margin-top: 13px;
}
.top_line {
  padding: 0 5%;
  width: 90%;
  height: 1px;
  background: rgba(102, 102, 102, 1);
  opacity: 0.15;
}
/deep/.nut-textinput input {
  text-align: right;
  // padding-right: 0;
}
.xmjs {
  height: 45%;
  width: 90%;
  border: none;
  border-bottom: 1px solid #ccc;
  padding-left: 0;
  resize: none;
  margin-left: 5%;
  padding-top: 5%;
}
.lightspotBox,
.Project {
  height: 100%;
}
.item_ {
  width: 90%;
  padding: 10px;
}
.title-box,
.title2-box,
.title3-box,
.title4-box,
.title5-box {
  margin-top: 3%;
  // padding-left: 3%;
  border-bottom: 1px solid #efefef;
  min-height: 8vh;
  background: #fff;
}
.title-text,
.line {
  vertical-align: middle;
  line-height: 8vh;
}
.line {
  height: 5vmin;
}
.title-text {
  margin-left: 2%;
  font-size: 16px;
}
.financingtitle {
  align-items: center;
}
.twotitle{
      width: 100%;
    display: flex;
    align-items: center;
}
</style>