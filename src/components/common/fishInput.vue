<template>
  <div class="fish-input" >
    <label :style="{top:labelTop}">{{placeholder}}</label>
    <input :type="type" v-model="displayValue" :style="styleInputObj" @focus="onFocus" @blur="onBlur">
  </div>
</template>

<script>
export default {
  name:"fishInput",
  props:{
  	value:{
  		type:String
  	},
  	type:{
  		type:String,
  		default:"text"
  	},
  	placeholder:{
  		type:String,
  		default:"请输入..."
  	},
  	fontSize:{
  		type:[String,Number],
  		default:18
  	}
  },
  data(){
    return{
    	styleInputObj:{},
    	labelTop:"",
      displayValue:this.value
    }
  },
  methods:{
  	onFocus(){
  		this.labelTop = "-2px";
      this.$emit("on-focus",this.displayValue);
  	},
  	onBlur(){
  		if(!this.displayValue || this.displayValue == "")
  			this.labelTop = this.fontSize+"px";
      this.$emit("on-blur",this.displayValue);
  	}
  },
  watch:{
  	fontSize:{
  		handler:function(){
  			let fontSize = this.fontSize+"px";
  		 	this.styleInputObj["font-size"]=fontSize;
 			this.styleInputObj["margin-top"]=this.fontSize+"px";
 			this.labelTop=fontSize;
  		},
  		immediate:true
  	},
    value:{
      handler:function(value){
        if(value && value !== this.displayValue){
          this.displayValue = value;
        }
      }
    },
    displayValue:{
      handler:function(displayValue){
        this.$emit("input",displayValue);
      }
    }
  },
  mounted(){
    if(this.displayValue)
      this.labelTop = "-2px";
        
  }
}
</script>

<style scoped lang="less">
.fish-input{
  position: relative;
  margin: 10px 5px;
}
label{
	position: absolute;
	color:#111;
	transition: 0.3s;
  user-select:none;
  pointer-events: none;
  font-weight: bold;
}
input{
	border: none;
	border-bottom: 1px grey solid;
  background: hsla(0,0%,100%,.25);
  outline: none;
  transition: 0.5s;
  &:focus{
    border-bottom: 1px blue solid;
  }
}
</style>
