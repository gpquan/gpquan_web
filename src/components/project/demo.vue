<template>
  <div>
    2312312
    <span @click="()=>{isVisible=!isVisible}">1111</span>
    <nut-picker
      :is-visible="isVisible"
      title="请选择城市"
      :list-data="listData"
      :default-value-data="defaultValueData"
      @close="switchPicker('isVisible')"
      @confirm="setChooseValue"
      @choose="updateChooseValue"
      @close-update="closeUpdateChooseValue"
    ></nut-picker>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  data() {
    return {
      city: null,
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
      lyIdList: []
    };
  },
  beforeMount() {
    this.$post("/api/getLingyu").then(res => {
      this.listData[0] = [];
      for (let i = 0; i < res.data.length; i++) {
        this.listData[0].push(res.data[i].name);
        this.lyIdList.push(res.data[i].id);
        //  console.log(res)
      }
      this.$post("/api/getLingyu", {
        parent_id: 1
      }).then(res2 => {
        console.log("二级");
        let arr = res2.data;
        let arrlist = [];
        for (let j = 0; j < arr.length; j++) {
          arrlist.push(res2.data[j].name);
          // console.log(this.data)
        }
        this.data[this.listData[0][0]] = arrlist;
        arrlist = [];
        //  console.log(this.data)
      });
    });
  },
  created() {
    this.listData = [...[this.listData[0]], this.data[this.listData[0][0]]];
  },
  methods: {
    getLY2(a, b) {},
    switchPicker(param) {
      this[`${param}`] = !this[`${param}`];
    },
    setChooseValue(chooseData) {
      this.value = chooseData[0];
      this.city = `${chooseData[0]}-${chooseData[1]}${
        chooseData[2] ? "-" + chooseData[2] : ""
      }`;
    },
    updateLinkage(self, value, index, chooseValue, cacheValueData, a, b) {
      // console.log(a),console.log(b)

      let num = this.listData[0].indexOf(value);
      let val = this.listData[0][num];
      console.log(this.data[val]);
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
      console.log(a,b);
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
        //  this.updateChooseValue(self, index, chooseValue)
        this.$forceUpdate()
        arrlist = [];
        index < 1 && this.updateLinkage(self, value, index + 1, null, a, b);
      });
      //  setTimeout(()=>{

      //  },300)
    },
    closeUpdateChooseValue(self, chooseData) {
      this.updateLinkage(self, chooseData[0], 1, chooseData[1], chooseData);
    }

    // modifyCity() {
    //     this.updateLinkage('', '重庆', 1, '重庆');
    //     this.defaultValueData = ['重庆', '重庆'];
    // },
  }
};
</script>

<style lang="scss" scoped>
</style>