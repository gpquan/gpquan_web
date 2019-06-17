<template>
  <div>
    <nut-navbar
      @on-click-back="back"
      @on-click-title="title"
      @on-click-more="more"
      :rightShow="false"
    >添加项目</nut-navbar>
    <div class="addcontent">
      <div class="topaddIMG">
        <div class="topImgtitle">
          <em>|</em>
          <b>添加项目LOGO</b>
        </div>
        <div class="addImg">
          <div class="top_line"></div>
          <nut-uploader
            name="uploader-demo"
            :url="url"
            :isPreview="true"
            @start="onStart"
            @success="onSuccess"
            @fail="onFail"
            @progress="onProgress"
            @preview="onPreview"
            @showMsg="showMsgFn"
            :acceptType="['image/jpeg', 'image/png', 'image/gif', 'image/bmp']"
            typeError="对不起，不支持上传该类型文件！"
            limitError="对不起，文件大小超过限制！"
          >添加项目LOGO</nut-uploader>
          <div class="previewImg">
            <img :src="previewImg" alt>
          </div>
        </div>
      </div>

      <div class="BasicStatus">
        <div class="Basictitle">
          <em>|</em>
          <b>基本信息</b>
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
            <nut-cell title="项目介绍" desc="请输入项目介绍" :showIcon="true" class="projectJS"></nut-cell>
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
            maxlength="5"
            :hasBorder="false"
            label="添加标签"
            class="ipt_textR"
          />
          <div class="top_line"></div>
          <nut-textinput
            placeholder="输入项目所需融资金额"
            maxlength="5"
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
              @input="ratio()"
            />
          </div>
          <div @click="FlagChange()">
            <nut-cell title="是否独家" :desc="isFlag" :showIcon="true"></nut-cell>
          </div>
          <nut-actionsheet
            :is-visible="isVisible"
            @close="switchActionSheet('isVisible')"
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
          />
          <div class="top_line"></div>
          <nut-textinput
            placeholder="请输入手机号码、邮箱"
            maxlength="5"
            :hasBorder="false"
            label="项目联系方式"
            class="ipt_textR"
          />
        </div>
      </div>
      <div class="financing">
        <div class="financingtitle">
          <div class="left">
            <em>|</em>
            <b>融资历史</b>
          </div>
          <div class="right">
            <span @click="addHistory()">+</span>
          </div>
        </div>
        <div class="financingBox" v-if="rzhistoryObj.length!=0">
          <div v-for="(item,index) in rzhistoryObj" :key="index">
            <nut-cell title="融资机构" :desc="item.rzjg"></nut-cell>
            <nut-cell title="融资阶段" :desc="item.rzjd"></nut-cell>
            <nut-cell title="融资金额" :desc="item.rznum"></nut-cell>
            <nut-cell title="融资时间" :desc="item.rztime"></nut-cell>
          </div>
        </div>
      </div>
      <div class="team">
        <div class="teamtitle">
          <div class="left">
            <em>|</em>
            <b>团队</b>
          </div>
          <div class="right">
            <span @click="addTeam()">+</span>
          </div>
        </div>
        <div class="teamBox" v-if="teamObj.length!=0">
          <div v-for="(items,ind) in teamObj" :key="ind">
            <nut-cell title="姓名" :desc="items.name"></nut-cell>
            <nut-cell title="职位" :desc="items.position"></nut-cell>
            <nut-cell title="姓名" :desc="items.intro"></nut-cell>
          </div>
        </div>
      </div>
      <div class="product">
        <div class="productTitle">
          <div class="left">
            <em>|</em>
            <b>竞品</b>
          </div>
          <div class="right">
            <span @click="addproduct()">+</span>
          </div>
        </div>
        <div class="productBox" v-if="ProductObj.length!=0">
          <div v-for="(item,ind) in ProductObj" :key="ind">
            <nut-cell title="竞品名称" :desc="item.ProductName"></nut-cell>
            <nut-cell title="领域" :desc="item.field"></nut-cell>
            <nut-cell title="融资阶段" :desc="item.phase"></nut-cell>
          </div>
        </div>
      </div>
      <div class="lightspot">
        <div class="lightspottitle">
          <em>|</em>
          <b>项目亮点</b>
        </div>
        <div class="Box">
          <div @click="lightspot()">
            <nut-cell title="项目亮点" desc="请输入项目亮点" :showIcon="true" class="projectLD"></nut-cell>
          </div>
        </div>
      </div>

      <div class="recommend_Btn">
        <nut-button block shape="circle">提交审核</nut-button>
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

      <!-- 行业 -->
      <nut-picker
        :is-visible="industry1"
        :default-value-data="defaultindustry"
        :list-data="industryList"
        @close="switchPicker('industry1')"
        @confirm="setindustryValue"
      ></nut-picker>
      <nut-picker
        :is-visible="industry1"
        title="请选择城市"
        :list-data="listData"
        :default-value-data="defaultValueData"
        @close="switchPicker('industry1')"
        @confirm="setChooseValue"
        @choose="updateChooseValue"
        @close-update="closeUpdateChooseValue"
      ></nut-picker>
      <!-- 融资历史 -->
      <nut-dialog title="融资历史" :visible="dialogShow" @close="dialogShow=false" :onOkBtn="confirmLS">
        <nut-textinput
          label="融资机构"
          placeholder="请输入融资机构"
          :clearBtn="false"
          :disabled="false"
          :hasBorder="false"
        />
        <div @click="rzJDSelect()" class="rzjd_text">
          <nut-cell title="融资阶段" :desc="Rzhistory" :showIcon="true"></nut-cell>
        </div>
        <nut-textinput
          label="融资金额"
          placeholder="请输入融资金额"
          :clearBtn="false"
          :disabled="false"
          :hasBorder="false"
        />
        <nut-textinput
          label="融资时间"
          placeholder="请输入融资时间"
          :clearBtn="false"
          :disabled="false"
          :hasBorder="false"
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
          label="姓名"
          placeholder="请输入姓名"
          :clearBtn="false"
          :disabled="false"
          :hasBorder="false"
        />
        <nut-textinput
          label="职位"
          placeholder="请输入职位"
          :clearBtn="false"
          :disabled="false"
          :hasBorder="false"
        />
        <nut-textinput
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
        />
        <nut-textinput
          label="领域"
          placeholder="请输入所属领域"
          :clearBtn="false"
          :disabled="false"
          :hasBorder="false"
        />
        <nut-textinput
          label="融资阶段"
          placeholder="融资阶段"
          :clearBtn="false"
          :disabled="false"
          :hasBorder="false"
        />
      </nut-dialog>
      <nut-picker
        :is-visible="rzhistory"
        :default-value-data="defaultRZhistory"
        :list-data="rzhistoryList"
        @close="switchPicker('rzhistory')"
        @confirm="setRZhistory"
      ></nut-picker>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "https://my-json-server.typicode.com/linrufeng/demo/posts",
      name: null, //项目名称
      dialogShow: false, //遮罩
      defaultValueData: "2010",
      rzjd: false, //融资阶段显隐
      showMark: true,
      rounds: null,
      isVisible1: false, //选择轮次
      industry1: false, //选择行业
      industry: null,
      moneyRatio: null, //佣金比例
      industryList: [[]], //领域集合 数组
      lingyuList: [], //领域集合  对象
      defaultindustry: null,

      listData1: [[]],
      defaultValueData1: null,
      previewImg: "",
      isVisible: false, //是否独家
      menuItems: [
        {
          name: "是",
          value: 0
        },
        {
          name: "否",
          value: 1
        }
      ],
      isFlag: null,
      list1: [1, 2, 3, 4, 5],
      rzhistory: false, //融资历史
      defaultRZhistory: null, //融资
      Rzhistory: "", //融资展示
      rzhistoryList: [[111, 222, 333, 444]],
      rzhistoryObj: [],
      dialogShowTeam: false, //团队
      teamObj: [
        {
          name: "zs",
          position: "cc",
          intro: "123dwed2131"
        }
      ],
      dialogProduct: false, //竞品
      ProductObj: [
        {
          ProductName: "1111",
          field: "222",
          phase: "333"
        }
      ],
      roundsList: [], //轮次集合
      roundsId: null, //轮次ID
      lingyuId: null, //领域ID
      data: {
        北京: ["北京"],
        黑龙江: [
          "哈尔滨",
          "绥化",
          "漠河",
          "大兴安岭",
          "牡丹江",
          "佳木斯",
          "齐齐哈尔",
          "大庆",
          "五大连池"
        ],
        江西: ["九江", "南昌", "赣州"],
        上海: ["上海"],
        重庆: ["重庆"],
        内蒙古: [
          "呼和浩特",
          "呼和浩特1",
          "呼和浩特2",
          "呼和浩特3",
          "呼和浩特4",
          "呼和浩特5",
          "呼和浩特6",
          "呼和浩特7"
        ]
      }
    };
  },
  created() {
    this.getroundsList();
    this.getLingyuList();
  },
	mounted:function(){
		
	},
  methods: {

    getLingyuList() {
      //获取领域集合
      this.$post("/api/getLingyu").then(res => {
        this.lingyuList = res.data;
        for (let i = 0; i < res.data.length; i++) {
          this.industryList[0].push(res.data[i].name);
        }
        // console.log(this.industryList)
      });
    },
    getroundsList() {
      //获取轮次集合
      this.$post("/api/getStage").then(res => {
        this.roundsList = res.data;
        for (let i = 0; i < res.data.length; i++) {
          this.listData1[0].push(res.data[i].name);
        }
        // console.log(this.listData1[0]);
      });
    },
    switchActionSheet(param) {
      this[`${param}`] = !this[`${param}`];
    },

    chooseItem(itemParams) {
      this.isFlag = itemParams.name;
    },
    FlagChange() {
      this.isVisible = true;
    },
    pshow() {
      this.isVisible1 = true;
    },
    industryShow() {
      this.industry1 = true;
    },
    switchPicker(param) {
      this[`${param}`] = !this[`${param}`];
    },
    setYearValue(chooseData) {
      //选中轮次
      for (let i = 0; i < this.roundsList.length; i++) {
        if (this.roundsList[i].name == chooseData) {
          this.roundsId = this.roundsList[i].id;
        }
      }
      // console.log(this.roundsId);
      this.rounds = `${chooseData[0]}`;
    },
    setindustryValue(chooseData) {
      //选中行业
      for (let i = 0; i < this.lingyuList.length; i++) {
        if (this.lingyuList[i].name == chooseData) {
          this.lingyuId = this.lingyuList[i].id;
        }
      }
      this.industry = `${chooseData[0]}`;
    },
    back() {
      // alert("header头部， 点击返回");
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
      console.log(this.previewImg);
    },
    gopersonage() {
      //项目介绍
      this.$router.push({ name: "personage", params: { kind: 1 } });
    },
    lightspot() {
      //项目亮点
      this.$router.push({ name: "personage", params: { kind: 2 } });
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
      this.Rzhistory = `${chooseData[0]}`;
    },
    confirmLS() {
      this.dialogShow = false;
    },
    addTeam() {
      //融资团队
      this.dialogShowTeam = true;
    },
    confirmTeam() {
      //确认
      this.dialogShowTeam = false;
    },
    addproduct() {
      //竞品
      this.dialogProduct = true;
    },
    confirmProduct() {
      //竞品确认
    },
    closeUpdateChooseValue(self, chooseData) {
      //轮次选项发生改变
      this.updateLinkage(self, chooseData[0], 1, chooseData[1], chooseData);
    },
    updateLinkage(self, value, index, chooseValue, cacheValueData) {
      if (!value) {
        return false;
      }
      switch (index) {
        case 1:
          let i = this.listData[0].indexOf(value);
          this.listData.splice(index, 1, [...this.data[this.listData[0][i]]]);
          chooseValue = chooseValue ? chooseValue : this.listData[index][0];
          self && self.updateChooseValue(self, index, chooseValue);
          this.updateLinkage(
            self,
            chooseValue,
            2,
            cacheValueData && cacheValueData[2] ? cacheValueData[2] : null
          );
          break;
        case 2:
          let areaData = this.dataSub[value] ? this.dataSub[value] : [];
          this.listData.splice(index, 1, [...areaData]);
          chooseValue = chooseValue ? chooseValue : this.listData[index][0];
          self && self.updateChooseValue(self, index, chooseValue);
          break;
      }
    },
    updateChooseValue(self, index, value, cacheValueData) {
      index < 2 && this.updateLinkage(self, value, index + 1, null);
    }
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
.projectJS .nut-cell-title {
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
</style>