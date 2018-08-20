

<script>
export default {
  name:"fishTyping",
  render(c){
    return c(
      this.tag,
      [this.showText]
    )
  },
  props:{
    tag:{         //标签
      type:String,
      default:"span"
    },
  	typeTime:{     //每个字符输出时间，单位为毫秒
  		type:Number,
  		default:200
  	},
  	cursor:{      //光标
  		type:Boolean,
  		default:true
  	},
    shineCursor:{ //打字动画完成后闪烁的光标
      type:Boolean,
      default:true
    },
    delay:{       //延时
      type:Number,
      default:0
    }
  },
  data(){
    return{
    	text:"",
    	showText:"",
    	showNum:1,
      delayTime:this.delay,
      fishTyping:true, //暂时没有什么好办法，使用这个属性表示是否为fishTyping组件
      lastCursor:this.shineCursor  //结尾的闪烁光标，如果有多个打字机标签，则不应该有
    }
  },
  created(){
  	if(this.$slots.default){
  		this.text=this.$slots.default[0].text;
  	}
    let brothers = this.$parent.$children;
    if(brothers.length > 1){        //查询是否存在兄弟元素
      for(let i = brothers.length - 2;i >= 0;i--){
        let bro = brothers[i];
        if(bro.fishTyping){
          //设置延时在前面的打字动画结束后
          this.delayTime = this.delayTime + bro.delayTime + (bro.text.length * bro.typeTime);
          bro.lastCursor = false;        //设置前面的光标无结尾闪烁动画
          break;
        }
      }
    }
  },
  mounted(){
  	if(this.text){
      setTimeout(this.typing,this.delayTime);
    }
  },
  methods:{
  	typing(){
  		let self = this;
  		setTimeout(()=>{
  			self.showText = self.text.slice(0,self.showNum++);//展示文本

        if(this.cursor && self.showNum <= self.text.length)
  			  self.showText += '|';

  			if(self.showNum <= self.text.length)//长度相同时结束并加载闪烁的光标
  				self.typing();
        else if(self.lastCursor)
          self.cursorShine();
  		},self.typeTime)
  	},
  	cursorShine(){
  		let self = this;
  		setTimeout(()=>{
  			if(self.showText[self.showNum - 1] === '|'){
  				self.showText = self.showText.slice(0,-1);//文本从第一位到倒数第一位（左闭右开即不包括最后一位）切割
  			}
  			else
  				self.showText += '|';
  			self.cursorShine();
  		},800)
  	}
  }
}
</script>

<style scoped lang="less"></style>
