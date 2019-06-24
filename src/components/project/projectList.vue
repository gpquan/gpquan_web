<template>
  <nut-scroller
   :is-un-more="isUnMore1"
      :is-loading="isLoading1"
      :stretch="600"
      :type="'vertical'"
      @loadMore="loadMoreVert"
      @pulldown="pulldown">
    <div slot="list" class="nut-vert-list-panel">
   <div class="view-project nut-vert-list-item">
         <!--   <div class="header">
          <nut-searchbar
            placeText="ERP/姓名/邮箱"
            :hasIcon="true"
            :hasSearchButton="false"
            textInfo="取消"
            customClass="search_demo"
          ></nut-searchbar>
          <div>Q</div>
        </div> -->

        <div class="banner">
          <nut-swiper
            direction="horizontal"
            ref="demo3"
            :loop="true"
            :canDragging="false"
            :paginationVisible="true"
            :autoPlay="3000"
          >
            <div class="nut-swiper-slide gray">
              <img src="../../assets/image/banner/banner1.png" alt="">
              <!-- <span>page 1</span> -->
            </div>
            <div class="nut-swiper-slide gray_1">
               <img src="../../assets/image/banner/banner2.png" alt="">
              <!-- <span>page 2</span> -->
            </div>
            <div class="nut-swiper-slide gray">
               <img src="../../assets/image/banner/banner3.png" alt="">
              <!-- <span>page 3</span> -->
            </div>
            <!-- <div class="nut-swiper-slide gray_1">
               <img src="../../assets/image/banner/banner4.png" alt="">
               <span>page 4</span>
            </div> -->
          </nut-swiper>
        </div>
        <!-- <div class="screen">
          <div class="scrennBox">
            <div
              class="scrennitem"
              @click="()=>{this.visible.isVisible1=true;SJisup[0]=false}"
              style=" overflow: hidden;"
            >
              <span ref="title1" class="hy">行业</span>
              <span :class="SJisup[0]?'SJup':'SJdown'"></span>
            </div>
            <div
              class="scrennitem"
              @click="()=>{this.visible.isVisible2=true}"
              style=" overflow: hidden;"
            >
              <span ref="title2" class="lc">轮次</span>
              <span class="SJup"></span>
            </div>
            <div
              class="scrennitem"
              @click="()=>{this.visible.isVisible3=true}"
              style=" overflow: hidden;"
            >
              <span ref="title3" class="area">地区</span>
              <span class="SJdown"></span>
            </div>
          </div>
          <nut-menu
            :isVisible="visible.isVisible1"
            :list="list1"
            type="multiple"
            col="1"
            mulstyle="style3"
            max="3"
            @close="switchMenu('isVisible1',4)"
            @reset="reset"
            @ok="ok"
            @maxTip="maxTip"
          ></nut-menu>
          <nut-menu
            :isVisible="visible.isVisible2"
            :list="list2"
            type="multiple"
            col="2"
            mulstyle="style3"
            max="3"
            @close="switchMenu('isVisible2',4)"
            @reset="reset"
            @ok="ok"
            @maxTip="maxTip"
          ></nut-menu>
          <nut-menu
            :isVisible="visible.isVisible3"
            :list="list3"
            type="multiple"
            col="3"
            mulstyle="style3"
            max="3"
            @close="switchMenu('isVisible3',4)"
            @reset="reset"
            @ok="ok"
            @maxTip="maxTip"
          ></nut-menu>
        </div> -->
        <div class="nav"></div>
        <div class="List">
          <ListItem :Listdata="listData1"/>
        </div>
      </div>
    </div>
  </nut-scroller>
</template>
<script>
import ListItem from "@/components/reusable/Listitem";
export default {
  name: "project",
  components: {
    ListItem
  },
  data() {
    return {
      listData1: [],
      maxPages: 4,
      isUnMore1: false,
      isLoading1: false,
      page1: 2,
      timers: null,
      SJisup: [true, false, true],
      visible: {
        isVisible1: false,
        isVisible2: false,
        isVisible3: false
      },
      menuList: [
        {
          name: "行业"
        },
        {
          name: "轮次"
        },
        {
          name: "地区"
        }
      ],
      num: 1,
      titlenum: 1,
      list1: [
        {
          id: 1,
          text: "海尔（Haier）",
          selected: true
        },
        {
          id: 2,
          text: "小天鹅（LittleSwan）",
          selected: false
        },
        {
          id: 3,
          text: "美的（Midea）",
          selected: false
        },
        {
          id: 4,
          text: "西门子（SIEMENS）",
          selected: false
        },
        {
          id: 5,
          text: "TCL",
          selected: false
        },
        {
          id: 6,
          text: "松下（Panasonic）",
          selected: false
        },
        {
          id: 7,
          text: "海信（Hisense）",
          selected: false
        },
        {
          id: 8,
          text: "惠而浦（whirlpool）",
          selected: false
        },
        {
          id: 9,
          text: "三洋（SANYO）",
          selected: false
        }
      ],
      list2: [
        {
          id: 10,
          text: "博世（BOSCH）",
          selected: false
        },
        {
          id: 11,
          text: "威力（WEILI）",
          selected: false
        },
        {
          id: 12,
          text: "LG",
          selected: false
        },
        {
          id: 13,
          text: "小鸭（LittleDuck）",
          selected: false
        },
        {
          id: 14,
          text: "统帅（Leader）",
          selected: false
        }
      ],
      list3: [
        {
          id: 15,
          text: "三星（SAMSUNG）",
          selected: false
        },
        {
          id: 16,
          text: "奥克斯（AUX）",
          selected: false
        },
        {
          id: 17,
          text: "志高（CHIGO）",
          selected: false
        },
        {
          id: 18,
          text: "创维（Skyworth）",
          selected: false
        }
      ]
    };
  
  },
  created(){
    this.getList()
  },
  methods: {
    getList(){
      let userId = JSON.parse(sessionStorage.getItem("userInfo")).id;
      this.$post("/api/getGoodProjectList",{
        userId:userId
      }).then((res)=>{
          this.listData1= res.data
      })
    },
    focusFun() {
      console.log("获取焦点操作！");
    },
    inputFun(value) {
      console.log(value);
      console.log("您正在输入...");
    },
    blurFun(value) {
      console.log(value);
      console.log("您已失去焦点！");
    },
    submitFun(value) {
      console.log(value);
      console.log("默认提交操作！");
    },
    switchMenu(param, num) {
      console.log(param, num);
      this.num = num;
      this.titlenum = param.split("isVisible")[1];
      for (let key in this.visible) {
        if (key !== param) {
          this.visible[key] = false;
        }
      }
      Array.from(document.querySelectorAll(".list")).forEach(item => {
        item.style.zIndex = 0;
      });
      if (!this.visible[`${param}`]) {
        document.querySelector(".list" + this.num).style.zIndex = 9999;
      }
      this.visible[`${param}`] = !this.visible[`${param}`];
    },
    chooseMenu(item, index) {
      this.switchMenu("isVisible1", 1);
      this.list1.map((value, key) => (value.selected = false));
      this.$set(this.list1[index], "selected", true);
      this.$refs.title1.innerText = item.text;
    },

    reset(list) {
      this.$refs[`title${this.titlenum}`].innerText = this.menuList[
        this.titlenum - 1
      ].name;
    },
    ok(list) {
      let arr = [];
      list.forEach((item, index) => {
        if (item.selected) {
          arr.push(item.text);
        }
      });
      console.log([`title${this.titlenum}`]);
      if (!!arr.length) {
        this.$refs[`title${this.titlenum}`].innerText = arr.join();
      }
      this.SJisup[this.titlenum - 1] = !this.SJisup[this.titlenum - 1];
    },
    maxTip() {
      alert("超过了最大选择数");
    },
    loadMoreVert() {
      //加载列表
      console.log(this.page1);
      this.isLoading1 = true;
      if (this.page1 > this.maxPages) {
        //判断当前页 是否大于总页数
        this.isUnMore1 = true;
        this.isLoading1 = false;
      } else {
        clearTimeout(this.timers);
        this.timer = setTimeout(() => {
          this.isLoading1 = false;
          this.isUnMore1 = false;
          // this.listData1 = new Array(5 * this.page1);
          this.page1 = ++this.page1;
        }, 300);
      }
    },

    pulldown() {
      //下拉刷新列表
      this.isLoading1 = true;
      clearTimeout(this.timers);
      this.timer = setTimeout(() => {
        //刷新列表重新给数组赋值
        this.isLoading1 = false;
        this.isUnMore1 = false;
        // this.listData1 = new Array(5);
        this.page1 = 2;
      }, 300);
    }
  } , destroyed() {
    clearTimeout(this.timer);
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  padding: 10px 16px 13px 14px;
  .nut-searchbar {
    flex: 1;
  }
}
.banner {
  width: 100%;
  height: 142px;
  .nut-swiper {
    height: 100%;
  }
}
.scrennBox {
  display: flex;
  width: 100%;
  line-height: 32px;
  padding-top: 6px;
  .scrennitem {
    flex: 1;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    .SJdown {
      width: 0;
      height: 0;
      overflow: hidden;
      font-size: 0; /*是因为, 虽然宽高度为0, 但在IE6下会具有默认的 */
      line-height: 0; /* 字体大小和行高, 导致盒子呈现被撑开的长矩形 */
      border-width: 4px;
      border-style: solid dashed dashed dashed; /*IE6下, 设置余下三条边的border-style为dashed,即可达到透明的效果*/
      border-color: #000 transparent transparent transparent;
      margin-bottom: -4px;
    }
    .SJup {
      width: 0;
      height: 0;
      overflow: hidden;
      font-size: 0; /*是因为, 虽然宽高度为0, 但在IE6下会具有默认的 */
      line-height: 0; /* 字体大小和行高, 导致盒子呈现被撑开的长矩形 */
      border-width: 4px;
      border-style: solid dashed dashed dashed; /*IE6下, 设置余下三条边的border-style为dashed,即可达到透明的效果*/
      border-color: transparent transparent #000 transparent;
      margin-top: -4px;
    }
  }
}
.hy,
.lc,
.area {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.nav{
  // height: 11px;
  background: #F5F6FA;
}
.nut-swiper-slide{
  img{
    width: 100%;
    height:100%;
  }
}
</style>

