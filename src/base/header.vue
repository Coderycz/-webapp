<template>   
    <div class="my-header" >     
        <div class="container">
        <div class="header">
            <div @click="showside"><span><i class="iconfont red icon-menu active" ></i></span></div>
            <div class="h-center">               
                <router-link tag="span" to="/" :class="{active:this.active==1}" @click.native="witch(1)"><i class="iconfont red">&#xe680;</i></router-link>
                <router-link tag="span" to="/recommend" :class="{active:this.active==2}" @click.native="witch(2)"><i class="iconfont red">&#xe601;</i></router-link>
                <router-link tag="span" to="/" :class="{active:this.active==3}" @click.native="witch(3)"><i class="iconfont red">&#xe603;</i></router-link>
            </div>
            <router-link tag="div" to="/search"><span><i class="iconfont red active">&#xe610;</i></span></router-link>
        </div>
    </div>
    </div>
</template>

<script>


export default {
  data(){
    return {
      showsidenav: false,
      
    }
  },
  computed:{
    active(){
      return this.$store.state.witch
    }
  },
  methods:{ 
    witch(b){
      this.$store.commit('witchone',b)
      console.log(this.active)
    } ,
    showside(){
     this.$store.commit("change")
    }
  },
  created(){  
    console.log(this.showsidenav) 
  },
  
  components: {
    
  }
};
</script>

<style lang="scss"  scoped>
.container{
    width: 100%;
    height: 2rem;
    position: fixed;
  top: 0;
}
.header { 
  height: 2rem;
  background: #c62f2f;
  display: flex;
  justify-content: space-between;
  
}
span {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  text-align: center;
  line-height: 2rem;
  i {
    font-size: 0.8rem !important;
    color: #bbb;
  }
}
.active  i{
  color: #eee;
}
.active{
  color: #eee;
}
</style>