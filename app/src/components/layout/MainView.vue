<template>
    <div class="mainView">
        <router-view></router-view>
    </div>
</template>

<style>
.mainView {
    padding-left: 10px 20px;
    margin-left: 200px;
    margin-top:80px;
    overflow-y: auto; 
    overflow-x: hidden;
    height: 100%;
}
* {
    box-sizing: border-box;
    cursor: default;
}
user agent stylesheet
div {
    display: block;
}
</style>