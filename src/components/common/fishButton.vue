<template>
  <button class="fish-button">
  	<slot></slot>
  </button>
</template>

<script>
export default {
  name:"fishButton",
  props:{

  },
  data(){
    return{

    }
  }
}
</script>

<style scoped lang="less">
.fish-button{
	padding: 0 .8em;
	border: 1px solid rgba(0,0,0,1);
	font-size: 15px;
	font-weight: bold;
	border-radius: .8em;
	background: white;
	box-shadow: 1.5px 1.5px 1px #555;
	outline: none;
	transition: .3s;
	&:hover{
		opacity: 0.8;
		box-shadow: 1px 1px .8px #444;
	}
	&:active{
		opacity: 0.4;
		box-shadow: .5px .5px .5px #333;
	}
}
</style>
