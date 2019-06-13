<template>
	<div>  <!--外层盒子-->
		<div class="head_card">
			<div>
				<span class="head_card_title">项目名片</span>
				<nut-button 
				  type="light" 
				  shape="circle" 
				  small
				  id="btn"
				>
				  皓月灰
				</nut-button>
			</div>
			<div class="head_card_icon">
				
			</div>
			
		</div>
		<div class="body_step" id="body_step">
			<div class="block">
			  <el-timeline>
				<el-timeline-item
				  v-for="(activity, index) in activities"
				  :key="index"
				  :color="activity.color"
				  :timestamp="activity.timestamp"
				  >
				  {{activity.content}} 
				</el-timeline-item> 
			  </el-timeline>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
        activities: [{
          content: '支持使用图标',
          timestamp: '2018-04-12 20:46',
          color: '#1ec6b9'
        }, {
          content: '支持自定义颜色',
          timestamp: '2018-04-03 20:46',
          color: '#1ec6b9'
        }, {
          content: '支持自定义尺寸',
          timestamp: '2018-04-03 20:46',
          color: '#1ec6b9'
        }, {
          content: '默认样式的节点',
          timestamp: '2018-04-03 20:46',
		  color: '#1ec6b9'
        }, {
          content: '默认样式的节点',
          timestamp: '2018-04-03 20:46',
		  color: '#1ec6b9'
        }, {
          content: '默认样式的节点',
          timestamp: '2018-04-03 20:46',
		  color: '#1ec6b9'
        }, {
          content: '默认样式的节点',
          timestamp: '2018-04-03 20:46',
		  color: '#1ec6b9'
        }, {
          content: '默认样式的节点',
          timestamp: '2018-04-03 20:46',
		  color: '#1ec6b9'
        }, {
          content: '默认样式的节点',
          timestamp: '2018-04-03 20:46',
		  color: '#1ec6b9'
        }, {
          content: '默认样式的节点',
          timestamp: '2018-04-03 20:46',
		  color: '#1ec6b9'
        }, {
          content: '默认样式的节点',
          timestamp: '2018-04-03 20:46',
		  color: '#1ec6b9'
        }, {
          content: '默认样式的节点',
          timestamp: '2018-04-03 20:46',
		  color: '#1ec6b9'
        }, {
          content: '默认样式的节点',
          timestamp: '2018-04-03 20:46',
		  color: '#1ec6b9'
        }, {
          content: '默认样式的节点',
          timestamp: '2018-04-03 20:46',
		  color: '#1ec6b9'
        }, {
          content: '默认样式的节点',
          timestamp: '2018-04-03 20:46',
		  color: '#1ec6b9'
        }]
      };
  },
  mounted() {
    
  },
  methods: {
    
  }
};
</script>

<style lang="scss" scoped>
	/deep/.el-timeline-item__content{
		display: inline-block;
	}
	/deep/.el-timeline-item__timestamp.is-bottom{
		display: inline-block !important;;
		padding-left: 6vw !important;;
	}
	#btn{
		background: rgba(0,0,0,0) !important;
		position: relative;
		left: 54vw;
		height: 25px;
		top: 3vh;
	}
	.body_step{
		position: absolute;
		height: 59vh;
		width: 100vw;
		overflow: scroll;
	}
	.block{
		margin-left: 9vw;
		margin-top: 7vh;
	}
	.head_card_icon{
		background-image:url(../../assets/image/ManageA_details_cardicon.png) ;
		background-size: 100% 100%;
		height: 10vh;
		width: 10vh;
		position: relative;
		left: 5vw;
		top: 5vh;
		display: inline-block;
		
	}
	.head_card{
		background-image: url(../../assets/image/ManageA_details_cardbg.png);
		background-size: 100% 100%;
		width: 98vw;
		margin: 0 auto;
		height: 30vh;
	}
	.head_card_title{
		position: relative;
		left: 5vw;
		top: 3vh;
		font-size: 16px;
		color: #fff;
	}
	.step_cicle1{
		width:2vh;
		height: 2vh;
		background-color: pink;
		position: relative;
		margin: 0 2vw;
		text-align: center;
		border-radius: 50%;
	}
	.step_cicle2{
		width:0.6vh;
		height: 0.6vh;
		background-color: black;
		position: absolute;
		top:50%;
		left: 50%;
		transform: translate(-50%,-50%);
		border-radius: 50%;
	}
</style>