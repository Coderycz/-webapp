<template>
  <div class="container">
      <div class="value">
      </div>
      <span class="cricle"></span>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
    .container{
        margin: 0 auto;
        width: 80%;
        height: 10px;
        color: gray;
        position: relative;
        div{
            background: red;
            height: 10px;

        }
        .cricle{
            width: 14px;
            height: 14px;
            position: absolute;
            top: -2px;

        }
        
    }
</style>