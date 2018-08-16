<template>
  <span>{{showText}}</span>
</template>

<script>
export default {
  name:"fishTyping",
  props:{
  	typeTime:{
  		type:Number,
  		default:500
  	},
  	cursor:{
  		type:Boolean,
  		default:true
  	}
  },
  data(){
    return{
    	text:"",
    	showText:"",
    	showNum:1
    }
  },
  created(){
  	if(this.$slots.default){
  		this.text=this.$slots.default[0].text;
  	}
  },
  mounted(){
  	if(this.text)
 		this.typing();
 	if(this.cursor)
 		this.cursorShine();
  },
  methods:{
  	typing(){
  		let self = this;
  		setTimeout(()=>{
  			let hasCursor = false;
  			if(self.showText[self.showNum - 1] === '|')
  				hasCursor = true;
  			self.showText = self.text.slice(0,self.showNum++);
  			if(hasCursor)
  				self.showText += '|';
  			if(self.showNum <= self.text.length)
  				self.typing();
  		},self.typeTime)
  	},
  	cursorShine(){
  		let self = this;
  		setTimeout(()=>{
  			if(self.showText[self.showNum - 1] === '|'){
  				self.showText = self.showText.slice(0,-1);
  			}
  			else
  				self.showText += '|';
  			if(self.showNum <= self.text.length)
  				self.cursorShine();
  		},200)
  	}
  }
}
</script>

<style scoped lang="less"></style>
