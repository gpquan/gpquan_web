<template>
  <div class="manageBox">
  <div style="height:100%">
       <ul class="tab">
      <li v-for="(item,ind) in tabLink" :key="ind" @click="tabClick(ind)"  :class="IND==ind?'active':''">
        <span>
          {{item.name}}
          <b>
          <em></em>
        </b>
        </span>
        
      </li>
    </ul>
    <!-- <keep-alive> -->
   
    <!-- </keep-alive> -->
     <keep-alive>
    <router-view v-if="$route.meta.keep==1"></router-view>
    <router-view v-if="$route.meta.keep==2"></router-view>
     </keep-alive>
  </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      show:2,
      IND:0,
      tabLink:[
        {
          name:"机构管理",
          links:'/accelerate/Manage/o'
        },
         {
          name:"项目管理",
          links:'/accelerate/Manage/p'
        },
      ]
    }
  },
  mounted(){
    for (let i = 0; i < this.tabLink.length; i++) {
        if (this.$route.path == this.tabLink[i].links) {
            this.IND = i;
          //  console.log(this.$route.meta);
        }
  }
  },
  methods: {
   tabClick(i){
      this.$router.push(this.tabLink[i].links)
      this.IND=i
          // console.log(this.$route.meta);
   }
  },
  watch:{
    $route(n, o) {
      // this.routeCchange(n);
      // console.log(this.$route.path)
      for (let i = 0; i < this.tabLink.length; i++) {
        if (this.$route.path == this.tabLink[i].links) {
            this.IND = i;
          //  console.log(this.tabInd);
        }
      
  }
    }
    }
}
</script>

<style lang="scss" scoped>
.manageBox{
  height: 100%;
  overflow: hidden;
}
.manageBox{
  background-image: url('../../assets/image/manage.png');
  background-repeat: no-repeat;
  background-size: 100%;
}
.tab{
  display: flex;
  justify-content: space-evenly;
  line-height: 55px;
  li{
    color:#fff;
    span{
      position: relative;
      height: 100%;
    display: inline-block;
    }
    b{
      position: absolute;
      bottom: 10px;
      width: 50%;
      height: 5px;
      left: 25%;
      opacity: 0;
      border-radius: 10px;
      text-align: center;
    }
  }
  .active{
    b{
     
        opacity: 1;
          display: inline-block;
           background: #fff;
        
    }
  }
}
</style>