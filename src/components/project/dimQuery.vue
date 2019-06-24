<template>
    <div>
          <nut-navbar
        @on-click-back="back"
        :rightShow="false"
      >快速创建</nut-navbar>
      <nut-textinput 
        label=""
        placeholder="请输入内容"
        :clearBtn="true"
        :disabled="false"
        v-model="Qyname" @input="changeName"
        class="query"
    />
        <ul v-if="dataList.length>0" class="List">
            <li v-for="(item,ind) in dataList" :key="ind" @click="check(item)">{{item.name}}</li>
        </ul>
        <ul v-else class="List">
            <li @click="addProject">创建项目</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                dataList:[],
                Qyname:null,
                Oid:null,
                UserId:null
            }
        },
        beforeMount(){
            this.Oid=this.$route.query.id
              this.userId = JSON.parse(sessionStorage.getItem("userInfo")).id;
        },
        methods:{
            back(){
                this.$router.go(-1)
            },
            changeName(){
                this.$post('/api/searchProject',{projectName:this.Qyname}).then((res)=>{
                    this.dataList=res.data
                    console.log(res)
                })
            },
            check(item){
                console.log(item)
                console.log(this.Oid)
                console.log(this.userId)
                this.$post('/api/addUserOrganProject',{
                    userId:this.userId,
                    organId:this.Oid,
                    projectId:item.id
                }).then((res)=>{

                    console.log(res)
                })
            },
            addProject(){
                this.$router.push({
                    path:'/project/addProject',
                   query:{
                        name:this.Qyname
                   }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.query{
    margin-top:10px;
}
.List{
    background: #ccc;
    margin-top:10px;
    li{
        border-bottom: 1px solid #fff;
        line-height: 30px;
    }
}
</style>