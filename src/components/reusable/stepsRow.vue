<template>
    <nut-scroller>
      <div slot="list" class="nut-hor-list-item" v-for="(item,i, index) of RZList" :key="index" stretch=0>
              {{RZList.length}}
     <!-- <dl class="nut-scroller-item-info">
          <dt>防水升级版 蓝 迷你小音</dt>
          <dd>2018-02-25</dd>
        </!--> 
        <div class="scroll_item">
            <span>{{item[0].stage_name}}</span>
          
            <span class="round_line"><em class="round"></em> 
            <b class="line" :style="(index==LineNum-1)?'opacity:0':'opacity:1'"></b>
            </span>
            <span class="money_num">{{item[0].financing_money+"万元"}}</span>
            <span class="times_">{{item[0].invest}}</span>
            <span class="line_dot_line">
                   
               <em>
                <div class="line1"></div>
                <div class="dot"></div>
           
                <div class="line1"></div>
               </em>
            </span>
            <!-- <span class="state_List hide">{{item[index].name}}</span> -->
            <span class="state_List hide tl_l" v-for="(items,ind) in item" :key="ind">{{items.name}}</span>
        </div>
      
      </div>
      <!-- <slot slot="more">
        <div class="nut-hor-jump-more">查看更多</div>
      </slot> -->
    </nut-scroller>
</template>

<script>
export default {
    props:["RZList"],
    data() {
        return {
            listData: new Array(20),
            listData1: new Array(20),
            listData2: [1, 2],
            listData3: [1],
            maxPages: 4,
            isUnMore1: false,
            isLoading1: false,
            page1: 2,
            maxPages2: 1,
            isUnMore2: false,
            isLoading2: false,
            page2: 2,
            timers: null,
            LineNum:null
        };
    },
    created(){
	var arr = Object.keys(this.RZList);
	// ['name','sex','age']
	this.LineNum=arr.length  //
    },
    methods: {
        jump() {
            location.href = 'http://www.jd.com';
        },

        loadMoreVert() {
            this.isLoading1 = true;
            if (this.page1 > this.maxPages) {
                this.isUnMore1 = true;
                this.isLoading1 = false;
            } else {
                clearTimeout(this.timers);
                this.timer = setTimeout(() => {
                    this.isLoading1 = false;
                    this.isUnMore1 = false;
                    this.listData1 = new Array(20 * this.page1);
                    this.page1 = ++this.page1;
                }, 300);
            }
        },

        pulldown() {
            this.isLoading1 = true;
            clearTimeout(this.timers);
            this.timer = setTimeout(() => {
                this.isLoading1 = false;
                this.isUnMore1 = false;
                this.listData1 = new Array(20);
                this.page1 = 2;
            }, 300);
        },


        loadMoreVert2() {
            this.isLoading2 = true;
            if (this.page2 > this.maxPages2) {
                this.isUnMore2 = true;
                this.isLoading2 = false;
            } else {
                clearTimeout(this.timers);
                this.timer = setTimeout(() => {
                    this.isLoading2 = false;
                     this.isUnMore2 = false;
                    this.listData2 = new Array(20 * this.page2);
                    this.page2 = ++this.page1;
                }, 300);
            }
        },

        pulldown2() {
            this.isLoading2 = true;
            clearTimeout(this.timers);
            this.timer = setTimeout(() => {
                this.isLoading2 = false;
                this.isUnMore2 = false;
                this.listData2 = new Array(10);
                this.page2 = 2;
            }, 300);
        }
    },

    destroyed() {
        clearTimeout(this.timer);
    }
};
</script>

<style lang="scss" scoped>
.scroll_item{
    width: 90px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .round{
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 6px;
        border:3px solid rgb(28, 198, 187);
        margin: 10px;
    }
}
.round_line{
    display: flex;
    margin-right:-60px;
    align-items: center;
    .line{
        width: 60px;
        // margin-left: 20px;
        height: 1px;
        background: rgb(192,192,192);
    }
}
.line_dot_line em{
    display: flex;
    flex-direction: column;
    align-items: center;
    .line1{
        width:1px;
        height: 5px;
        background: #666;
        // margin:3px 0;
    }
    .dot{
        width: 5px;
        height:5px;
        border-radius:50%;
        background: rgb(244,91,81);
        margin:2px 0;
    }
}
.times_,.state_List{
    font-size:12px;
    line-height: 16px;
    color:#666;
}
.money_num{
   line-height: 24px;
}
.hide {
  font-size: 12px;
  line-height: 16px;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.tl_l{
  text-align: left;
    width: 100%;
    text-indent: 20px;
    color: #adadad;
    line-height: 18px;
}
</style>