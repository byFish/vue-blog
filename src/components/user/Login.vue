<template>
  <div class="login-body">
    <div class="groud-glass">
		<div>
			<fishInput placeholder="请输入用户名:" @on-blur="onBlur" v-model="userName"></fishInput>
      <fishInput placeholder="请输入密码:" type="password" v-model="userPassword"></fishInput>
      <div class="btn-group">
        <fishButton>登录</fishButton>
        <fishButton>注册</fishButton>
      </div>
		</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      userName:"user",
      userPassword:""
    }
  },
  methods:{
    onBlur(){
      console.log(this.userName);
    }
  }
}
</script>

<style scoped lang="less">
.login-body, .groud-glass:after{
	background: url("../../assets/imgs/2.jpg") 0 / cover fixed;
}
.login-body{
	height: 76vh;
  display: flex;
}
.groud-glass{
  position: relative;
  top:-15vh;
  left:-20vw;
  background: rgba(255,255,255,0.8);
  overflow: hidden;
  margin:  auto;
  max-width: 23em;
  padding: 1em;
  z-index: 1;
  border-radius: .3em;
  box-shadow: 0 0 0 1px hsla(0,0%,100%,.3) inset,
              0 .5em 1em rgba(0, 0, 0, 0.6);

  &:after{
    content: '';
    position: absolute;
    top:0; right: 0; bottom: 0; left: 0;
    filter: blur(15px);
    z-index: -1;
  }
}
.btn-group{
  margin: 20px 0 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-around;
}
</style>
