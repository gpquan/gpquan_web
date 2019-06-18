<template>
  <div class="manageBox">
  <div>
       <ul class="tab">
      <li v-for="(item,ind) in tabLink" :key="ind" @click="tabClick(ind)"  :class="IND==ind?'active':''">
        <span>
          {{item.name}}
          <b>
          <em></em>
        </b>
        </span>
           <!-- {{$route.meta.keep}} -->
      </li>
    </ul>
    <!-- <keep-alive> -->

    <!-- </keep-alive> -->
     <keep-alive>
    <router-view v-if="$route.meta.keep=='C'"></router-view>
    <router-view v-if="$route.meta.keep=='O'"></router-view>
    <router-view v-if="$route.meta.keep=='FA'"></router-view>
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
          name:"项目竞品",
          links:'/Manage2/C'
        },
         {
          name:"机构管理",
          links:'/Manage2/O'
        },
         {
          name:"FA管理",
          links:'/Manage2/FA'
        },
      ]
    }
  },
  mounted(){
    for (let i = 0; i < this.tabLink.length; i++) {
        if (this.$route.path == this.tabLink[i].links) {
            this.IND = i;
          //  console.log(this.tabInd);
        }
  }
  },
  methods: {
   tabClick(i){
      this.$router.push(this.tabLink[i].links)
      this.IND=i
      // console.log(this.$route.meta)
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