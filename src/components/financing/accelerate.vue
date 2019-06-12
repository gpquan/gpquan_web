<template>
  <div>
  <div class="header">
    <div class="header-box">
      <div class="return-icon"></div>
      <div class="title">融资加速</div>
      <div class="title-navBar">
        
      </div>
      <!-- <div class="header-box-item">潜在投资机构</div>
      <div class="header-box-item header-item-haveicon">已投竞品</div>
      <div class="header-box-item header-item-haveicon">合作FA</div> -->
    </div>
  </div>
  <div class="body-box">
    
    <div class="left">
      <div class="left-list-box">
        <div 
          class="list-item" 
          :class="item.index == listActId ? 'list-item-act' : ''" 
          v-for="item in leftList" 
          @click="changeLeftChoose(item)"
        >
        <span class="act-left-bar"></span>
        {{item.name}}
        <span class="act-right-bar"></span>
        </div>
      </div>
    </div>
    <div class="right">
      <!-- 右边头部 -->
      <div class="right-box-title">
        <div class="right-title">
          <span class="title-name">红衫资本</span>
          <div class="right-title-portrait">
            <div class="isAuthentication" v-if="Authentication"></div>
          </div>
          <div style="margin-left: 7vw;">
            <nut-button 
              type="actived" 
              shape="circle" 
              small
              v-for="item in right_User_btn"
              style="height: 20px;padding: 0 1vw;margin-left: 1vw;border: 0px;"
            >
              {{item.name}}
            </nut-button>
          </div>
          <div style="margin-left:7vw; margin-top: 2vh;">
            <span style="font-size: 18px;color: #666;">投资阶段：Pre | TMT</span>
          </div>
        </div>
      </div>
      <!-- 右边内容 -->
      <div class="right-body">
        <div class="right-body-icon">
          <span class="right-body-Licon"></span>
          <span style="text-align: center;font-size: 1rem;">已投竞品</span>
          <span class="right-body-Ricon"></span>
        </div>
        <div class="right-item">
          <span class="item-name">红衫资本</span>
          <div class="right-item-portrait"></div>
          <div style="margin-left: 7vw;">
            <nut-button 
              type="actived" 
              shape="circle" 
              small
              v-for="item in right_User_btn"
              style="height: 20px;padding: 0 1vw;margin-left: 1vw;border: 0px;"
            >
              {{item.name}}
            </nut-button>
          </div>
          <div style="margin-left:7vw; margin-top: 2vh;">
            <span style="font-size: 15px;color: #666;">投资阶段：Pre | TMT</span>
          </div>
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
      listActId:1,
      leftList:[
        {name:'红杉资本',index:'1'},
        {name:'IDG',index:'2'},
        {name:'大鸽子',index:'3'},
        {name:'大撒大撒',index:'4'},
        {name:'大苏打撒旦',index:'5'},
        {name:'大苏打',index:'6'},
        {name:'大苏打',index:'7'},
        {name:'实打实的',index:'8'},
        {name:'红杉资本',index:'9'},
      ],
      right_User_btn:[
        {name:'移动互联网'},
        {name:'SAAS'},
        {name:'天使轮'}
      ],
      Authentication:true,
      
    };
  },
  mounted() {
    
  },
  methods: {
    changeLeftChoose:function(item){
      this.listActId = item.index;
    }
  }
};
</script>

<style>
  .body-box{
    display: flex;
    display: -webkit-flex;
  }
  .body-box .left{
    flex: 1;
    -webkit-flex: 1;
    background: #efefef;
    color: #666;
    margin-top: -5vh;
    border-radius: 0 5px 0 0;
    overflow: hidden;
  }
  
  .list-item{
    height: 50px;
    line-height: 50px;
    text-align: center;
    position: relative;
    
  }
  
  .list-item.list-item-act{
    background: white !important;
    color: red !important;
  }
  .body-box .right{
    flex: 3;
    -webkit-flex: 3;
    margin-top: -5vh;
  }
  .header-box{
    width: 100%;
    height:20vh;
  }
  .header{
    width: 100%;
    background-image: url(../../assets/image/accelerate-bg.jpg);
    background-size: 100% 100%;
  }
  .act-left-bar{
    position: absolute;
    width: 5%;
    height: 80%;
    opacity: 1;
    background-color:#fa7e7e;
    display: none;
    z-index: 99999;
    left: 4%;
    top: 10%;
  }
  .act-right-bar{
    font-size: 10px;
    color: red;
    background: pink;
    position: absolute;
    transform: rotate(45deg);
    top: -50%;
    right: -50%;
    line-height: 1.2;
    width: 100%;
    text-align: center;
    display: none;
  }
  .list-item.list-item-act .act-left-bar,
  .list-item.list-item-act .act-right-bar{
    display: block !important;
  }
  .right-title{
    width: 100%;
    height: 18vh;
  }
  .right-title-portrait{
    background-image: url(/img/right-title-portrait.a8b5e2b2.png);
    background-size: 100% 100%;
    width: 24%;
    height: 9vh;
    display: inline-block;
    margin-top: -7vh;
    margin-left: 46vw;
  }
  .right-box-title{
    width: 90%;
    background-color: #fff;
    margin: 0 auto;
    border-radius: 5px;
  }
  .title-name{
    line-height: 6vh;
    font-size: 16px;
    margin-left: 7vw;
  }
  .isAuthentication{
    background-image:url(../../assets/image/isAuthentication.png) ;
    background-size: 100% 100%;
    position: relative;
    top: 60%;
    left: 65%;
    width: 35%;
    height: 35%;
  }
  .return-icon{
    background-image: url(../../assets/image/return-icon.png);
    background-size: 100% 100%;
    height: 3.5vh;
    width: 2vh;
    position: relative;
    left: 5vw;
    top: 3vh;
  }
  .title{
    margin: 0 auto;
    text-align: center;
    font-size: 20px;
    color: #fff;
  }
  .title-navBar{
  background-image:  url(../../assets/image/title-NavBar.png);
    background-size: 100% 100%;
    width: 60vw;
    height: 3vh;
    margin-top: 4vw;
  }
  .right-body-Licon{
    background-image:url(../../assets/image/right-body-Licon.png); ;
    background-size: 100% 100%;
  }
  .right-body-Ricon{
    background-image:url(../../assets/image/right-body-Ricon.png); ;
    background-size: 100% 100%;

  }
  .right-body-Licon,.right-body-Ricon{
    width: 5vw;
    height: 1.5vh;
    display: inline-block;
  }
  .right-body-icon{
    text-align: center;
    padding-top: 3vh;
  }
  .right-body-icon span{
    margin:0vh 2vw;
  }
  .right-item{
    width: 90%;
    background-color: #fff;
    margin: 0 auto;
    border-radius: 5px;
  }
  .item-name{
    line-height: 6vh;
    font-size: 16px;
    margin-left: 7vw;
  }
</style>