<template>
  <div>
    <nav class="navbar navbar-inverse navbar-fixed-top header" role="navigation" style="border-radius: 0;">
      <div class="container-fluid">
        <div class="header-container-fluid-box">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse"
                    data-target="#example-navbar-collapse">
              <span class="sr-only">切换导航</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <router-link class="navbar-brand" to="/Home" @click.native="changeActive = 0">
              <img src="../assets/deloitte.svg" alt="">
            </router-link>
          </div>
          <ul class="nav navbar-nav navbar-left header-major-menu">
            <li v-for="(x,index) in menulist" :class="{ active:changeActive == index }" @click="menuActive(index)">
              <router-link :to="{ path: x.name }">
                {{ x.text }}
              </router-link>
            </li>
          </ul>
          <div class="collapse navbar-collapse" id="example-navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
              <li class="dropdown">
                <a href="javascript:;" class="dropdown-toggle userIfo-toggle-btn" data-toggle="dropdown">
                  <span>{{userInfo.username}}</span>
                  <b class="caret"></b>
                </a>
                <ul class="dropdown-menu">
                  <li><router-link to="/userCenter">个人中心</router-link></li>
                  <li><a href="/event/user/logout">退出登录</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div class="nav-height"></div>
  </div>
</template>

<script>
    export default {
      data(){
        return {
          title:"header",
          userInfo: {
            username: ''
          },
          menulist:[
              {
                "text":"首页",
                "name":"/home"
              },
              {
                "text":"我的活动",
                "name":"/createActivity"
              },
              {
                "text":"二维码生成",
                "name":"/home"
              },
              {
                "text":"创建活动",
                "name":"/createActivity"
              }
            ],
          changeActive:0
        }
      },
      methods:{
        menuActive:function(index){
          this.changeActive = index;
        },
      },
      created() {
        var _self = this;
        this.$axios({
          method:'get',
          url:'/event/user'
        })
          .then(function(response) {
            console.log(response)
            if(response.data) {
              if(response.data.code === '0000') { //已登陆状态
                _self.userInfo.username = response.data.data.username;
              }else if (response.data.code === '0302'){
                window.location.href = response.data.data;
              }else {

              }
            }
          });
        switch(this.$route.path)
        {
          case '/Home':
            this.changeActive = 0;
            break;
          case '/HreateActivity':
            this.changeActive = 3;
            break;
          case '/EditActivity':
            this.changeActive = 3;
            break;
        }
      },
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
  @deloitte-text-green: #03b02a;
  .navbar {
    min-height: 59px;
  }
  .dropdown-menu {
    padding: 0;
    border-radius: 0;
  }
  .dropdown-menu > li > a {
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    text-align: center;
  }
  .dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus {
    background: @deloitte-text-green;
    color: #ffffff;
  }
  .navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus {
    padding: 7px 13px;
    margin-top: 15px;
    background-color: @deloitte-text-green;
    line-height: 14px;
  }
  .container-fluid {
    max-width: 1600px;
    margin: 0 auto;
  }
  .navbar-brand {
    height: 59px;
  }
  .navbar-nav > li > a {
    line-height: 29px;
  }
  .nav-height {
    height: 59px;
  }
</style>
