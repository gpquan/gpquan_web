<template>
  <div class="manageBox">
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
</template>

<script>
export default {
  data(){
    return{
      IND:1,
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
  methods: {
   tabClick(i){
      this.$router.push(this.tabLink[i].links)
      this.IND=i
   }
  }
};
</script>

<style lang="scss" scoped>
.manageBox{
  height: 100%;
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