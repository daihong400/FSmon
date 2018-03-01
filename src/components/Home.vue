<template>
  <div>
    <!--banner-->
    <app-banner :listImg="listImg"></app-banner>
    <!--首页主要内容-->
    <div class="home-menu-table-wrap">
      <table class="table table-bordered home-menu-table">
        <tbody>
        <tr>
          <td class="paddingClear" rowspan="2">
            <img class="index-content-left-img" src="../assets/RadarMap.png" alt="">
          </td>
          <td>
            <router-link to="CreateActivity">
              <div class="index-content-unit text-center">
                <span>
                  <svg version="1.0" id="Plus" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                       viewBox="0 0 52 52" enable-background="new 0 0 52 52" xml:space="preserve">
                  <g>
                      <path style="fill: #43b02a;" d="M26,2C12.7,2,2,12.7,2,26s10.7,24,24,24s24-10.7,24-24S39.3,2,26,2z M40,27H27v13c0,0.6-0.4,1-1,1s-1-0.4-1-1V27H12
                          c-0.6,0-1-0.4-1-1s0.4-1,1-1h13V12c0-0.6,0.4-1,1-1s1,0.4,1,1v13h13c0.6,0,1,0.4,1,1S40.6,27,40,27z"/>
                  </g>
                  </svg>
                </span>
                <h3>创建活动</h3>
                <p>简单易操作，可视化创建丰富营销活动</p>
              </div>
            </router-link>
          </td>
          <td>
            <div class="index-content-unit text-center">
              <span>
                    <svg version="1.0" id="Cogs" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 52 52" enable-background="new 0 0 52 52" xml:space="preserve">
                    <path style="fill: #0097a9;" d="M34.3,18.6c0.1,0.3,0.1,0.7-0.1,1c-0.2,0.3-0.4,0.5-0.8,0.7c-0.3,0.1-0.7,0.1-1-0.1c-0.3-0.2-0.5-0.4-0.7-0.8
                        c-0.1-0.3-0.1-0.7,0.1-1c0.2-0.3,0.4-0.5,0.8-0.7c0.1,0,0.3-0.1,0.4-0.1c0.2,0,0.4,0.1,0.6,0.2C33.9,18,34.2,18.3,34.3,18.6z
                         M39.2,18.8c0.1,0.1,0.2,0.2,0.3,0.3c-0.1,0.1-0.2,0.2-0.3,0.3c-0.5,0.3-1,0.7-1.2,1.3c-0.2,0.6,0,1.2,0.1,1.8
                        c0,0.1,0.1,0.3,0.1,0.4c-0.1,0-0.3,0-0.4,0c-0.6,0-1.2,0-1.8,0.4c-0.5,0.4-0.7,1-0.9,1.5c0,0.1-0.1,0.3-0.2,0.4
                        c-0.1-0.1-0.3-0.3-0.4-0.3c-0.5-0.3-1-0.9-1.6-0.9c0,0,0,0,0,0c-0.6,0-1.2,0.5-1.7,0.8c-0.1,0.1-0.2,0.3-0.4,0.4
                        c-0.1-0.1-0.1-0.3-0.1-0.4c-0.2-0.5-0.4-1.2-0.9-1.6c-0.5-0.4-1.2-0.4-1.7-0.4c-0.1,0-0.3,0-0.4,0c0-0.1,0.1-0.3,0.1-0.4
                        c0.2-0.6,0.4-1.2,0.2-1.8s-0.7-1-1.2-1.4c-0.1-0.1-0.2-0.2-0.3-0.3c0.1-0.1,0.2-0.2,0.3-0.3c0.5-0.3,1-0.7,1.2-1.3
                        c0.2-0.6,0-1.2-0.1-1.8c0-0.1-0.1-0.3-0.1-0.4c0.1,0,0.3,0,0.4,0c0.6,0,1.2,0,1.8-0.4c0.5-0.4,0.7-1,0.9-1.5c0-0.1,0.1-0.3,0.2-0.4
                        c0.1,0.1,0.3,0.3,0.4,0.3c0.5,0.3,1,0.9,1.6,0.9c0,0,0,0,0,0c0.6,0,1.2-0.5,1.7-0.8c0.1-0.1,0.2-0.3,0.4-0.4
                        c0.1,0.1,0.1,0.3,0.1,0.4c0.2,0.5,0.4,1.2,0.9,1.6c0.5,0.4,1.2,0.4,1.7,0.4c0.1,0,0.3,0,0.4,0c0,0.1-0.1,0.3-0.1,0.4
                        c-0.2,0.6-0.4,1.2-0.2,1.8S38.8,18.5,39.2,18.8z M36.2,18c-0.3-0.9-0.8-1.5-1.6-2c-0.8-0.4-1.7-0.5-2.5-0.2c-0.9,0.3-1.5,0.8-2,1.6
                        c-0.4,0.8-0.5,1.7-0.2,2.5c0.3,0.9,0.8,1.5,1.6,2c0.5,0.3,1,0.4,1.5,0.4c0.3,0,0.7,0,1-0.2c0.9-0.3,1.5-0.8,2-1.6
                        C36.4,19.8,36.4,18.9,36.2,18z M50,26c0,13.3-10.7,24-24,24S2,39.3,2,26S12.7,2,26,2S50,12.7,50,26z M28.7,32.1
                        c0-0.9-0.7-1.4-1.2-1.8c-0.2-0.1-0.4-0.3-0.5-0.4c0-0.1,0.1-0.5,0.2-0.6c0.2-0.7,0.5-1.5,0-2.2c-0.5-0.7-1.4-0.8-2.1-0.8
                        c-0.2,0-0.5,0-0.6,0c-0.1-0.1-0.2-0.4-0.2-0.6c-0.2-0.6-0.5-1.5-1.4-1.8c-0.8-0.3-1.6,0.2-2.2,0.6c-0.2,0.1-0.4,0.3-0.5,0.3
                        c-0.1-0.1-0.3-0.2-0.5-0.3c-0.6-0.4-1.3-0.9-2.2-0.7c-0.9,0.3-1.2,1.1-1.4,1.8c-0.1,0.2-0.2,0.4-0.2,0.6c-0.1,0-0.4,0-0.6,0
                        c-0.7,0-1.6,0-2.1,0.7c-0.5,0.7-0.3,1.6-0.1,2.2c0.1,0.2,0.1,0.5,0.1,0.6c-0.1,0.1-0.3,0.3-0.5,0.4c-0.5,0.4-1.3,1-1.3,1.9
                        c0,0.9,0.7,1.4,1.2,1.8c0.2,0.1,0.5,0.4,0.5,0.4c0,0.1-0.1,0.5-0.2,0.7c-0.2,0.7-0.5,1.5,0,2.2c0.5,0.7,1.4,0.8,2.1,0.8
                        c0.2,0,0.5,0,0.6,0c0.1,0.1,0.2,0.4,0.2,0.6c0.2,0.6,0.5,1.5,1.4,1.8c0.8,0.3,1.6-0.2,2.2-0.6c0.2-0.1,0.4-0.3,0.5-0.3
                        c0.1,0.1,0.3,0.2,0.5,0.3c0.5,0.3,1,0.7,1.7,0.7c0.2,0,0.3,0,0.5-0.1c0.9-0.3,1.2-1.1,1.4-1.8c0.1-0.2,0.2-0.4,0.2-0.6
                        c0.1,0,0.4,0,0.6,0c0.7,0,1.6,0,2.1-0.7c0.5-0.7,0.3-1.6,0.1-2.2c-0.1-0.2-0.1-0.5-0.1-0.6c0.1-0.1,0.3-0.3,0.5-0.4
                        C27.9,33.6,28.7,33,28.7,32.1z M41.7,19.1c0-0.9-0.7-1.4-1.2-1.8c-0.2-0.1-0.4-0.3-0.5-0.4c0-0.1,0.1-0.5,0.2-0.6
                        c0.2-0.7,0.5-1.5,0-2.2c-0.5-0.7-1.4-0.8-2.1-0.8c-0.2,0-0.5,0-0.6,0c-0.1-0.1-0.2-0.4-0.2-0.6c-0.2-0.6-0.5-1.5-1.4-1.8
                        c-0.8-0.3-1.6,0.2-2.2,0.6c-0.2,0.1-0.4,0.3-0.5,0.3c-0.1-0.1-0.3-0.2-0.5-0.3c-0.6-0.4-1.3-0.9-2.2-0.7c-0.9,0.3-1.2,1.1-1.4,1.8
                        c-0.1,0.2-0.2,0.4-0.2,0.6c-0.1,0-0.4,0-0.6,0c-0.7,0-1.6,0-2.1,0.7c-0.5,0.7-0.3,1.6-0.1,2.2c0.1,0.2,0.1,0.5,0.1,0.6
                        c-0.1,0.1-0.3,0.3-0.5,0.4c-0.5,0.4-1.3,1-1.3,1.9c0,0.9,0.7,1.4,1.2,1.8c0.2,0.1,0.5,0.4,0.5,0.4c0,0.1-0.1,0.5-0.2,0.7
                        c-0.2,0.7-0.5,1.5,0,2.2c0.5,0.7,1.4,0.8,2.1,0.8c0.2,0,0.5,0,0.6,0c0.1,0.1,0.2,0.4,0.2,0.6c0.2,0.6,0.5,1.5,1.4,1.8
                        c0.8,0.3,1.6-0.2,2.2-0.6c0.2-0.1,0.4-0.3,0.5-0.3c0.1,0.1,0.3,0.2,0.5,0.3c0.5,0.3,1,0.7,1.7,0.7c0.2,0,0.3,0,0.5-0.1
                        c0.9-0.3,1.2-1.1,1.4-1.8c0.1-0.2,0.2-0.4,0.2-0.6c0.1,0,0.4,0,0.6,0c0.7,0,1.6,0,2.1-0.7c0.5-0.7,0.3-1.6,0.1-2.2
                        c-0.1-0.2-0.1-0.5-0.1-0.6c0.1-0.1,0.3-0.3,0.5-0.4C40.9,20.6,41.7,20,41.7,19.1z M20.6,30.8c-0.2-0.1-0.4-0.2-0.6-0.2
                        c-0.1,0-0.3,0-0.4,0.1c-0.3,0.1-0.6,0.3-0.8,0.7c-0.2,0.3-0.2,0.7-0.1,1c0.1,0.3,0.3,0.6,0.7,0.8c0.3,0.2,0.7,0.2,1,0.1
                        c0.3-0.1,0.6-0.3,0.8-0.7c0.2-0.3,0.2-0.7,0.1-1C21.2,31.3,20.9,31,20.6,30.8z M26.2,31.8c0.1,0.1,0.2,0.2,0.3,0.3
                        c-0.1,0.1-0.2,0.2-0.3,0.3c-0.5,0.3-1,0.7-1.2,1.3c-0.2,0.6,0,1.2,0.1,1.8c0,0.1,0.1,0.3,0.1,0.4c-0.1,0-0.3,0-0.4,0
                        c-0.6,0-1.2,0-1.8,0.4c-0.5,0.4-0.7,1-0.9,1.5c0,0.1-0.1,0.3-0.2,0.4c-0.1-0.1-0.3-0.3-0.4-0.3c-0.5-0.3-1-0.9-1.6-0.9c0,0,0,0,0,0
                        c-0.6,0-1.2,0.5-1.7,0.8c-0.1,0.1-0.2,0.3-0.4,0.4c-0.1-0.1-0.1-0.3-0.1-0.4c-0.2-0.5-0.4-1.2-0.9-1.6c-0.5-0.4-1.2-0.4-1.7-0.4
                        c-0.1,0-0.3,0-0.4,0c0-0.1,0.1-0.3,0.1-0.4c0.2-0.6,0.4-1.2,0.2-1.8s-0.7-1-1.2-1.4c-0.1-0.1-0.2-0.2-0.3-0.3
                        c0.1-0.1,0.2-0.2,0.3-0.3c0.5-0.3,1-0.7,1.2-1.3c0.2-0.6,0-1.2-0.1-1.8c0-0.1-0.1-0.3-0.1-0.4c0.1,0,0.3,0,0.4,0
                        c0.6,0,1.2,0,1.8-0.4c0.5-0.4,0.7-1,0.9-1.5c0-0.1,0.1-0.3,0.2-0.4c0.1,0.1,0.3,0.3,0.4,0.3c0.5,0.3,1,0.9,1.6,0.9c0,0,0,0,0,0
                        c0.6,0,1.2-0.5,1.7-0.8c0.1-0.1,0.2-0.3,0.4-0.4c0.1,0.1,0.1,0.3,0.1,0.4c0.2,0.5,0.4,1.2,0.9,1.6c0.5,0.4,1.2,0.4,1.7,0.4
                        c0.1,0,0.3,0,0.4,0c0,0.1-0.1,0.3-0.1,0.4c-0.2,0.6-0.4,1.2-0.2,1.8S25.8,31.5,26.2,31.8z M23.2,31c-0.3-0.9-0.8-1.5-1.6-2
                        s-1.7-0.5-2.5-0.2c-0.9,0.3-1.5,0.8-2,1.6c-0.4,0.8-0.5,1.7-0.2,2.5c0.3,0.9,0.8,1.5,1.6,2c0.5,0.3,1,0.4,1.5,0.4c0.3,0,0.7,0,1-0.2
                        c0.9-0.3,1.5-0.8,2-1.6C23.4,32.8,23.4,31.9,23.2,31z"/>
                    </svg>
                </span>
              <h3>活动管理</h3>
              <p>一站式管理，二维码、URL便捷投放宣传</p>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="index-content-unit text-center">
              <span>
                    <svg version="1.0" id="Presentation" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                         y="0px" viewBox="0 0 52 52" enable-background="new 0 0 52 52" xml:space="preserve">
                    <path style="fill: #00a3e0;" d="M26,2C12.7,2,2,12.7,2,26s10.7,24,24,24s24-10.7,24-24S39.3,2,26,2z M23.7,37.7c-0.2,0.2-0.5,0.3-0.7,0.3
                        c-0.2,0-0.5-0.1-0.7-0.3c-0.3-0.2-1.5-0.4-2.1-0.5c-0.6-0.1-1.2-0.2-1.6-0.3c-0.9-0.4-1.4-1.5-1.6-2.1c-0.2-0.6-0.4-1.7,0.1-2.4
                        c0.5-0.7,1.1-2,1.3-3.1c0.4-1.7,0.3-3-0.3-3.8c-0.8-1-2.1-1-2.2-1c0,0,0,0,0,0c0,0,0,0,0,0c0,0-1.4,0-2.2,1
                        c-0.6,0.8-0.7,2.1-0.3,3.8c0.3,1.1,0.8,2.5,1.3,3.1c0.5,0.7,0.3,1.8,0.1,2.4c-0.2,0.6-0.6,1.7-1.5,2.1C13.2,37,13.1,37,13,37
                        c-0.4,0-0.8-0.2-0.9-0.6c-0.2-0.5,0.1-1.1,0.6-1.3c0.2-0.2,0.5-1.2,0.5-1.6c-0.6-0.9-1.3-2.4-1.6-3.8c-0.6-2.4-0.3-4.2,0.7-5.5
                        c1.3-1.7,3.4-1.7,3.7-1.7c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0.3,0,2.4,0.1,3.7,1.7c1,1.3,1.3,3.2,0.7,5.5
                        c-0.3,1.3-1,2.8-1.6,3.7c0,0.4,0.3,1.4,0.6,1.6c0.1,0.1,0.7,0.1,1.1,0.2c1.2,0.2,2.4,0.4,3.1,1C24.1,36.7,24.1,37.3,23.7,37.7z
                         M41,32c0,0.6-0.4,1-1,1H23c-0.6,0-1-0.4-1-1s0.4-1,1-1h16V19H18v1c0,0.6-0.4,1-1,1s-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h23
                        c0.6,0,1,0.4,1,1V32z M24,26h12c0.6,0,1,0.4,1,1s-0.4,1-1,1H24c-0.6,0-1-0.4-1-1S23.4,26,24,26z M23,23c0-0.6,0.4-1,1-1h12
                        c0.6,0,1,0.4,1,1s-0.4,1-1,1H24C23.4,24,23,23.6,23,23z"/>
                    </svg>
                </span>
              <h3>名牌管理</h3>
              <p>客户报名信息一键生成待打印名牌，省时省力</p>
            </div>
          </td>
          <td>
            <div class="index-content-unit text-center">
              <span>
                  <svg version="1.0" id="Line_graph" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                       viewBox="0 0 52 52" enable-background="new 0 0 52 52" xml:space="preserve">
                  <path style="fill: #0076a8;" d="M26,2C12.7,2,2,12.7,2,26s10.7,24,24,24s24-10.7,24-24S39.3,2,26,2z M40,37H12c-0.6,0-1-0.4-1-1V16c0-0.6,0.4-1,1-1
                      s1,0.4,1,1v19h27c0.6,0,1,0.4,1,1S40.6,37,40,37z M40.7,18.7l-11,11c-0.4,0.4-1,0.4-1.4,0L23,24.4l-6.3,6.3C16.5,30.9,16.3,31,16,31
                      s-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l7-7c0.4-0.4,1-0.4,1.4,0l5.3,5.3l10.3-10.3c0.4-0.4,1-0.4,1.4,0S41.1,18.3,40.7,18.7z"/>
                  </svg>
              </span>
              <h3>统计分析</h3>
              <p>实时监测活动效果数据，查询导出真方便</p>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="step-list-wrap">
      <div class="step-list text-center">
        <div class="row">
          <div class="col-xs-6 col-md-3">
            <div class="step-img-wrap">
              <img src="../assets/icon-1.png" alt="">
            </div>
            <p>step1</p>
            <span>创建活动</span>
          </div>
          <div class="col-xs-6 col-md-3">
            <div class="step-img-wrap">
              <img src="../assets/icon-2.png" alt="">
            </div>
            <p>step2</p>
            <span>发布活动</span>
          </div>
          <div class="col-xs-6 col-md-3">
            <div class="step-img-wrap">
              <img src="../assets/icon-3.png" alt="">
            </div>
            <p>step3</p>
            <span>推广活动 </span>
          </div>
          <div class="col-xs-6 col-md-3">
            <div class="step-img-wrap">
              <img src="../assets/icon-4.png" alt="">
            </div>
            <p>step4</p>
            <span>统计分析</span>
          </div>
        </div>
      </div>
    </div>
    <!--底部-->
    <div class="home-bottom-bg">
      <h3>用活动数据 多角度 多维度，发掘客户价值</h3>
      <p>使用德勤内部数据系统，保障客户数据安全；分析客户画像，发掘价值,抢占先机。</p>
      <a href="" class="home-bottom-bg-btn">统计分析</a>
    </div>
  </div>
</template>

<script>
  import  Banner from './banner.vue'
  import a from '../assets/banner.png'

  export default {
    name: "home",
    data() {
      return {
        listImg: {
          url: a
        }
      }
    },
    components: {
      'app-banner': Banner
    },
    computed: {},
    methods: {
    },
    mounted: function () {
      $('.home-menu-table td').hover(function () {
        $(this).find('h3,p').css('color', '#ffffff');
      }, function () {
        $(this).find('h3,p').css('color', '#000000');
      });
    },
    created() {
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  body {
    width: 100%;
    padding-top: 59px;
    font-family: ﻿MicrosoftYaHei;
  }

  img {
    display: inline-block;
  }

  h1, h2, h3, h4, h5, p {
    margin: 0;
    color: #000000;
  }

  a {
    text-decoration: none;
  }

  .clear {
    clear: both;
  }

  .deloitte-green {
    color: #03b02a;
  }

  /*副导航*/

  .nav-attached span {
    color: #ffffff;
    line-height: 40px;
  }

  .nav-attached i {
    color: #43b02a;
    line-height: 40px;
  }

  /*副导航END*/

  .index-content-left-img {
    padding: 0;
    width: 400px;
    height: 387px;
  }

  .index-content-unit svg {
    width: 70px;
    height: 70px;
  }

  .index-content-unit > h3 {
    font-size: 18px;
    margin: 0;
    padding-top: 8px;
  }

  .index-content-unit > p {
    font-size: 14px;
    padding-top: 9px;
  }

  .common-footer p {
    line-height: 40px;
    color: #999999;
    margin-bottom: 0;
  }

  .index-content a {
    color: #000000;
  }

  .index-content a:hover {
    color: #000000;
    text-decoration: none;
  }

  .dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus {
    background: #7bc869;
    color: #ffffff;
  }

  .navbar-nav > li > a {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .dropdown-menu > li > a {
    padding: 15px 20px;
  }

  .index-banner h2 {
    font-size: 48px;
    padding-bottom: 31px;
  }

  .index-banner p {
    font-size: 30px;
  }

  .index-banner h2, .index-banner p {
    color: #ffffff;
    margin: 0;
  }

  @media (max-width: 767px) {

  }

  @media (min-width: 768px) and (max-width: 991px) {

  }

  @media (min-width: 992px) and (max-width: 1199px) {
    .index-content-left-img {
      width: 100%;
    }
  }

  @media (min-width: 768px) {

  }

  @media (min-width: 1200px) {

  }

  .product-view-container > h3 {
    color: #000000;
    font-weight: normal;
    margin: 0;
    padding-top: 39px;
  }

  .home-menu-table-wrap {
    height: 197px;
  }

  .home-menu-table {
    position: relative;
    top: -192px;
    display: block;
    margin: 0 auto;
    max-width: 1200px;
    background: #ffffff;
    border: 1px solid #696;
    -webkit-box-shadow: #666 0 0 10px;
    -moz-box-shadow: #666 0 0 10px;
    box-shadow: #666 0 0 10px;
  }

  .home-menu-table td {
    text-align: center;
    width: 400px;
    height: 192px;
    padding: 30px 20px;
    cursor: pointer;
  }

  .home-menu-table td:hover {
    background: #7bc869;
    color: #ffffff;
  }

  .home-menu-table td p {
    font-size: 14px;
    padding-top: 9px;
  }

  .home-menu-table td h3 {
    font-size: 18px;
    margin: 0;
    padding-top: 8px;
  }

  .table-bordered {
    border: 0;
  }

  .home-menu-table td.paddingClear {
    padding: 0;
  }

  .step-list-wrap {
    margin-top: 89px;
    width: 100%;
    background: #e8eae9;
    height: 380px;
    padding-top: 205px;
    .step-list {
      max-width: 1200px;
      margin: 0 auto;
    }
  }

  .index-content-unit svg {
    width: 70px;
    height: 70px;
  }

  .step-img-wrap {
    height: 60px;
  }

  .home-bottom-bg {
    width: 100%;
    height: 290px;
    background: url("../assets/home-bottom-bg.png");
    background-size: cover;
    text-align: center;
    padding-top: 65px;
    color: #ffffff;
    h3 {
      font-size: 30px;
      margin-bottom: 27px;
      color: #ffffff;
    }
    p {
      color: #ffffff;
      font-size: 14px;
    }
    a.home-bottom-bg-btn {
      font-size: 16px;
      margin-top: 36px;
      color: #ffffff;
      border: 1px solid #ffffff;
      padding: 18px 66px;
      display: inline-block;
    }
  }

</style>
