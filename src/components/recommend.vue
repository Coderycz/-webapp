<template>
<div class="recommend">
    <my-header></my-header>
    <recommend></recommend>
    <my-footer></my-footer>
 </div> 
</template>

<script>
import myFooter from "../base/footer"
import myHeader from "../base/header"

import recommend from "@/base/recommend/recommend"
export default {
  components:{
      myHeader,
      myFooter,   
      recommend,
  }
}
</script>

<style lang="scss" scoped>


</style>