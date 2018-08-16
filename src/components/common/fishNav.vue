<template>
  <nav>
    <ul>
    	<li v-for="(item,index) in items" :v-key="index">
    		<router-link :to="item[itemSrc]">{{item[itemTitle]}}</router-link>
    	</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name:"fishNav",
  props:{
  	items:{
  		type:Array
  	},
  	itemTitle:{
  		type:String,
  		default:"title"
  	},
  	itemSrc:{
  		type:String,
  		default:"src"
  	}
  },
  data(){
    return{

    }
  }
}
</script>

<style scoped lang="less">
ul{
	display: inline-block;
	margin: 0px;
	li{
		list-style: none;
		display: inline-block;
		padding-right:5px; 
	}
}
</style>
