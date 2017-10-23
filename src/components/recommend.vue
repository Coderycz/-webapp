<template>
<div class="recommend">
   <my-header></my-header>
    <banner></banner>
    <my-footer></my-footer>
 </div> 
</template>

<script>
import myFooter from "../base/footer"
import myHeader from "../base/header"
import banner from "@/base/recommend/banner"
export default {
  components:{
      myHeader,
      myFooter,
      banner
  }
}
</script>

<style lang="scss" scoped>


</style>