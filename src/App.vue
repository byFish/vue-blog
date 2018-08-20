<template>
  <div>
    <header class="header">
      <h2>李海杰的APP</h2>
      <fish-nav :items="items" class="top-nav"></fish-nav>
    </header>
    <router-view class="body"/>
    <footer class="footer">
    </footer>
  </div>
</template>

<script>
export default {
  data(){
    return{
      items:[{src:"/login",title:"登陆"},{src:"/",title:"首页"}]
    }
  }
}
</script>

<style scoped lang="less">
  .body{
    margin:0;
    padding: 6vh 0 6vh;
    background: #c6e1e4;
    min-height: 88vh;
  }
  .header{
    position: fixed;
    background: grey;
    top:0;
    left: 0;
    height: 6vh;
    width: 100%;
    text-align: center;
    h2{
      color: yellow;
      font-size: 18px;
      margin: 5px 0;
    }
  }
  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    height: 6vh;
    width: 100%;
    background: grey;
  }
  .top-nav{
    position: absolute;
    top:0;
    right:10px;
    padding: 10px;
  }
</style>
