<template>
    <aside class="aside">

      <!-- header -->
      <header class="header">
        <!-- user -->
        <div class="user" ng-controller="UserCtrl">
          <div class="user_profile clearfix">
            <img ng-click="loadUserProfile()" ng-src="D:\ppm\data\user.jpg" alt="张三" class="user_thumb">

            <div class="user_inner">
              <a href="" class="user_name" title="张三" ng-click="loadUserProfile()">张三</a>
              <a href="" class="user_logOut" ng-click="logOut()">Log out</a>
            </div>
          </div>
          <div class="user_info">
            <span class="user_info_wrap" ui-sref="following">
                        <small>8</small>
                        <small>following</small>
                    </span>
            <span class="user_info_wrap" ui-sref="followers">
                        <small>20</small>
                        <small>followers</small>
                    </span>
          </div>
        </div>
        <!-- user / end -->
      </header>
      <!-- header / end -->

      <!-- main nav -->
      <nav class="mainNav">
        <router-link to="/home"><h2 class="ui_title">首页</h2></router-link>
        <ul class="mainNav_nav">
            
        <router-link to="/proImglist">
                <li class="mainNav_item" ui-sref-active="active">
                    <a class="mainNav_button" ui-sref="charts">
                    <i class="fa fa-trophy"></i>
                        <span class="mainNav_tit">工程影像</span>
                    </a>
                </li>
        </router-link>

        <router-link to="/myImglist">
          <li class="mainNav_item" ui-sref-active="active">
            <a class="mainNav_button" ui-sref="stream">
              <i class="fa fa-cloud"></i>
              <span class="mainNav_tit">我的影像</span>
            </a>
          </li>
        </router-link>
          <li class="mainNav_item" ui-sref-active="active">
            <a class="mainNav_button" ui-sref="favorites">
              <i class="fa fa-heart"></i>
              <span class="mainNav_tit">文件上传</span>
            </a>
          </li>
          <li class="mainNav_item" ui-sref-active="active">
            <a class="mainNav_button" ui-sref="tracks">
              <i class="fa fa-tags"></i>
              <span class="mainNav_tit">批量导入</span>
            </a>
          </li>
          <li class="mainNav_item" ui-sref-active="active">
            <a class="mainNav_button" ui-sref="playlists">
              <i class="fa fa-bookmark"></i>
              <span class="mainNav_tit">传输列表</span>
            </a>
          </li>
        </ul>
      </nav>
      <!-- main nav / end -->

    </aside>
</template>

<style>
.aside {
    background: #222326;
    border-right: 1px solid #000;
    width: 200px;
    position: fixed;
    top: 50px;
    bottom: 0;
    left: 0;
}

.header {
    padding: 15px 10px 10px;
}

.mainNav {
    margin: 10px 0 30px 0;
}

.user_thumb {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    float: left;
    -webkit-user-drag: none;
}

.user_inner {
    float: left;
    margin: 0 0 0 10px;
    cursor: pointer;
}

.user_logOut {
    font-size: 10px;
}

.user_name {
    font-size: 15px;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 128px;
    line-height: 22px;
}

.user_info_wrap {
    display: inline-block;
    margin: 0 4px;
}

.ui_title {
    text-transform: uppercase;
    font-size: 13px;
    font-weight: normal;
    color: #a9aaae;
    margin: 0 0 10px;
    padding-left: 15px;
}
h1, h2, h3, h4, h5, h6 {
    margin: 0;
    color: #fff;
    font-weight: 600;
}
* {
    box-sizing: border-box;
    cursor: default;
}
user agent stylesheet
h2 {
    display: block;
    font-size: 1.5em;
    -webkit-margin-before: 0.83em;
    -webkit-margin-after: 0.83em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;
}

ul, ol, li {
    list-style: none;
    margin: 0;
    padding: 0;
}
* {
    box-sizing: border-box;
    cursor: default;
}
user agent stylesheet
li {
    display: list-item;
    text-align: -webkit-match-parent;
}


.mainNav_button {
    font-size: 13px;
    display: block;
    padding: 9px 0 9px 15px;
    border-left: 1px solid transparent;
    -webkit-user-drag: none;
}
a {
    color: #a9aaae;
    text-decoration: none;
    transition: all 0.5s ease;
}
a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}
* {
    box-sizing: border-box;
    cursor: default;
}

.mainNav_button .fa {
    color: inherit;
    display: inline-block;
    width: 25px;
}
.fa {
    color: #fff;
}
.fa {
    cursor: pointer;
}
.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
* {
    box-sizing: border-box;
    cursor: default;
}

.mainNav_tit {
    display: inline-block;
}
* {
    box-sizing: border-box;
    cursor: default;
}

</style>

<script>
export default {
  
}
</script>