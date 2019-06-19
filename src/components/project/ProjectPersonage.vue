<template>
  <div class="personage">
    <div v-if="status==1" class="Project">
      <nut-navbar @on-click-back="back" @on-click-more="more" title="项目介绍">
        <a slot="more-icon" @click="saveText()">保存</a>
      </nut-navbar>
      <div class="personageBox">
        <textarea class="xmjs" placeholder="请输入项目介绍" v-model="introduce"></textarea>
      </div>
    </div>
    <div v-else-if="status==2" class="lightspotBox">
      <nut-navbar @on-click-back="back" @on-click-more="more" title="项目亮点">
        <a slot="more-icon" @click="saveText()">保存</a>
      </nut-navbar>
      <div class="personageBox">
        <textarea class="xmjs" placeholder="请输入项目亮点" v-model="lightspot"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: null,
      introduce: "", //介绍
      lightspot: "" //亮点
    };
  },
  beforeMount() {
    this.introduce=''
    this.lightspot=''
    console.log(this.$route.params.kind);
    this.status = this.$route.params.kind;
    // this.$route.params.sort 1 项目简介  2亮点
  },
  mounted() {
    console.log(this.$route.params.kind);
    this.status = this.$route.params.kind;
  },
  methods: {
    saveText() {
      console.log("保存");
      if (this.status == 1) {
        //简介
        this.$router.push({
          name: "addProject",
          params: {
            type: this.status,
            introduce: this.introduce
          }
        });
      } else if (this.status == 2) {
        //亮点
        this.$router.push({
          name: "addProject",
          params: {
            type: this.status,
            lightspot: this.lightspot
          }
        });
      }
      // this.status==1?this.introduce:this.lightspot
    },
    back() {
      // alert('header头部， 点击返回')
      this.$router.back();
    },
    title() {
      // alert('header头部， 点击title')
    },
    more() {
      // alert('header头部， 点击更多')
    }
  }
};
</script>

<style lang="scss" scoped>
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
</style>