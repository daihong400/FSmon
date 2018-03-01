<template>
  <div>
    <!--创建活动标题-->
    <div class="createActivityTitle">
      <div class="createActivityTitle-line-wrap text-center">
        <p class="createActivityTitle-line"></p>
      </div>
      <h2>
        创建活动
      </h2>
    </div>

    <!--创建活动选择模板-->
    <div class="createActivityChoiceTemplate text-center">
      <div class="createActivityChoiceTemplate-wrap">
        <div class="createActivityChoiceTemplate-unit">
          <router-link :to="{path:'/editActivity',query:{templateid:urlTemplateid}}">
            <div class="createActivityChoiceTemplate-unit-hover-bg"></div>
            <div class="choiceThis">
              <a href="javascript:;">使用模板</a>
            </div>
            <div class="createActivityChoiceTemplate-img">
              <img src="../assets/section1Circle.jpg" alt="">
            </div>
            <div class="createActivityChoiceTemplate-detaile">
              <p class="text-center">{{nameTemplate}}</p>
            </div>
          </router-link>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "news",
      data() {
        return {
          urlTemplateid: null,
          nameTemplate: null
        }
      },
        mounted() {
          //创建模板hover效果
          $('.createActivityChoiceTemplate-unit').hover(function() {
            $(this).find('.createActivityChoiceTemplate-unit-hover-bg').show();
            $(this).find('.choiceThis').show();
          }, function() {
            $(this).find('.createActivityChoiceTemplate-unit-hover-bg').hide();
            $(this).find('.choiceThis').hide();
          });

            var $footer = $(".common-footer");
            $footer.removeClass("fixed-bottom");
            var contentHeight = document.body.scrollHeight,//网页正文全文高度
              winHeight = window.innerHeight;//可视窗口高度，不包括浏览器顶部工具栏
            if (!(contentHeight > winHeight)) {
              //当网页正文高度小于可视窗口高度时，为footer添加类fixed-bottom
              $footer.addClass("fixed-bottom");
            } else {
              $footer.removeClass("fixed-bottom");
            }
        },
      created() {
        var _self = this;
        this.$axios({
          method:'get',
          url:'/event/template'
        }).then(function(response) {
            console.log(response)
          _self.urlTemplateid = response.data.data[0].templates[0].id
          _self.nameTemplate = response.data.data[0].templates[0].name
          });

      },
    }

</script>

<style scoped lang="less" rel="stylesheet/less">
  .createActivityTitle {
    position: relative;
    text-align: center;
    height: 130px;
    background-color: #ffffff;
  }

  .createActivityTitle h2{
    font-size: 40px;
    position: relative;
    z-index: 9;
    display: inline-block;
    line-height: 130px;
    width: 168px;
    font-weight: normal;
    background-color: #ffffff;
    margin: 0;
  }

  .createActivityTitle-line-wrap {
    width: 100%;
    position: absolute;
    top: 54px;
  }

  .createActivityTitle-line {
    display: inline-block;
    height: 1px;
    width: 251px;
    background-color: #a0a0a0;
  }

  .createActivityChoiceTemplate {
    width: 100%;
    background-color: #e8eae9;
    padding: 31px 0;
  }

  .createActivityChoiceTemplate-unit {
    display: inline-block;
    position: relative;
    float: left;
    cursor: pointer;
  }

  .createActivityChoiceTemplate-img>img {
    width: 380px;
    height: 608px;
  }

  .createActivityChoiceTemplate-detaile {
    background-color: #ffffff;
  }

  .createActivityChoiceTemplate-detaile>p {
    width: 380px;
    color: #000000;
    font-size: 16px;
    font-weight: bold;
    padding: 19px 10px 21px 10px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }

  .createActivityChoiceTemplate-wrap {
    display: inline-block;
    max-width: 1200px;
  }

  .choiceThis {
    display: none;
    width: 100%;
    position: absolute;
    top: 50%;
  }

  .createActivityChoiceTemplate-unit .choiceThis>a {
    position: relative;
    color: #ffffff;
    display: inline-block;
    padding: 17px 98px;
    background-color: #43b02a;
    font-size: 16px;
    text-decoration: none;
    z-index: 9;
  }

  .createActivityChoiceTemplate-unit-hover-bg {
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 1);
    opacity: .3;
    z-index: 1;
  }

  @media (max-width: 767px) {
  }
  @media (min-width: 768px) and (max-width: 991px) {
  }
  @media (min-width: 992px) and (max-width: 1199px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1200px) {
    .createActivityChoiceTemplate-wrap {
      display: inline-block;
      width: 1200px;
    }
  }
</style>
