<template>
  <div class="hello">
    
    <my-header></my-header>
    <my-body></my-body>
    <my-footer></my-footer>
    
  </div>
</template>

<script>
import {getRecommend,getDiscList} from "api/jsonpdata"
import mySonglist from "@/base/songlist.vue"
import myHeader from "../base/header"
import myBody from "../base/mainpage"
import myFooter from "../base/footer"
import {play,stop} from "api/audio"



export default {
  
  name: 'HelloWorld',
  data () {

    return {
      
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
    this._get()
    this._getlist()
   // this.getc()
  },
  methods:{
    
    _get(){
      getRecommend().then((res) => {
        if(res.code === 0){
          console.log(res.data)
        }
      })
    },
    _getlist(){
      getDiscList().then((res) => {
        if(res.code === 0){
          console.log(res.data)
        }
      })
    },
    getc(){
      getclund().then((res) => {
        if(res.code === 0){
          console.log(res.data)
        }
      })
    }
  },

  components:{
    "my-header": myHeader ,
    myFooter,
    myBody,
    mySonglist,
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$sc :25;
.hello{
 width: 100%;
 height: 100%;
 overflow: auto;
  background: #f7f7f7;
}
</style>
