<template>
 
</template>

<script>
export default {
  data(){
    return {
      status:null,
	  description:'',   //机构简介
		rou_name:'',
      // lightspot:"",//亮点
    }
  }, 
  methods: {
    saveText() {
      // console.log("保存");
		  this.rou_name = this.$route.params.rou_name;
      // this.$router.push({ name: this.rou_name,params: {description: this.description}});
			this.$router.go(-1)
			// this.$router.push({ name: 'ManageP_add',params: {description: this.description}});

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
.lightspotBox,.Project{
  height: 100%;
}
</style>